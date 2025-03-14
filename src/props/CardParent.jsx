import React from "react";
import CardChild from "./CardChild";

const CardParent = () => {
  return (
    <div>
      <CardChild>
        <h1>My Card Data</h1>
        <p>This is some content for card 01.</p>
      </CardChild>

      <CardChild>
        <h1>My Card Data</h1>
        <p>This is some content for card 02.</p>
      </CardChild>
    </div>
  );
};

export default CardParent;
