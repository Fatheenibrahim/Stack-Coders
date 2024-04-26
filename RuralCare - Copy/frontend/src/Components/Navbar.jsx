import React from 'react'
import '../Components/Components.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav1'>
            <div className='nav2 nav3'>
                <span style={{color:'rgb(73,162,331)',marginLeft:'15%'}}>Rural</span><span style={{color: 'rgb(234,80,73)'}}>Care</span>
            </div>
            <div className='nav2 nav4'>
                <Link to="/Home">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <a href="">Video Call</a>
                <a href="">Our Models</a>
                <a href="">Message Us</a>
                <a href="" id="navbar">Contact Us</a>
            </div>
        </div>
    )
}

export default Navbar