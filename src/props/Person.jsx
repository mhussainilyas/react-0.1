import React from "react";

// Parent Component
const Person = () => {
  return (
    <div>
      <Child name="Muhammad Hussain" age={19} />
    </div>
  );
};

// Child Component
const Child = ({ name, age }) => {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </>
  );
};

// Export Parent Component
export default Person;
