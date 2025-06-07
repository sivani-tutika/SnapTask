import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false}])
      setNewTask("")
      setShowDialog(false)
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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => setShowDialog(true)}>+ Create Task</button>
      </div>

      {/* Task List */}
      <div style={{ marginTop: "2rem" }}>
        {tasks.map(task => (
          <div
            key={task.id}
            className="card"
            style={{
              marginBottom: "1rem",
              // background: "#f0f0f0",
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
            // background: "#fff",
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
          <button onClick={() => setShowDialog(false)}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default App