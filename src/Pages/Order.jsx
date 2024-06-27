import React, { useState } from "react";
import sampleData from "../data/sampleData.json";
import ReUsableItemStock from "./components/Stock/ReUsableItemStock";
import { FaSearch } from "react-icons/fa";

function Order() {
  const [currentView, setCurrentView] = useState("orders");
  const [searchInput, setSearchInput] = useState("");

  const { ItemsStock } = sampleData;

  const filteredItems = ItemsStock.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const itemsWithUnsold = filteredItems.filter(
    (item) => item.status === "unsold"
  );
  const itemsWithSold = filteredItems.filter((item) => item.status === "sold");
  const itemsOutofStock = filteredItems.filter((item) => item.OutofStock === 0);
  const itemsWithOrders = filteredItems.filter(
    (item) => item.orders > 0 && item.orderShow === true
  );

  const renderContent = () => {
    switch (currentView) {
      case "orders":
        return (
          <div>
            <ReUsableItemStock
              items={itemsWithOrders}
              pageIdentifier="orders"
            />
          </div>
        );
      case "unsold":
        return (
          <div>
            <ReUsableItemStock
              items={itemsWithUnsold}
              pageIdentifier="unsold"
            />
          </div>
        );
      case "sold":
        return (
          <div>
            <ReUsableItemStock items={itemsWithSold} pageIdentifier="sold" />
          </div>
        );
      case "outofstock":
        return (
          <div>
            <ReUsableItemStock
              items={itemsOutofStock}
              pageIdentifier="Outof Stock"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="my-4">
        <div>
          <div className="relative flex items-center w-full my-5">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search or type Command ..."
              className="outline-none border border-gray-300 rounded-full px-10 py-2 text-md w-full"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setCurrentView("orders")}>
            <h2 className="font-bold">Orders</h2>
          </button>
          <button onClick={() => setCurrentView("unsold")}>
            <h2 className="font-bold">Unsold Items</h2>
          </button>
          <button onClick={() => setCurrentView("sold")}>
            <h2 className="font-bold">Sold Items</h2>
          </button>
          <button onClick={() => setCurrentView("outofstock")}>
            <h2 className="font-bold">Out of Stock</h2>
          </button>
        </div>
      </div>
      <div className="update-state bg-white min-h-screen rounded-lg">
        <div className="bg-white p-8 rounded-lg">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Order;
