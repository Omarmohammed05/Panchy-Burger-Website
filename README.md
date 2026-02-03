# Panchy Restaurant Platform

A high-performance, premium website for Panchy Restaurant in Zarqa, featuring a dark-themed design with Red/Gold/Orange accents.

## Project Structure
- `backend/`: FastAPI application (Python) handling menu data and API.
- `frontend/`: Next.js application (TypeScript/Tailwind) for the user interface.

## Prerequisites
- Node.js (v18+)
- Python (v3.9+)

## How to Run Locally

### 1. Start the Backend
```bash
cd backend
# Create venv if not exists
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
API will be running at `http://localhost:8000`.

### 2. Start the Frontend
```bash
cd frontend
npm run dev
```
Website will be running at `http://localhost:3000`.

## How to Update the Menu
1. Open `backend/menu_data.py`.
2. Locate the `MENU_DATA` dictionary.
3. Edit the items under "American", "Arabic", or "Asian".
4. Save the file. The backend will auto-reload.

## Features
- **Interactive Menu**: Filter by cuisine.
- **Reservation System**: Book a table online.
- **Responsive Design**: Mobile-first approach.
- **Instagram Feed**: Recent posts showcase.
