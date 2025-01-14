// import React from "react";

// const Cart = () => {
//   return (
//     <div className="cart-content">
//       <h2>Your Cart</h2>
//       {/* Cart items would be dynamically rendered here */}
//       <div>No items in your cart yet.</div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import "./Cart.css";

// const Cart = () => {
//   const { productId } = useParams();
//   const token = localStorage.getItem("token");
//   const [cartItem, setCartItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const res = await axios.get(`http://localhost:3001/api/getProduct/${productId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.status === 200) {
//           setCartItem(res.data.product);
//           setQuantity(1); // Initialize quantity to 1
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     fetchProductDetails();
//   }, [productId, token]);

//   const handleIncrement = () => {
//     if (cartItem && quantity < cartItem.quantity) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleRemove = () => {
//     setCartItem(null);
//   };

//   const handleSaveForLater = () => {
//     console.log("Saved for later:", cartItem);
//   };

//   if (!cartItem) {
//     return <p>Your cart is empty or loading...</p>;
//   }

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       <div className="cart-item">
//         <div className="item-image">
//           <img src={cartItem.thumbnail} alt={cartItem.name} className="item-thumbnail" />
//         </div>
//         <div className="item-details">
//           <p className="item-name">{cartItem.name}</p>
//           <p className="item-price">Price: ₹{cartItem.price}</p>
//           <p className="item-category">Category: {cartItem.category}</p>
//           <p className="item-description">Description: {cartItem.description}</p>
//           <div className="quantity-controls">
//             <button onClick={handleDecrement} className="quantity-button" disabled={quantity === 1}>
//               -
//             </button>
//             <span className="quantity-display">{quantity}</span>
//             <button onClick={handleIncrement} className="quantity-button" disabled={quantity === cartItem.quantity}>
//               +
//             </button>
//           </div>
//           <p className="total-price">Total: ₹{(cartItem.price * quantity).toFixed(2)}</p>
//           <div className="cart-actions">
//             <button onClick={handleSaveForLater} className="save-button">
//               Save for Later
//             </button>
//             <button onClick={handleRemove} className="remove-button">
//               Remove
//             </button>
//           </div>
//         </div>
//       </div>
//       <Link to="/" className="continue-shopping">
//         Continue Shopping
//       </Link>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import "./Cart.css";

// const Cart = () => {
//   const { productId } = useParams();
//   const token = localStorage.getItem("token");
//   const [cartItem, setCartItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const res = await axios.get(`http://localhost:3001/api/getProduct/${productId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.status === 200) {
//           setCartItem(res.data.product);
//           setQuantity(1); // Initialize quantity to 1
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     fetchProductDetails();
//   }, [productId, token]);

//   const handleIncrement = () => {
//     if (cartItem && quantity < cartItem.quantity) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleRemove = () => {
//     setCartItem(null);
//   };

//   const handleSaveForLater = () => {
//     console.log("Saved for later:", cartItem);
//   };

//   if (!cartItem) {
//     return <p>Your cart is empty or loading...</p>;
//   }

//   const discount = 0.1 * cartItem.price * quantity; // Assuming 10% discount
//   const deliveryCharge = 50; // Example delivery charge

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       <div className="cart-layout">
//         {/* Left Section */}
//         <div className="cart-left">
//           <div className="cart-item">
//             <div className="item-image">
//               <img src={cartItem.thumbnail} alt={cartItem.name} className="item-thumbnail" />
//             </div>
//             <div className="item-details">
//               <p className="item-name"><b> Name:</b>{cartItem.name}</p>
//               <p className="item-description"><b> Des:</b>{cartItem.description}</p>
//               <p className="item-prices"><b> Price:</b>₹{cartItem.price}</p>
//               <div className="quantity-controls">
//                 <button onClick={handleDecrement} className="quantity-button" disabled={quantity === 1}>
//                   -
//                 </button>
//                 <span className="quantity-display">{quantity}</span>
//                 <button onClick={handleIncrement} className="quantity-button" disabled={quantity === cartItem.quantity}>
//                   +
//                 </button>
//               </div>
//               <div className="cart-actions">
//                 <button onClick={handleSaveForLater} className="save-button">
//                   Save for Later
//                 </button>
//                 <button onClick={handleRemove} className="remove-button">
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="cart-right">
//           <div className="price-details">
//             <h3>Price Details</h3>
//             <div className="price-row">
//               <span>Price ({quantity} item{quantity > 1 ? "s" : ""})</span>
//               <span>₹{(cartItem.price * quantity).toFixed(2)}</span>
//             </div>
//             <div className="price-row">
//               <span>Discount</span>
//               <span>-₹{discount.toFixed(2)}</span>
//             </div>
//             <div className="price-row">
//               <span>Delivery Charges</span>
//               <span>₹{deliveryCharge}</span>
//             </div>
//             <hr />
//             <div className="price-row total">
//               <span>Total Amount</span>
//               <span>₹{(cartItem.price * quantity - discount + deliveryCharge).toFixed(2)}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Link to="/" className="continue-shopping">
//         Continue Shopping
//       </Link>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

const Cart = () => {
  const { productId } = useParams();
  const token = localStorage.getItem("token");
  const [cartItem, setCartItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3001/api/getProduct/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setCartItem(res.data.product);
          setQuantity(1); // Initialize quantity to 1
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId, token]);

  const handleIncrement = () => {
    if (cartItem && quantity < cartItem.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemove = () => {
    setCartItem(null);
  };

  const handleSaveForLater = () => {
    console.log("Saved for later:", cartItem);
  };

  const handlePlaceOrder = async () => {
    if (!cartItem) return;

    try {
      const orderData = {
        productId: cartItem.id,
        quantity,
        totalAmount: (cartItem.price * quantity - 0.1 * cartItem.price * quantity + 50).toFixed(2),
      };

      const res = await axios.post("http://localhost:3001/api/placeOrder", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        alert("Order placed successfully!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  if (!cartItem) {
    return <p>Your cart is empty or loading...</p>;
  }

  const discount = 0.1 * cartItem.price * quantity; // Assuming 10% discount
  const deliveryCharge = 50; // Example delivery charge

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-layout">
        {/* Left Section */}
        <div className="cart-left">
          <div className="cart-item">
            <div className="item-image">
              <img src={cartItem.thumbnail} alt={cartItem.name} className="item-thumbnail" />
            </div>
            <div className="item-details">
              <p className="item-name"><b> Name:</b>{cartItem.name}</p>
              <p className="item-description"><b> Des:</b>{cartItem.description}</p>
              <p className="item-prices"><b> Price:</b>₹{cartItem.price}</p>
              <div className="quantity-controls">
                <button onClick={handleDecrement} className="quantity-button" disabled={quantity === 1}>
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button onClick={handleIncrement} className="quantity-button" disabled={quantity === cartItem.quantity}>
                  +
                </button>
              </div>
              <div className="cart-actions">
                <button onClick={handleSaveForLater} className="save-button">
                  Save for Later
                </button>
                <button onClick={handleRemove} className="remove-button">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="cart-right">
          <div className="price-details">
            <h3>Price Details</h3>
            <div className="price-row">
              <span>Price ({quantity} item{quantity > 1 ? "s" : ""})</span>
              <span>₹{(cartItem.price * quantity).toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Delivery Charges</span>
              <span>₹{deliveryCharge}</span>
            </div>
            <hr />
            <div className="price-row total">
              <span>Total Amount</span>
              <span>₹{(cartItem.price * quantity - discount + deliveryCharge).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="placeor">
          <button className="place-order-button">
            PLACE ORDER
          </button></div>
      <Link to="/" className="continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;
