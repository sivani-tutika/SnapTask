# 📋 SnapTask

SnapTask is a minimalist, GenAI-powered to-do list app. You can create tasks manually or use the **"Break Task"** feature to auto-generate subtasks using OpenAI's API.

🎥 **Demo Video**: 

<div align="center">
  <a href="https://youtu.be/t13N4bgVZWo" target="_blank">
    <img src="https://img.youtube.com/vi/t13N4bgVZWo/hqdefault.jpg" alt="SnapTask Demo" width="600"/>
  </a>
</div>

---

## 🚀 Features

- ✅ Add & delete tasks
- 🔁 Toggle task completion
- 🤖 **Break Task**: AI-powered task decomposition using OpenAI API

---

## 🛠 Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Backend**: FastAPI (Python)
- **AI Integration**: OpenAI API (`gpt-3.5-turbo`)

---

## 🧪 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/snaptask.git
cd snaptask
````

---

### 2. Setup Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install fastapi uvicorn openai python-dotenv
```

#### 🔐 Set your OpenAI API key

Create a `.env` file in the `backend` directory:

```env
OPENAI_API_KEY=xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

OR use CLI

```env
export OPENAI_API_KEY=xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Then run the server:

```bash
uvicorn main:app --reload
```

Backend will run on: `http://localhost:8000`

---

### 3. Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 📝 Future Ideas

* 🎯 Points and levels – Gamify your productivity by earning XP for every completed task.
* 📈 Analytics dashboard – Visualize your progress with charts and insights.
* ☁️ Save tasks in the cloud or localStorage – Keep your to-dos safe and synced.
* 🧠 GenAI-powered support – Get smart suggestions, subtask breakdowns, and productivity coaching.
* 🎨 UI improvements – Cleaner design, theme options, and smoother interactions.
* 🧩 Widget mode – Use SnapTask as a widget on your desktop or phone.
---

# 📬 Contact

Made by **Sivani Tutika**. Feel free to suggest, improve, connect or collaborate. Thanks for stopping by!


[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/sivani-tutika)
