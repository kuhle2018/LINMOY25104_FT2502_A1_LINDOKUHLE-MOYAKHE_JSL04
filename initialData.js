// Task data structure
const initialTasks = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript 💛", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Keep on Going 🏆", description: "You're almost there", status: "doing" },
  { id: 11, title: "Learn Data Structures and Algorithms 📚", description: "Study fundamental data structures and algorithms", status: "todo" },
  { id: 12, title: "Contribute to Open Source Projects 🌐", description: "Gain practical experience in software development", status: "done" },
  { id: 13, title: "Build Portfolio Projects 🛠️", description: "Showcase your skills to potential employers", status: "done" },
];

// DOM references
const columns = {
  todo: document.querySelector("[data-status='todo'] .tasks-container"),
  doing: document.querySelector("[data-status='doing'] .tasks-container"),
  done: document.querySelector("[data-status='done'] .tasks-container"),
};

// Render tasks dynamically
function renderTasks() {
  Object.values(columns).forEach(column => column.innerHTML = "");
  initialTasks.forEach(task => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task-div");
    taskElement.textContent = task.title;
    taskElement.setAttribute("data-id", task.id);
    taskElement.addEventListener("click", () => openModal(task));
    columns[task.status].appendChild(taskElement);
  });
}

// Open modal for task details
function openModal(task) {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
    <div class="modal-content">
      <h3>Edit Task</h3>
      <label>Title:</label>
      <input type="text" id="taskTitle" value="${task.title}">
      <label>Description:</label>
      <textarea id="taskDescription">${task.description}</textarea>
      <label>Status:</label>
      <select id="taskStatus">
        <option value="todo" ${task.status === "todo" ? "selected" : ""}>To Do</option>
        <option value="doing" ${task.status === "doing" ? "selected" : ""}>In Progress</option>
        <option value="done" ${task.status === "done" ? "selected" : ""}>Done</option>
      </select>
      <button onclick="saveTask(${task.id})">Save</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
      <button onclick="closeModal()">Cancel</button>
    </div>
  `;
  modalContainer.classList.remove("hidden");
} 
// Close modal
function closeModal() {
  document.getElementById("modal-container").classList.add("hidden");
}

// Initial rendering
document.addEventListener("DOMContentLoaded", renderTasks);
// Save task changes