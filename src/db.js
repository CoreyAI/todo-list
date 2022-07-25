const project = (name) => {
  const taskList = [];
  const getTasks = () => {
    return taskList;
  }
  const setTask = (task) => {
    taskList.push(task);
  }
  const removeTask = (taskName) => {
    const taskIndex = taskList.indexOf(taskName);
    taskList.splice(taskIndex, 1);
  }
  return {name, getTasks, setTask, removeTask};
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

export {project, task, dbProject};