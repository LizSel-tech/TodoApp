// src/HomePage.js
import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';


const HomePage = () => {
  return (
    <><div className='d-flex'>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />

        <main className="container mt-4">
          <h1 className="mb-4">Dashboard</h1>

          {/* Top Row: Recent Tasks & Folders */}
          <div className="row g-4">
            {/* Recent Tasks */}
            <div className="col-md-6">
              <div className="card shadow-sm p-3 h-100">
                <h5 className="mb-3">Recent Tasks</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">✔ Buy groceries</li>
                  <li className="list-group-item">📅 Prepare meeting notes</li>
                  <li className="list-group-item">✏ Work on UI design</li>
                  <li className="list-group-item">🛠 Fix bug in login form</li>
                </ul>
              </div>
            </div>

            {/* Folders */}
            <div className="col-md-6">
              <div className="card shadow-sm p-3 h-100">
                <h5 className="mb-3">Folders</h5>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="card p-3 text-center shadow-sm">
                      📂 Work
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card p-3 text-center shadow-sm">
                      📂 Personal
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card p-3 text-center shadow-sm">
                      📂 School
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card p-3 text-center shadow-sm">
                      📂 Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Statistics & Calendar */}
          <div className="row g-4 mt-3">
            {/* Statistics */}
            <div className="col-md-6">
              <div className="card shadow-sm p-3 h-100">
                <h5 className="mb-3">Statistics</h5>
                <div className="text-center text-muted" style={{ height: "200px" }}>
                  📊 Chart will go here
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="col-md-6">
              <div className="card shadow-sm p-3 h-100">
                <h5 className="mb-3">Calendar</h5>
                <div className="text-center text-muted" style={{ height: "200px" }}>
                  📅 Calendar widget will go here
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
    
  );
};

export default HomePage;