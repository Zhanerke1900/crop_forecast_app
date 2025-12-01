import os
import pickle
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_squared_error

# --------------------------------------------------------------------
# 1. Load full Excel table exactly as-is
# --------------------------------------------------------------------
def load_yield_data():
    df = pd.read_excel("Crop_Yield_NK 1.xlsx", sheet_name="Лист1")
    return df


# --------------------------------------------------------------------
# 2. Train model + create exact lookup table
# --------------------------------------------------------------------
def train_model():
    df = load_yield_data()

    feature_cols = ["temp mean", "humidity mean", "precip mean"]

    crop_cols = [
        "Cereals (including rice) and legumes (by weight after processing)",
        "Oilseeds",
        "of which:seeds sunflower",
        "Potato",
        "Open ground vegetables",
        "Melons",
        "Sugar beet"
    ]

    X = df[feature_cols].values
    Y = df[crop_cols].values

    model = RandomForestRegressor(n_estimators=500, random_state=42)
    model.fit(X, Y)

    preds = model.predict(X)

    r2 = float(r2_score(Y, preds, multioutput="uniform_average"))
    rmse = float(np.sqrt(mean_squared_error(Y, preds)))

    # --- build exact lookup table ---
    lookup_df = df[["temp mean", "humidity mean", "precip mean"] + crop_cols].copy()

    model_data = {
        "model": model,
        "feature_columns": feature_cols,
        "crop_columns": crop_cols,
        "r2_score": r2,
        "rmse": rmse,
        "lookup_df": lookup_df   # <---- ВАЖНО!
    }

    pkl_path = "multi_crop_model.pkl"
    with open(pkl_path, "wb") as f:
        pickle.dump(model_data, f)

    print("Saved model to:", os.path.abspath(pkl_path))
    print("R2 =", r2)
    print("RMSE =", rmse)


if __name__ == "__main__":
    train_model()
