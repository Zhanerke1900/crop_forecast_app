// client/src/pages/Forecast.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, TrendingUp } from "lucide-react";

// charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type CropPrediction = {
  name: string;
  value: number;
};

interface PredictionResult {
  average_yield: number;
   source: string; 
  model_name: string;
  r2_score: number;
  rmse: number;
  crops: CropPrediction[];
}

export default function Forecast() {
  const [form, setForm] = useState({
    temp: "",
    humidity: "",
    precip: "",
  });

  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          temp: parseFloat(form.temp),
          humidity: parseFloat(form.humidity),
          precip: parseFloat(form.precip),
        }),
      });

      if (!res.ok) throw new Error("Server error");

      const data: PredictionResult = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setErrorMsg("Prediction failed. Please try again.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Crop Yield Prediction
          </h1>
          <p className="text-xl text-gray-600">
            Predict yields for multiple crops using an ML model
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Input Parameters
            </CardTitle>
            <CardDescription className="text-green-100">
              Enter climate parameters for prediction
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { key: "temp", label: "Temperature (°C)" },
                { key: "humidity", label: "Humidity (%)" },
                { key: "precip", label: "Precipitation (mm)" },
              ].map((field) => (
                <div key={field.key}>
                  <Label className="text-sm font-semibold">
                    {field.label}
                  </Label>
                  <Input
                    type="number"
                    name={field.key}
                    step="any"
                    value={form[field.key as keyof typeof form]}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
              ))}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Predict"
                )}
              </Button>
            </form>

            {errorMsg && (
              <p className="mt-4 text-sm text-red-600 font-medium">
                {errorMsg}
              </p>
            )}

            {/* ===== RESULTS BLOCK ===== */}
            {result && (
              <div className="mt-8 p-6 bg-gray-100 rounded-lg border space-y-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Prediction Results
                </h3>

                {/* Info row */}
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-700 font-semibold">
  Source: <span className="text-blue-700">{result.source}</span>
</p>

                    <p className="font-semibold text-gray-700">
                      Average yield
                    </p>
                    <p className="text-gray-900">
                      {result.average_yield.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Model</p>
                    <p className="text-gray-900">{result.model_name}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">
                      Accuracy (R²)
                    </p>
                    <p className="text-gray-900">
                      {result.r2_score.toFixed(3)}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">RMSE</p>
                    <p className="text-gray-900">
                      {result.rmse.toFixed(3)}
                    </p>
                  </div>
                </div>

                {/* Crops list */}
                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    Predicted yield by crop:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {result.crops.map((crop) => (
                      <div
                        key={crop.name}
                        className="flex items-center justify-between rounded-md bg-white px-4 py-2 shadow-sm border"
                      >
                        <span className="font-medium text-gray-800">
                          {crop.name}
                        </span>
                        <span className="text-green-700 font-semibold">
                          {crop.value.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BAR CHART */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="text-lg font-semibold mb-3">
                    Yield Comparison Chart
                  </h4>

                  <Bar
                    data={{
                      labels: result.crops.map((c) => c.name),
                      datasets: [
                        {
                          label: "Yield",
                          data: result.crops.map((c) => c.value),
                          backgroundColor: "rgba(34, 197, 94, 0.6)",
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { display: false },
                      },
                    }}
                  />
                </div>

              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
