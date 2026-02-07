# Task Manager API

A RESTful backend API built with Node.js and Express.js for managing tasks. This project demonstrates CRUD operations with in-memory data storage.

## 🚀 Features

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Filter tasks by search text
- ✅ Filter tasks by completion status
- ✅ Update task text, date, priority, and completion status
- ✅ Delete tasks
- ✅ RESTful API architecture
- ✅ Clean separation of routes and controllers

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Postman** - API testing

## 📁 Project Structure

```
TaskManagerAPI/
├── controllers/
│   └── task.js          # Business logic for task operations
├── routes/
│   └── task.js          # Route definitions
├── index.js             # Server entry point
├── package.json         # Project dependencies
└── .gitignore          # Git ignore rules
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rbom482/Codecademy-TaskManagerAPI-Project-Final.git
cd Codecademy-TaskManagerAPI-Final
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

Or use nodemon for auto-restart during development:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## 🌐 API Endpoints

### GET /task
Get all tasks with optional filtering.

**Query Parameters:**
- `search` (optional) - Filter tasks by text content
- `completed` (optional) - Filter by completion status (`true` or `false`)

**Examples:**
```
GET http://localhost:3000/task
GET http://localhost:3000/task?search=javascript
GET http://localhost:3000/task?completed=false
GET http://localhost:3000/task?search=react&completed=true
```

**Response:**
```json
[
  {
    "id": 1,
    "text": "Revise Intermediate JavaScript",
    "date": "2026-02-07",
    "priority": "high",
    "completed": true
  }
]
```

---

### POST /task
Create a new task.

**Request Body:**
```json
{
  "text": "Learn Express.js routing",
  "date": "2026-02-07",
  "priority": "high"
}
```

**Response:** (Status: 201 Created)
```json
{
  "id": 6,
  "text": "Learn Express.js routing",
  "date": "2026-02-07",
  "priority": "high",
  "completed": false
}
```

---

### PATCH /task/:id
Update an existing task.

**URL Parameter:**
- `id` - Task ID to update

**Request Body:** (all fields optional)
```json
{
  "text": "Updated task text",
  "date": "2026-02-08",
  "priority": "medium",
  "completed": true
}
```

**Response:** (Status: 200 OK)
```json
{
  "id": 3,
  "text": "Updated task text",
  "date": "2026-02-08",
  "priority": "medium",
  "completed": true
}
```

---

### DELETE /task/:id
Delete a task by ID.

**URL Parameter:**
- `id` - Task ID to delete

**Response:** (Status: 200 OK)
```json
{
  "message": "Task deleted successfully",
  "task": {
    "id": 1,
    "text": "Revise Intermediate JavaScript",
    "date": "2026-02-07",
    "priority": "high",
    "completed": true
  }
}
```

## 🧪 Testing with Postman

1. Start the server with `npm start`
2. Open Postman
3. Test each endpoint using the examples above
4. Remember to set `Content-Type: application/json` header for POST and PATCH requests

### Example Test Flow:
1. GET all tasks
2. POST a new task
3. PATCH to update a task
4. GET with filters
5. DELETE a task
6. GET to verify deletion

## 📝 Default Tasks

The API comes pre-loaded with 5 tasks:
1. Revise Intermediate JavaScript (completed)
2. Revise React (completed)
3. Build portfolio project (incomplete)
4. Explore string methods (incomplete)
5. Revise Middleware (incomplete)

**Note:** Data is stored in-memory and will reset when the server restarts.

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority sorting
- [ ] Pagination for large task lists
- [ ] Input validation middleware

## 👨‍💻 Author

Rebecca - [GitHub](https://github.com/rbom482)

## 📄 License

ISC

## 🙏 Acknowledgments

Built as part of Codecademy Backend Development course.
