let uniqueID = parseInt(localStorage.getItem("uniqueID")) || 0;

const renderTasks = (tasksArray) => {
  tasksArray.forEach((taskObject) => {
    const taskSection = document.querySelector("#taskListSection");
    // Create div element and put taskName, Done Btn, Edit btn, Delete btn
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.id = taskObject["id"];
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("optionsDiv");
    const taskName = document.createElement("p");
    taskName.innerText = taskObject["name"];
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("doneBtn");
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("editBtn");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    optionsDiv.appendChild(doneBtn);
    optionsDiv.appendChild(editBtn);
    optionsDiv.appendChild(deleteBtn);
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(optionsDiv);
    // Put taskDiv to taskSection
    taskSection.appendChild(taskDiv);
  });
};

const addTask = (t) => {
  const taskSection = document.querySelector("#taskListSection");
  // Create div element and put taskName, Done Btn, Edit btn, Delete btn
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("taskDiv");
  taskDiv.id = ++uniqueID;
  localStorage.setItem("uniqueID", uniqueID);
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("optionsDiv");
  const taskName = document.createElement("p");
  taskName.innerText = t;
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.classList.add("doneBtn");
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteBtn");
  optionsDiv.appendChild(doneBtn);
  optionsDiv.appendChild(editBtn);
  optionsDiv.appendChild(deleteBtn);
  taskDiv.appendChild(taskName);
  taskDiv.appendChild(optionsDiv);
  // Put taskDiv to taskSection
  taskSection.appendChild(taskDiv);

  // Put task to localStorage
  const tasks = JSON.parse(localStorage.getItem("allTasks"));
  tasks.push({ id: uniqueID, name: t, status: "not done" });
  //console.log(tasks);
  localStorage.setItem("allTasks", JSON.stringify(tasks));
};

const deleteTask = (uniqueID) => {
  const tasks = JSON.parse(localStorage.getItem("allTasks"));
  // alert(typeof tasks[0]["id"]);
  // alert(typeof parseInt(uniqueID));
  const updatedTasks = tasks.filter(
    (task) => task["id"] !== parseInt(uniqueID)
  );
  localStorage.setItem("allTasks", JSON.stringify(updatedTasks));
  console.log(updatedTasks);
  alert("Deleting task with id " + uniqueID);
  const taskToBeDeleted = document.getElementById(uniqueID);
  taskToBeDeleted.style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("allTasks"));

  // If tasks doesn't yet exist, create an Empty Array in localStorage
  if (!tasks) {
    alert("Doesn't Exist");
    localStorage.setItem("allTasks", JSON.stringify([]));
  }

  // If tasks already exists as a key, render them one by one
  else {
    alert("You have to render all tasks now !");
    renderTasks(JSON.parse(localStorage.getItem("allTasks")));
  }

  // Add Task
  const form = document.querySelector("#taskForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const t = document.querySelector("#taskBox").value;
    addTask(t);
  });

  // Delete Task --> EVENT DELEGATION CONCEPT TO BE REVISED !!!
  const taskListSection = document.querySelector("#taskListSection");
  console.log(taskListSection);
  taskListSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
      deleteTask(event.target.parentElement.parentElement.id);
    }
  });
});
