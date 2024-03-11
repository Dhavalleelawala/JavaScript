let tasks = [];
function addTask(){
  let taskInput = document.querySelector("#text");
  
  if(taskInput.value !=""){
    let obj = {
      text : taskInput.value,
      completed : false
    }  
  
    tasks.push(obj);
  }
  taskInput.value ="";
  taskInput.focus();
  renderTask();
  console.log(tasks);
}

function renderTask(){
  let taskList = document.getElementById("res");

  let taskItems = taskList.value = `<ul>`
  tasks.forEach((task,index)=> {
    taskItems += `<li><input type="checkbox" id="checkbox" onchange="toggleTask(${index})" class="${task.completed ? 'completed' : ""} ">${task.text}`
    taskItems += `<button id="btn-delete" style="margin-left:20px;" onclick="deleteTask(${index})">Delete</button>`
    taskItems += `</li>`
  });
  taskItems += `</ul>`;

  taskList.innerHTML = taskItems;
}

function toggleTask(index){
  tasks[index].completed = !tasks[index].completed;
  
}

function deleteTask(index){
  tasks.splice(index,1);
  renderTask();
  console.log(tasks);
}

function sortTask() {
  tasks.sort((a, b) => a.text.localeCompare(b.text));
  renderTask();
}

function filterTask() {
  tasks = tasks.filter(task => !task.completed);
  renderTask();
}

function clearTask() {
  tasks = tasks.filter(task => !task.completed);
  renderTask();
}