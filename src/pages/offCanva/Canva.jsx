import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import './canva.css';

const canvasItems = [
  "Service Offerings",
  "Explore Industries",
  "Our Platforms",
  "Navigate Your Next"
];

const Canva = () => {
  return (
    <section className='container-fluid py-5 canva-section'>
      <div className='container'>
        <div className="row justify-content-center g-2">
          {canvasItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 text-center">
              <div className="canvas-box p-3">
                <h5 className="fw-bold">{item}</h5>
                <FaPlusCircle size={32} className="mt-2 plus-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Canva;
