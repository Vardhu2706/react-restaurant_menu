// Importing Helpers
import React, { useState } from "react";

// Importing Components/ Files
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// Getting unique categories using Set
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

// Functional Component
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

// Default Export
export default App;
