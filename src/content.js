// import { project, task, dbProject } from "./db";
import * as db from "./db";

const contentContainer = document.getElementById("content-container");

const resetContentContainer = () => {
  contentContainer.innerHTML = "";
}

const taskTemplate = (task) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "task");

  const taskTitle = document.createElement("div");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.innerHTML = task.title;
  divContainer.appendChild(taskTitle);

  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("id", "task-description");
  taskDescription.innerHTML = task.description;
  divContainer.appendChild(taskDescription);

  contentContainer.appendChild(divContainer);
}

const showProject = (projectName) => {
  const project = getProject(projectName);
  const tasks = project.getTasks();

  console.log("tasks: ", tasks);

  resetContentContainer();
  for (let i = 0; i < tasks.length; i++) {
    taskTemplate(tasks[i]);
  }
  addTaskButton();
}

const showInbox = (projectName) => {

}

const showToday = () => {

}

const getProject = (projectName) => {
  let tempProject;
  for (let i = 0; i < db.dbProject.length; i++) {
    let dbProject = db.dbProject[i].name;
    if (projectName == dbProject) {
      tempProject = db.dbProject[i];
      break;
    }
  }

  if (tempProject) {
    return tempProject;
  } else {
    console.log("'content.getProject'couldn't find project");
  }
}

const addTaskButton = () => {
  let buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "task-create-button");

  let buttonText = document.createElement("div");
  buttonText.setAttribute("id", "task-create-button-text");
  buttonText.innerText = "Add Task";

  buttonContainer.appendChild(buttonText);

  contentContainer.appendChild(buttonContainer);
}

export { showProject };