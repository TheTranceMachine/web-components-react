const template = document.createElement('template');
template.innerHTML = `
  <style>
  .input1 {
    line-height: 15px;
    padding: 0;
    margin: 10px;
  }
  .input1 input {
    border: 1px solid red;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    outline: none;
    padding: 10px;
    margin: 0;
  }
  .input1 label {
    font-size: 13px;
    color: white;
    background-color: red;
    border: 1px solid red;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 10px;
    margin: 0;
  }
  .input1 span {
    font-size: 13px;
    color: white;
    background-color: red;
    border: 1px solid red;
    border-radius: 4px;
    padding: 10px;
    margin: 0;
  }
  </style>
  <div class="input1">
    <label for="input1"><slot></slot></label>
    <input type="number" id="input1" />
    <span class="description"><slot name="description"></slot></span>
  </div>
`;

class Input extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
    this.input = shadow.querySelector('#input1');
  }

  connectedCallback() {
    this.input.addEventListener('change', (e) => {
      this.setAttribute('value', e.target.value);
    });
  }

  static observedAttributes = ['value'];

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute "${name}" changed ${oldValue} to ${newValue}.`);
  }

  disconnectedCallback() {
    console.log('disconnected');
  }
}

customElements.define('custom-input', Input);