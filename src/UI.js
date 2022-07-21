const ui = (() =>{

  const container = document.getElementById("container");
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const content = document.getElementById("content-container");
  const footer = document.getElementById("footer");

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

  const headerLogo = () => {
    const e = `
      <div class="logo">Test Logo Text</div>
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

  const navAddProject = (name, id) => {
    const addedProjects = document.getElementById("nav-added-projects");
    const projectElement = document.createElement("div");
    projectElement.setAttribute("class", "nav-added-projects");
    projectElement.setAttribute("id", id);
    projectElement.innerHTML = `
      <div>${name}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="nav-projects-icon">
        <path fill="#000000" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
      </svg>
    `;
    addedProjects.appendChild(projectElement);
  }

  return {start, menuToggle, navProjectToggle, navAddProject};

})();

export {ui};