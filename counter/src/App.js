import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(10)

  const addCounter = () => {
    setCounter(counter + 1)
  }
  const removeCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chai aur react</h1>
        <h2>counter value: {counter}</h2>
        <button onClick={addCounter}>add counter {counter}</button>
        <br />
        <button onClick={removeCounter}>remove counter {counter}</button>
      </header>
    </div>
  );
}

export default App;