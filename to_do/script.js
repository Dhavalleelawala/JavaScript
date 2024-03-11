let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" onchange="toggleCompletion(${index})" ${task.completed ? "checked" : ""}>
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function sortTasks() {
  tasks.sort((a, b) => a.text.localeCompare(b.text));
  renderTasks();
}

function filterTasks() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}

// Initial render
renderTasks();
