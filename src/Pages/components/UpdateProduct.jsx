import React, { useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { IoSave } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";

const UpdateProduct = ({ products }) => {
  const [editedProducts, setEditedProducts] = useState([...products]);
  const [editIndex, setEditIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleEdit = (index, field, value) => {
    const updatedProducts = editedProducts.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setEditedProducts(updatedProducts);
  };

  const handleSave = (index) => {
    products[index] = editedProducts[index];

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
    setEditIndex(null);
  };

  return (
    <div className="p-5 rounded-xl bg-gray-900 text-white">
      <h2 className="font-bold text-lg mb-4">Products List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-sm">
              <th className="px-4 py-2">Products</th>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Discount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {editedProducts.map((product, index) => (
              <tr key={product.id} className="border-t border-gray-700 text-sm">
                {editIndex === index ? (
                  <>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="text"
                        value={product.name}
                        onChange={(e) =>
                          handleEdit(index, "name", e.target.value)
                        }
                        className="border p-1 rounded bg-gray-800 text-white"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="text"
                        value={product.id}
                        onChange={(e) =>
                          handleEdit(index, "id", e.target.value)
                        }
                        className="border p-1 rounded bg-gray-800 text-white"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="text"
                        value={product.amount}
                        onChange={(e) =>
                          handleEdit(index, "amount", e.target.value)
                        }
                        className="border p-1 rounded bg-gray-800 text-white"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="text"
                        value={(product.discount, "%")}
                        onChange={(e) =>
                          handleEdit(index, "discount", e.target.value)
                        }
                        className="border p-1 rounded bg-gray-800 text-white"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="text"
                        value={product.date}
                        onChange={(e) =>
                          handleEdit(index, "date", e.target.value)
                        }
                        className="border p-1 rounded bg-gray-800 text-white"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleSave(index)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-1 rounded-full"
                      >
                        <IoSave />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-2 text-center">{product.name}</td>
                    <td className="px-4 py-2 text-center">{product.id}</td>
                    <td className="px-4 py-2 text-center">{product.amount}</td>
                    <td className="px-4 py-2 text-center">
                      {product.discount}
                    </td>
                    <td className="px-4 py-2 text-center">{product.date}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => setEditIndex(index)}
                        className="hover:bg-gray-500 font-bold bg-gray-600 text-white p-1 rounded-full"
                      >
                        <MdEditSquare />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="fixed bottom-8 right-8 bg-gray-100 text-black p-4 rounded-lg shadow-xl border-l-4 border-lime-400 flex items-center gap-3">
          <IoCloudDone /> Changes saved successfully!
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
