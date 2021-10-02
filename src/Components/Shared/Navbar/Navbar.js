import './Navbar.css';
import React from 'react';
import logo from '../../../images/Logo.svg';
import uk from '../../../images/uk.png';
import usa from '../../../images/usa.png';
import canada from '../../../images/canada.png';
import germany from '../../../images/germany.png';
import australia from '../../../images/australia.png';

import i1 from '../../../images/1.PNG';
import i2 from '../../../images/2.PNG';
import i3 from '../../../images/3.PNG';
import i4 from '../../../images/4.PNG';
import i5 from '../../../images/5.PNG';
import i6 from '../../../images/6.PNG';
import i7 from '../../../images/7.PNG';
import i8 from '../../../images/8.PNG';


const Navbar = () => {

    const whatWeDoData = [
        {
            name: "International Admission Help",
            link: '/international-admission-help'
        },
        {
            name: "Academic Career Profiling",
            link: '/academic-career-profiling'
        },
        {
            name: "Scholarship Application",
            link: '/scholarship-application'
        },
        {
            name: "Visa Assistance",
            link: '/visa-assistance'
        },
        {
            name: "Pre-Departure Assistance",
            link: '/pre-departure-assistance'
        },
        {
            name: "Airport Pick Up",
            link: '/airport-pick-up'
        },
        {
            name: "Accommodation",
            link: '/accommodation'
        },
        {
            name: "Post-Arrival Assistance",
            link: '/post-arrival-assistance'
        }
    ]

    const studyAbroad = [
        {
            name: "UK",
            link: '/uk'
        }, {
            name: "USA",
            link: '/usa'
        }, {
            name: "Australia",
            link: '/australia'
        }, {
            name: "Canada",
            link: '/canada'
        }, {
            name: "Germany",
            link: '/germany'
        }
    ]


    const whatWeImageData1 = [
        {
            img: i1,
            alt: 'International Admission Help',
        },
        {
            img: i2,
            alt: 'Academic Career Profiling',
        },
        {
            img: i3,
            alt: 'Scholarship Application',
        },
        {
            img: i4,
            alt: 'Visa Assistance',
        }
    ]

    const whatWeImageData2 = [
        {
            img: i5,
            alt: 'Pre-Departure Assistance',
        },
        {
            img: i6,
            alt: 'Airport Pick Up',
        },
        {
            img: i7,
            alt: 'Accommodation',
        },
        {
            img: i8,
            alt: 'Post-Arrival Assistance',
        }
    ]

    const countryImageData = [
        {
            img: uk,
            alt: 'United Kingdom'
        },
        {
            img: usa,
            alt: 'United State of America'
        },
        {
            img: australia,
            alt: 'Australia'
        },
        {
            img: canada,
            alt: 'Canada'
        },
        {
            img: germany,
            alt: 'Germany'
        },
        {
            img: usa,
            alt: 'United State of America'
        }
    ]

    return (
        <div style={{ borderBottom: '1px solid rgba(0,0,0,0.25)' }} className="font-ibm-plex-sans fixed-top">
            <div className='container'>
                <nav style={{ height: '59px' }} className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a style={{ margin: '0px' }} className="navbar-brand" href="/">
                            <img src={logo} alt="" className='img-fluid' width="100" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto custom">

                                <li style={{ margin: '19px 25px 19px 0px' }} className="nav-item nav-res">
                                    <a className="nav-link text-black" href="/">Home</a>
                                </li>

                                <li style={{ margin: '19px 25px 19px 0px' }} className="nav-item dropdown custom-dropdown">

                                    <a className="nav-link dropdown-toggle text-black nav-res" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        What We Do
                                    </a>

                                    <ul style={{ backgroundColor: '#F2F2F2' }} className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {whatWeDoData.map(data => 
                                        <li>
                                            <a className="dropdown-item ms-1" href={data.link}>{data.name}</a>
                                        </li>)}
                                    </ul>
                                </li>

                                <li style={{ margin: '19px 25px 19px 0px' }} className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-black nav-res" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Study Abroad
                                    </a>
                                    <ul style={{ backgroundColor: '#F2F2F2' }} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {studyAbroad.map(data =>
                                            <li className="nav-item">
                                                <a className="dropdown-item ms-1 text-black" href={data.link}>{data.name}</a>
                                            </li>)}
                                    </ul>
                                </li>
                                <li style={{ margin: '19px 34px 19px 0px' }} className="nav-item">
                                    <a className="nav-link text-black nav-res" href="/team">Meet The Team</a>
                                </li>

                            </ul>
                            <ul className='navbar-nav'>
                                <li style={{ margin: '19px 25px 19px 0px', borderRadius: '4px', backgroundColor: '#FBBD04' }} id='book' className="nav-item">
                                    <a style={{ padding: '6px 15px' }} className="nav-link fw-bold text-black text-center" href="/appointment">Book an appointment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="custom-container d-none d-lg-block">
                <div className="container d-flex">
                    <div className="col-6">
                    </div>
                    <div style={{ marginTop: '-2.6rem', marginLeft: '-19px', zIndex: '5', cursor: 'pointer' }} id="what-we" className="col-1">
                        <a href="/" className="text-decoration-none d-none">What We Do</a>
                    </div>
                    <div className="col-5"></div>
                </div>
                <div className="container custom-dropdown-menu">
                    <div className="d-flex">
                        {whatWeImageData1.map(whatImage =>
                            <div className="col-md-3">
                                <img src={whatImage.img} alt={whatImage.alt} style={{ padding: '34px 10px 10px 0px' }} className="img-fluid" />
                            </div>)}
                    </div>
                    <div className="d-flex">
                        {whatWeImageData2.map(whatImage =>
                            <div className="col-md-3">
                                <img src={whatImage.img} alt={whatImage.alt} style={{ padding: '0px 10px 46px 0px' }} className="img-fluid" />
                            </div>)}
                    </div>
                </div>
            </div>

            <div className="custom-container d-none d-lg-block">
                <div className="container d-flex">
                    <div className="col-6">
                    </div>
                    <div style={{ marginTop: '-2.5rem', marginLeft: '123px', zIndex: '5', cursor: 'pointer' }} id='study' className="col-1">
                        <a href="/" className="text-decoration-none d-none">Study Abroad</a>
                    </div>
                    <div className="col-5"></div>
                </div>
                <div className="container custom-dropdown-menu">
                    <div className="d-flex">
                        {countryImageData.map(country =>
                        <div className="col-md-2">
                            <img src={country.img} alt={country.alt} style={{ padding: '51px 25px 64px 0px' }} className="img-fluid" />
                        </div>)}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;