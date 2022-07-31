import * as db from "./db";

const ui = (() =>{

  const container = document.getElementById("container");
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const content = document.getElementById("content-container");
  const footer = document.getElementById("footer");

  let taskState = "";

  const appendChild = (eParent, eChild) => {
    if (eParent == null) {
      eParent.appendChild(eChild);
    } else {
      eParent.appendChild(eChild);
    }
  }

  const setInnerHTML = (object, input) => {
    object.innerHTML += input;
  }

  const headerMenuIcon = () => {
    const e = `
      <svg viewBox="0 0 24 24" id="menu-icon">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    `
    return e;
  }

  const headerLogo = () => {``
    const e = `
      <div class="logo">To-Do List</div>
    `
    return e;
  }

  const start = () => {
    setInnerHTML(header, headerMenuIcon());
    setInnerHTML(header, headerLogo());
    setInnerHTML(nav, navChoices());
  }

  const menuToggle = () => {
    if (nav.className == "active") {
      nav.className = "hidden";
      content.className = "extend";
    } else {
      nav.className = "active";
      content.className = "normal";
    }
  }

  const navChoices = () => {
    const e = `
      <div class="nav-main-choices" id="nav-inbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-icons">
          <path fill="#000000" d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
        </svg>
        <div class="nav-label">Inbox</div>
      </div>
      <div class="nav-main-choices" id="nav-today">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-icons">
          <path fill="#000000" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
        </svg>
        <div class="nav-label">Today</div>
      </div>
      <div class="nav-main-choices" id="nav-projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-icons">
          <path fill="#000000" d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
        </svg>
        <div class="nav-label">Projects</div>
      </div>
      <div class="nav-projects" id="nav-added-projects"></div>
      <div class="nav-projects" id="nav-add-projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="nav-projects-icon">
          <path fill="#000000" d="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" />
        </svg>
        <div class="nav-label">Add Project</div>
      </div>         
    `
    return e;
  }

  const navProjectToggle = () => {
    const projectList = document.getElementsByClassName("nav-projects");
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].getAttribute("style")) {
        projectList[i].removeAttribute("style");
      } else {
        projectList[i].setAttribute("style", "display:none");
      }
    }
  }

  const navAddProject = (name) => {
    const addedProjects = document.getElementById("nav-added-projects");
    const projectElement = document.createElement("div");
    projectElement.setAttribute("class", "nav-added-projects");
    projectElement.innerHTML = `
      <div class="project-name">${name}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="project-delete" id="nav-projects-icon">
        <path fill="#000000" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
      </svg>
    `;
    addedProjects.appendChild(projectElement);
  }

  const navAddProjectDataBase = (dbProject) => {
    for (let i = 0; i < dbProject.length; i++) {
      navAddProject(dbProject[i].name);
    }
  }

  const navAddProjectPrompt = () => {
    const container = document.getElementById("nav-add-projects");
    container.setAttribute("id", "nav-project-prompt-container");
    container.innerHTML = `
      <div id="nav-project-prompt">
        <form action="#">
          <label for="project-name">
            <input type="text" name="project-name" id="project-name" placeholder="Project Name" required/>
          </label>
          <button type="submit">Create</button>
          <button type="reset">Cancel</button>
        </form>
      </div>
    `;
  }

  const navAddProjectButton = () => {
    const container = document.getElementById("nav-project-prompt-container");
    container.setAttribute("id", "nav-add-projects");
    container.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="nav-projects-icon">
      <path fill="#000000" d="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" />
    </svg>
    <div class="nav-label">Add Project</div>
    `
  }

  const navRemoveProject = (element) => {
    element.remove();
  }

  const taskPromptTemplate = (state, projectName, taskName) => {
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");

    const taskPromptContainer = document.createElement("div");
    taskPromptContainer.setAttribute("id", "task-prompt-container");

    const title = document.createElement("div");
    title.setAttribute("id", "task-prompt-title");
    if (state == "edit") {
      title.innerText = "Edit Task";
    } else {
      title.innerText = "Add Task";
    }
  
    const formContainer = document.createElement("form");
    formContainer.setAttribute("id", "task-prompt-form");
    formContainer.setAttribute("action", "#");
    formContainer.innerHTML = `
      <div id="task-prompt-form-inputs">
        <div id="task-prompt-form-lh">
          <label htmlFor="task-name">
            <span class="task-prompt-label">Name:</span>
            <input type="text" name="name" id="task-name" required ${showValue("title")}/>
          </label>
          <label htmlFor="task-description">
            <span class="task-prompt-label">Description:</span>
            <textarea id="task-description" rows="4" >${showValue("description")}</textarea>
          </label>
        </div>
        <div id="task-prompt-form-rh">
          <label htmlFor="task-due-date">
            <span class="task-prompt-label">Due Date:</span>
            <input type="datetime-local" name="due-date" id="task-due-date" ${showValue("dueDate")}/>
          </label>
          <label htmlFor="task-priority">
            <span class="task-prompt-label">Priority:</span>
            <select name="priority" id="task-priority">
              <option value="low" ${showValue("priority", "low")}>low</option>
              <option value="medium" ${showValue("priority", "medium")}>medium</option>
              <option value="high" ${showValue("priority", "high")}>high</option>
            </select>
          </label>
          <label htmlFor="task-project">
            <span class="task-prompt-label">Project:</span>
            <select name="project" id="task-project">
              ${projectList(projectName)}
            </select>
          </label>
        </div>
      </div>
      <div id="task-prompt-form-buttons">
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </div>
    `;

    function projectList(projectName) {
      let options = '';
      const projectList = db.getProjects();
      for (let i = 0; i < projectList.length; i++) {
        let tmp = projectList[i].name;
        if (tmp == projectName) {
          options += `<option selected value="${tmp}">${tmp}</option>\n`;
        } else {
          options += `<option value="${tmp}">${tmp}</option>\n`;
        }
      }
      return options;
    }

    // TODO: fix add task function so that submitting an edited task works as intended.
    function showValue(type, priorityLevel) {
      if (taskState == "add") {
        return '';
      }
      
      const projectList = db.getProjects();
      for (let i = 0; i < projectList.length; i++) {
        let tmp = projectList[i].name;
        if (tmp == projectName) {
          let taskList = projectList[i].getTasks();
          for (let j = 0; j < taskList.length; j++) {
            if (taskName == taskList[j]["title"]) {
              if (type == "description") {
                return `${taskList[j][type]}`
              } else if (type == "priority") {
                if (priorityLevel == taskList[j][type]) {
                  return "selected";
                }
              } else {
                return `value="${taskList[j][type]}"`
              }
            }
          }
        }
      }
    }

    taskPromptContainer.appendChild(title);
    taskPromptContainer.appendChild(formContainer);
    overlay.appendChild(taskPromptContainer);
    content.appendChild(overlay);
  }

  const addTaskPrompt = (state, projectName, taskName) => {
    taskState = state;
    taskPromptTemplate(state, projectName, taskName);
  }

  const removeTaskPrompt = () => {
    const overlayContainer = document.getElementsByClassName("overlay");
    overlayContainer[0].remove();
  }

  const removeTask = (taskElement) => {
    taskElement.remove()
  }

  const getTaskState = () => {
    return taskState;
  }

  return {start, menuToggle, navProjectToggle, navAddProject, navRemoveProject, navAddProjectPrompt, navAddProjectButton, navAddProjectDataBase, addTaskPrompt, removeTaskPrompt, removeTask, getTaskState};

})();

export {ui};