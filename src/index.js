import "./style.css";
import { ui } from "./UI";
import * as db from "./db";
import * as content from "./content"

ui.start();

document.querySelector("#menu-icon").addEventListener("click", ui.menuToggle);

const addProjectContainer = document.querySelector("#nav-add-projects")
addProjectContainer.addEventListener("click", projectForm);

const navMenu = document.querySelectorAll(".nav-main-choices");
navMenu.forEach(selection => {
  selection.addEventListener("click", navEvent);
});

function navEvent(e) {
  console.log("navEvent triggered: ", e);
  switch (this.id) {
    case "nav-inbox":
      //TODO:
      content.showInbox();
      taskOptionScan();
      break;
    case "nav-today":
      //TODO
      content.showToday();
      taskOptionScan();
      break;
    case "nav-projects":
      ui.navProjectToggle();
      break;
  }
}

function projectForm() {
  ui.navAddProjectPrompt();
  addProjectContainer.removeEventListener("click", projectForm);
  projectFormScan();
  projectListScan();
}

function projectFormScan() {
  const projectFormContainer = document.querySelector("form");
  projectFormContainer.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("this has been alerted");
    const projectName = this['project-name'].value;
    db.addProject(projectName);
    ui.navAddProject(projectName);
    ui.navAddProjectButton();
    addProjectContainer.addEventListener("click", projectForm);
    projectListScan();
    taskScan();
    addTaskScan();
  })
  projectFormContainer.addEventListener("reset", function(e) {
    ui.navAddProjectButton();
    addProjectContainer.addEventListener("click", projectForm);
  });
}

function projectListScan() {
  let projects = document.querySelectorAll(".nav-added-projects");
  projects.forEach(addedProject => {
    addedProject.addEventListener("click", projectListEvent);
  });
}

function projectListEvent(e) {
  if (e.target.tagName == "DIV") {
    console.log("div");
    const projectName = e.target.innerText;
    content.showProject(projectName);
    taskScan();
    addTaskScan();
    taskOptionScan();
  } else if (e.target.tagName == "svg") {
    const element = e.path[1];
    const activeView = content.getActiveView();
    ui.navRemoveProject(element);
    db.removeProject(e.path[1].children[0].innerText, activeView);
  } else if (e.target.tagName == "path") {
    const element = e.path[2];
    const activeView = content.getActiveView();
    ui.navRemoveProject(element)
    db.removeProject(e.path[2].children[0].innerText, activeView);
  } else {
    console.log(e.target.tagName);
  }
  projectListScan();
}

function addTestProject() {
  const project1 = db.project("Test Project");
  db.dbProject.push(project1);
  const task1 = db.task("test task", "test description", "any date", "medium", project1.name);
  project1.setTask(task1);
  ui.navAddProjectDataBase(db.dbProject);
  projectListScan();
  content.showProject(project1.name);
  taskScan();
  addTaskScan();
  taskOptionScan();
}

function taskScan() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach(task => {
    task.addEventListener("click", taskToggle);
  });
}

function taskToggle(e) {
  if (e.target.parentElement.id == "task-edit" || e.target.parentElement.parentElement.id == "task-edit") {
    return;
  }

  const projectName = content.getActiveView();
  const taskName = this.childNodes[0].childNodes[1].childNodes[0].innerText;
  // const checkContainer = this.childNodes[0].childNodes[0];
  const taskContainer = this;

  content.toggleTaskStatus(projectName, taskName, taskContainer);

}

function addTaskScan() {
  const task = document.getElementById("task-create-button-text");
  task.addEventListener("click", addTask);
}

function addTask(e) {
  console.log("add task clicked: ", e);
  const projectName = e.target.parentElement.parentElement.childNodes[0].innerText;
  ui.addTaskPrompt("add", projectName);
  taskFormScan();
}

function taskFormScan() {
  const taskContainer = document.querySelector("form");

  taskContainer.addEventListener("submit", function(e) {
    e.preventDefault;
    console.log("submit button pressed");

    const inputArray = [e.target['task-name'].value, e.target['task-description'].value, e.target['task-due-date'].value, e.target['task-priority'].value, e.target['task-project'].value];

    if (inputArray[2] == "") {
      inputArray[2] = "no date";
    }

    const taskState = ui.getTaskState();
    const inputTask = db.task(inputArray[0], inputArray[1], inputArray[2], inputArray[3], inputArray[4]);
    const inputProject = inputArray[4];
    const activeProject = content.getActiveView();

    if (taskState == "add") {
      // console.log("index.taskFormScan > taskState = add");
      db.addTaskToProject(inputTask, inputProject);
      content.addTask(inputTask, inputProject);
    } else if (taskState == "edit") {
      // console.log("index.taskFormScan > taskState = edit");
      content.updateTask(inputArray, activeProject);
    } else {
      console.log("error: taskState = ". taskState);
    }

    console.log("inputTask = ", inputTask);
    ui.removeTaskPrompt();
    taskOptionScan();
    taskScan();
  });

  taskContainer.addEventListener("reset", function(e) {
    console.log("reset button pressed");
    ui.removeTaskPrompt();
  });
}

function taskOptionScan() {
  const options = document.querySelectorAll(".task-svg");
  options.forEach(option => {
    option.addEventListener("click", taskOptionSelection);
  });
}

// Future reference: technical debt created with project object. Should set tasks
// in their own individual array with project value for better organization/
// sorting. Can look to fix this in the future with a code refactor.
function taskOptionSelection(e) {
  console.log("option has been selected: ", e);

  let selection = {option: null, task: null, project: null, taskElement: null};

  selection["option"] = this.id
  selection["task"] = this.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].innerText;
  selection["project"] = content.getActiveView();
  selection["taskElement"] = this.parentElement.parentElement;

  content.modifyTask(selection["option"], selection["task"], selection["project"], selection["taskElement"]);
  
  if (selection["option"] == "task-edit") {
    taskFormScan();
  }
  taskOptionScan();

}

addTestProject();