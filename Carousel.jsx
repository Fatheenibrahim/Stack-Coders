import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

return (
    <Slider {...settings}   style={{height:'100%'}}>
      <div>
        <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=1380&t=st=1714056924~exp=1714057524~hmac=19f8d2c0de24e3011571f91a5ad224ad38f3dca5ef02ead0c67766a4625192f0" alt="Slide 2" style={{ width: '100%' ,height:'360px'}} />
      </div>
      <div style={{}}>
        <img src="https://img.freepik.com/free-vector/tiny-cardiology-doctor-nurse-examining-heart-blood-pressure-prescribing-treatment-medical-cardiovascular-checkup-flat-vector-illustration-anatomy-hospital-heart-diseases-health-care-concept_74855-20963.jpg?w=1380&t=st=1714056667~exp=1714057267~hmac=4e9587d20cbe9beb78e14df4925778c40935886406705d15a59e8aee931507e9" alt="Slide 1" style={{ width: '100%' }} />
      </div>
      <div>
        <img src="https://img.freepik.com/free-vector/online-doctor-white-medical-robe_23-2148538052.jpg?t=st=1714062478~exp=1714066078~hmac=af0cedcf71bee955adf628bd6c68dbf77f0785f279ac0e10ad771f47ed1385a8&w=900" alt="Slide 3" style={{ width: '100%',height:'375px' }} />
      </div>

    </Slider>
  );
}

export default Carousel;
