import React from "react";
import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;
