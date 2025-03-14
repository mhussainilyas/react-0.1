import React from "react";

// Valid Password Component
const Valid = () => {
  return (
    <>
      <p>Valid Password</p>
    </>
  );
};

// Invalid Password Component
const Invalid = () => {
  return (
    <>
      <p>Invalid Password</p>
    </>
  );
};

// Password Component
const Password = (props) => {
  // if (props.isValid) {
  //   return <Valid />;
  // } else {
  //   return <Invalid />;
  // }
  return <>{props.isValid ? <Valid /> : <Invalid />}</>;
};

// Main Parent Component
const ConditionalRendering = () => {
  return (
    <>
      <Password isValid={false} />
    </>
  );
};

export default ConditionalRendering;
