// client/src/lib/predictCropYield.ts

export async function predictCropYield(input: any) {
  const API_URL = "/api/predict";   // ← правильный путь через backend

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      temp: input.temp,
      humidity: input.humidity,
      precip: input.precip,
    }),
  });

  if (!res.ok) {
    throw new Error("Backend error");
  }

  return res.json();
}
