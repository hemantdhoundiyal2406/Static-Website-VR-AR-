import React from 'react'
import additional from "../assets/Images/additional.jpeg";

function Services() {
  return (
    <div className='container mt-5'>

    <div className="row row-gap-4">
        <div className="col-lg-12">
            <h1 className=''><span className='text-primary '>Our </span>Services</h1>

            <ul className=' '>
               
                <li className='py-2'>virtual tour of all the monuments.</li>
                <li className='py-2'>educational simulation for school and college
                    students. (Mainly physics and chemistry subjects)</li>
                <li className='py-2'>surgery and operation simulation for doctor
                    practice.</li>
                <li className='py-2'>some entertainment content such as games.</li>
                <li className='py-2'>3D-development</li>
                <li className='py-2'>Customizable VR app</li>
                <li className='py-2'>Animated Video</li>
            </ul>
        </div>

      


    </div>


    {/* Additonal */}

    <h1 className='text-center mt-5 mb-4'><span className='text-primary '>Aditional </span>
        Services</h1>
    <div className="row row-gap-5   ">
        <div className="col-lg-6">
            <img src={additional} className='img-fluid rounded' alt="" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center flex-column">



            <p className='fs-4 fw-semibold'><span className=' text-primary'>Weeding Shoot in VR</span> – Immersive Experience for Your Special Day
                Overview</p>
            <p className=''>Step into the future of wedding documentation with our Weeding Shoot in VR service! Capture every moment of your wedding day in a fully immersive 360° virtual reality experience. Relive the most important day of your life from every angle, anytime, anywhere, in stunning detail. Your loved ones will be able to re-experience your wedding in an interactive, lifelike way, even if they couldn't attend in person!</p>
            <p>Whether it's walking down the aisle, the exchange of vows, or the first dance, our Weeding Shoot in VR service offers a one-of-a-kind way to preserve your memories in a format that’s cutting-edge and emotionally engaging.</p>

          
                <p>Package Pricing -:
                    <ul>
                        <li>
                        1-Day Package – ₹1,00,000
                        </li>
                        <li>2-Day Package – ₹2,00,000</li>
                    </ul>
                </p>


            <p></p>
        </div>



    </div>
</div>
  )
}

export default Services
