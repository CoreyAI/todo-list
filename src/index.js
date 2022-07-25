import "./style.css";
import { ui } from "./UI";
import { project, task, dbProject } from "./db";
import * as content from "./content"

ui.start();

document.querySelector("#menu-icon").addEventListener("click", ui.menuToggle);

document.querySelector("#nav-projects").addEventListener("click", ui.navProjectToggle);

// TODO: Replace generic project id counter with object property
//       Refactor querySelector to include "Menu" and "Today", then
//       create listener function to sort out each of the 3 nav choices.
let iProject = 0
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
    const projectName = this['project-name'].value;
    ui.navAddProject(projectName);
    ui.navAddProjectButton();
    addProjectContainer.addEventListener("click", projectForm);
    projectListScan();
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
  } else if (e.target.tagName == "svg") {
    // const index = e.path[1].id;
    const element = e.path[1];
    ui.navRemoveProject(element);
  } else if (e.target.tagName == "path") {
    const element = e.path[2];
    ui.navRemoveProject(element)
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
  console.log("adding project db to nav");
  ui.navAddProjectDataBase(dbProject);
  projectListScan();
}

addTestProject();