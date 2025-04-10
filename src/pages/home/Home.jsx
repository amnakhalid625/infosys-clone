import React from 'react';
import homeTwo from '../../assets/home-img.avif';
import homeOne from '../../assets/home1.jpg';
import homeThree from '../../assets/home3.webp';
import homeFour from '../../assets/home4.webp';
import './home.css'

const Home = () => {
  return (
    <>
    <section className="carousel slide" data-bs-ride="carousel" id="slider1">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#slider1" data-bs-slide-to="0" className="active sliderButton" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#slider1" data-bs-slide-to="1" aria-label="Slide 2" className='sliderButton'></button>
        <button type="button" data-bs-target="#slider1" data-bs-slide-to="2" aria-label="Slide 3" className='sliderButton'></button>
        <button type="button" data-bs-target="#slider1" data-bs-slide-to="3" aria-label="Slide 4" className='sliderButton'></button>
      </div>

      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={homeOne} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 1" />
          <div className="carousel-caption d-flex align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-9 col-sm-11">
                  <div className=" text-start slide1">
                    <p className=" text-white ">
                    Welcome to Elite Tech Solutions Empowering Your Business with Innovative Technology Solutions                    </p>
                    <button className="btn btn-outline-light text-uppercase">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={homeTwo} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 2" />
          <div className="carousel-caption d-flex align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-9 col-sm-11">
                  <div className=" text-start silde2">
                    <p className="text-white">We deliver tailored technology solutions to streamline operations, boost productivity, and drive growth.</p>
                    <button className="btn btn-outline-light text-uppercase">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={homeThree} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 3" />
          <div className="carousel-caption d-flex align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-9 col-sm-11">
                  <div className=" text-start slide3">
                    <p className=" text-white"> To be the most trusted partner for businesses seeking to leverage technology to drive growth and innovation.</p>
                    <button className="btn btn-outline-light text-uppercase">Our Vision</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img src={homeFour} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 4" />
          <div className="carousel-caption d-flex align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-9 col-sm-11">
                  <div className=" text-start slide4">
                    <p>To deliver innovative, scalable, and secure technology solutions..</p>
                  
                    <button className="btn btn-outline-light text-uppercase">Our Mission</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    </>
  );
};

export default Home;
