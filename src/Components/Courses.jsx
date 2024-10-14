import React from 'react'
import Advance from "../assets/Images/Advance.png";

function Courses() {
    return (
        <div className='bg-body-tertiary container-fluid poppins-thin'>
            <div className="container py-5">
                <div className="row   ">
                    <div className="col-lg-4 col-md-12 col-sm-12  ">


                        <div className="  align-items-center  rounded-5 align-content-center  mt-5 ">

                            <h1 className=' text-uppercase text-black fw-bold pb-3'><span className='text-primary'>Our</span>  <br />Courses</h1>
                            <p className=''>OmniXR Innovations provides AR-VR App Development  Training with the world’s most affordable Developer Kit for 6 Degrees of freedom interactive XR App Development on a smartphone without any expensive hardware.</p>






                        </div>
                    </div>

                    {/* Cards */}

                    <div className="col-lg-8 col-md-12 col-sm-12   ">

                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 ">


                                <div className="card-group h-100">
                                    <img
                                        src={Advance}
                                        className="img-fluid  "
                                        alt="Advanced AR-VR app development course"
                                    />
                                    <div className="card-body text-primary  shadow px-3">
                                        <h5 className="card-title pt-4  ">Intermediate AR-VR app development course</h5>
                                        <p className="card-text py-3">
                                            This course focuses on project base leaning

                                        </p>
                                        <div className=' d-flex justify-content-between fw-bold '>
                                            <p>🕒 2 Month's</p>
                                            <p>₹ 4,00,000</p>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card-group h-100">
                                    <img
                                        src={Advance}
                                        className="img-fluid"
                                        alt="Intermediate AR-VR app development course" />
                                    <div className="card-body text-primary  shadow-lg px-3">
                                        <h5 className="card-title pt-4  ">Introduction to AR-VR app development course</h5>
                                        <p className="card-text py-3">
                                            This course focuses for interaction for technology</p>
                                        <div className=' d-flex justify-content-between fw-bold '>
                                            <p>🕒 7 Day's</p>
                                            <p>₹ 85,000</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card-group h-100">
                                    <img
                                        src={Advance}
                                        className="img-fluid  "
                                        alt="Advanced AR-VR app development course With VR Headset"
                                    />
                                    <div className="card-body text-primary  shadow-lg px-3">
                                        <h5 className="card-title pt-4  ">Advanced AR-VR app development course</h5>
                                        <p className="card-text py-3">
                                            This course focuses on project base leaning

                                        </p>
                                        <div className=' d-flex justify-content-between fw-bold '>
                                            <p>🕒 2 Month's</p>
                                            <p>₹ 6,00,000</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <Carousel>
                <Carousel.Item>
                    <div className="row card-group   gap-5 rounded-5 ms-1 ">
                        <div className="col-lg-4 col-md-12 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                                
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-12 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                               
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                                
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>
                    </div>


                </Carousel.Item>



                <Carousel.Item>
                    <div className="row card-group ms-1  gap-5 rounded-5">
                        <div className="col-lg-4 col-md-12 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                                
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-12 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                               
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                               
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>
                    </div>


                </Carousel.Item>


                <Carousel.Item>
                    <div className="row ms-1 card-group  gap-5 rounded-5">
                        <div className="col-lg-4 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                                                                        <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                                
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 card border-0">
                            <img
                                src={Courses1}
                                className="img-fluid "
                                alt="..."
                            />
                            <div className="card-body text-primary  shadow-lg">
                                <h5 className="card-title">Expert Metaverse Creator Program</h5>
                                <p className="card-text">
                                    The program revolves around 6 DoF
                                    Controller to create industry ready advance
                                    experiences....
                                </p>
                                <div className=' d-flex justify-content-between fw-bold '>
                                    <p>⏰ 16 Weeks</p>
                                    <p>₹ 1,50,000 <br /> Expert</p>
                                </div>
                                
                                <div className='position-relative py-2'>
                                    <button type="button" class=" btn btn-primary position-absolute top-100 start-50 translate-middle">Know More</button>
                                </div>
                            </div>

                        </div>
                    </div>


                </Carousel.Item>
            </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses