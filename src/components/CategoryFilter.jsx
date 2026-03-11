import React from "react";

function CategoryFilter({ setCategory }) {
  return (
    <div className="categories">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("JavaScript")}>JavaScript</button>
      <button onClick={() => setCategory("React")}>React</button>
      <button onClick={() => setCategory("CSS")}>CSS</button>
      <button onClick={() => setCategory("Java")}>Java</button>
      <button onClick={() => setCategory("Python")}>Python</button>
      <button onClick={() => setCategory("AI")}>AI</button>
    </div>
  );
}

export default CategoryFilter;
