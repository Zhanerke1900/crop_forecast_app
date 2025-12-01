export async function predictCropYield(input: any) {
  const API_URL = import.meta.env.VITE_API_URL || "/api";

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      temp: input.temp,
      humidity: input.humidity,
      precip: input.precip,
    }),
  });

  if (!res.ok) throw new Error("Backend error");

  return res.json();
}
