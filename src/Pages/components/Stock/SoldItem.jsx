import React from "react";
import sampleData from "../../../data/sampleData.json";

function SoldItems() {
  const { ItemsStock } = sampleData;

  const itemsWithOrders = ItemsStock.filter((item) => item.status == "sold");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Sold Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemsWithOrders.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={`https://via.placeholder.com/150?text=${item.name}`}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-bl-lg font-bold">
                Sold
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-2">Status: {item.status}</p>
              <p className="text-gray-700">Date: {item.dateSold}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoldItems;
