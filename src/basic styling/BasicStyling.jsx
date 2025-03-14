import React from "react";

const BasicStyling = () => {
  // 2nd Method
  let styles = {
    backgroundColor: "skyblue",
    color: "blue",
    padding: "10px",
    textAlign: "center",
    fontFamily: "Impact",
  };
  return (
    <div>
      {/* 1st Method */}
      <h2
        style={{
          backgroundColor: "yellow",
          color: "red",
          padding: "10px",
          textAlign: "center",
          fontFamily: "Impact",
        }}
      >
        Muhammad Hussain
      </h2>

      {/* 2nd Method */}
      <h2 style={styles}>Muhammad Hussain</h2>
    </div>
  );
};

export default BasicStyling;
