
import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import AllTasks from "./Pages/AllTasks";
import Notes from "./Pages/Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Pages/Settings";
import Priorities from "./Pages/Priorities";
import Projects from "./Pages/Projects";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/alltasks" element={<AllTasks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/priorities" element={<Priorities />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        
        <Route
          path="/completed-tasks"element={<h2>Completed Tasks Page</h2>}
        />
      </Routes>
    </Router>
  );
}

export default App;
