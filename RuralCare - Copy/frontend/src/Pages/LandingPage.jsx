import React from 'react'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <h1> Select one options</h1>
        <Link to="/patientlogin">Login as Patient</Link><br></br>
        <Link to="/doctorlogin">Login as Doctor</Link>
    </div>
  )
}

export default LandingPage