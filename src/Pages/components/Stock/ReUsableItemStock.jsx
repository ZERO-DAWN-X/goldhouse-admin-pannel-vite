import React from "react";

function ReUsableItemStock({ items, pageIdentifier }) {
  const getStatusText = (status) => {
    switch (status) {
      case "sold":
        return "Sold";
      case "unsold":
        return "Unsold";
      case "stock":
        return "In Stock";
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
            className="bg-white shadow-lg rounded-lg overflow-hidden"
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
                    : pageIdentifier === "stock"
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
                {pageIdentifier === "orders" ? item.orders : item.stock}
              </p>
              {pageIdentifier === "sold" && (
                <p className="text-gray-700">Date: {item.dateSold}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReUsableItemStock;
