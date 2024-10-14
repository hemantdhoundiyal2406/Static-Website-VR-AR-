import React from 'react'
import header from "../assets/Images/header.png";
import { TypeAnimation } from 'react-type-animation';

function Header() {
  return (
    <div className="header-container">
      <div className="embed-responsive-item position-relative">
        {/* Responsive Image */}
        <img src={header} className="img-fluid w-100" alt="header" />

        {/* TypeAnimation Text */}
        <div className=" auto-text ms-3 fw-bold position-absolute start-0 translate-middle-y  text-center">
          <TypeAnimation
            sequence={[
              'Unlock new dimension',
              1000,
              'with Virtual Reality',
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{ color: "white", display: 'inline-block',  }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
