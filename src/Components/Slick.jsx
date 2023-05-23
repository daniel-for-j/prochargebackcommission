

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Slick = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="carousel">
        {/* <h2>Carusole</h2> */}

    <Slider {...settings}>
        <div className="box overflow-hidden">
            <div className='flex justify-center pt-[10%]'>
                <img src="ethereum.webp" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="shib.webp" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="coin-b.webp" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="tether.webp" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="bnb.webp" alt="" className='w-[35%]'/>
            </div>
        </div>
        <div className="box">
            <div className='flex justify-center pt-[10%]'>
                <img src="ripple.png" alt="" className='w-[35%]'/>
            </div>
        </div>
    </Slider>


    
    </div>
  )
}

export default Slick