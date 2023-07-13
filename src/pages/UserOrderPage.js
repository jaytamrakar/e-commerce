import React from "react";
import NavBar from "../features/navbar/NavBar";
import UserOrders from "../features/user/components/UserOrders";

const UserOrderPage = () => {
  return (
    <div>
      <NavBar>
        <h1 className="text-2xl mx-auto">My Orders</h1>
        <UserOrders />
      </NavBar>
    </div>
  );
};

export default UserOrderPage;
