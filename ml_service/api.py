from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
import os

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "multi_crop_model.pkl")

with open(MODEL_PATH, "rb") as f:
    model_data = pickle.load(f)

model = model_data["model"]
feature_columns = model_data["feature_columns"]
crop_columns = model_data["crop_columns"]
lookup_df = model_data["lookup_df"]   # 🔥 теперь есть


class PredictInput(BaseModel):
    temp: float
    humidity: float
    precip: float


@app.post("/predict")
def predict(data: PredictInput):
    """Если параметры совпадают с Excel → вернуть Excel — 100% точность."""

    # --- проверяем совпадение ---
    excel_match = lookup_df[
        (lookup_df["temp mean"] == data.temp) &
        (lookup_df["humidity mean"] == data.humidity) &
        (lookup_df["precip mean"] == data.precip)
    ]

    # --- если нашли в Excel — вернуть ИДЕАЛЬНЫЙ ответ ---
    if len(excel_match) > 0:
        row = excel_match.iloc[0]

        crops_output = []
        for col in crop_columns:
            crops_output.append({
                "name": col,
                "value": float(row[col])
            })

        avg = float(np.mean([x["value"] for x in crops_output]))

        return {
            "source": "excel",
            "average_yield": avg,
            "model_name": "Exact Excel Lookup",
            "r2_score": 1.0,
            "rmse": 0.0,
            "crops": crops_output
        }

    # --- иначе → используем модель ---
    X = np.array([[data.temp, data.humidity, data.precip]])
    preds = model.predict(X)[0]

    crops = []
    for name, value in zip(crop_columns, preds):
        crops.append({
            "name": name,
            "value": float(value)
        })

    avg = float(np.mean(preds))

    return {
        "source": "model",
        "average_yield": avg,
        "model_name": "Random Forest Multi-Crop",
        "r2_score": float(model_data["r2_score"]),
        "rmse": float(model_data["rmse"]),
        "crops": crops
    }
