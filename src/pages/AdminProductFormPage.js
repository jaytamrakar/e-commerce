import ProductForm from "../features/admin/components/ProductForm";
import NavBar from "../features/navbar/NavBar";
const AdminProductFormPage = () => {
  return (
    <div>
      <NavBar>
        <ProductForm />
      </NavBar>
    </div>
  );
};

export default AdminProductFormPage;
