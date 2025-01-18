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

const Home = ({name}) => {
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllOtherProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getAllOtherProducts", {
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

      {products.length > 0 ? (
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