const checkboxTemplate = document.createElement('template');
checkboxTemplate.innerHTML = `
  <style>
  .checkbox {
    padding: 0;
    margin: 20px 10px;
  }
  .checkbox input {
    border: 1px solid red;
    padding: 10px;
    margin: 0;
  }
  .checkbox label {
    font-size: 13px;
    color: white;
    background-color: red;
    border: 1px solid red;
    border-radius: 4px;
    padding: 10px;
    margin: 0;
  }
  </style>
  <div class="checkbox">
    <label for="checkbox">
      <input type="checkbox" id="checkbox" checked />
      <slot></slot>
    </label>
  </div>
`;

class Checkbox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(checkboxTemplate.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") this.updateChecked(newValue);
  }

  updateChecked(value) {
    this.checkbox.checked = value !== null && value !== "false";
  }

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }
}

customElements.define('custom-checkbox', Checkbox);

// const item = document.querySelector('custom-checkbox');
// let checked = true;
// setInterval(() => {
//   checked = !checked;
//   item.setAttribute("checked", checked);
// }, 1000)