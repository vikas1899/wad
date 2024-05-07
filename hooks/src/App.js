



import React, { useState, useEffect } from 'react';

const App = () => {
  // Define state using useState hook for counter
  const [counter, setCounter] = useState(0);

  // Define state using useState hook for timer
  const [timer, setTimer] = useState(0);

  // Define effect using useEffect hook to run the timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <h1>Timer: {timer} seconds</h1>
    </div>
  );
};

export default App;
