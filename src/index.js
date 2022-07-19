import "./style.css";
import { ui } from "./UI";

ui.start();

const navQuery = document.querySelector("#menu-icon").addEventListener("click", e => {
  ui.menuToggle();
});