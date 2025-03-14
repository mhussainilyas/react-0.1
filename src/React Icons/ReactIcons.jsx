import React from "react";
import { FaReact } from "react-icons/fa";

const ReactIcons = () => {
  return (
    <div>
      <h1>How to use icons in react js.</h1>
      <p>
        <FaReact />
        <FaReact fontSize={50} />
        <FaReact fontSize={50} color="#57afef" />
      </p>
    </div>
  );
};

export default ReactIcons;

// 1) Visit: https://react-icons.github.io/react-icons/
// 2) Install: npm install react-icons --save
