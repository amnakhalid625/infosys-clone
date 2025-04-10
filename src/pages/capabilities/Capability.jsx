import React from 'react';
import './capability.css';

const Capability = () => {
    return (
        <section className='capability-section'>
            <div className='capability-container background-butterfly'>
                <div className="content-wrapper">
                    <div className="main-content">
                        <h1>Digital Core Capabilities</h1>
                        <p>Build vital capabilities to deliver digital outcomes.</p>
                        <button className="explore-btn">Explore</button>
                        
                        <div className='case-studies'>
                            <div className='case-study case1'>
                                <p className="case-label">case studies</p>
                                <h3>Pfizer's journey towards increased productivity, powered by AI</h3>
                                <p className="view-link">view</p>
                            </div>
                            
                            <div className='case-study case2'>
                                <h3>A government that contributes to the joy of parenting</h3>
                                <p className="view-link">view</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Capability;