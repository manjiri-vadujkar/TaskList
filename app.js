const addTaskBtn = document.getElementById("addTask");
const deleteTaskBtns = document.querySelectorAll(".fa-remove");
const clearTaskBtn = document.getElementById("clearTask");
const taskInput = document.querySelector("#taskInput");
const emptyMsg = document.getElementById("emptyNote");

checkIfEmpty(document.querySelector(".collection"));

function checkIfEmpty(list) {
  if (list.childElementCount === 0) {
    emptyMsg.style.visibility = "visible";
  } else {
    emptyMsg.style.visibility = "hidden";
  }
}

addTaskBtn.addEventListener("click", addTask);

deleteTaskBtns.forEach((deleteTaskBtn) => {
  deleteTaskBtn.addEventListener("click", deleteTask);
});
clearTaskBtn.addEventListener("click", clearTasks);

function clearTasks(e) {
  const taskList = document.querySelector(".collection");
  //   console.log(e.target);
  let allChild = document.querySelectorAll(".collection li");
  allChild.forEach((child) => {
    taskList.removeChild(child);
  });
  checkIfEmpty(document.querySelector(".collection"));
}

function deleteTask(e) {
  e.preventDefault();
  console.log(e.target.parentElement.parentElement);
  const taskList = document.querySelector(".collection");
  taskList.removeChild(e.target.parentElement.parentElement);
  checkIfEmpty(document.querySelector(".collection"));
}

function addTask(e) {
  e.preventDefault();

  if (taskInput.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    const taskList = document.querySelector(".collection");
    const item = document.createElement("li");
    const link = document.createElement("a");
    //console.log(e.target);

    item.className = "collection-item";
    item.appendChild(document.createTextNode(taskInput.value));

    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    item.appendChild(link);

    item.firstElementChild.addEventListener("click", deleteTask);

    taskList.appendChild(item);
    checkIfEmpty(document.querySelector(".collection"));
  }

  console.log(taskInput.value);
}
