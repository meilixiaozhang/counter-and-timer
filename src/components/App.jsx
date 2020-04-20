import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  /////////////////////////Real time clock //////////////////////////
  setInterval(getTime, 1000);

  const timeNow = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeNow);

  function getTime() {
    const timeThen = new Date().toLocaleTimeString();
    setTime(timeThen);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className="counter" onClick={increase}>
        +
      </button>
      <button className="counter" onClick={decrease}>
        -
      </button>
      <h1>{time}</h1>
      <button className="timer" onClick={getTime}>
        Get Time
      </button>
    </div>
  );
}

export default App;
