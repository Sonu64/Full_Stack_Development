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
    if (taskObject["status"] === "done") {
      taskName.style.textDecoration = "line-through";
      doneBtn.innerText = "Mark Undone";
    }
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(optionsDiv);
    // Put taskDiv to taskSection
    taskSection.appendChild(taskDiv);
  });
};

const addTask = (t) => {
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
  if (!JSON.parse(localStorage.getItem("allTasks")))
    document.getElementById("defaultText").style.display = "none";
  console.log(updatedTasks);
  alert("Deleting task with id " + uniqueID);
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
    } else if (task["id"] === parseInt(uniqueID) && task["status"] === "done") {
      task["status"] = "not done";
      const taskDiv = document.getElementById(uniqueID);
      const taskParagraph = taskDiv.children[0];
      taskParagraph.style.textDecoration = "none";
    }
  });
  localStorage.setItem("allTasks", JSON.stringify(tasks));
  console.log(JSON.parse(localStorage.getItem("allTasks")));
};

const showEditSection = (oldTaskName, uniqueID) => {
  const editSection = document.getElementById("editSection");
  console.log(editSection);
  //const oldTaskName = document.getElementById(uniqueID).children[0].innerText;
  alert(oldTaskName);
  editSection.style.display = "block";
  document.getElementById("editedTask").value = oldTaskName;
  const editForm = document.getElementById("editForm");
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Changing task name in DOM only
    const newTaskName = document.getElementById("editedTask").value;
    document.getElementById(uniqueID).children[0].innerText = newTaskName;
    // Updating tasks in localStorage
    const tasks = JSON.parse(localStorage.getItem("allTasks"));
    tasks.forEach((task) => {
      if (task["id"] === parseInt(uniqueID)) {
        task["name"] = newTaskName;
      }
    });
    localStorage.setItem("allTasks", JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem("allTasks")));
    editSection.style.display = "none";
  });
  //editTask(oldTaskName, uniqueID);
};

// const editTask = (oldTaskName, uniqueID) => {
//   //___________________TODO___________________

// };

document.addEventListener("DOMContentLoaded", () => {
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
  });

  // Delete Task --> EVENT DELEGATION CONCEPT TO BE REVISED !!!
  const taskListSection = document.querySelector("#taskListSection");
  console.log(taskListSection);
  taskListSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
      deleteTask(event.target.parentElement.parentElement.id);
    } else if (event.target.classList.contains("doneBtn")) {
      console.log(event.target.innerText);
      if (event.target.innerText === "Done")
        event.target.innerText = "Mark Undone";
      else if (event.target.innerText === "Mark Undone")
        event.target.innerText = "Done";
      taskDone(event.target.parentElement.parentElement.id);
      console.log(
        "Done task with ID: " + event.target.parentElement.parentElement.id
      );
    } else if (event.target.classList.contains("editBtn")) {
      //alert("Editing " + event.target.parentElement.parentElement.id);
      showEditSection(
        event.target.parentElement.parentElement.children[0].innerText,
        event.target.parentElement.parentElement.id
      );
    }
  });
});
