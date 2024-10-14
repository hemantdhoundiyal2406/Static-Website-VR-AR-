import React from 'react'
import speaker from "../assets/Images/speaker.mp4";

function Speaker() {
  return (
    <>
    <h1 className="text-center fw-bold mb-4 mt-5 "><span className=' text-primary'>Our</span> Projects</h1>
        <video
                    className="  embed-responsive-item w-100 " 
                    src={speaker}
                    muted
                    loop
                    autoPlay
                ></video>
    </>
  )
}

export default Speaker