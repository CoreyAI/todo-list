import "./style.css";
import { ui } from "./UI";
import { project, task, dbProject, addProject, removeProject, addTaskToProject } from "./db";
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
    addProject(projectName);
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
    // content.showProjectContent(projectName)
    content.showProject(projectName);
    addTaskScan();
    // console.table(dbProject)
  } else if (e.target.tagName == "svg") {
    // const index = e.path[1].id;
    const element = e.path[1];
    const activeView = content.getActiveView();
    ui.navRemoveProject(element);
    removeProject(e.path[1].children[0].innerText, activeView);
    // console.table(dbProject);
  } else if (e.target.tagName == "path") {
    const element = e.path[2];
    const activeView = content.getActiveView();
    ui.navRemoveProject(element)
    removeProject(e.path[2].children[0].innerText, activeView);
    // console.table(dbProject);
  } else {
    console.log(e.target.tagName);
  }
  projectListScan();
}

function addTestProject() {
  const project1 = project("Test Project");
  dbProject.push(project1);
  const task1 = task("test task", "test description", "any date", "medium");
  project1.setTask(task1);
  // console.log("adding project db to nav");
  ui.navAddProjectDataBase(dbProject);
  projectListScan();
  content.showProject(project1.name);
  addTaskScan();
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

    const inputTask = task(inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
    const inputProject = inputArray[4];

    addTaskToProject(inputTask, inputProject);
    ui.removeTaskPrompt();
    content.addTask(inputTask, inputProject);
  });

  taskScan.addEventListener("reset", function(e) {
    console.log("reset button pressed");
    ui.removeTaskPrompt();
  });
}

addTestProject();