import React from 'react'
import Team1 from "../assets/Images/Team1.png";
import Team2 from "../assets/Images/Team2.png";
import Team3 from "../assets/Images/Team3.png";
import Team4 from "../assets/Images/Team4.png";

function Team() {
  return (
    <div className='container mt-5'>
      <center className=''>
        <h1 className=' fw-bold'> <span className=' text-primary'>Our</span> Team</h1>
      </center>
        <div className="row py-3 ">
            <div className="col-lg-3 col-md-6  ">
                <div className="card border-0 shadow-none">
                    <img  src={Team1} className='team img-fluid img-thumbnail   rounded-4' alt="" />
                    <div className=' text-center'>
                    <h3>Anjali</h3>
                    <h3>Animator</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
            <div className="card border-0 shadow-none">
                    <img  src={Team2} className='team img-fluid  img-thumbnail rounded-4' alt="" />
                    <div className=' text-center'>
                    <h3>Sagar</h3>
                    <h3>Developer</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
            <div className="card border-0 shadow-none">
                    <img  src={Team3} className='team img-fluid  img-thumbnail rounded-4' alt="" />
                    <div className=' text-center'>
                    <h3>Ravi</h3>
                    <h3>3D-Modler</h3>
                    </div>
                </div>

               
            </div>
            <div className="col-lg-3 col-md-6 ">
            <div className="card border-0 shadow-none">
                    <img  src={Team4} className='team img-fluid  img-thumbnail rounded-4' alt="" />
                    <div className=' text-center'>
                    <h3>Dona</h3>
                    <h3>Programmer</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
