import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
        <Navbar/>


        <section>
    <div className='poppins-thin'>
        <div className='contect '>
            <div className='text-center text-white py-5 lh-lg'>
            <h1 className='text-white fw-bold text-uppercase'>Contact Us</h1>
            <p>For any query, Reach out to us at give below mediums.</p>
            </div>  
        </div>

        <div className="address py-5">
        <div className="row row-gap-4">
            <div className="col-lg-4">
                <div className="card_contect border-0 text-center">
                    <img src="https://s3-ap-south-1.amazonaws.com/co.techxr.system.backend.upload.dev/K8zrBZM4907T2tn0_2023-01-19T122809034714.Phone.png" className='img-fluid w-25' alt="" />
                    <div className="title py-4 fw-semibold">
                        <h4 className=' fw-bold '>Phone</h4>
                        <p>For Omnixr Controller</p>
                        
                        <p>related queries +91 8053004645 </p>
                        <p>+91 7495077107 </p>
                     
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card_contect border-0 text-center">
                    <img src="https://s3-ap-south-1.amazonaws.com/co.techxr.system.backend.upload.dev/kpTPsjpEhm6ZUDX1_2023-01-19T122711651683.address.png" className='img-fluid w-25' alt="" />
                    <div className="title py-4 fw-semibold">
                        <h4 className=' fw-bold'>Address</h4>
                        <p>Israna, Panipat, Haryana, India</p>
                        <p>132107</p>
                    
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card_contect border-0 text-center">
                    <img src="https://s3-ap-south-1.amazonaws.com/co.techxr.system.backend.upload.dev/WMXRoqvzq2ufc59k_2023-01-19T122857344234.email.png" className='img-fluid w-25' alt="" />
                    <div className="title py-4 fw-semibold">
                        <h4 className=' fw-bold'>Email</h4>
                        <p>Omnixrpvtltd@gmail.com</p>
                       
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
</section>

        <Footer/>
      
    </div>
  )
}

export default Contact
