import './next.css';
import one from '../../assets/one.avif';
import two from '../../assets/two.avif';
import three from '../../assets/three.avif';
import four from '../../assets/four.avif';
import five from '../../assets/five.webp';

const Next = () => {
  return (
    <section className="next-section container-fluid">
      <div className="container text-center">
        <h1>The next</h1>
        <p className="subheading">
          We bring you powerful advantages to navigate your digital transformation
        </p>
      </div>

      <div className="next-grid container">
        <div className="next-item large">
          <img src={one} alt="Experience"  />
          <span className="label">Experience</span>
          <div className='overlay'>
            <h3>Experience </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium?</p>
          </div>
        </div>
        <div className="next-item">
          <img src={two} alt="Insight"  />
          <span className="label">Insight</span>
          <div className='overlay'>
            <h3>Experience </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium?</p>
          </div>
        </div>
        <div className="next-item">
          <img src={three} alt="Innovate" />
          <span className="label">Innovate</span>
          <div className='overlay'>
            <h3>Experience </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium?</p>
          </div>
        </div>
        <div className="next-item">
          <img src={four} alt="Accelerate" />
          <span className="label">Accelerate</span>
          <div className='overlay'>
            <h3>Experience </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium?</p>
          </div>
        </div>
        <div className="next-item">
          <img src={five} alt="Assure" />
          <span className="label">Assure</span>
          <div className='overlay'>
            <h3>Experience </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Next;
