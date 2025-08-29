import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const AllTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", due: "Today", completed: false },
    { id: 2, title: "Finish project report", due: "Tomorrow", completed: false },
    { id: 3, title: "Team meeting", due: "2025-08-15", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Handle adding task
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: tasks.length + 1,
      title: newTask,
      due: dueDate || "No date",
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
    setDueDate("");
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />

        <main className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>All Tasks</h1>
            {/* Add Task Button */}
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addTaskModal"
            >
              <i className="bi bi-plus-lg"></i> Add Task
            </button>
          </div>

          {/* Filters */}
          <div className="btn-group mb-4">
            <button className="btn btn-outline-primary">All</button>
            <button className="btn btn-outline-primary">Today</button>
            <button className="btn btn-outline-primary">Upcoming</button>
            <button className="btn btn-outline-primary">Completed</button>
          </div>

          {/* Task List */}
          <div className="row g-3">
            {tasks.map((task) => (
              <div className="col-md-6" key={task.id}>
                <div className={`card shadow-sm p-3 ${task.completed ? "bg-light" : ""}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1">{task.title}</h5>
                      <small className="text-muted">Due: {task.due}</small>
                    </div>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-success">
                        <i className="bi bi-check-lg"></i>
                      </button>
                      <button className="btn btn-sm btn-warning">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Task Modal */}
          <div
            className="modal fade"
            id="addTaskModal"
            tabIndex="-1"
            aria-labelledby="addTaskModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addTaskModalLabel">Add New Task</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Task Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddTask}
                    data-bs-dismiss="modal"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllTasks;
