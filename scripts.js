document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    { title: "Launch Epic Career 🚀", status: "todo" },
    { title: "Conquer React⚛️", status: "todo" },
    { title: "Understand Databases⚙️", status: "todo" },
    { title: "Crush Frameworks🖼️", status: "todo" },
    { title: "Master JavaScript 💛", status: "doing" },
    { title: "Never Give Up 🏆", status: "doing" },
    { title: "Explore ES6 Features 🚀", status: "done" },
    { title: "Have fun 🥳", status: "done" },
  ];

  const taskContainers = document.querySelectorAll(".tasks-container");

  taskContainers.forEach((container) => {
    const status = container.closest(".column-div").dataset.status;
    tasks.filter((task) => task.status === status).forEach((task) => {
      const taskDiv = document.createElement("div");
      taskDiv.className = "task-div";
      taskDiv.textContent = task.title;
      taskDiv.addEventListener("click", () => openModal(task));
      container.appendChild(taskDiv);
    });
  });

  function openModal(task) {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector("#task-title").value = task.title;
    document.querySelector("#task-status").value = task.status;
  }

  document.querySelector("#close-modal").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
  });
});

