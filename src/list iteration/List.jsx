import React from "react";

const List = () => {
  const num = [1, 2, 3, 4, 5, 6];
  return (
    <main>
      {num.map((item, i) => (
        <ul key={i}>
          <li>{item}</li>
        </ul>
      ))}
    </main>
  );
};

export default List;
