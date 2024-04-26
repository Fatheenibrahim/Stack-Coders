import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/PatientLogin.css';

function Patientlogin() {
  const [uniqueid, setuniqueid] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/patientlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uniqueid, password }),
      });
      const data = await response.text();
      if (data === 'yes') {
        console.log('Login Success');
        navigate('/Home');
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
        <img id='doctorImage' src='https://img.freepik.com/free-vector/doctor-nurse-study-discuss-xray-patient-lung-image-man-pulmonologist-woman-therapist-assistant-examine-fluorography-result-disease-determination_575670-456.jpg?t=st=1714072274~exp=1714075874~hmac=c113a560eca8e6efc605aeef7f7647d765ca3994e5820d4d5ec50dbede677275&w=826' alt="Doctor" className="doctor-image" />
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Patient Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Unique ID"
                value={uniqueid}
                onChange={(e) => setuniqueid(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
      {/* <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Register now to access our services.</p>
            <button className="btn transparent" onClick={() => navigate('/register')}>
              Sign Up
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Patientlogin;
