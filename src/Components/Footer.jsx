import React from 'react'
import logo from "../assets/Images/logo.png";

function Footer() {
  return (
    <div className='container-fluid bg-body-tertiary ' >
            <div className="container pt-5">
            <div className="row  row-gap-3 center-content "> 
                <div className="col-lg-2 col-md-12">
                        <img src={logo} className='img-fluid logo '  alt="Logo" />
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
                    <ul className='list-unstyled '>
                        <li className='fw-bold fs-5 py-2 text-info'>Address</li>
                        <li className=' text-secondary'> Israna, Panipat, Haryana, India 132107</li>
                        

                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mb-3 ">
                <ul className='list-unstyled'>
                        <li className='fw-bold fs-5 py-2 text-info'>Contact</li>
                        <li className='  text-secondary'>Omnixrpvtltd@gmail.com</li>
                        <li className=' text-secondary'>For Any</li>
                        <li className=' text-secondary'>Queries +91 8053004645</li>
                        <li className=' text-secondary'>Queries +91 7495077107</li>

                    </ul>
                    <ul className='list-unstyled '>
                        
                        <i className="fa-brands fa-facebook fa-2xl"></i>
                        <i className="fa-brands fa-instagram fa-2xl ms-2"></i>
                        <i className="fa-brands fa-linkedin fa-2xl ms-2"></i>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
                    <ul className='list-unstyled '>
                        <li className='fw-bold fs-5 py-2 text-info'>OMNIXR</li>
                        <li className=' text-secondary'>Courses</li>
                        <li className=' text-secondary'>Projects</li>
                        <li className=' text-secondary'>Learning Portal</li>
                        <li className=' text-secondary'>SenseXR Controller</li>
                        <li className=' text-secondary'>XR Blocks</li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
                    <ul className='list-unstyled '>
                        <li className='fw-bold fs-5 py-2 text-info'>About Us</li>
                        <li className=' text-secondary'>About Us</li>
                        <li className=' text-secondary'>Events</li>
                        <li className=' text-secondary'>Blogs</li>
                        <li className=' text-secondary'>Raise a ticket</li>
                    </ul>
                </div>
                <div className="text-center fw-bold text-info fs-6">
                    <p className=''>OMNIXR MARKETING PVT LTD</p>
                    
                </div>


                

                



            </div>
            </div>
        </div>
  )
}

export default Footer
