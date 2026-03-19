function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    const props = reactElement.props;

    for (const prop in props) {
      if (prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

// This Tree like structure is created for every element present inside any component by the Bundlers of the respective Frameworks (like Vite uses its Bundlers for different Dev Stages, like esbuild for dev, Rollup used by vite 8.0 and below in Production, Rolldown is a unified bundler for Modern Vite.)
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to Visit Google !",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)
