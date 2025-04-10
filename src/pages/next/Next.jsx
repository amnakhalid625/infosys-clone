import React from 'react'
import './next.css'
import one from '../../assets/one.avif'
import two from '../../assets/two.avif'
import three from '../../assets/three.avif'
import four from '../../assets/four.avif'
import five from '../../assets/five.webp'
// import six from '../../assets/six.avif'

const Next = () => {
  return (
  <>
  <section className='container-fluid'>
    <div className='container next-section '>
    <h1 className=''>The Next</h1>

        <p>We bring you powerful advantages to navigate your digital transformation</p>

        <div className=' d-flex flex-row justify-content-center align-items-center   '>

            <div>
                <img src={one} alt="" className='img-fluid' />
            </div>
            <div>
                <img src={two} alt="" className='img-fluid' />
            </div>
            <div>
                <img src={three} alt="" className='img-fluid'/>
            </div>

            
            <div>
                <img src={four} alt="" className='img-fluid' />
            </div>
            <div>
                <img src={five} alt=""   className='img-fluid' />
            </div>
      
        </div>
    </div>
  </section>
  
  </>
  )
}

export default Next