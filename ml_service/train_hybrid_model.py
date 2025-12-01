import pandas as pd
import numpy as np
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_squared_error
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EXCEL_PATH = os.path.join(BASE_DIR, "Crop_Yield_NK 1.xlsx")

def train_model():
    df = pd.read_excel(EXCEL_PATH, sheet_name="Лист1")

    feature_cols = ["temp mean", "humidity mean", "precip mean"]
    crop_cols = [
        "Cereals (including rice) and legumes (by weight after processing)",
        "Oilseeds",
        "of which:seeds sunflower",
        "Potato",
        "Open ground vegetables",
        "Melons",
        "Sugar beet",
    ]

    X = df[feature_cols].values
    Y = df[crop_cols].values

    model = RandomForestRegressor(
        n_estimators=500,
        random_state=42
    )
    model.fit(X, Y)

    preds = model.predict(X)

    r2 = r2_score(Y, preds, multioutput="uniform_average")
    rmse = float(np.sqrt(mean_squared_error(Y, preds)))

    model_data = {
        "model": model,
        "feature_columns": feature_cols,
        "crop_columns": crop_cols,
        "r2_score": float(r2),
        "rmse": rmse,
        "lookup_df": df[feature_cols + crop_cols]  # used for exact Excel matching
    }

    output_path = os.path.join(BASE_DIR, "multi_crop_model.pkl")

    with open(output_path, "wb") as f:
        pickle.dump(model_data, f)

    print("✔ Model saved as multi_crop_model.pkl")
    print(f"R² = {r2:.4f}")
    print(f"RMSE = {rmse:.4f}")

if __name__ == "__main__":
    train_model()
