const addBtn = document.getElementById("addBtn");
const input = document.getElementById("task");
const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Escribe una tarea");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Botón eliminar
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

taskList.addEventListener("click", function(e){

    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
        return;
    }

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
});