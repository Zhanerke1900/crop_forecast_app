Crop Yield Forecasting System

Machine Learning + Web Application

Этот проект включает:

Python ML-сервис (FastAPI)

Обученную RandomForest модель (multi_crop_model.pkl)

Автоматический поиск точных значений урожайности (lookup таблица из Excel)

Полный frontend (React + Vite + TypeScript)

Как запустить проект у себя 
1. Требования

Python 3.10

Node.js v18+

pnpm (или npm/yarn, но проект использует pnpm)

Windows/macOS/Linux

2. Установка Python-части (ML сервис)

Перейдите в папку:

cd crop_forecast_app/ml_service


Создайте виртуальное окружение:

python -m venv .venv


Активируйте:

Windows
.\.venv\Scripts\activate

macOS/Linux
source .venv/bin/activate


Установите зависимости:

pip install -r requirements.txt



4. Запуск ML API сервера
uvicorn ml_service.api:app --reload --port 8000


После запуска API доступно по адресу:

http://127.0.0.1:8000/predict

5. Запуск фронтенда

Перейдите в корень проекта:

cd crop_forecast_app


Установите зависимости:

pnpm install


Запустите локальный сервер:

pnpm dev


Frontend будет доступен по адресу:

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