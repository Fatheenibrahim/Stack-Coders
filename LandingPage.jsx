import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/LandingPage.css'; // Import your CSS file for styling

function LandingPage() {
  return (
    <div className="container">
      {/* <video loop autoPlay muted id="myVideo">
        <source src={'C:/Users/fatib/OneDrive/Documents/RuralCare/frontend/src/mage/istockphoto-1463867215-640_adpp_is.mp4'} type="video/mp4" />
      </video> */}
      <img src='https://img.freepik.com/free-vector/three-doctors-stethoscope_1308-71952.jpg?t=st=1714073691~exp=1714077291~hmac=a089f351aa86222af7ecb3f782347f305abf07ebb7af45fac085ab19451f9c58&w=1060'></img>
      <br></br><br></br>
      <h1 className="title">Select an option</h1><br></br>
      <Link to="/patientlogin" className="link">Login as Patient</Link>
      <Link to="/doctorlogin" className="link">Login as Doctor</Link>
    </div>
  );
}

export default LandingPage;
