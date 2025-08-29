const express = require("express");
const db = require("../db");
const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM tasks");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new task
router.post("/", async (req, res) => {
  const { title, dueDate, priority } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO tasks (title, dueDate, priority) VALUES (?, ?, ?)",
      [title, dueDate, priority]
    );
    res.json({ id: result.insertId, title, dueDate, priority });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update task
router.put("/:id", async (req, res) => {
  const { title, dueDate, priority, completed } = req.body;
  try {
    await db.query(
      "UPDATE tasks SET title=?, dueDate=?, priority=?, completed=? WHERE id=?",
      [title, dueDate, priority, completed, req.params.id]
    );
    res.json({ message: "Task updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete task
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM tasks WHERE id=?", [req.params.id]);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
