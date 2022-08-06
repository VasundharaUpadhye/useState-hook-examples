import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click here</button>
      <p>you clicked me {count} times</p>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
