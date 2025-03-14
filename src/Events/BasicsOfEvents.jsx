import React from "react";
import "../basic styling/index.css";

const BasicsOfEvents = () => {
  // event handler
  function handleClick() {
    alert("Assalam-o-alaikum!!!");
  }
  return (
    <div>
      {/* 1st Method */}
      {/* <button onClick={() => alert("You clicked me!")}>Click Me</button> */}

      {/* 2nd Method */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default BasicsOfEvents;
