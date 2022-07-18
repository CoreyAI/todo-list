const ui = (() =>{

  const container = document.getElementById("container");
  const header = document.getElementsByClassName("header")[0];
  const nav = document.getElementsByClassName("nav")[0];
  const content = document.getElementsByClassName("content-container")[0];
  const footer = document.getElementsByClassName("footer")[0];

  const appendChild = (eParent, eChild) => {
    if (eParent[0] == null) {
      eParent.appendChild(eChild);
    } else {
      eParent[eParent.length].appendChild(eChild);
    }
  }

  const setInnerHTML = (object, input) => {
    object.innerHTML += input;
  }

  const headerMenuIcon = () => {
    // const e = document.createElement().innerHTML = `
    //   <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    //     <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    //   </svg>
    // `
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
    // header[0].innerHTML += headerMenuIcon();
    setInnerHTML(header, headerMenuIcon());
    setInnerHTML(header, headerLogo());
    // console.log("test");
  }

  return {start};

})();

export {ui};
