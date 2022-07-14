import React from 'react';
import "./Banner.scss";
import banner from "../../assets/images/banner.png";
export const Banner = () => {
  return (
      <section className='banner'>
        <div className='banner-content'>
        <div className='banner-text'>
          <h3>Women’s <b/> Outerwear</h3>
          <div className='banner-border'></div>
        </div>
      
        <div className='banner-img'>
          <img src={banner} alt='banner'/>
        </div>
        </div>
      </section>
  )
}
