import React from 'react';
import welcome from '../../images/Welcome to.svg';

const FeaturedSection = () => {
    return (
        <section className='featured'>
            <img src={welcome} className='mx-auto d-block pt-5' alt="" />
        </section>
    );
};

export default FeaturedSection;