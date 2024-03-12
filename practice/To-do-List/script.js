let tasks = [];
    let res = document.querySelector("#res");
    let inputText = document.querySelector("#input-text");
    inputText.focus();
    function addTask(){
      
      if(inputText.value != ""){
        let obj = {
        text : inputText.value,
        completed : false
      }
      tasks.push(obj);
      }

      localStorage.setItem('task',JSON.stringify(tasks));

      showTask();
      inputText.value = "";
      inputText.focus();
    }
    
    function showTask(){
      
      let dataBase = JSON.parse(localStorage.getItem('task'));
      tasks = dataBase;
      let addText = `<table width="400px" class="table  table-striped">`;
          
          tasks.forEach((task,index) => {
            addText += `<tr class="bg-light"><td scope="row"><input id="checkbox" type="checkbox" class="form-check-input" onchange="completeTask(${index})" ${task.completed ? "checked" : ''} /></td>`;
            addText += `<td width="300px"><span>${task.text}</span></td>`;
            addText += `<td><button class="btn btn-danger" onclick="return deleteTask(${index})">Delete</botton></td>`;
            addText += `<td><button class="btn btn-warning" onclick="return editTask(${task,index})">Edit</botton></td>`;
            addText += `</tr>`;
          });
          
          addText += `</table>`;
          res.innerHTML = addText;
          document.getElementById("checkbox").classList.remove("toggle");
    }

    function deleteTask(index){
      tasks.splice(index,1);
      addTask();
      showTask();
    }

    let data;
    function editTask(task){
      data = task;
      inputText.value = tasks[task].text;
      inputText.focus();
      document.getElementById("update-task").classList.remove("toggle");
      document.getElementById("add-task").classList.add("toggle");
    }

    function UpdateTask(data){
      tasks[data].text = inputText.value;
      localStorage.setItem('task',JSON.stringify(tasks));
      showTask();
      inputText.value = "";
      inputText.focus();
      document.getElementById("add-task").classList.remove("toggle");
      document.getElementById("update-task").classList.add("toggle");
      alert("update data success successfully");
    }

    function completeTask(index){
      let dataBase = JSON.parse(localStorage.getItem('task'));
      
      if(dataBase[index].completed==false){
        dataBase[index].completed=true;
      }else{
        dataBase[index].completed=false;
      }
      
      localStorage.setItem('task',JSON.stringify(dataBase));

      inputText.value = "";
      inputText.focus();
    }

    function btnCompletedTask(){
      let dataBase = JSON.parse(localStorage.getItem('task'));
      tasks = dataBase;
      let addText = `<table width="400px" class="table  table-striped">`;
          
      tasks.forEach((task,index) => {
        if(task.completed!=false){
              addText += `<tr class="bg-light"><td scope="row"><input id="checkbox" type="checkbox" class="form-check-input" onchange="completeTask(${index})" ${task.completed ? "checked" : ''} /></td>`;
              addText += `<td width="300px"><span>${task.text}</span></td>`;
              addText += `<td><button class="btn btn-danger" onclick="return deleteTask(${index})">Delete</botton></td>`;
              addText += `<td><button class="btn btn-warning" onclick="return editTask(${task,index})">Edit</botton></td>`;
              addText += `</tr>`;
            }
          });
          addText += `</table>`;
      res.innerHTML = addText;
    }

    function btnPandingTask(){
      let dataBase = JSON.parse(localStorage.getItem('task'));
      tasks = dataBase;
      let addText = `<table width="400px" class="table  table-striped">`;
          
          tasks.forEach((task,index) => {
            if(task.completed!=true){
              addText += `<tr class="bg-light"><td scope="row"><input id="checkbox" type="checkbox" class="form-check-input" onchange="completeTask(${index})" ${task.completed ? "checked" : ''} /></td>`;
              addText += `<td width="300px"><span>${task.text}</span></td>`;
              addText += `<td><button class="btn btn-danger" onclick="return deleteTask(${index})">Delete</botton></td>`;
              addText += `<td><button class="btn btn-warning" onclick="return editTask(${task,index})">Edit</botton></td>`;
              addText += `</tr>`;
            }
          });

      addText += `</table>`;
      res.innerHTML = addText;
    }

    function btnAllTask(){
      showTask();
    }

    showTask();