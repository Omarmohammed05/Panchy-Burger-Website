from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import menu

app = FastAPI(title="Panchy Restaurant API", version="1.0.0")

# CORS configuration
origins = [
    "http://localhost:3000",
    "https://*.vercel.app",
    "https://*.netlify.app",  # Added Netlify support
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(menu.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Panchy Restaurant API"}
