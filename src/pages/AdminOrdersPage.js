import React from "react";
import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/NavBar";

const AdminOrdersPage = () => {
  return (
    <div>
      <NavBar>
        <AdminOrders />
      </NavBar>
    </div>
  );
};

export default AdminOrdersPage;
