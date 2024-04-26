import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Doctorlogin() {
  const [uniqueid, setuniqueid] = useState('')
  const [password, setpassword] = useState('')
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
        setError('Invalid Email or Password');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Doctor Login</h1>
      <form onSubmit={handleLogin}>
        <label for="userid">Unique ID</label>
        <input type="text" required id="userid" value={uniqueid} onChange={(e) => setuniqueid(e.target.value)} /><br></br>
        <label for="password">Password</label>
        <input type="password" required id="password" value={password} onChange={(e) => setpassword(e.target.value)} /><br></br>
        <button type="submit">Login</button>
        {error && <p style={{ marginBottom: '1%', marginTop: '1%', color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}

export default Doctorlogin