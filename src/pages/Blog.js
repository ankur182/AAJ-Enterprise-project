// Blog.js
import React from 'react';
import '../styles/Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h2>Our Blogs</h2>
      <div className="blog-item">
        <img src={`${process.env.PUBLIC_URL}/images/blogs/sample-blog-image.png`} alt="Sample Blog" />
        <h3>Sample Blog Title</h3>
        <p>This is a sample blog post. Learn more about our insights and updates in logistics, warehousing, and supply chain management.</p>
      </div>
      {/* Add more blog items here */}
    </div>
  );
}

export default Blog;
