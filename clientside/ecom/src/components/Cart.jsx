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
//         const res = await axios.get(`http://localhost:3000/api/getProduct/${productId}`, {
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

//   const handlePlaceOrder = async () => {
//     if (!cartItem) return;

//     try {
//       const orderData = {
//         productId: cartItem.id,
//         quantity,
//         totalAmount: (cartItem.price * quantity - 0.1 * cartItem.price * quantity + 50).toFixed(2),
//       };

//       const res = await axios.post("http://localhost:3000/api/placeOrder", orderData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (res.status === 200) {
//         alert("Order placed successfully!");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place the order. Please try again.");
//     }
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
//       <div className="placeor">
//           <button className="place-order-button">
//             PLACE ORDER
//           </button></div>
//       <Link to="/" className="continue-shopping">
//         Continue Shopping
//       </Link>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Cart.css";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [bill, setBill] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/getCart", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.status === 200) {
//           setCartItems(res.data.cartItems); 
//         }
//       } catch (err) {
//         console.error("Error fetching cart items:", err);
//         setError("Failed to load cart items. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, [token]);

//   useEffect(() => {
//     const calculateBill = () => {
//       const total = cartItems.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//       );
//       setBill(total);
//     };

//     calculateBill();
//   }, [cartItems]);


//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/getUserAddresses", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.status === 200) {
//           setAddresses(res.data.data); // Assuming your API returns 'addresses'
//         }
//       } catch (err) {
//         console.error("Error fetching addresses:", err);
//         setError("Failed to load addresses. Please try again.");
//       }
//     };

//     fetchAddresses();
//   }, [token]);

//   const incrementQuantity = async (productId) => {
//     try {
//       const res = await axios.put(`http://localhost:3000/api/incrementCartQuantity/${productId}`,{},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.status === 200) {
//         setCartItems((prevItems) =>
//           prevItems.map((item) =>
//             item.productID === productId
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         );
//       }
//     } catch (err) {
//       console.error("Error incrementing quantity:", err);
//     }
//   };

//   const decrementQuantity = async (productId) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:3000/api/decrementCartQuantity/${productId}`,{},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.status === 200) {
//         setCartItems((prevItems) =>
//           prevItems.map((item) =>
//             item.productID === productId && item.quantity > 1
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           )
//         );
//       }
//     } catch (err) {
//       console.error("Error decrementing quantity:", err);
//     }
//   };


//   const deleteItem = async (productId) => {
//     try {
//       const res = await axios.delete(`http://localhost:3000/api/deleteCartItem/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (res.status === 200) {
//         setCartItems(cartItems.filter((item) => item.productID !== productId));
//         alert("Product removed from cart.");
//       }
//     } catch (err) {
//       console.error("Error deleting item:", err);
//       setError("Failed to delete the item. Please try again.");
//     }
//   };


//   const handlePlaceOrder = async () => {
//     if (!selectedAddress) {
//       alert("Please select an address to place the order.");
//       return;
//     }
//     const fullAddress = `${selectedAddress.city}, ${selectedAddress.district}, ${selectedAddress.pincode}, ${selectedAddress.country}`;
//     const orderData = {
//       cartItems,
//       address: fullAddress,
//     };
  
//     try {
//       const res = await axios.post("http://localhost:3000/api/placeOrder", orderData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
  
//       if (res.status === 200) {
//         alert("Order placed successfully!");
//         setCartItems([]);
//         setSelectedAddress(null);
//       }
//     } catch (err) {
//       console.error("Error placing order:", err);
//       setError("Failed to place the order. Please try again.");
//     }
//   };

//   if (loading) {
//     return <div className="cart-content">Loading your cart...</div>;
//   }

//   if (error) {
//     return <div className="cart-content error">{error}</div>;
//   }

//   return (
//     <div className="cart-container"> 
//     <h2>Your Cart</h2>
//       <div className="cart-items-section">
//         <div className="cart-left">
//         {cartItems.length > 0 ? (
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.productID} className="cart-item">
//                 <div className="image">
//                 <img
//                   src={item.thumbnail}
//                   alt={item.name}
//                   className="cart-item-image"
//                 /></div>
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p className="pri">Price: ₹{item.price}</p>
//                   <p className="p">Des:{item.description}</p>
//                   <div className="quantity-controls">
//                     <button
//                       onClick={() => decrementQuantity(item.productID)}
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => incrementQuantity(item.productID)}>
//                       +
//                     </button>
//                   </div>
//                   <div className="del12">
//                   <button
//                     className="delete-button"
//                     onClick={() => deleteItem(item.productID)} >
//                     Remove
//                   </button></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div>No items in your cart yet.</div>
//         )}
//       </div>
//       </div>

