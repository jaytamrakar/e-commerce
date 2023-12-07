import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/NavBar";

const AdminHome = () => {
  return (
    <div>
      <NavBar>
        <AdminProductList />
      </NavBar>
    </div>
  );
};

export default AdminHome;
