import React from 'react'
import Marquee from "react-fast-marquee";

// import sony from "../images/sony.png";
// import collage from "../images/collage.png";
// import engineering from "../images/engineering.png";
// import sanskrit from "../images/sanskrit.png";
// import yes from "../images/yes.png";
// import rasberrii from "../images/rasberrii.png";

// import hammer from "../images/hammer.png";

function Client() {
    return (
        <div className='container py-5'>
            <h2 className='text-center  fw-bolder fs-1 py-3'> <span className='text-primary'>Our</span> Clients</h2>
            <Marquee direction='Left' speed={100} velocity={50} className='gap-0 gap-md-0 gap-sm-0'>

                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image sony img-fluid '  alt="marquee1" />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image collage img-fluid '  alt="marquee2" />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image engineering img-fluid '  alt="marquee1" />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image sanskrit  img-fluid ' alt="marquee1" />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image yes img-fluid '  alt="marquee1" />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image rasberrii img-fluid '  alt="marquee1" />
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png" className='marquee-image hammer img-fluid '  alt="marquee1" />

            </Marquee>


        </div>
    )
}

export default Client