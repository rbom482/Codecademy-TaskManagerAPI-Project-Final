// task storage
let tasks = [
  { id: 1, text: "Revise Resume", completed: true },
  { id: 2, text: "Upload Resume to LinkedIn", completed: true },
  { id: 3, text: "Update LinkedIn Profile", completed: false },
  { id: 4, text: "Sign up for job boards", completed: false },
  { id: 5, text: "Do practice coding projects", completed: false }
];

// GET /task
const getTasks = (req, res) => {
  const { search, completed } = req.query;
  
 
  let localTasks = [...tasks];
  
  // Filter
  if (search) {
    localTasks = localTasks.filter(task =>
      task.text.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Filter: completed
  if (completed !== undefined) {
    const isCompleted = completed === "true";
    localTasks = localTasks.filter(task => task.completed === isCompleted);
  }
  
  res.status(200).json(localTasks);
};

// POST /task - Create new task
const createTask = (req, res) => {
  const { text } = req.body;
  

  if (!text) {
    return res.status(400).json({ error: "Task text is required" });
  }
  
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  
  // Create new task
  const newTask = {
    id: newId,
    text: text,
    date: new Date().toISOString(),
    priority: req.body.priority || "medium",
    completed: false,
  };
  

  tasks.push(newTask);
  
  res.status(201).json(newTask);
};

// PATCH /task/:id - Update task
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { text, completed, date, priority } = req.body;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (text !== undefined) task.text = text;
  if (completed !== undefined) task.completed = completed;
  if (priority !== undefined) task.priority = priority;

  // Important: convert to real Date
  if (date !== undefined) {
    task.date = new Date(date).toISOString();
  }

  res.status(200).json(task);
};

// DELETE /task/:id - Delete task
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  

  const taskIndex = tasks.findIndex(t => t.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  
 
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  
  res.status(200).json({ 
    message: "Task deleted successfully", 
    task: deletedTask 
  });
};

// Export  functions
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};
