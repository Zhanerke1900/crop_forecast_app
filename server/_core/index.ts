// server/_core/index.ts
import "dotenv/config";
import express, { type Express } from "express";
import { createServer } from "http";
import net from "net";
import axios from "axios";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

/* ---------- Проверка свободного порта ---------- */
function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) return port;
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

/* ---------- СТАРТ СЕРВЕРА ---------- */
async function startServer() {
  const app: Express = express();
  const server = createServer(app);

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  /* ---------- OAuth ---------- */
  registerOAuthRoutes(app);

  /* ---------- tRPC ---------- */
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
app.post("/api/predict", async (req, res) => {
  try {
    const { temp, humidity, precip } = req.body;

    console.log("Frontend → Server received:", req.body);

    // ⬇⬇⬇ ГЛАВНАЯ СТРОКА — НОВАЯ ⬇⬇⬇
    const ML_API_URL = process.env.ML_API_URL || "http://127.0.0.1:8000";

    const response = await axios.post(`${ML_API_URL}/predict`, {
      temp,
      humidity,
      precip,
    });

    return res.json(response.data);
  } catch (error: any) {
    console.error("Prediction error:", error.message);
    return res.status(500).json({ error: "Prediction failed" });
  }
});



  /* ---------- Vite frontend ---------- */
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000", 10);
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
