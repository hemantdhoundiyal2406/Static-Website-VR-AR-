import React from 'react'
import Marquee from 'react-fast-marquee';

import webxr from "../assets/Images/webxr.svg";

function Technology() {
  return (
    <div className="container">
    <h1 className="fw-bold text-center mt-5">Our Technology</h1>
    <Marquee className='py-4' direction='left' speed={60} >
      <div className="d-flex align-items-center justify-content-center">
        <img src={webxr} className='marquee-image img-fluid ' alt='vuforia' style={{ height: "100px" }} />
        <img src={webxr} className='marquee-image img-fluid ' alt='blender' style={{ height: "100px" }} />
        <img src={webxr} className='marquee-image img-fluid ' alt='unity' style={{ height: "100px" }} />
        <img src={webxr} className='marquee-image img-fluid ' alt='unreal' style={{ height: "100px" }} />
        <img src={webxr} className='marquee-image img-fluid ' alt='webxr' style={{ height: "100px" }} />
      </div>
    </Marquee>
  </div>
  )
}

export default Technology
