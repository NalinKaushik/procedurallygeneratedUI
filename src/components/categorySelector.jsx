import React from "react";

const categories = ["Array", "String", "System Design"];

function CategorySelector({ onSelectCategory }) {
  return (
    <div className="category-selector">
      <h1>Interview Question Generator</h1>
      
      <div className="category-grid">
        {categories.map((cat) => (
          <button
            key={cat}
            className="category-btn"
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <br />
      <span>Note : This is a Procedurally generated website</span>

    </div>
  );
}

export default CategorySelector;
