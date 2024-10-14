import React from 'react'

function Achivement() {
  return (
    <div className=' container poppins-thin mt-5'>
            <h1 className='text-center pb-1'><span className='text-primary'>Our </span>
                Achivement</h1>
            <div className="row row-gap-3 " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div className="card h-100 px-2 gap-2 rounded-5 " >
                        <div className="img  text-center mt-2">
                            <img src="https://static.thenounproject.com/png/81529-200.png" className='img-fluid achiv  '   alt="Startup" />
                        </div>
                        <div className="textBox   text-center">
                            <p className='fw-bold fs-5'>Widespread Educational Impact</p>
                            <p >We have successfully
                                delivered our courses across more than five schools, enriching
                                the learning experiences of numerous students.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div className="card h-100 px-2 gap-2 rounded-5 " >
                        <div className="img  text-center mt-2">
                            <img src="https://static.thenounproject.com/png/81529-200.png" className='img-fluid achiv  ' alt="Startup" />
                        </div>
                        <div className="textBox   text-center">
                            <p className='fw-bold fs-5'>Premium Course Adoption</p>
                            <p >One of our advanced courses has
                                been purchased by a school, highlighting the value and demand
                                for our high-quality educational content.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div className="card h-100 px-2 gap-2 rounded-5 " >
                        <div className="img  text-center mt-2">
                            <img src="https://static.thenounproject.com/png/81529-200.png" className='img-fluid achiv  ' alt="Startup" />
                        </div>
                        <div className="textBox   text-center">
                            <p className='fw-bold fs-5'>Immersive Virtual Tours</p>
                            <p >Our virtual reality platform now
                                features iconic landmarks such as the Taj Mahal, Ram Mandir,
                                and the Eiffel Tower, offering users a rich and immersive
                                experience of these historic sites.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default Achivement
