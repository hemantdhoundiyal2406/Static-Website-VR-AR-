import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Project() {
  return (
  
    <div className=' poppins-thin'>
          <Navbar/>
    <div className="growth pb-5">
        <div className='text-center growth1'>
            <p className='text-primary pt-5'>ACCELERATED GROWTH</p>
            <div className='font1 '>
                <h1>
                  
                </h1>
                <h1 className='f1'>Empowering business with</h1>
                <h1 className='f2'>modern rules and insights</h1>
            </div>
            <div className='py-4'>
                <p className='p1'>Welcome to slack business consulting and solutions,</p>
                <p className=''>where success is not just a destination.</p>
            </div>
        </div>
    </div>
    {/* Project Section */}
    <div className='bg-primary py-5'>
        <div className='container'>
            <h1 className='text-white text-center pb-3'>We provide best services</h1>
            <p className='text-white text-center mx-auto '>
                Our consulting process begins with a thorough assessment of your
            </p>

            <p className='text-white text-center mx-auto pb-5'>current infrastructure, workflows, and pain points.</p>


            <div className='row row-gap-4'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='card p-4 h-100'>
                        <img src='https://wpriverthemes.com/HTML/synck/assets/imgs/service-1.png' className='card-img-top img-fluid' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Marketing Project</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#' className='btn btn-primary'>Know More</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='card p-4 h-100'>
                        <img src='https://wpriverthemes.com/HTML/synck/assets/imgs/service-2.png' className='card-img-top img-fluid' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Photography Project</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#' className='btn btn-primary'>Know More</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='card p-4 h-100'>
                        <img src='https://wpriverthemes.com/HTML/synck/assets/imgs/service-3.png' className='card-img-top img-fluid' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Management Project</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#' className='btn btn-primary'>Know More</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='card p-4 h-100'>
                        <img src='https://wpriverthemes.com/HTML/synck/assets/imgs/service-3.png' className='card-img-top img-fluid' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>Management Project</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='#' className='btn btn-primary'>Know More</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='card mb-3 p-4 h-100'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <img src='https://wpriverthemes.com/HTML/synck/assets/imgs/service-5.png' className='img-fluid h-100 rounded-start' alt='...' />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Development Project</h5>
                                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href='#' className='btn btn-primary'>Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='card mb-3 p-4 h-100'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <img src='https://wpriverthemes.com/HTML/synck/assets/imgs/service-6.png' className='img-fluid h-100 rounded-start' alt='...' />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Business Project</h5>
                                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href='#' className='btn btn-primary'>Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
<Footer/>
</div>
  )
}

export default Project