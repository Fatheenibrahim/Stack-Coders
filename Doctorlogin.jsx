import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/DoctorLogin.css'; 
// import doctorImage from '../image/doctorImage' // Import your doctor image

function DoctorLogin() {
  const [uniqueid, setUniqueid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/doctorlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uniqueid, password }),
      });

      const data = await response.text();

      if (data === 'yes') {
        console.log('Login Success');
        navigate('/Dashboard');
      } else {
        setError('Invalid Unique ID or Password');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <img id='doctorImage' src='https://img.freepik.com/free-vector/doctor_1196-269.jpg?t=st=1714070230~exp=1714073830~hmac=9081965c25d9aceb83f6b229755f8fb6f702ed929d3a0a8b6b8db10c1feb95a3&w=900' alt="Doctor" className="doctor-image" />
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Doctor Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Unique ID"
                value={uniqueid}
                onChange={(e) => setUniqueid(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn solid">Login</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
