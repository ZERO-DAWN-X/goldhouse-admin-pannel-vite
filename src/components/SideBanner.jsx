import React, { useState } from "react";
import "./SideBanner.css";

const popularProducts = [
  {
    id: 1,
    name: "Product A",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 2,
    name: "Product B",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 3,
    name: "Product C",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 4,
    name: "Product D",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 5,
    name: "Product E",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 6,
    name: "Product F",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 7,
    name: "Product G",
    type: "Typet",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 8,
    name: "Product H",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 9,
    name: "Product I",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 10,
    name: "Product J",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 11,
    name: "Product K",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 12,
    name: "Product L",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
  {
    id: 13,
    name: "Product M",
    type: "Type",
    earnings: "LKR 200",
    image: "/Images/22.jpeg",
  },
];

export default function PopularProducts() {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="p-5 bg-white rounded-md">
      <div>
        <h2 className="flex items-center justify-center text-xl text-white font-bold mb-5 bg-gray-700 p-2 rounded-md">
          Popular Products
        </h2>
        <div
          className={`transition-all duration-500 ${
            showProducts ? "h-auto" : "max-h-96"
          } overflow-y-auto hide-scrollbar`}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left pb-2">Product</th>
                <th className="text-left pb-2">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {popularProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="flex items-center py-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-18 h-12 mr-3 rounded-md"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">
                        {product.type}
                      </div>
                    </div>
                  </td>
                  <td className="py-2">{product.earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="flex justify-center items-center w-52 mt-4 text-white rounded-md p-2 font-semibold cursor-pointer bg-blue-600"
            onClick={toggleProducts}
          >
            {showProducts ? "Hide Products" : "All Products"}
          </div>
        </div>
      </div>
      <div className="items-center justify-center flex p-4 font-semibold mt-8 min-h-52 rounded-md shadow-md border border-gray-200">
        messages
      </div>
    </div>
  );
}
