import React, { useState } from "react";

const Example = () => {
  const [cal, setCal] = useState({
    num1: 0,
    num2: 0,
  });
  return (
    <div>
      <input
        type={"text"}
        value={cal.num1}
        onChange={(e) => setCal({ ...cal, num1: e.target.value })}
      ></input>
      <p>+</p>
      <input
        type={"text"}
        value={cal.num2}
        onChange={(e) => setCal({ ...cal, num2: e.target.value })}
      ></input>
      <p> = </p>
      <p>{Number(cal.num1) + Number(cal.num2)}</p>
    </div>
  );
};

export default Example;
