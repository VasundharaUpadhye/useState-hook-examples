import React, { useState } from "react";

const Addition = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [add, setAdd] = useState();
  const [sum, setSum] = useState();

  return (
    <div>
      <input
        type={"text"}
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      ></input>
      <p> + </p>
      <input
        type={"text"}
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      ></input>
      <br />
      <button onClick={() => setSum(num1 + num2)}> = </button>
      <br />
      <input type={"text"} value={sum}></input>
    </div>
  );
};

export default Addition;
