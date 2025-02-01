import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import offerim from "../assets/offers.webp"
import skin from "../assets/skin1.jpg"
import hair from "../assets/hair.jpg"
import nail from "../assets/nail.webp"
import oral from "../assets/oral.jpeg"
import perfume from "../assets/perf.webp"
import makeup from "../assets/makeup.jpg"
import haircolor from "../assets/hcolor.webp"
import brush from "../assets/brush.jpeg"
import trimmer from "../assets/trimmer.jpg"
import slid from "../assets/slidf.webp"
import "./Home.css"


const categories = [
  "Face Wash",
  "Skin care",
  "Haircare",
  "Nails",
  "Fragrance",
  "Moisturizer",
  "Hair removal",
  "Makeup",
  "Foundation",
];

const Home = ({name}) => {
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(200000);


  useEffect(() => {
    const fetchAllOtherProducts = async () => {
      if (!token) {
        const res = await axios.get("http://localhost:3004/api/getAllProducts");

        if (res.status === 200) {
          setProducts(res.data.products);
        }
      } else {
        try {
          const res = await axios.get("http://localhost:3004/api/getAllOtherProducts", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (res.status === 200) {
            setProducts(res.data.products);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          localStorage.removeItem("token");
          location.reload();
        }
      }
    };

    fetchAllOtherProducts();
  }, [token]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesName =
      product.name?.toLowerCase().includes(name?.toLowerCase() || "");
    const matchesPrice = product.price <= priceRange; // Filter by price
    return matchesCategory && matchesName && matchesPrice;
  });

  // useEffect(() => {
  //   const fetchAllOtherProducts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/getAllOtherProducts", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       if (res.status === 200) {
  //         setProducts(res.data.products);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchAllOtherProducts();
  // }, [token]);

  return (
    <div className="home-page">
      <div className="flipm">
          <img src={offerim} alt="" className="imgoff"/>
           <p className="offerp">Top Offer</p>
           <img src={skin} alt="" className="imgoff" />
           <p className="skinp">Skin products</p>
           <img src={hair} alt="" className="imgoff" />
           <p className="skinp">Hair and scalp</p>
           <img src={nail} alt="" className="imgoff" />
           <p className="skinp">Nail and cuticle</p>
           <img src={oral} alt="" className="imgoff" />
           <p className="skinp">Oral hygiene</p>
           <img src={perfume} alt="" className="imgoff" />
           <p className="offerp">Perfumes</p>
           <img src={makeup} alt="" className="imgoff" />
           <p className="offerp">Make-up</p>
           <img src={haircolor} alt="" className="imgoff" />
           <p className="skinp">Hair colouring</p>
           <img src={brush} alt="" className="imgoff" />
           <p className="skinp">makeup brush</p>
           <img src={trimmer} alt="" className="imgoff" />
           <p className="skinp">Wahl Trimmer</p>
      </div>
      <div className="flipsho">
        <img src={slid} alt="" className="perfume" />
      </div>



      <h2>All Products</h2>

      {/* Category Filter */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        {selectedCategory && (
          <button
            className="clear-filter-button"
            onClick={() => setSelectedCategory("")}
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Price Filter Slider */}
      <div className="price-filter">
        <label>Max Price: ₹{priceRange}</label>
        <input
          type="range"
          min="0"
          max="200000"
          step="500"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {products
          .filter((i)=>i.name?.toLowerCase().includes(name?.toLowerCase() || ""))
          .map((product) => (
            <Link to={`/details/${product._id}`} key={product._id} className="proit">
              <img src={product.thumbnail} alt={product.name} className="pthu" />
              <div className="np">
              <span className="nam">{product.name}</span>
              <span className="price">From ₹{product.price}</span></div>
            </Link>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Home