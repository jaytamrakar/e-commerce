import React from "react";
import NavBar from "../features/navbar/NavBar";
import UserProfile from "../features/user/components/UserProfile";

const UserProfilePage = () => {
  return (
    <div>
      <NavBar>
        <h1 className="text-2xl mx-auto">My Profile</h1>
        <UserProfile />
      </NavBar>
    </div>
  );
};

export default UserProfilePage;
