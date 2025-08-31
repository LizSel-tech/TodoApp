const express = require("express");
const mysql = require ('mysql2');
const userRoutes = require('./routes/userroutes');
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskroutes");
app.use('/api/users', userRoutes);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Se31la10si2002.',
    database: 'todo_app'
});

db.connect (err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else{
        console.log('Connected to MySQL');
    }
});

app.get('/users', (req,res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).json({error:err.message})
        } else {
            res.json(results)
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
