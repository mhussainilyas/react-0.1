import React from "react";

const ExpressionInJsx = () => {
  // variable
  const myName = "Muhammad Hussain";
  // Special class
  let specialClass = "simple-class";
  // Function
  const multiply = (a, b) => {
    return a * b;
  };
  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h2>{myName}</h2>
      <p>My Friends List: {["Suleman", "Zaryab", "Faizan"]}</p>
      <p>2 * 10 = {multiply(2, 10)}</p>
      <p className={specialClass}>This is special class.</p>
    </section>
  );
};

export default ExpressionInJsx;
