// import React from "react";

// const Buyer = () => {
//   return (
//     <div className="wishlist-content">
//       <h2>Buyer page</h2>
    
//     </div>
//   );
// };

// export default Buyer;


import React, { useState } from "react";

const BuyerProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferences: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer Profile:", profile);
    // Save the profile (e.g., send to a backend or localStorage)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={profile.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Preferences:</label>
        <select
          name="preferences"
          value={profile.preferences}
          onChange={(e) =>
            setProfile({
              ...profile,
              preferences: Array.from(e.target.selectedOptions, (option) => option.value),
            })
          }
          multiple
        >
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default BuyerProfileForm;