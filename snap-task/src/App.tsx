import { useState } from 'react'
import axios from 'axios'
import './App.css'

type Task = {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showDialog, setShowDialog] = useState(false)
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask("")
      setShowDialog(false)
    }
  }

  const handleBreakTask = async () => {
    if (!newTask.trim()) return;

    try {
      const res = await axios.post("http://localhost:8000/break_task", {
        task: newTask
      });
      const subtasks = res.data.subtasks;

      const newSubtasks = subtasks.map((text: string) => ({
        id: Date.now() + Math.random(), // ensure unique id
        text,
        completed: false
      }));

      setTasks([...tasks, ...newSubtasks]);
      setNewTask("");
      setShowDialog(false);
    } catch (err) {
      console.error("Error breaking task:", err);
      alert("Something went wrong.");
    }
  }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div id="root">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md px-8 py-4 z-50 flex items-center justify-between">
        <h1 className="text-4xl font-bold">SnapTask</h1>
        <button
          onClick={() => setShowDialog(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 right-0"
        >
          + Create Task
        </button>
      </div>

      {/* Task List */}
      <div style={{ marginTop: "2rem" }}>
        {tasks.map(task => (
          <div
            key={task.id}
            className="card"
            style={{
              marginBottom: "1rem",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem"
            }}
          >
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                flex: 1,
                textAlign: "left"
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "1rem" }}>
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* Dialog */}
      {showDialog && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            display: "inline-block"
          }}
        >
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter your task"
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />
          <br />
          <button onClick={addTask} style={{ marginRight: "0.5rem" }}>Add</button>
          <button onClick={handleBreakTask} style={{ marginRight: "0.5rem" }}>Break Task</button>
          <button onClick={() => setShowDialog(false)}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default App
