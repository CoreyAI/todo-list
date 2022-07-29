// import { project, task, dbProject } from "./db";
import * as db from "./db";

const contentContainer = document.getElementById("content-container");
let activeView = '';

const resetContentContainer = () => {
  contentContainer.innerHTML = "";
  activeView = '';
}

const taskTemplate = (task) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task");

  const taskTitleDescriptionContainer = document.createElement("div");
  taskTitleDescriptionContainer.setAttribute("id", "task-title-description");

  const taskTitle = document.createElement("div");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.innerHTML = task.title;
  taskTitleDescriptionContainer.appendChild(taskTitle);

  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("id", "task-description");
  taskDescription.innerHTML = task.description;
  taskTitleDescriptionContainer.appendChild(taskDescription);

  const taskDateOptionsContainer = document.createElement("div");
  taskDateOptionsContainer.setAttribute("id", "task-date-options");

  const taskDueDate = document.createElement("div");
  taskDueDate.setAttribute("id", "task-due-date");
  taskDueDate.innerHTML = task.dueDate;
  taskDateOptionsContainer.appendChild(taskDueDate);

  const taskEdit = document.createElement("div");
  taskEdit.setAttribute("class", "task-svg");
  taskEdit.setAttribute("id", "task-edit");
  taskEdit.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#000000" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    </svg>
  `;
  taskDateOptionsContainer.appendChild(taskEdit);

  const taskDelete = document.createElement("div");
  taskDelete.setAttribute("class", "task-svg");
  taskDelete.setAttribute("id", "task-delete");
  taskDelete.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#000000" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
    </svg>
  `;
  taskDateOptionsContainer.appendChild(taskDelete);

  taskContainer.appendChild(taskTitleDescriptionContainer);
  taskContainer.appendChild(taskDateOptionsContainer);

  // contentContainer.appendChild(taskContainer);
  return taskContainer;
}

const projectTitle = (projectObject) => {
  const titleContainer = document.createElement("div");
  titleContainer.setAttribute("id", "task-project-title");

  const projectTitle = projectObject.name;
  titleContainer.innerText = projectTitle;

  contentContainer.appendChild(titleContainer);
}

const showProject = (projectName) => {
  const project = getProject(projectName);
  const tasks = project.getTasks();
  
  resetContentContainer();
  projectTitle(project);

  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("id", "task-container");
  for (let i = 0; i < tasks.length; i++) {
    const taskElement = taskTemplate(tasks[i]);
    taskContainer.appendChild(taskElement);
  }
  contentContainer.appendChild(taskContainer);
  addTaskButton();
  activeView = project.name;
}

const addTask = (task, projectName) => {
  console.log("showTask active");
  
  if (projectName != activeView) {
    return;
  }

  const taskContainer = document.getElementById("task-container");
  const taskElement = taskTemplate(task);
  taskContainer.appendChild(taskElement);
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

const getActiveView = () => {
  return activeView;
}

export { showProject, getActiveView, resetContentContainer, addTask };