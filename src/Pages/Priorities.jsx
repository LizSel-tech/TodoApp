import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const Priorities = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Submit project report", priority: "High" },
    { id: 2, title: "Buy groceries", priority: "Medium" },
    { id: 3, title: "Plan weekend trip", priority: "Low" },
  ]);

  const priorityColors = {
    High: "danger",
    Medium: "warning",
    Low: "success",
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />

        <main className="container mt-4">
          <h1 className="mb-4">Priorities</h1>

          {/* Group tasks by priority */}
          {["High", "Medium", "Low"].map((level) => (
            <div key={level} className="mb-4">
              <h4>
                <span className={`badge bg-${priorityColors[level]}`}>{level}</span> Priority
              </h4>
              <div className="row g-3 mt-2">
                {tasks
                  .filter((task) => task.priority === level)
                  .map((task) => (
                    <div className="col-md-6" key={task.id}>
                      <div className="card shadow-sm p-3">
                        <h5 className="mb-0">{task.title}</h5>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Priorities;
