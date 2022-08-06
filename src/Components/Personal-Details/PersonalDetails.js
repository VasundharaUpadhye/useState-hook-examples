import React, { useState } from "react";

const PersonalDetails = () => {
  const [name, setName] = useState("Vasundhara");
  const [age, setAge] = useState(26);
  const [select, setSelect] = useState(true);
  return (
    <div>
      <form>
        <label>
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <br />
        <label>
          Age:{age}{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setAge((prevAge) => prevAge + 1);
            }}
          >
            Increase
          </button>
        </label>
        <br />
        <label>
          <input
            type={"checkbox"}
            onChange={(e) => setSelect(e.target.checked)}
            checked={select}
          ></input>
          {select ? "I am a girl" : "I am a boy"}
        </label>
      </form>
    </div>
  );
};

export default PersonalDetails;
