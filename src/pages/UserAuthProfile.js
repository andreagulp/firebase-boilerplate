import React from "react";
import useAuthUser from "../components/useAuthUser";

function UserAuthProfile() {
  const authUser = useAuthUser();

  if (!authUser) {
    return <p>you must login</p>;
  }

  return (
    <div>
      <h4>Hello UserAuthProfile</h4>
      <p>{authUser.displayName}</p>
    </div>
  );
}

export default UserAuthProfile;
