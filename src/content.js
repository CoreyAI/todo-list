// import { project, task, dbProject } from "./db";
import * as db from "./db";
import { ui } from "./UI";

const contentContainer = document.getElementById("content-container");
let activeView = '';
let activeTaskIndex = '';

const resetContentContainer = () => {
  contentContainer.innerHTML = "";
  activeView = '';
}

const taskTemplate = (task) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task");

  const taskLeftSideContainer = document.createElement("div");
  taskLeftSideContainer.setAttribute("id", "task-left-side-container");

  const taskCompletionCheck = document.createElement("div");
  taskCompletionCheck.setAttribute("class", "task-completion-false");
  taskCompletionCheck.setAttribute("id", "task-completion-check");
  taskLeftSideContainer.appendChild(taskCompletionCheck);

  const taskTitleDescriptionContainer = document.createElement("div");
  taskTitleDescriptionContainer.setAttribute("id", "task-title-description");

  const taskTitle = document.createElement("div");
  taskTitle.setAttribute("id", "task-title");
  taskTitle.setAttribute("class", "task-completion-false");
  taskTitle.innerHTML = task.title;
  taskTitleDescriptionContainer.appendChild(taskTitle);

  const taskDescription = document.createElement("div");
  taskDescription.setAttribute("id", "task-description");
  taskDescription.setAttribute("class", "task-completion-false");
  taskDescription.innerHTML = task.description;
  taskTitleDescriptionContainer.appendChild(taskDescription);

  const taskDateOptionsContainer = document.createElement("div");
  taskDateOptionsContainer.setAttribute("id", "task-date-options");

  const taskDueDate = document.createElement("div");
  taskDueDate.setAttribute("id", "task-due-date");
  taskDueDate.setAttribute("class", "task-completion-false");
  taskDueDate.innerHTML = task.dueDate;
  taskDateOptionsContainer.appendChild(taskDueDate);

  const taskPriority = document.createElement("div");
  taskPriority.setAttribute("id", "task-priority-circle");
  switch (task.priority) {
    case ("low"):
      taskPriority.setAttribute("style", "background-color: green;");
      taskPriority.setAttribute("title", "low priority");
      break;
      case ("medium"):
        taskPriority.setAttribute("style", "background-color: yellow;");
        taskPriority.setAttribute("title", "medium priority");
        break;
        case ("high"):
          taskPriority.setAttribute("style", "background-color: red;");
          taskPriority.setAttribute("title", "high priority");
      break;
  }
  taskDateOptionsContainer.appendChild(taskPriority);

  const taskEdit = document.createElement("div");
  taskEdit.setAttribute("class", "task-svg");
  taskEdit.setAttribute("id", "task-edit");
  taskEdit.setAttribute("title", "edit");
  taskEdit.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#000000" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    </svg>
  `;
  taskDateOptionsContainer.appendChild(taskEdit);

  const taskDelete = document.createElement("div");
  taskDelete.setAttribute("class", "task-svg");
  taskDelete.setAttribute("id", "task-delete");
  taskDelete.setAttribute("title", "delete");
  taskDelete.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#000000" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
    </svg>
  `;
  taskDateOptionsContainer.appendChild(taskDelete);

  // taskContainer.appendChild(taskTitleDescriptionContainer);
  taskLeftSideContainer.appendChild(taskTitleDescriptionContainer);
  taskContainer.appendChild(taskLeftSideContainer);
  taskContainer.appendChild(taskDateOptionsContainer);

  // contentContainer.appendChild(taskContainer);
  return taskContainer;
}

const projectTitle = (projectName) => {
  const titleContainer = document.createElement("div");
  titleContainer.setAttribute("id", "task-project-title");

  const projectTitle = projectName;
  titleContainer.innerText = projectTitle;

  contentContainer.appendChild(titleContainer);
}

const showProject = (projectName) => {
  const project = getProject(projectName);
  const tasks = project.getTasks();
  
  resetContentContainer();
  projectTitle(projectName);
  showTasks(tasks);

  addTaskButton();
  activeView = projectName;
}

const showTasks = (tasks) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("id", "task-container");
  for (let i = 0; i < tasks.length; i++) {
    const taskElement = taskTemplate(tasks[i]);
    taskContainer.appendChild(taskElement);
  }
  contentContainer.appendChild(taskContainer);
}

const addTask = (task, projectName) => {
  if (projectName != activeView) {
    return;
  }

  const taskContainer = document.getElementById("task-container");
  const taskElement = taskTemplate(task);
  taskContainer.appendChild(taskElement);
}

const updateTask = (inputArray, projectName) => {
  // This will never activate since editing a task will always be in the visible project space.
  if (projectName != activeView) {
    return;
  }

  const projectObject = getProject(projectName);
  const taskList = projectObject.getTasks();

  let i = activeTaskIndex;  // -1?
  taskList[i].title = inputArray[0];
  taskList[i].description = inputArray[1];
  taskList[i].dueDate = inputArray[2];
  taskList[i].priority = inputArray[3];

  if (inputArray[4] != projectName) {   // if project was changed
    console.log("project change");
    const tempTask = taskList.splice(i,1);
    const newProject = getProject(inputArray[4]);
    newProject.setTask(tempTask[0]);

    document.getElementById("task-container").childNodes[i].remove();
  } else {
    const taskContainer = document.getElementById("task-container");
    const taskElement = taskTemplate(taskList[i]);
    const childElement = taskContainer.childNodes[i];
  
    taskContainer.replaceChild(taskElement, childElement);
  }

}

const showInbox = () => {
  resetContentContainer();
  projectTitle("Inbox");
  // const projects = db.getProjects();
  // for (let i = 0; i < projects.length; i++) {
  //   const tasks = projects[i].getTasks();
  //   showTasks(tasks);
  // }
}

const showToday = () => {
  resetContentContainer();
  projectTitle("Today");
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

const modifyTask = (option, task, project, element) => {
  let projectObject = getProject(project);
  activeTaskIndex = projectObject.getTaskIndex(task);
  if (option == "task-edit") {
    console.log("task-edit");
    ui.addTaskPrompt("edit", project, task);
  } else if (option == "task-delete") {
    console.log("task-delete");
    projectObject.removeTask(task);
    ui.removeTask(element);
    console.log(`Project "${projectObject.name} > Tasks: ${projectObject.getTasks()}"`)
  } else {
    alert("error with content.modifyTask, option is: ", option);
  }
}

const getActiveView = () => {
  return activeView;
}

export { showProject, getActiveView, resetContentContainer, addTask, modifyTask, updateTask, showInbox, showToday };