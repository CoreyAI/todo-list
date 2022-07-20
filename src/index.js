import "./style.css";
import { ui } from "./UI";

ui.start();

document.querySelector("#menu-icon").addEventListener("click", e => {
  ui.menuToggle();
});

document.querySelector("#nav-projects").addEventListener("click", e => {
  console.log("clicked projects");
});

document.querySelector("#nav-add-projects").addEventListener("click", e => {
  console.log("clicked add projects");
});