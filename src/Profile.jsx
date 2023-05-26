import React, { useContext } from "react";
import { UserDetails } from "./App";

function Profile() {
  const nikhilContext = useContext(UserDetails);
  return (
    <div>
      Profile
      <h1>{nikhilContext.userName}</h1>
    </div>
  );
}

export default Profile;
