import React from 'react'
import Navbar from '../Components/Navbar'
import doctor from '../image/ruralcare.png'
import doctor1 from '../image/doctor.jpg'
import p1 from '../image/p1.jpg'
import p2 from '../image/p3.png'
import p3 from '../image/p2.png'
import p4 from '../image/p4.png'
import Footer from '../Components/Footer'

import '../Styles/Style.css'
import Carousel from './Carousel'
import SelectComponent from './SelectComponent'
// import SelectComponent from './SelectComponent[1]'

function Home() {
    return (
        <div>
            <Navbar />

            <div className='home1'>
                <div className='home2'>
                    <div className='home3' >
                        <div className='home4'>
                            <p style={{ color: 'rgb(234,80,73)', fontWeight: '600', marginBottom: '0%', fontSize: '17px' }}>WELCOME TO AROGYAM-KIOSK</p>
                            <h1>A dedicated <span style={{ color: 'rgb(73,162,331)' }}>doctor you</span> can <span style={{ color: 'rgb(234,80,73)' }}>trust !</span></h1>
                            <p>Welcome to RuralCare, where innovative healthcare meets the heart of rural India. Our mission is to provide accessible and quality healthcare solutions to remote communities. Explore our services and join us in bridging the gap in healthcare access.</p>
                            <a href='#home_5'><button>Explore</button></a>
                        </div>
                    </div>
                    <div className='home3' style={{ justifyContent: 'end' }}>
                        <img src={doctor} alt='Doctor' />
                    </div>
                </div>
            </div>


            {/* <div className='home25'>
                <Carousel></Carousel>
            </div> */}
            <div>
                <Carousel></Carousel>
            </div>
            <br></br><br></br>


            <div className='home5' id='home_5'>

                {/* <h2>See What Our Model <span style={{ color: 'rgb(73,162,331)' }}>Offers</span> & What We <span style={{ color: 'rgb(234,80,73)' }}>Provide</span></h2> */}
                <h2>What We <span style={{ color: 'rgb(234,80,73)' }}>Provide</span></h2>
                <br></br>
                <div className='home6'>
                    <div className='home7'>
                        <div className='home8'>
                            <img className='hover' src={p1} width='100%' />
                        </div>
                        <div className='home11'>
                            <h3>General Symptoms</h3>
                            <p>It will predict name by taking the symptoms.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img className='hover' src={p2} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Diabetes Prediction</h3>
                            <p>It will predict that a person has diabetes or not.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home10'>
                            <img className='hover' src={p3} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Heart Disease Prediction</h3>
                            <p>It will predict that a person has heart Disease or not.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home10'>
                            <img className='hover' src={p4} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Parkinsons Disease</h3>
                            <p>It will predict that a person has Disease or not.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            {/* <SelectComponent/> */}
            <br></br>
            <SelectComponent/>
            
            <div className='home12'>
                <div className='home13'>
                    <div className='home14' style={{border:'none',boxShadow:'none'}}>
                        <img src={doctor1} width='100%' />
                    </div>
                    <div className='home14'>
                        <h2 style={{ color: 'rgb(234,80,73)' }}>Meeting</h2>
                        <h2>Book an appointment</h2>
                        <form>
                            <div className='home15'>
                                <div className='home16'>
                                    <p>Name</p>
                                    <input type='text' placeholder='Full Name' required />
                                </div>
                            </div>
                            <div className='home15'>
                                <div className='home16'>
                                    <p>Select Date</p>
                                    <input type='date' required style={{ width: '90%' }} />
                                </div>
                                <div className='home16'>
                                    <p>Select Time</p>
                                    <input type='time' placeholder='Enter time' required />
                                </div>
                            </div>
                            <div className='home15'>
                                <div className='home16'>
                                    <p>Select Department</p>
                                    <select>
                                        <option value="1">General Health</option>
                                        <option value="2">Cardiology</option>
                                        <option value="3">Medical Research</option>
                                        <option value="4">Dental</option>
                                        <option value="5">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className='home15'>
                                <div className='home16'>
                                    <p>Select Duration</p>
                                    <select>
                                        <option value="1">10 Minutes</option>
                                        <option value="2">30 Minutes</option>
                                        <option value="3">60+ Minutes</option>
                                    </select>
                                </div>
                            </div>
                            <div className='home17'>
                                <p>Phone Number</p>
                                <input type='text' placeholder='Enter your phone number' />
                            </div>
                            <div className='home17'>
                                <p>Email</p>
                                <input type='email' placeholder='Enter your email' />
                            </div>
                            <div className='home19'>
                                <button>Submit Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className='home5'>
                <h2>Latest News</h2>
                <br></br>
                <div className='home6'>
                    <div id='home7' className='home7'>
                        <div className='home21'>

                        </div>
                        <div className='home11 home20' style={{ borderBottom: 'none', height: '260px'}}>
                            <p style={{ marginBottom: '0', marginTop: '5%', fontSize: '15px', fontWeight: '600' }}>March 20 , 2024</p>
                            <h3>RuralCare Hospital Recognized for Excellence in Patient Care</h3>
                            <p style={{ marginBottom: '0', marginTop: '35%'}}>RuralCare Hospital has been recognized for excellence in patient care by Dr. Konoj Sairam. This prestigious award highlights the hospital’s commitment to delivering high-quality care, innovative treatments, and compassionate service to the community.</p>
                        </div>
                    </div>
                    <div id='home7' className='home7'>
                        <div className='home22'>

                        </div>
                        <div className='home11 home20' style={{ borderBottom: 'none', height: '260px' }}>
                            <p style={{ marginBottom: '0', marginTop: '5%', fontSize: '15px', fontWeight: '600' }}>March 01 , 2024</p>
                            <h3>RuralCare Hospital Expands Services with New Cardiology Department</h3>
                            <p style={{ marginBottom: '0', marginTop: '35%'}}>RuralCare Hospital has opened a new Cardiology Department, equipped with state-of-the-art technology and staffed by experienced cardiologists. This expansion underscores the hospital’s commitment to providing advanced healthcare to the community</p>
                        </div>
                    </div>
                    <div id='home7' className='home7'>
                        <div className='home23'>

                        </div>
                        <div className='home11 home20' style={{ borderBottom: 'none', height: '260px' }}>
                            <p style={{ marginBottom: '0', marginTop: '5%', fontSize: '15px', fontWeight: '600' }}>January 28 , 2024</p>
                            <h3>RuralCare Hospital Launches Telemedicine Services for Remote Communities</h3>
                            <p style={{ marginBottom: '0', marginTop: '30%'}}>RuralCare Hospital has launched telemedicine services, allowing patients to consult with healthcare professionals from home. This initiative improves healthcare accessibility for remote communities</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

            <Footer />
        </div>
    )
}

export default Home