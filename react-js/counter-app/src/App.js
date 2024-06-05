import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 10);
  };

  const handleDecrement = () => {
    setCount(count - 5);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment by 10</button>
        <button onClick={handleDecrement}>Decrement by 5</button>
      </header>
    </div>
  );
}

export default App;
