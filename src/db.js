import * as content from "./content"

const project = (name) => {
  const taskList = [];
  const getTasks = () => {
    return taskList;
  }
  const setTask = (task) => {
    taskList.push(task);
  }
  const removeTask = (taskName) => {
    const taskIndex = getTaskIndex(taskName);
    taskList.splice(taskIndex, 1);
  }
  const getTaskIndex = (taskName) => {
    for (let i = 0; i < taskList.length; i++) {
      if (taskName == taskList[i].title) {
        return i;
      }
    }
    return -1;
  }
  return {name, getTasks, setTask, removeTask, getTaskIndex};
}

const task = (title, description, dueDate, priority) => {
  const status = false;
  const getStatus = () => {
    return status;
  }
  const setStatus = () => {
    if (status == false) {
      status = true;
    } else {
      status = false;
    }
  }
  return {title, description, dueDate, priority, getStatus, setStatus};
}

// Temporary location for storing projects
let dbProject = [];

const addProject = (projectName) => {
  const projectObject = project(projectName);
  dbProject.push(projectObject);
  content.showProject(projectName);
}

const removeProject = (projectName, activeView) => {
  for (let i = 0; i < dbProject.length; i++) {
    if (projectName == dbProject[i].name) {
      dbProject.splice(i,1);
      console.log("dbProject length: ", dbProject.length);
      if (i > 0) {
        if (activeView == projectName) {
          content.showProject(dbProject[i-1].name);
        } else {
          return;
        }
      } else if ((i < 1) && (dbProject.length > 0)) {
        if (activeView == projectName) {
          content.showProject(dbProject[0].name);
        }
      } else {
        // TODO: either show blank project placeholder or inbox/today tasks
        content.resetContentContainer();
      }
      return;
    }
  }
}

const getProjects = () => {
  return dbProject;
}

const addTaskToProject = (task, projectName) => {
  for (let i = 0; i < dbProject.length; i++) {
    if (dbProject[i].name == projectName) {
      dbProject[i].setTask(task);
      return;
    }
  }
}

// Consider removing dbProject from export and let the add/remove take over.
export {project, task, dbProject, addProject, removeProject, getProjects, addTaskToProject};