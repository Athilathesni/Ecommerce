// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     accType: 'nil',
//     pwd: '',
//     cpwd: '',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({...formData,[e.target.name]: e.target.value,});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     //Check if the account type has been changed
//     if (formData.accType === 'nil') {
//       alert('Please select a valid account type.');
//       return;
//     }

//     if (formData.pwd !== formData.cpwd) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3001/api/adduser', formData);

//       // Handle success
//       if (response.status === 201) {
//         setSuccess('Registration successful!');
//         setError('');
//         navigate('/login')
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong. Please try again.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="register-page">
//       <h2>Register</h2>
//       {error && <p className="error-message">{error}</p>}
//       {success && <p className="success-message">{success}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//         </label>
//         <label>
//           Account Type:
//           <select name="accType" value={formData.accType} onChange={handleChange}>
//             <option value="nil">Select Account Type</option>
//             <option value="Buyer">Buyer</option>
//             <option value="Seller">Seller</option>
//           </select>
//         </label>
//         <label>
//           Password:
//           <input type="password" name="pwd" value={formData.pwd} onChange={handleChange} required />
//         </label>
//         <label>
//           Confirm Password:
//           <input type="password" name="cpwd" value={formData.cpwd} onChange={handleChange} required />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from 'react';
import axios from 'axios';
import '../css/Register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    accType: 'nil',
    pwd: '',
    cpwd: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check if the account type has been changed
    if (formData.accType === 'nil') {
      alert('Please select a valid account type.');
      return;
    }

    if (formData.pwd !== formData.cpwd) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/adduser', formData);

      // Handle success
      if (response.status === 201) {
        setSuccess('Registration successful!');
        setError('');
        navigate('/login')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Account Type:
          <select name="accType" value={formData.accType} onChange={handleChange}>
            <option value="nil">Select Account Type</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
        </label>
        <label>
          Password:
          <input type="password" name="pwd" value={formData.pwd} onChange={handleChange} required />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="cpwd" value={formData.cpwd} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;