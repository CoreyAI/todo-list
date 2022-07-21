import "./style.css";
import { ui } from "./UI";

ui.start();

document.querySelector("#menu-icon").addEventListener("click", e => {
  ui.menuToggle();
});

document.querySelector("#nav-projects").addEventListener("click", e => {
  ui.navProjectToggle();
});

document.querySelector("#nav-add-projects").addEventListener("click", e => {
  console.log("clicked add projects");
});