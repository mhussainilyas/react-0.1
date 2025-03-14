import React from "react";

const Greeting = () => {
  return (
    <div>
      <TimeOfDay timeDay="morning" />
    </div>
  );
};

const TimeOfDay = (props) => {
  // 1st Method
  if (props.timeDay === "morning") {
    return <p>Good Morning.</p>;
  } else if (props.timeDay === "afternoon") {
    return <p>Good Afternoon.</p>;
  } else {
    return <p>Good Evening.</p>;
  }

  // 2nd Method
  //   return (
  //     <>
  //       {props.timeDay === "morning" ? (
  //         <p>Good Morning.</p>
  //       ) : props.timeDay === "afternoon" ? (
  //         <p>Good Afternoon.</p>
  //       ) : (
  //         <p>Good Evening.</p>
  //       )}
  //     </>
  //   );
};

export default Greeting;
