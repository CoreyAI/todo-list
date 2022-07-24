import "./style.css";
import { ui } from "./UI";

ui.start();

document.querySelector("#menu-icon").addEventListener("click", e => {
  ui.menuToggle();
});

// document.querySelector("#nav-projects").addEventListener("click", e => {
//   ui.navProjectToggle();
// });

// let iProject = 0
// document.querySelector("#nav-add-projects").addEventListener("click", e => {
//   e.preventDefault();
//   ui.navAddProject(`project#${iProject}`, iProject);
//   iProject++;

//   projectListScan();
// });

let iProject = 0;
document.querySelectorAll(".nav-projects").forEach(selection => {
  console.log(selection);
  selection.addEventListener("click", function(e) {
    // console.log("this = ", this);
    // console.log("e = ", e);
    switch (this.id) {
      case ("nav-projects"):
        ui.navProjectToggle();
        break;
      case ("nav-add-projects"):
        ui.navAddProject(`project#${iProject}`, iProject);
        iProject++;
        projectListScan();
        break;
      case ("nav-added-projects"):
        // console.log(e.path[1].id);
        console.log(this.id)
        break;
      default:
        // break;
        // console.log(e.path[1].id);
        console.log(this.id);

    }
  });
})

function projectListScan() {
  const nodes = document.querySelectorAll(".nav-projects-test");
  nodes.forEach(node => {
    node.addEventListener("click", projectListEvent);
  })
}

function projectListEvent(e) {
  // console.log("project list event activated", e);
  console.log(e);
}