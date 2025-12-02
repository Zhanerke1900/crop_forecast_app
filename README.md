Crop Yield Forecasting System \\English version
Machine Learning + Full Web Application

A complete end-to-end system for predicting agricultural crop yields based on climatic inputs.
The solution includes:

Python ML Service (FastAPI)

Trained RandomForest Model (multi_crop_model.pkl)

Automatic Excel Value Lookup for Exact Historical Matches

Fully Functional Frontend (React + Vite + TypeScript)

This project is designed as a production-ready, modular architecture suitable for research, deployment, and portfolio demonstration.

🔧 Tech Stack
Backend — Python (FastAPI)

FastAPI REST API

RandomForest Regressor (multi-output)

Exact-yield lookup table from Excel

Numpy, Pandas, Scikit-Learn

Frontend — React + Vite + TypeScript

Modern component-based UI

Chart.js visualization

API integration with Python service

🛠 Installation Guide
1. Install Python 3.10+

Download from:
https://www.python.org/downloads/

2. Install Node.js v18

Download from:
https://nodejs.org/en/download/prebuilt-installer

3. Start the ML Backend (Python)

Open terminal #1:


python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

uvicorn ml_service.api:app --reload --port 8000


Backend will be available at:

http://127.0.0.1:8000/predict
(not the webpage!)
4️. Start the Web Server (Node.js)

Open terminal #2(do not close the first terminal):


npm install -g pnpm
pnpm install
pnpm dev


Frontend will run at:

http://localhost:3000

⚙️ How the System Works
User Inputs

Temperature

Humidity

Precipitation

ML Backend Logic

Checks for exact matches of climate values in the Excel lookup table

If found → returns the original historical yields

If not found → the RandomForest multi-output model predicts yields for all crops

Returned Data Includes

Predicted yield for each crop

Average yield

R² score (accuracy)

RMSE (error metric)

Frontend

Sends parameters to backend

Displays yield results

Renders comparison chart

Project Structure
crop_forecast_app/
│
├── ml_service/
│   ├── api.py                  # FastAPI backend
│   ├── model.py                # Training script
│   ├── multi_crop_model.pkl    # Trained RandomForest model
│   ├── requirements.txt        # Python dependencies
│   └── Crop_Yield_NK 1.xlsx    # Historical dataset
│
├── server/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── ...
│   ├── package.json
│   └── tsconfig.json
│
└── README.md

 Key Features

Multi-crop yield prediction

Climate-based lookup + ML fallback

Zero rounding or transformation of original Excel data

Clean, modern React frontend

FastAPI backend with real-time response 




CROP YIELD FORECASTING SYSTEM \\Russion version

Machine Learning + Web Application

Этот проект включает:

Python ML-сервис (FastAPI)

Обученную RandomForest модель (multi_crop_model.pkl)

Автоматический поиск точных значений урожайности (lookup таблица из Excel)

Полный frontend (React + Vite + TypeScript)

Установить Python 3.10+

https://www.python.org/downloads/

2 Установить Node.js v18

https://nodejs.org/en/download/prebuilt-installer

3 Backend (Python ML)

Выполнить:


python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn ml_service.api:app --reload --port 8000



Backend работает:
 http://127.0.0.1:8000/predict
(не веб-страница!)
4️ Server (Node.js)

Открыть второй терминал, не закрывая первый:


npm install -g pnpm
pnpm install
pnpm dev


Сайт работает:
 http://localhost:3000

Как система работает

Пользователь вводит:

Температуру

Влажность

Осадки

Backend ML-модель:

Находит точное совпадение (если есть) в Excel-таблице

Или использует RandomForest для предсказания

Возвращает:

Урожайность всех культур

Средний урожай

R² accuracy

RMSE ошибки

Frontend отображает результат и график.

Структура проекта
crop_forecast_app/
│
├── ml_service/
│   ├── api.py              ← FastAPI backend
│   ├── model.py            ← Обучение модели
│   ├── multi_crop_model.pkl← Обученная модель
│   ├── requirements.txt     ← Python зависимости
│   └── Crop_Yield_NK 1.xlsx ← Источник данных
│
├── client/ (или src/)
│   ├── pages/
│   ├── components/
│   ├── ...
│
├── package.json
└── README.md
