import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />

        <main className="container mt-4">
          <h1 className="mb-4">Settings</h1>

          <div className="card p-3 mb-3 shadow-sm">
            <h5>Theme</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="form-check-label">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </label>
            </div>
          </div>

          <div className="card p-3 shadow-sm">
            <h5>Notifications</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <label className="form-check-label">
                {notifications ? "Enabled" : "Disabled"}
              </label>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
