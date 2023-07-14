import React from "react";
import NavBar from "../features/navbar/NavBar";
import AdminProductDetail from "../features/admin/components/AdminProductDetail";

const AdminProductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <AdminProductDetail />
      </NavBar>
    </div>
  );
};

export default AdminProductDetailPage;
