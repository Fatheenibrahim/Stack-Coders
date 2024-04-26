import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const AboutUsOnClick = () => {
        // Navigate to the "about" route
        navigate('/AboutUs');
    };
    const navigate1 = useNavigate();
    const VideoCallOnClick = () => {
        navigate1('/VideoCall')
    }

    return (
        <div className='nav1'>
            <div className='nav2 nav3'>
                <span style={{ color: 'rgb(73, 162, 331)', marginLeft: '15%' }}>Rural</span>
                <span style={{ color: 'rgb(234, 80, 73)' }}>Care</span>
            </div>
            <div className='nav2 nav4'>
                <a href="">Home</a>
                <a onClick={VideoCallOnClick} href="">Video Call</a>
                <a onClick={AboutUsOnClick} href="">About us</a>
                {/* <a href="">Our Models</a> */}
                <a href="">Message Us</a>
                <a href="" id="navbar">Contact Us</a>
            </div>
        </div>
    );
}

export default Navbar;
