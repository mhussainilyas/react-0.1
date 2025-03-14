import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <>
      <Child
        img="https://images6.alphacoders.com/430/430889.jpg"
        name="Muhammad Hussain"
        age={19}
        isMarried={false}
        hobbies={["coding", "reading", "sleeping"]}
      />
    </>
  );
};

export default Parent;
