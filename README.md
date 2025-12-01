Crop Yield Forecasting System

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

cd ml_service
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn api:app --reload --port 8000


Backend работает:
 http://127.0.0.1:8000/predict

4️ Server (Node.js)

Открыть второй терминал:

cd server
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