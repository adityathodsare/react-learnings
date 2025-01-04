const container = document.getElementById("root");
// const container = document.querySelector("#root");

// how react see trhe elements
const reactElement = {
  type: "a",
  props: {
    target: "_blank",
    href: "https://google.com",
  },
  children: "click here",
};

function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("href", reactElement.props.target);
  container.appendChild(domElement);
  */
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const property in reactElement.props) {
    if (property == "children") {
      continue;
    }
    domElement.setAttribute(property, reactElement.props[property]);
  }
  container.appendChild(domElement);
}

customRender(reactElement, container);
