import React, { useState } from "react";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = blogData.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || post.category === category)
    );
  });

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Latest Articles</h1>
      </section>

      {/* FILTER SECTION */}
      <div className="filters">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter setCategory={setCategory} />
      </div>

      {/* BLOG GRID */}
      <div className="blog-grid">
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <h3>No articles found</h3>
            <p>Try searching for another keyword.</p>
          </div>
        ) : (
          filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}

export default Home;
