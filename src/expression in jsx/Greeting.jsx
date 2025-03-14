import React from "react";

const Greeting = () => {
  const greet = "Assalam o alaikum!!!";
  const date = new Date();
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date: {date.getDate()}</p>
    </div>
  );
};

export default Greeting;
