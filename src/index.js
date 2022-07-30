import "./style.css";
import { ui } from "./UI";
import * as db from "./db";
import * as content from "./content"

ui.start();

document.querySelector("#menu-icon").addEventListener("click", ui.menuToggle);

document.querySelector("#nav-projects").addEventListener("click", ui.navProjectToggle);

const addProjectContainer = document.querySelector("#nav-add-projects")
addProjectContainer.addEventListener("click", projectForm);

function projectForm () {
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

// TODO: Add project object logic to decision tree
function projectListEvent(e) {
  if (e.target.tagName == "DIV") {
    console.log("div");
    const projectName = e.target.innerText;
    content.showProject(projectName);
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
  const task1 = db.task("test task", "test description", "any date", "medium");
  project1.setTask(task1);
  ui.navAddProjectDataBase(db.dbProject);
  projectListScan();
  content.showProject(project1.name);
  addTaskScan();
  taskOptionScan();
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
  const taskScan = document.querySelector("form");

  taskScan.addEventListener("submit", function(e) {
    e.preventDefault;
    console.log("submit button pressed");

    const inputArray = [e.target['task-name'].value, e.target['task-description'].value, e.target['task-due-date'].value, e.target['task-priority'].value, e.target['task-project'].value];

    if (inputArray[2] == "") {
      inputArray[2] = "no date";
    }

    const taskState = ui.getTaskState();
    let inputTask, inputProject;
    if (taskState == "add") {
      inputTask = db.task(inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
      inputProject = inputArray[4];
    } else if (taskState == "edit") {
      // TODO: Add logic here to handle editing a task;
    } else {
      console.log("error: taskState = ". taskState);
    }

    // TODO: Potentially modify logic block below to accommodate for adding/editing tasks.
    console.log("inputTask = ", inputTask);
    db.addTaskToProject(inputTask, inputProject);
    ui.removeTaskPrompt();
    content.addTask(inputTask, inputProject);
    taskOptionScan();
  });

  taskScan.addEventListener("reset", function(e) {
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

function taskOptionSelection(e) {
  console.log("option has been selected: ", e);

  let selection = {option: null, task: null, project: null, taskElement: null};

  if (e.target.tagName == "svg") {
    selection["option"] = e.target.parentElement.id;
    selection["task"] = e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].innerText;
    selection["project"] = content.getActiveView();
    selection["taskElement"] = e.target.parentElement.parentElement.parentElement;
  } else if (e.target.tagName == "path") {
    selection["option"] = e.target.parentElement.parentElement.id;
    selection["task"] = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].innerText;
    selection["project"] = content.getActiveView();
    selection["taskElement"] = e.target.parentElement.parentElement.parentElement.parentElement;
  } else {
    alert("error in index.taskOptionSelection, tag name is: ", e.target.tagName);
  }

  console.log(selection)

  content.modifyTask(selection["option"], selection["task"], selection["project"], selection["taskElement"]);
  taskOptionScan();

}

addTestProject();