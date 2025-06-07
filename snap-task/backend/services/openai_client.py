from openai import OpenAI
import os

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def generate_subtasks(task):
    prompt = f"Break the following task into smaller steps:\nTask: {task}"
    print("recieved task:", task)
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    lines = response.choices[0].message.content.strip().splitlines()
    return [line.strip("-• ").strip() for line in lines if line.strip()]