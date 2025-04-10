import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import './canva.css'

const Canva = () => {
  return (
  <>
  <section className='container-fluid'>
    <div className='container '>
        <div className="row canvas ">
            <div className="col-lg-5 col-sm-12 col-12 d-flex flex-row justify-content-between g-4">
                <div>
                    <h5>Servinces Offering</h5>
                    <FaPlusCircle />


                </div>
                <div>
                <h5>Explore Industries</h5>
                <FaPlusCircle />
                </div>
                <div>
                <h5>Servinces Offering</h5>
                <FaPlusCircle />
                </div>
                <div>
                <h5>Our Plateforms</h5>
                <FaPlusCircle />
                </div>
                <div>
                <h5>Navigate Your Next</h5>
                <FaPlusCircle />
                </div>


                </div>
        </div>
    </div>


  </section>
  
  
  </>
  )
}

export default Canva