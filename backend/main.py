from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import break_task

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development; adjust in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Include routers
app.include_router(break_task.router)