//       {cartItems.length > 0 && (
//         <div className="bill-section">
//           <h2>Price Details</h2>
//           <p>Total Amount: ₹{bill}</p>
//           <div className="address-section">
//             <h3>Select Address</h3>
//             {addresses.length > 0 ? (
//               <div className="address-options">
//                 {addresses.map((address, index) => (
//                   <div key={index}>
//                   <label  className="address-option">
//                     <input
//                       type="radio"
//                       name="address"
//                       value={address}
//                       onChange={() => setSelectedAddress(address)}
//                     />
//                     {`${address.city}, ${address.district}, ${address.pincode}, ${address.country}`}
//                   </label>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No addresses found. Please add an address in your profile.</p>
//             )}
//           </div>
//           <button className="place-order-button" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useState, useEffect } from "react";
import axios from "axios";
 import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [bill, setBill] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

    useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getCart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setCartItems(res.data.cartItems); 
        }
      } catch (err) {
        console.error("Error fetching cart items:", err);
        setError("Failed to load cart items. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [token]);

  useEffect(() => {
    const calculateBill = () => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setBill(total);
    };

    calculateBill();
  }, [cartItems]);


  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getUserAddresses", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setAddresses(res.data.data); // Assuming your API returns 'addresses'
        }
      } catch (err) {
        console.error("Error fetching addresses:", err);
        setError("Failed to load addresses. Please try again.");
      }
    };

    fetchAddresses();
  }, [token]);

  const incrementQuantity = async (productId) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/incrementCartQuantity/${productId}`,{},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productID === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }
    } catch (err) {
      console.error("Error incrementing quantity:", err);
    }
  };

  const decrementQuantity = async (productId) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/decrementCartQuantity/${productId}`,{},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productID === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      }
    } catch (err) {
      console.error("Error decrementing quantity:", err);
    }
  };


  const deleteItem = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/deleteCartItem/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        setCartItems(cartItems.filter((item) => item.productID !== productId));
        alert("Product removed from cart.");
      }
    } catch (err) {
      console.error("Error deleting item:", err);
      setError("Failed to delete the item. Please try again.");
    }
  };


  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert("Please select an address to place the order.");
      return;
    }
    const fullAddress = `${selectedAddress.city}, ${selectedAddress.district}, ${selectedAddress.pincode}, ${selectedAddress.country}`;
    const orderData = {
      cartItems,
      address: fullAddress,
    };
  
    try {
      const res = await axios.post("http://localhost:3000/api/placeOrder", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (res.status === 200) {
        alert("Order placed successfully!");
        setCartItems([]);
        setSelectedAddress(null);
      }
    } catch (err) {
      console.error("Error placing order:", err);
      setError("Failed to place the order. Please try again.");
    }
  };

  if (loading) {
    return <div className="cart-content">Loading your cart...</div>;
  }

  if (error) {
    return <div className="cart-content error">{error}</div>;
  }

  return (
    <div className="cart-container">
      <div className="cart-items-section">
        <p className="hea">Your Cart</p>
        <div className="cart-left">
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.productID} className="cart-item">
                <div  className="image">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="caimage"
                /></div>
                <div className="cart-item-details">
                  <h3><b> Name:</b>{item.name}</h3>
                  <p className="des"><b> Des:</b>{item.description}</p>
                  <p className="pri"><b> Price:</b> ₹{item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => decrementQuantity(item.productID)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.productID)}>
                      +
                    </button>
                  </div>
                  <div className="de1">
                  <button
                    className="sbutton">
                    Save For Later
                  </button></div>
                 <div className="de1">
                  <button
                    className="dbutton"
                    onClick={() => deleteItem(item.productID)}
                  >
                    Remove
                  </button></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No items in your cart yet.</div>
        )}
      </div>
    </div>


    {cartItems.length > 0 && (
  <div className="bisection">
    <div className="sbill">
      <p className="h2">Price Details</p>
      <p>
        <b className="bd">Price:</b> <span className="spa">₹{bill}</span>
      </p>
      <p >
        <b className="bd">Discount:</b>{" "}
        <span className="spa2">{bill * 0.1}%</span> {/* Assuming a 10% discount */}
      </p>
      <p >
        <b className="bd">Delivery Charge:</b>{" "}
        <span className="spa2">{bill > 500 ? 0 : 50}</span> {/* Free delivery for orders above ₹500 */}
      </p>
      <p>________________________________________________</p>
      <p>
        <b className="bd1">Total Amount:</b>{" "}
        <span className="spa1">
          {bill - bill * 0.1 + (bill > 500 ? 0 : 50)}
        </span>
      </p>
    </div>
    <div className="address-section">
      <p className="h3">Select Address</p>
      {addresses.length > 0 ? (
        <div className="address-options">
          {addresses.map((address, index) => (
            <div key={index} className="address-item">
              <label className="address-option">
                <input
                  type="radio"
                  name="address"
                  value={index}
                  onChange={() => setSelectedAddress(address)}
                />
                {`${address.city}, ${address.district}, ${address.pincode}, ${address.country}`}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <p>No addresses found. Please add an address in your profile.</p>
      )}
      {selectedAddress && (
        <div className="selected-address">
          <p>
            <b>Selected Address:</b>{" "}
            {`${selectedAddress.city}, ${selectedAddress.district}, ${selectedAddress.pincode}, ${selectedAddress.country}`}
          </p>
        </div>
      )}
    </div>
    <div className="undb">
      <button className="pobutton" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  </div>
)}

      {/* {cartItems.length > 0 && (
        <div className="bisection">
          <div className="sbill">
          <p className="h2">Price Details</p>
          <p>Total Amount: <span className="spa"> ₹{bill}</span></p></div>
          <div className="address-section">
            <p className="h3">Select Address</p>
            {addresses.length > 0 ? (
              <div className="address-options">
                {addresses.map((address, index) => (
                  <div key={index}>
                  <label  className="address-option">
                    <input
                      type="radio"
                      name="address"
                      value={address}
                      onChange={() => setSelectedAddress(address)}
                    />
                    {`${address.city}, ${address.district}, ${address.pincode}, ${address.country}`}
                  </label>
                  </div>
                ))}
              </div>
            ) : (
              <p>No addresses found. Please add an address in your profile.</p>
            )}
          </div>
          <div className="undb">
      <button className="pobutton" onClick={handlePlaceOrder}>
            Place Order
          </button></div>
        </div>
      )} */}

    </div>
  );
};

export default Cart;