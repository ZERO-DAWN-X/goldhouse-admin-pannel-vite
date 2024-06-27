import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

function ReUsableItemStock({ items, pageIdentifier }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [soldItemCount, setSoldItemCount] = useState({});

  const handleConform = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, orderShow: false } : item
    );
    setSelectedItem(null);
    // Assuming items is managed elsewhere (e.g., in parent component or state)
    // setItems(updatedItems);

    setSoldItemCount((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 0) + 1,
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getStatusText = (status) => {
    switch (status) {
      case "sold":
        return "Sold";
      case "unsold":
        return "Unsold";
      case "Outof Stock":
        return "Out of Stock";
      case "orders":
        return "Orders";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {getStatusText(pageIdentifier)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="relative">
              <img
                src={`https://via.placeholder.com/300x200?text=${item.name}`}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div
                className={`absolute top-0 right-0 ${
                  pageIdentifier === "sold"
                    ? "bg-red-500"
                    : pageIdentifier === "unsold"
                    ? "bg-blue-500"
                    : pageIdentifier === "Outof Stock"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                } text-white py-1 px-3 rounded-bl-lg font-bold`}
              >
                {getStatusText(pageIdentifier)}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700">
                {getStatusText(pageIdentifier)}:{" "}
                {pageIdentifier === "orders"
                  ? item.orders
                  : pageIdentifier === "Out of Stock"
                  ? item.OutofStock
                  : item.amount}
              </p>
              {pageIdentifier === "sold" && (
                <p className="text-gray-700">Date: {item.dateSold}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <ItemDetails
          selectedItem={selectedItem}
          pageIdentifier={pageIdentifier}
          onClose={() => setSelectedItem(null)}
          onConform={() => handleConform(selectedItem.id)}
          soldCount={soldItemCount[selectedItem.id] || 0}
        />
      )}
    </div>
  );
}

export default ReUsableItemStock;
