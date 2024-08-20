const tasksArea = document.querySelector(".tasks-area"),
    tasksBtn = document.querySelector(".tasks-button"),
    exitTasksBtn = document.querySelector(".exit-tasks-btn");


tasksBtn.addEventListener("click", ()=>{
    tasksArea.style.display = "block";
})

exitTasksBtn.addEventListener("click", ()=>{
    tasksArea.style.display = "none";
})