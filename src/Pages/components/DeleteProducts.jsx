import React from "react";
import { MdDeleteForever } from "react-icons/md";

const DeleteProducts = ({ products, onDelete }) => {
  return (
    <div className="p-5 rounded-xl bg-gray-900 text-white">
      <h2 className="font-bold text-lg mb-4">Delete Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-sm ">
              <th className="px-4 py-2 ">Product</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-gray-700 text-sm text-center"
              >
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.date}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onDelete(product.id)}
                    className="bg-gray-600 text-white p-1 rounded-full"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteProducts;
