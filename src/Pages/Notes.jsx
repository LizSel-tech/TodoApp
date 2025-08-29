import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const Notes = () => {
  const NoteStyle = {
    display: "flex",
    gap: "10px",
  };

  const colors = ["#fff3cd", "#d4edda", "#cce5ff", "#f8d7da"];

  const [notes, setNotes] = useState([
    { id: 1, title: "Meeting Notes", content: "Discuss Q3 targets" },
    { id: 2, title: "Shopping List", content: "Eggs, Milk, Bread" },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleAddNote = () => {
    if (newTitle.trim() === "" || newContent.trim() === "") return;
    const note = {
      id: notes.length + 1,
      title: newTitle,
      content: newContent,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setNotes([...notes, note]);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: "#f9fafb", minHeight: "100vh" }}>
        <Header />

        <main className="container mt-4">
          <div style={NoteStyle}>
            <i className="bi bi-journal-text"
            style={{ fontSize: "2rem", color: "#6B5B95" }}></i>
            <h1 className="fw-bold mb-4">Notes</h1>
          </div>

          {/* Add Note Form */}
          <div
            className="card p-4 mb-4 shadow-sm border-0"
            style={{
              backgroundColor: "#fff8e1",
              borderRadius: "12px",
            }}
          >
            <h5 className="fw-bold mb-3">✏️ Add New Note</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Note Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-3"
              placeholder="Note Content"
              rows="3"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            ></textarea>
            <button
              className="btn btn-warning fw-bold"
              onClick={handleAddNote}
              style={{ color: "#333" }}
            >
              ➕ Add Note
            </button>
          </div>

          {/* Notes List */}
          <div className="row g-3">
            {notes.map((note) => (
              <div className="col-md-4" key={note.id}>
                <div
                  className="card shadow-sm p-3 border-0"
                  style={{
                    backgroundColor: note.color || colors[Math.floor(Math.random() * colors.length)],
                    borderRadius: "12px",
                    minHeight: "150px",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <h5 className="fw-bold">{note.title}</h5>
                  <p className="mb-0">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notes;
