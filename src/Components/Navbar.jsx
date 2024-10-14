import React from 'react';
import logo from "../assets/Images/logo.png";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    return (
        <>
            <h5 className='py-2 text-center bg-primary text-white '>
                Make Your Imagination True

            </h5>
            <nav class="navbar navbar-expand-lg bg-body-white bg-white shadow position-sticky top-0  z-3">
                <div class="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className='img-fluid' alt="Logo" style={{ width: '70px', height: "50px" }} />
                    </Link>

                    <label class="hamburger navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <input type="checkbox" />
                        <svg viewBox="0 0 32 32">
                            <path
                                class="line line-top-bottom"
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            ></path>
                            <path class="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav fw-semibold ms-auto fs-6 p-2 p-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/' ? 'page' : undefined}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/virtual-tour" className={`nav-link ${location.pathname === '/virtual' ? 'active' : ''}`}>Virtual Tour</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
