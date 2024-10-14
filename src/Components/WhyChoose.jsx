import React from 'react'

function WhyChoose() {
  return (
    <div className='mt-5  poppins-thin bg-body-tertiary  overflow-hidden'>
    <div className="row p-5">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='p-5'>
            <img src="https://miro.medium.com/v2/resize:fit:1024/1*EdjiMV0jgOFg5FG1gm7vwA.jpeg " className=' img-fluid rounded w-100'  alt="" />
            </div>
        </div>


        <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center  ">
            <h1 className='text-center'><span className='text-primary '>Why </span> Choose Us</h1>
            <div className='pt-1 bg-white'>
            <p className='border rounded shadow px-4 text-center py-2' > <span className=' fw-semibold fs-5 text-primary'>Proven Educational Success:</span>
             <span className='pt-2'>We have effectively
                implemented our courses in over five schools,
                demonstrating our ability to deliver quality
                educational content that resonates with both
                educators and students.
            </span> </p>

            <p  className='border rounded shadow px-4 text-center py-2'> <span className=' fw-semibold fs-5 text-primary'>Advanced Learning Solutions:</span> <span className='pt-2'>Our premium courses
                are not only recognized but also purchased by schools,
                underscoring our commitment to providing advanced,
                high-value educational resources.

            </span> </p>

            <p className='border rounded shadow px-4 text-center py-2'> <span className=' fw-semibold fs-5 text-primary'>Innovative Virtual Experiences:</span> <span className='pt-2'>Our platform offers
                immersive virtual reality tours of iconic landmarks
                such as the Taj Mahal, Ram Mandir, and the Eiffel
                Tower. This feature enhances learning by allowing
                users to explore and experience these historic sites as
                if they were truly there.
            </span> </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default WhyChoose