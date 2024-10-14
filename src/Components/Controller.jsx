import React from 'react'
import Ar from "../assets/Images/Ar.jpg"
import Vr from "../assets/Images/Vr.webp"
import bag from "../assets/Images/bag.png"
import tour from "../assets/Images/Tour.mp4"

function Controller() {
    return (
        <>
            <div className='container mt-5'>

                <h1 className="text-center fw-bold mb-4 "><span className=' text-primary'>Technology</span> Usecases</h1>
                <div className="">
                    <div className="row row-gap-5 card-group  " >
                        <div className=" col-md-6 col-lg-3">

                            <div className="card h-100 rounded-3 shadow  " >
                                <img className='object-fit-cover img-fluid   ' src={Ar} alt="" />
                                <div className="card-body text-primary">
                                    <h4 className=''>AR <span className='fs-5'>(Augmented Reality)</span></h4>
                                    <p>AR (Augmented Reality) bridges the gap between the digital and physical worlds, enhancing your real-world experience with immersive technology.</p>
                                </div>

                            </div>
                        </div>

                        <div className=" col-md-6 col-lg-3">
                            <div className="card  h-100 rounded-3 shadow  " >
                                <img className='object-fit-cover  img-fluid' src={Vr} alt="" />
                                <div className="card-body text-primary ">
                                    <h4>VR <span className='fs-5'>(Virtual Reality)</span></h4>
                                    <p>VR (Virtual Reality) transports you to entirely new worlds, offering immersive experiences beyond the boundaries of reality. </p>
                                </div>
                            </div>
                        </div>

                        <div className=" col-md-6 col-lg-3">
                            <div className="card h-100 rounded-3 shadow   " >

                                <img className='img-fluid object-fit-cover   ' src={bag} alt="" />
                                <div className="card-body text-primary">
                                    <h4>3D Modeling </h4>
                                    <p>MR (Mixed Reality) seamlessly blends the physical and digital worlds, allowing real-time interaction with both virtual and real environments</p>
                                </div>
                            </div>
                        </div>

                        <div className=" col-md-6 col-lg-3">
                            <div className="card  h-100 rounded-3 shadow "  >

                                <video
                                    className=" object-fit-cover embed-responsive-item w-100 " style={{ height: "310px" }}
                                    src={tour}
                                    muted
                                    loop
                                    autoPlay
                                ></video>
                                <div className="card-body text-primary">
                                    <h4>Virtual Tour</h4>
                                    <p>Visit any place in the world from the comfort of your home with SenseXR Controller on smartphone in Virtual Reality.</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Controller