import React from "react";

const UserList = () => {
  const user_list = [
    { id: 1, name: "Hussain", age: 19 },
    { id: 2, name: "Suleman", age: 20 },
    { id: 3, name: "Zaryab", age: 18 },
  ];

  return (
    <main>
      {user_list.map((user, i) => (
        <div key={i}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </main>
  );
};

export default UserList;
