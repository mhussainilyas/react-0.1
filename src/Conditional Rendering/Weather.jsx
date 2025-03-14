import React from "react";

const Weather = () => {
  let temp = 27;

  // 1st Method
  //   if (temp > 25) {
  //     return <p>It's hot outside!</p>;
  //   } else if (temp <= 25 && temp >= 15) {
  //     return <p>It's nice outside!</p>;
  //   } else {
  //     return <p>It's cold outside!</p>;
  //   }

  //   2nd Method
  return (
    <>
      {temp < 15 ? (
        <p>It's cold outside!</p>
      ) : temp <= 25 && temp >= 15 ? (
        <p>It's nice outside!</p>
      ) : (
        <p>It's hot outside!</p>
      )}
    </>
  );
};

export default Weather;
