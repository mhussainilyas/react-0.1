import React from "react";

const UserInfo = () => {
  const user_info = [
    {
      username: "Hussain",
      email: "hussain@gmail.com",
      location: "Pakistan",
    },
    {
      username: "Suleman",
      email: "suleman@gmail.com",
      location: "Saudi Arabia",
    },
    {
      username: "Zaryab",
      email: "zaryab@gmail.com",
      location: "Japan",
    },
  ];

  return (
    <div>
      {user_info.map(({ username, email, location }, i) => (
        <ul key={i}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserInfo;
