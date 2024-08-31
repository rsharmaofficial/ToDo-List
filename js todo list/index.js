// const title = document.getElementById("title");
// const description = document.getElementById("description");
// const form = document.querySelector("form");
// const container = document.querySelector(".container");

// const tasks = [];

// function showAllTask() {
//   tasks.forEach((value, index) => {
//     const div = document.createElement("div");
//     div.setAttribute("class", "task");

//     const innerDiv = document.createElement("div");
//     div.append(innerDiv);

//     const p = document.createElement("p");
//     p.innerText = value.title;
//     innerDiv.append(p);

//     const span = document.createElement("span");
//     p.innerText = value.title;
//     innerDiv.append(span);

//     const btn = document.createElement("button");
//     btn.setAttribute("class", "deletebtn");

//     btn.innerText = "-";
//     btn.addEventListener("click", () => {
//       removeTask();
//       tasks.splice(index, 1);
//       localStorage.setItem("tasks", JASON.stringify(tasks));
//       showAllTask();
//     });
//     div.append(btn);
//     container.append(div);
//   });
// }

// function removeTask() {
//   tasks.forEach((value) => {
//     const div = document.querySelector(".task");
//     div.remove();
//   });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   removeTask();

//   tasks.push({
//     title: title.value,
//     description: description.value,
//   });

//   showAllTask();
// });

const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

// Load tasks from localStorage or initialize as an empty array
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showAllTasks() {
  // Clear existing tasks
  container.querySelectorAll(".task").forEach((task) => task.remove());

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = task.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = task.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deletebtn");
    btn.innerText = "-";
    btn.addEventListener("click", () => {
      tasks.splice(index, 1); // Remove task from array
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
      showAllTasks(); // Refresh task list
    });
    div.append(btn);

    container.append(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if title is not empty before adding
  if (title.value.trim() === "") return;

  // Add new task
  tasks.push({
    title: title.value.trim(),
    description: description.value.trim(),
  });

  // Save to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Clear form fields
  title.value = "";
  description.value = "";

  // Show updated task list
  showAllTasks();
});

// Initial display of tasks
showAllTasks();
