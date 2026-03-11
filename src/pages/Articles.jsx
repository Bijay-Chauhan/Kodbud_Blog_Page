import React from "react";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import "./Articles.css";

function Articles() {
  return (
    <div className="articles-container">
      {/* Page Header */}
      <div className="articles-header">
        <h1>All Articles</h1>
      </div>

      {/* Blog Grid */}
      <div className="articles-grid">
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
