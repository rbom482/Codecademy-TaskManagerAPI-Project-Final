const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//task routes
const taskRoutes = require("./routes/task");

app.use("/task", taskRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Task Manager App is ready on port ${PORT}`);
});
