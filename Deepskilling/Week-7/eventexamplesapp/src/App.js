import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const incrementAndGreet = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handlePress = (e) => {
    e.preventDefault(); // synthetic event example
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>Counter: {count}</h2>
      <button onClick={incrementAndGreet}>Increase</button>&nbsp;<br/>
      <button onClick={decrement}>Decrease</button>

      <br />

      <button onClick={() => sayWelcome("Welcome to React!")}>Say Welcome</button>

      <br />

      <button onClick={handlePress}>Click on me</button>

      <br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;