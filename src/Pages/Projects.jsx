import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Website Redesign", progress: 75 },
    { id: 2, name: "Mobile App Launch", progress: 40 },
    { id: 3, name: "Marketing Campaign", progress: 90 },
  ]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />

        <main className="container mt-4">
          <h1 className="mb-4">Projects</h1>

          <div className="row g-3">
            {projects.map((project) => (
              <div className="col-md-6" key={project.id}>
                <div className="card shadow-sm p-3">
                  <h5>{project.name}</h5>
                  <div className="progress mt-2" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${project.progress}%` }}
                      aria-valuenow={project.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                    </div>
                  </div>
                  <small className="text-muted">{project.progress}% complete</small>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
