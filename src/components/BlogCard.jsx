import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      {/* Image Section */}
      <div className="card-image">
        <img src={post.image} alt={post.title} loading="lazy" />

        {/* Category Badge */}
        <span className="category-badge">{post.category}</span>
      </div>

      {/* Content Section */}
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>

        <p className="meta">
          {post.author} • {post.date}
        </p>

        <p className="card-description">{post.description}</p>

        <Link to={`/blog/${post.id}`} className="read-btn">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
