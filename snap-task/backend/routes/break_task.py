from fastapi import FastAPI
from pydantic import BaseModel
from services import break_task_service

router = APIRouter()

class TaskInput(BaseModel):
    task: str # The task to be broken down

@router.post("/break_task")
async def break_task(data: TaskInput):
    """
    Breaks down a task into smaller, manageable tasks.
    """
    try:
        subtasks = await break_task_service.break_task(data.task)
        return {"subtasks": subtasks}
    except Exception as e:
        return {"error": str(e)}