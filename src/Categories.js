// Importing Helpers
import React from "react";

// Importing Components

// Functional Components
const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>
    </div>
  );
};

// Default Export
export default Categories;
