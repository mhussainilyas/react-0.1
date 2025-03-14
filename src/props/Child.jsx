import React from "react";

const Child = (props) => {
  const { img, name, age, isMarried, hobbies } = props;
  return (
    <div>
      <p>Child Component</p>
      <h1>Props Data</h1>
      <img src={img} alt={name} width={400} />
      <p>Age: {age}</p>
      <p>Name: {name}</p>
      <p>Married: {isMarried}</p>
      <p>Hobbies: {hobbies}</p>
    </div>
  );
};

export default Child;
