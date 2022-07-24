import "./style.css";
import { ui } from "./UI";

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
    console.log("create pressed");
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
    ui.showProjectContent();  // TODO: Associate function with specific project
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
}