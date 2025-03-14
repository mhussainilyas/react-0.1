import React from "react";

// 1st Method
// const CardChild = (props) => {
//   return (
//     <div>
//       {console.log(props)}
//       {props.children}
//     </div>
//   );
// };

// 2nd Method
const CardChild = ({ children }) => {
  return (
    <div>
      {console.log(children)}
      {children}
    </div>
  );
};

export default CardChild;
