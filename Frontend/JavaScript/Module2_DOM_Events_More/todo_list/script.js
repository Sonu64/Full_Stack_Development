let uniqueID = parseInt(localStorage.getItem("uniqueID")) || 0;

const renderTasks = (tasksArray) => {
  if (tasksArray.length === 0)
    document.getElementById("defaultText").style.display = "block";
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
    doneBtn.innerText = "✔";
    doneBtn.classList.add("doneBtn");
    doneBtn.classList.add("btn");
    doneBtn.classList.add("btn-success");
    const editBtn = document.createElement("button");
    editBtn.innerText = "✎";
    editBtn.classList.add("editBtn");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-warning");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    optionsDiv.appendChild(doneBtn);
    optionsDiv.appendChild(editBtn);
    optionsDiv.appendChild(deleteBtn);
    if (taskObject["status"] === "done") {
      taskName.style.textDecoration = "line-through";
      taskName.style.color = "#aba9a9ff";
      doneBtn.innerText = "↺";
    }
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(optionsDiv);
    // Put taskDiv to taskSection
    taskSection.appendChild(taskDiv);
  });
};

const addTask = (t) => {
  if (t.trim() === "") {
    alert("Please Add a Task !");
    return;
  }
  const taskSection = document.querySelector("#taskListSection");
  document.getElementById("defaultText").style.display = "none";
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
  doneBtn.innerText = "✔";
  doneBtn.classList.add("doneBtn");
  doneBtn.classList.add("btn");
  doneBtn.classList.add("btn-success");
  const editBtn = document.createElement("button");
  editBtn.innerText = "✎";
  editBtn.classList.add("editBtn");
  editBtn.classList.add("btn");
  editBtn.classList.add("btn-warning");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-danger");
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
  if (updatedTasks.length === 0)
    document.getElementById("defaultText").style.display = "block";
  console.log(updatedTasks);
  //alert("Deleting task with id " + uniqueID);
  const taskToBeDeleted = document.getElementById(uniqueID);
  taskToBeDeleted.style.display = "none";
};

const taskDone = (uniqueID) => {
  //alert("Task with id: " + uniqueID + " done !");

  // Change the status of respective task with the ID
  const tasks = JSON.parse(localStorage.getItem("allTasks"));
  tasks.forEach((task) => {
    console.log(typeof task.id, typeof parseInt(uniqueID));
    console.log(task.id, uniqueID, task.status);
    if (task["id"] === parseInt(uniqueID) && task["status"] === "not done") {
      console.log(task["name"]);
      task["status"] = "done";
      const taskDiv = document.getElementById(uniqueID);
      const taskParagraph = taskDiv.children[0];
      taskParagraph.style.textDecoration = "line-through";
      taskParagraph.style.color = "#aba9a9ff";
    } else if (task["id"] === parseInt(uniqueID) && task["status"] === "done") {
      task["status"] = "not done";
      const taskDiv = document.getElementById(uniqueID);
      const taskParagraph = taskDiv.children[0];
      taskParagraph.style.textDecoration = "none";
      taskParagraph.style.color = "white";
    }
  });
  localStorage.setItem("allTasks", JSON.stringify(tasks));
  console.log(JSON.parse(localStorage.getItem("allTasks")));
};

let temp = 0;

const showEditSection = (oldTaskName, uniqueID) => {
  const editForm = document.getElementById("editForm");
  const editSection = document.getElementById("editSection");
  temp = uniqueID;
  console.log(editSection);
  //const oldTaskName = document.getElementById(uniqueID).children[0].innerText;
  //alert(oldTaskName);

  editSection.style.display = "block";
  editSection.classList.add("active");
  document.getElementById("editedTask").value = oldTaskName;

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Changing task name in DOM only
    const newTaskName = document.getElementById("editedTask").value;
    document.getElementById(temp).children[0].innerText = newTaskName;

    // Updating tasks in localStorage
    const tasks = JSON.parse(localStorage.getItem("allTasks"));
    tasks.forEach((task) => {
      if (task["id"] === parseInt(temp)) {
        task["name"] = newTaskName;
      }
    });
    localStorage.setItem("allTasks", JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem("allTasks")));
    editSection.style.display = "none";
    editSection.classList.remove("active");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("closeEditSectionBtn")
    .addEventListener("click", () => {
      // alert("Closed");
      editSection.style.display = "none";
      editSection.classList.remove("active");
    });

  const tasks = JSON.parse(localStorage.getItem("allTasks"));
  let newTaskEdited = "";
  // If tasks doesn't yet exist, create an Empty Array in localStorage
  if (!tasks) {
    //alert("Doesn't Exist");
    document.getElementById("defaultText").style.display = "block";
    localStorage.setItem("allTasks", JSON.stringify([]));
  }

  // If tasks already exists as a key, render them one by one
  else {
    //alert("You have to render all tasks now !");
    document.getElementById("defaultText").style.display = "none";
    renderTasks(JSON.parse(localStorage.getItem("allTasks")));
  }

  // Add Task
  const form = document.querySelector("#taskForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const t = document.querySelector("#taskBox").value;
    addTask(t);
    document.querySelector("#taskBox").value = "";
  });

  // Delete Task --> EVENT DELEGATION CONCEPT TO BE REVISED !!!
  const taskListSection = document.querySelector("#taskListSection");
  console.log(taskListSection);
  taskListSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
      deleteTask(event.target.parentElement.parentElement.id);
    } else if (event.target.classList.contains("doneBtn")) {
      console.log(event.target.innerText);
      if (event.target.innerText === "✔") event.target.innerText = "↺";
      else if (event.target.innerText === "↺") event.target.innerText = "✔";
      taskDone(event.target.parentElement.parentElement.id);
      console.log(
        "Done task with ID: " + event.target.parentElement.parentElement.id
      );
    } else if (event.target.classList.contains("editBtn")) {
      //alert("Edit Button clicked !");
      showEditSection(
        event.target.parentElement.parentElement.children[0].innerText,
        event.target.parentElement.parentElement.id
      );
    }
  });
});
