import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>About TechBlog</h1>
        <p>
          TechBlog is a modern technology blog where developers can learn
          programming, web development, and emerging technologies through simple
          and practical tutorials.
        </p>
      </div>

      {/* MISSION */}
      <div className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to help developers understand modern technologies like
          JavaScript, React, Python, Artificial Intelligence, and Machine
          Learning through easy-to-understand articles and real-world examples.
        </p>

        <p>
          TechBlog focuses on practical learning, project building, and sharing
          industry knowledge that helps developers grow their careers.
        </p>
      </div>

      {/* FEATURES */}
      <div className="about-features">
        <div className="feature-card">
          <h3>📚 Tutorials</h3>
          <p>Step-by-step guides for modern programming and development.</p>
        </div>

        <div className="feature-card">
          <h3>💡 Developer Tips</h3>
          <p>Learn professional coding practices and development workflows.</p>
        </div>

        <div className="feature-card">
          <h3>🚀 Latest Technologies</h3>
          <p>Explore AI, Machine Learning, and modern software tools.</p>
        </div>
      </div>

      {/* AUTHOR SECTION */}
      <div className="author-section">
        <h2>About the Creator</h2>

        <div className="author-card">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Author"
            className="author-img"
          />

          <div className="author-info">
            <h3>Bijay Chauhan</h3>
            <p>Frontend Developer & Tech Blogger</p>

            <p>
              Passionate about building modern web applications and sharing
              programming knowledge with the developer community.
            </p>

            <p className="mentor">
              Inspired by learning resources and mentorship from
              <b> Abinav Mishra</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
