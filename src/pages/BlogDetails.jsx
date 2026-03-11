import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";
import "./BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const post = blogData.find((p) => p.id === parseInt(id));

  // Similar posts (same category but different id)
  const similarPosts = blogData.filter(
    (p) => p.category === post.category && p.id !== post.id,
  );

  return (
    <div className="blog-details">
      <Link to="/" className="back-btn">
        ← Back to Articles
      </Link>

      {/* Article Section */}
      <div className="article">
        <span className="article-category">{post.category}</span>

        <h1 className="article-title">{post.title}</h1>

        <p className="article-meta">
          {post.author} • {post.date}
        </p>

        <img src={post.image} alt={post.title} className="article-image" />

        <div className="article-content">
          <p>
            This article explains the concept of <b>{post.title}</b> in a simple
            and practical way. Understanding this topic helps developers build
            modern scalable applications.
          </p>

          <p>
            In real projects these techniques are used to improve performance,
            maintainability, and developer productivity.
          </p>

          <h2>Key Concepts</h2>

          <ul>
            <li>Core fundamentals of the topic</li>
            <li>Real-world examples</li>
            <li>Best practices for developers</li>
          </ul>

          <p>
            Continue exploring this concept with practice and real projects to
            master it completely.
          </p>
        </div>
      </div>

      {/* Similar Articles Section */}
      <div className="similar-posts">
        <h2>Related Articles</h2>

        <div className="similar-grid">
          {similarPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
