import React from 'react';
import hero_image from '../../images/hero-image.png';

const HeroSection = () => {
    return (
        <section style={{ backgroundColor: '#E5E5E5', minHeight: '70vh' }} className="">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-sm-6">
                        <h3 className='H3'>Reach your dream <br /> university faster than <br /> anytime before ✨</h3>
                        <button className='btn-primaryType mt-5 fw-bold border-0'>Start Free Consultation</button>
                    </div>
                    <div className="col-sm-6">
                        <img src={hero_image} className="img-fluid hero-image" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;