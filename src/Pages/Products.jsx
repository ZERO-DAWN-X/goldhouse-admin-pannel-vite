import React, { useState } from "react";
import DeleteProducts from "./components/DeleteProducts";
import UpdateProduct from "./components/UpdateProduct";
import ProductAdd from "./components/ProductAdd";
import ProductsList from "./components/ProductsList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentView, setCurrentView] = useState("Add Product");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleAddProduct = (newProduct) => {
    const existingProduct = products.find(
      (p) =>
        p.name === newProduct.name && p.description === newProduct.description
    );

    if (existingProduct) {
      setPopupMessage(`${newProduct.name} is already in the list!`);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setPopupMessage("");
      }, 2000);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const renderContent = () => {
    switch (currentView) {
      case "Product List":
        return <ProductsList products={products} />;
      case "Delete Product":
        return <DeleteProducts products={products} onDelete={handleDelete} />;
      case "Update Product":
        return <UpdateProduct products={products} />;
      case "Add Product":
      default:
        return <ProductAdd onSubmit={handleAddProduct} />;
    }
  };

  return (
    <div>
      <div className="my-4">
        <div className="flex gap-3">
          <button onClick={() => setCurrentView("Add Product")}>
            <h2 className="font-bold">Add Product</h2>
          </button>
          <button onClick={() => setCurrentView("Update Product")}>
            <h2 className="font-bold">Update Product</h2>
          </button>
          <button onClick={() => setCurrentView("Product List")}>
            <h2 className="font-bold">Product List</h2>
          </button>
          <button onClick={() => setCurrentView("Delete Product")}>
            <h2 className="font-bold">Delete Product</h2>
          </button>
        </div>
      </div>
      <div className="update-state bg-white min-h-screen rounded-lg">
        <div className="bg-white p-8 rounded-lg">{renderContent()}</div>
      </div>
      {showPopup && (
        <div className="fixed bottom-4 right-10 bg-green-500 text-white text-xl p-4 px-10 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Products;
