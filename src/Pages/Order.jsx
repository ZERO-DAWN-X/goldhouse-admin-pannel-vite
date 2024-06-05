import React, { useState } from "react";
import sampleData from "../data/sampleData.json";
import ReUsableItemStock from "./components/Stock/ReUsableItemStock";

function Order() {
  const [currentView, setCurrentView] = useState("Orders");

  const { ItemsStock } = sampleData;

  const itemsWithUnsold = ItemsStock.filter((item) => item.status == "unsold");
  const itemsWithSold = ItemsStock.filter((item) => item.status === "sold");
  const itemsWithStock = ItemsStock.filter((item) => item.stock > 0);
  const itemsWithOrders = ItemsStock.filter((item) => item.orders > 0);

  const renderContent = () => {
    switch (currentView) {
      case "Unsold Items":
        return (
          <div>
            <ReUsableItemStock
              items={itemsWithUnsold}
              pageIdentifier="unsold"
            />
          </div>
        );
      case "Sold Items":
        return (
          <div>
            <ReUsableItemStock items={itemsWithSold} pageIdentifier="sold" />
          </div>
        );
      case "In Stock":
        return (
          <div>
            <ReUsableItemStock items={itemsWithStock} pageIdentifier="stock" />
          </div>
        );
      default:
        return (
          <div>
            <ReUsableItemStock
              items={itemsWithOrders}
              pageIdentifier="orders"
            />
          </div>
        );
    }
  };

  return (
    <div>
      <div>
        <div className="my-4">
          <div className="flex gap-3">
            <button onClick={() => setCurrentView("Orders")}>
              <h2 className="font-bold">Orders</h2>
            </button>
            <button onClick={() => setCurrentView("Unsold Items")}>
              <h2 className="font-bold">UnSold Items</h2>
            </button>
            <button onClick={() => setCurrentView("Sold Items")}>
              <h2 className="font-bold">Sold Items</h2>
            </button>
            <button onClick={() => setCurrentView("In Stock")}>
              <h2 className="font-bold">In Stock</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="update-state bg-white min-h-screen rounded-lg">
        <div className="bg-white p-8 rounded-lg">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Order;
