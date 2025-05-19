document.addEventListener("DOMContentLoaded", () => {
  setupTaskClickEvents();
});

// Function to handle task clicks and display details in the modal
function setupTaskClickEvents() {
  document.querySelectorAll(".task-div").forEach((taskElement) => {
    taskElement.addEventListener("click", () => {
      const taskId = parseInt(taskElement.getAttribute("data-id")); // Get ID from clicked task
      const selectedTask = initialTasks.find((task) => task.id === taskId); // Locate task data

      if (selectedTask) {
        // Populate the modal with selected task info
        document.getElementById("modal-title").innerText = selectedTask.title;
        document.getElementById("modal-description").innerText = selectedTask.description;
        document.getElementById("modal-status").value = selectedTask.status;

        // Show the modal
        document.querySelector(".modal-container").style.display = "block";
      }
    });
  });
}

// Close modal when cancel button is clicked
document.getElementById("cancel-modal").addEventListener("click", () => {
  document.querySelector(".modal-container").style.display = "none";
});
