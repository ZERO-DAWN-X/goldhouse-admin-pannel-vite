import React from "react";
import sampleData from "../../data/sampleData.json";

const ProductList = () => {
  // Access sample data
  const { soldItems, unsoldItems, activeItems } = sampleData;

  return (
    <div>
      <h2>Sold Items</h2>
      <ul>
        {soldItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Unsold Items</h2>
      <ul>
        {unsoldItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Active Items</h2>
      <ul>
        {activeItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
