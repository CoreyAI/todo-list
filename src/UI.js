const uiInitialize = (() =>{

  const container = document.getElementById("container");
  // const header = document.getElementsByClassName("header");
  // const nav = document.getElementsByClassName("header");
  // const content = document.getElementsByClassName("header");
  // const footer = document.getElementsByClassName("footer");
  
  const createElement = (element, className) => {
    const e = document.createElement(`${element}`);
    e.setAttribute("class", `${className}`);
    container.appendChild(e);
  }

  const start = () => {
    createElement("header", "header");
    createElement("nav", "nav");
    createElement("div", "content-container");
    createElement("footer", "footer");
  }

  return {start};

})();

export {uiInitialize};

