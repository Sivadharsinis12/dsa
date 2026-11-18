
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Port configuration
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Check MongoDB URL
console.log("MongoDB URL loaded:", Boolean(process.env.MONGO_URI));

// MongoDB Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Create MongoDB Model
const Task = mongoose.model("Task", taskSchema);

// Convert MongoDB document into frontend-friendly object
function formatTask(task) {
    return {
        id: task._id.toString(),
        title: task.title,
        completed: task.completed
    };
}

// GET: Read all tasks
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find().sort({ _id: 1 });
        res.json(tasks.map(formatTask));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST: Add a new task
app.post("/api/tasks", async (req, res) => {
    try {
        if (typeof req.body.title !== "string" || !req.body.title.trim()) {
            return res.status(400).json({
                message: "Task title required"
            });
        }

        const task = await Task.create({
            title: req.body.title.trim(),
            completed: false
        });

        res.status(201).json(formatTask(task));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT: Complete or undo a task
app.put("/api/tasks/:id", async (req, res) => {
    try {
        if (typeof req.body.completed !== "boolean") {
            return res.status(400).json({
                message: "Invalid completion status"
            });
        }

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(formatTask(task));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE: Delete a task
app.delete("/api/tasks/:id", async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid task ID" });
        }

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start server only after MongoDB connects
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.log("MongoDB Connection Error:", error.message);
    });
