import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css"; // Import the SCSS file

const Home = () => {
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllOtherProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/getAllOtherProducts", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setProducts(res.data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchAllOtherProducts();
  }, [token]);

  return (
    <div className="home-page">
      <h2>All Products</h2>
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.thumbnail} alt={product.name} className="product-thumbnail" />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Home;