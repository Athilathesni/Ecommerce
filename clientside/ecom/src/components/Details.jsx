// import React, { useState, useEffect } from "react";
// import { Link,useParams } from "react-router-dom";
// import axios from "axios";
// import "./Details.css"

// const Details = () => {
//   const { productId } = useParams();
//   const token = localStorage.getItem("token");
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/api/getProduct/${productId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.status === 200) {
//           setProduct(res.data.product);
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     fetchProductDetails();
//   }, [productId, token]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="prod">
//       <div className="produ">
        
//         <Link to={`/products/${product._id}`} key={product._id} className="proit">
//         <div className="imagese">
//           <img src={product.thumbnail} alt={product.name} className="maiim" />
//           <div className="thumbnail-section">
//           </div>
//         </div></Link>

       
//         <div className="dsec">
//           <p className="pname">{product.name}</p>
//           <p className="ppric">₹{product.price}</p>
//           <p className="pcat">Category: {product.category}</p>
//           <p className="pcat">Description: {product.description}</p>
//           <p className="pcat">Available Quantity: {product.quantity}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";

const Details = () => {
  const { productId } = useParams();
  const token = localStorage.getItem("token");
  const [product, setProduct] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false); // Wishlist state

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/getProduct/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setProduct(res.data.product);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId, token]);

  const handleWishlistToggle = () => {
    setIsWishlist(!isWishlist);
    // Optionally, send the updated wishlist status to the backend
    // axios.post('http://localhost:3000/api/wishlist', { productId, isWishlist: !isWishlist }, { headers: { Authorization: `Bearer ${token}` } });
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="prod">
      <div className="produ">
      <div className="wishlist-container">
            {/* Wishlist Icon */}
          <button 
              className={`wish-icon ${isWishlist ? "active" : ""}`} 
              onClick={handleWishlistToggle}
            >
              {isWishlist ? "❤️" : "🤍"}
            </button> 
            </div>
        <Link to={`/products/${product._id}`} key={product._id} className="proit">
          <div className="imagese">
            <img src={product.thumbnail} alt={product.name} className="maiim" />
            <div className="thumbnail-section"></div>
          </div>
        </Link>

        <div className="dsec">
            <p className="pname">{product.name}</p>
          <p className="ppric">₹{product.price}</p>
          <p className="pcat">Category: {product.category}</p>
          <p className="pcat">Description: {product.description}</p>
          <p className="pcat">Available Quantity: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
