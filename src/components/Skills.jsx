import React, { useRef } from 'react'
import Images from './Images'
import {Typography } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Skills() {
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      rows:1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            rows:1,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
          }
        },
        {
          breakpoint: 600,
          settings: {
            rows:1,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
              speed: 1000,
              autoplaySpeed: 1000,
              cssEase: "linear",
          }
        },
        {
          breakpoint: 420,
          settings: {
            rows:1,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            autoplay: true,
              speed: 1000,
              autoplaySpeed: 1000,
              cssEase: "linear",
          }
        }
      ]
  };
  return (
    <div id="skills" data-aos="fade-up" data-aos-offset="200" >
  <Typography variant="h4" className='other-Header'align='center' >
   <span className='numbers'>03.</span>  My Skills
     </Typography >
     <Slider className='slick' {...settings}>
     {  
          Images.map((skill,index)=>(
            <div key={skill.name}>
            <div >
              <img src={skill.url} className="skillImage" style={{width:"100px"}} alt="" />
              <Typography variant='text' className='numbers'sx={{marginTop:"5px"}} >{skill.name}</Typography>
            </div>
            </div>
          ))
        }
       </Slider>

    </div>
  )
}

export default Skills