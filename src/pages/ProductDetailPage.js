import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product/components/ProductDetail";
import Footer from "../features/common/Footer";

const ProductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
