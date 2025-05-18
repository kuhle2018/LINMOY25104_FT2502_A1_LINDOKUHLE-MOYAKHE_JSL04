// Get references to the columns
const columns = {
  todo: document.querySelector("[data-status='todo'] .tasks-container"),
  doing: document.querySelector("[data-status='doing'] .tasks-container"),
  done: document.querySelector("[data-status='done'] .tasks-container"),
};

// Initial task data
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

// Function to render tasks dynamically
function renderTasks() {
  Object.values(columns).forEach((column) => (column.innerHTML = "")); // Clear existing tasks

  initialTasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task-div");
    taskElement.textContent = task.title;
    taskElement.setAttribute("data-id", task.id);

    taskElement.addEventListener("click", () => openModal(task));

    columns[task.status].appendChild(taskElement);
  });
}

// Function to open modal with task details
function openModal(task) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <h3>Edit Task</h3>
      <label>Title:</label>
      <input type="text" id="taskTitle" value="${task.title}">
      <label>Description:</label>
      <textarea id="taskDescription">${task.description}</textarea>
      <label>Status:</label>
      <select id="taskStatus">
        <option value="todo" ${task.status === "todo" ? "selected" : ""}>Todo</option>
        <option value="doing" ${task.status === "doing" ? "selected" : ""}>Doing</option>
        <option value="done" ${task.status === "done" ? "selected" : ""}>Done</option>
      </select>
      <div class="modal-actions">
        <button onclick="saveTask(${task.id})">Save</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
        <button onclick="closeModal()">Cancel</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Function to save edited task details
function saveTask(taskId) {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const status = document.getElementById("taskStatus").value;

  const taskIndex = initialTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    initialTasks[taskIndex] = { ...initialTasks[taskIndex], title, description, status };
    renderTasks();
    closeModal();
  }
}

// Function to delete a task
function deleteTask(taskId) {
  const taskIndex = initialTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    initialTasks.splice(taskIndex, 1);
    renderTasks();
    closeModal();
  }
}

// Function to close modal
function closeModal() {
  document.querySelector(".modal")?.remove();
}

// Initial rendering of tasks
document.addEventListener("DOMContentLoaded", renderTasks);
