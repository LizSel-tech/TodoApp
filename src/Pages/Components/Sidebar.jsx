import React, { useState } from "react";
import { Links } from "react-router-dom";


export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [tasksOpen, setTasksOpen] = useState(false);
  const ArrowStyle = {
    fontSize: "1.5rem",
    color: "#FFFFFF",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
  };

  const ButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  };

  const linkStyle = {
    transition: "background 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    color: "#FFFFFF",
    padding: "8px 12px",
    borderRadius: "4px",
    marginBottom: "30px",
  };

  const hoverStyle = {
    backgroundColor: "#176f7cff",
  };

  const toggleCollapse = () => setCollapsed(!collapsed);
  const toggleTasks = () => setTasksOpen(!tasksOpen);

  const linkClass =
    "d-flex align-items-center gap-2 text-white text-decoration-none px-3 py-2 rounded";
  const linkHover = { transition: "background 0.2s" };

  return (
    <nav
      className="d-flex flex-column shadow-sm p-3"
      style={{
        height: "100vh",
        width: collapsed ? "80px" : "240px",
        borderRight: "1px solid #ddd",
        transition: "width 0.3s ease",
        backgroundColor: "#30B2C7",
        display: "flex", // ensure flex column
        flexDirection: "column",
      }}
    >
      {/* Navigation Arrow */}
      <div>
        <button style={ButtonStyle} onClick={() => setCollapsed(!collapsed)}>
          <i className="bi bi-arrow-left-square" style={ArrowStyle}></i>
        </button>
      </div>

      {/* Links */}
      <a
        href="/"
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#108294ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <i className="bi bi-house-door"></i>
        {!collapsed && "Dashboard"}
      </a>

       {/* All Tasks with Submenu */}
      
      <a 
        href="/alltasks"
        style={linkStyle }
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#108294ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <i className="bi bi-list-check"></i>
        {!collapsed && "Tasks"}
      </a>


      <a 
        href="/priorities"
        style={linkStyle }
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#108294ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <i className="bi bi-flag-fill"></i>
        {!collapsed && "Priorities"}
      </a>

      <a 
        href="/projects"
        style={linkStyle }
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#108294ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <i className="bi bi-folder2"></i>
        {!collapsed && "Projects"}
      </a>

      <a
        href="/notes"
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#108294ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <i className="bi bi-journal-text"></i>
        {!collapsed && "Notes"}
      </a>

      <a
        href="/settings"
        style={{ ...linkStyle, marginTop: "auto" }} // push to bottom
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#108294ff")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
      >
        <i className="bi bi-gear"></i>
        {!collapsed && "Settings"}
      </a>
    </nav>
  );
}
