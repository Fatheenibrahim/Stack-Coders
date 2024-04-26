import React from 'react';
import "../Styles/Style.css"
import Navbar from '../Components/Navbar';

function AboutUs(){
  return(
    <div>
      <Navbar/>
      <div class="AboutUs">
        <h1 class="Heading-AUP">About Us</h1>
        <img class="img-AUP" src={"https://mecas.in/wp-content/uploads/2022/01/s4.jpg"} alt="My Image" />
        <h1 class="Heading-AUP">Our Mission</h1>
        <h2 >"Empowering Health, <span class="Blue-AUP">Enriching Lives</span>: Your Wellness, <span class="Red-AUP">Our Priority!</span>"</h2>
        <p class="p-AUP">At RuralCare, we're dedicated to nurturing communities through compassionate care and innovative solutions. Our commitment extends beyond healing; it's about fostering well-being and vitality for every individual we serve. With a blend of expertise and empathy, we're here to support your journey towards a healthier, happier life. Welcome to a world where your health is our heartbeat, and your wellness is our mission.</p>
        <h1 class="Heading-AUP">Our Achievements</h1>

        <div class="Achievements-AUP">
          <div class="SubAchievements-AUP">
            <p class="Subpara">Users</p>
            <h2 class="Blue-AUP Subh2">1 Billion+ </h2>
            <p class="Subpara">Across the globe</p>
          </div>
          <div class="SubAchievements-AUP">
            <p class="Subpara">Doctors</p>
            <h2 class="Blue-AUP Subh2">1000+</h2>
            <p class="Subpara">Specialists</p>
          </div>
          <div class="SubAchievements-AUP">
            <p class="Subpara">Tie Up With</p>
            <h2 class="Blue-AUP Subh2">100+</h2>
            <p class="Subpara">Medical Products</p>
          </div>
          <div class="SubAchievements-AUP">
            <p class="Subpara">Daily Users</p>
            <h2 class="Blue-AUP Subh2">1 Millon+</h2>
            <p class="Subpara">patients around the world</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs