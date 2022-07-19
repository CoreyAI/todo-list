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

  return {start, menuToggle};

})();

export {ui};
