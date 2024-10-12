import { useEffect, useRef } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current.childNodes);
    }
  }, [inputRef])

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('onClick', value => console.log(value));

      // button.onClick = (message) => {
      //   console.log(message);
      // }

      // return () => {
      //   button.onClick = null;
      // }
    }
  }, [buttonRef])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <custom-input ref={inputRef}>
          Payment
          <span slot="description">number</span>
        </custom-input>
        <custom-checkbox checked>Tip?</custom-checkbox>
        <ul is="expandable-list" data-expanded>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <ul is="expandable-list" data-expanded>
            <li>Four</li>
            <li>Five</li>
            <li>Six</li>
          </ul>
        </ul>
        <custom-button label="Click" ref={buttonRef}></custom-button>
        <custom-button label="Click" as-atom></custom-button>
        <custom-dropdown label="Select" option="One"></custom-dropdown>
      </header>
    </div>
  );
}

export default App;
