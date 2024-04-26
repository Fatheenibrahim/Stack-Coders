import React from 'react';
import "C:/Users/fatib/OneDrive/Documents/RuralCare/frontend/src/Components/AboutUs(2).css"

function AboutUs(){
  return(
    <div>
      <div class="AboutUs">
        <h1 id="AboutUs_id" style={{ color: 'rgb(234,80,73)', fontWeight: '600', marginBottom: '0%', fontSize: '40px' }}class="Heading">About Us</h1><br></br>
        <br></br><br></br>
        <img class="Image" src={"https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg?w=1380&t=st=1714055300~exp=1714055900~hmac=929e4aba5e85b90bfb191b898a46b5e6da45de9e6fde3299887990d5edfc1838"} alt="My Image" />
        <h1 style={{ color: 'rgb(234,80,73)', fontWeight: '600', marginBottom: '0%', fontSize: '40px' }}class="Heading">Our Mission</h1>
        <br></br>
        <h2 >"Empowering Health, <span class="Blue">Enriching Lives</span>: Your Wellness, <span class="Red">Our Priority!</span>"</h2><br></br>
        <p class="Description">       At RuralCare, we're dedicated to nurturing communities through compassionate care and innovative solutions. Our commitment extends beyond healing; it's about fostering well-being and vitality for every individual we serve. With a blend of expertise and empathy, we're here to support your journey towards a healthier, happier life. Welcome to a world where your health is our heartbeat, and your wellness is our mission.</p><br></br>
        <h1 style={{ color: 'rgb(234,80,73)', fontWeight: '600', marginBottom: '0%', fontSize: '40px' }}class="Heading">Our Achievements</h1><br></br>

        <div className='last-box'>
        <div class="Achievements">
          <div class="SubAchievements">
            <p class="Subpara">Users</p>
            <h2 class="Blue Subh2">1 Billion+ </h2>
            <p class="Subpara">Across the globe</p>
          </div>
          <div class="SubAchievements">
            <p class="Subpara">Doctors</p>
            <h2 class="Blue Subh2">1000+</h2>
            <p class="Subpara">Specialists</p>
          </div>
          <div class="SubAchievements">
            <p class="Subpara">Tie Up With</p>
            <h2 class="Blue Subh2">100+</h2>
            <p class="Subpara">Medical Products</p>
          </div>
          <div class="SubAchievements">
            <p class="Subpara">Daily Users</p>
            <h2 class="Blue Subh2">1 Millon+</h2>
            <p class="Subpara">patients around the world</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
