const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const addTask = document.getElementById("addTask");
const clearAll = document.getElementById("clearAll");

const todo = document.getElementById("todoTasks");
const progress = document.getElementById("inprogTasks");
const done = document.getElementById("doneTasks");

const todoCount = document.getElementById("todoCount");
const progressCount = document.getElementById("progressCount");
const doneCount = document.getElementById("doneCount");

const charCount = document.getElementById("charCount");
const preview = document.getElementById("priorityPreview");
const themeBtn = document.getElementById("themeBtn");

let dragItem = null;

taskInput.oninput = () => {
    charCount.innerText = `${taskInput.value.length} / 60`;
}

priority.onchange = () => {
    preview.innerText = `Priority : ${priority.value}`;
}

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    themeBtn.innerText = document.body.classList.contains("dark") ? "☀" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark"));
}

if(localStorage.getItem("theme")=="true"){
    document.body.classList.add("dark");
    themeBtn.innerText="☀";
}

function makeTask(text, level){
    let task=document.createElement("div");
    task.className="task";
    task.draggable=true;
    task.innerHTML=`
        <span>${text}</span>
        <span class="badge ${level.toLowerCase()}">${level}</span>
    `;
    task.ondragstart=()=>dragItem=task;
    task.ondragend=()=>{
        dragItem=null;
        saveData();
    }
    task.ondblclick=()=>{
        task.remove();
        updateCount();
        saveData();
    }
    return task;
}

addTask.onclick=(e)=>{
    e.preventDefault();
    if(taskInput.value.trim()==""){
        alert("Enter a Task");
        return;
    }
    todo.appendChild(makeTask(taskInput.value.trim(),priority.value));
    taskInput.value="";
    priority.value="High";
    charCount.innerText="0 / 60";
    preview.innerText="Priority : High";
    updateCount();
    saveData();
}

[todo,progress,done].forEach(board=>{
    board.ondragover=(e)=>e.preventDefault();
    board.ondrop=()=>{
        if(dragItem){
            board.appendChild(dragItem);
            updateCount();
            saveData();
        }
    }
});
function updateCount(){

    todoCount.innerText=todo.children.length;
    progressCount.innerText=progress.children.length;
    doneCount.innerText=done.children.length;

    [todo,progress,done].forEach(board=>{

        board.parentElement.classList.toggle(
            "warning",
            board.children.length>5
        );
    });
}

function getTasks(board){
    return [...board.children].map(task=>({
        text:task.children[0].innerText,
        priority:task.children[1].innerText

    }));
}

function saveData(){
    localStorage.setItem("tasks",JSON.stringify({
        todo:getTasks(todo),
        progress:getTasks(progress),
        done:getTasks(done)

    }));
}

function loadData(){
    let data=JSON.parse(localStorage.getItem("tasks"));
    if(!data){
        updateCount();
        return;
    }
    data.todo.forEach(task=>{
        todo.appendChild(makeTask(task.text,task.priority));
    });
    data.progress.forEach(task=>{
        progress.appendChild(makeTask(task.text,task.priority));
    });
    data.done.forEach(task=>{
        done.appendChild(makeTask(task.text,task.priority));
    });
    updateCount();
}

clearAll.onclick=()=>{
    if(!confirm("Clear all tasks?")) return;
    todo.innerHTML="";
    progress.innerHTML="";
    done.innerHTML="";
    localStorage.removeItem("tasks");
    updateCount();
}
loadData();