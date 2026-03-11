import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Articles from "./pages/Articles";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/articles" element={<Articles />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
