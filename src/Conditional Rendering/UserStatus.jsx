import React from "react";

const UserStatus = () => {
  return (
    <div>
      <CheckUserStatus loggedIn={true} isAdmin={false} />
    </div>
  );
};

const CheckUserStatus = ({ loggedIn, isAdmin }) => {
  //   1st Method
  //   if (loggedIn && isAdmin) {
  //     return <p>Welcome Admin.</p>;
  //   } else {
  //     return <p>Welcome User.</p>;
  //   }
  //   2nd Method
  return (
    <>{loggedIn && isAdmin ? <p>Welcome Admin.</p> : <p>Welcome User.</p>}</>
  );
};

export default UserStatus;
