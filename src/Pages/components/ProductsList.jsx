import React from "react";
import sampleData from "../../data/sampleData.json";

const ProductList = () => {
  // Access sample data
  const { ItemsStock } = sampleData;

  return (
    <div>
      <h2>Sold Items</h2>
      <ul>
        {ItemsStock.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Unsold Items</h2>
      <ul>
        {ItemsStock.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <h2>Active Items</h2>
      <ul>
        {ItemsStock.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
