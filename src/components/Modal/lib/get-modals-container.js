const CONTAINER_DATA_ATTRIBUTE = "data-fd-vue-modals-container";
const CONTAINER_SELECTOR = `[${CONTAINER_DATA_ATTRIBUTE}]`;

export default () => {
  const el = document.querySelector(CONTAINER_SELECTOR);
  return el != null ? el : createContainer();
};

const createContainer = () => {
  const container = document.createElement("DIV");
  container.setAttribute(CONTAINER_DATA_ATTRIBUTE, "");
  document.body.appendChild(container);
  return container;
};
