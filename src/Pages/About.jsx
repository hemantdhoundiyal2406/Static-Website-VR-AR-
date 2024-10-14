import React from 'react'
import Vision from '../Components/Vision'
import Achivement from '../Components/Achivement'
import Whychoose from '../Components/Whychoose'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function About() {
  return (
    <div>
        <Navbar/>
        <div className="container-fluid about poppins-thin">
        <div>
          <div className='border-bottom border-5 border-primary'>
            <h1 className='ms-5 py-5 text-center fw-bold '>About Us</h1>
          </div>

          <center className='py-5'>
            <h1 className='fw-semibold'>
              <span className='text-primary'>About </span>OMNIXR Innovations
            </h1>
            <h3>Omnixr Marketing Private Limited,
              incorporated in 2023, specializes in <br />
              innovative marketing solutions</h3>
          </center>
        </div>
      </div>

      <Vision/>
      <Achivement/>
      <Whychoose/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default About