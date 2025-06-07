from fastapi import FastAPI, APIRouter
from pydantic import BaseModel
from services import openai_client

router = APIRouter()

class TaskInput(BaseModel):
    task: str # The task to be broken down

@router.post("/break_task")
async def break_task(data: TaskInput):
    """
    Breaks down a task into smaller, manageable tasks.
    """
    print("Received task:", data.task)
    try:
        subtasks = await openai_client.generate_subtasks(data.task)
        return {"subtasks": subtasks}
    except Exception as e:
        return {"error": str(e)}