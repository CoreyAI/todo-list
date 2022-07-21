import "./style.css";
import { ui } from "./UI";

ui.start();

document.querySelector("#menu-icon").addEventListener("click", e => {
  ui.menuToggle();
});

document.querySelector("#nav-projects").addEventListener("click", e => {
  ui.navProjectToggle();
});

let iProject = 0
document.querySelector("#nav-add-projects").addEventListener("click", e => {
  e.preventDefault();
  ui.navAddProject(`project#${iProject}`, iProject);
  iProject++;

  projectListScan();
});

//TODO: Fix click duplication bug!
function projectListScan() {
  let projects = document.querySelectorAll(".nav-added-projects");
  projects.forEach(addedProject => {
    addedProject.addEventListener("click", function(e) {
      console.log(this);
    });
  });
}

projectListScan();