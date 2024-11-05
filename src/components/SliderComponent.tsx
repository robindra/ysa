import React from 'react'
import Images from '../images'
import Slider from "react-slick";

const SliderComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
  };
  return (
   <>
   <div className='slider_wrapper'>
 <Slider {...settings}>
      <div className='slider_items'>
        <img src={Images.slideOne} alt="" />
      </div>
      <div className=''>
        <img src={Images.slideTwo} alt="" />
      </div>
     
    </Slider>
    </div>
   </>
  )
}

export default SliderComponent
