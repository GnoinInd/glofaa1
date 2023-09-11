/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <><footer id="dk-footer" className="dk-footer ">
            <div className="container">
                <div className="row  align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-4">
                        <div className="dk-footer-box-info py-3 px-3">
                            <Link to="/" className="footer-logo">
                                <img src='/images/logo.png' alt="footer_logo" className="img-fluid w-100 px-3 py-3" />
                                </Link>
                            <p className="footer-info-text footer-content">
                                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                            </p>
                            <div className="footer-social-link">
                                <h3>Follow us</h3>
                                <ul>
                                    <li>
                                        <Link to="#">

                                            <BsFacebook />
                                            </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                            <BsTwitter />
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                            <BsLinkedin />
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                            <BsInstagram />
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>


                    </div>

                    <div className="col-md-12 col-lg-8 mt-5">
                        <div className="row mt-10">
                            <div className="col-md-6">
                                <div className="contact-us  contact-us-last">
                                    <div className="contact-icon">
                                        <i className="fa fa-map-o" aria-hidden="true"></i>
                                    </div>

                                    <div className="contact-info">
                                        <h3>Contact Info</h3>
                                        <p> New Town, Rajarhat, Kolkata, West Bengal - 700161</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">
                                <div className="contact-us contact-us-last">


                                    <div className="contact-info">
                                        <h3>Give us a call  & Email1</h3>
                                        <p>+91-98XXXXXXX</p>
                                        <p>Support@Glofaa.Com</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="footer-widget footer-left-widget">
                                    <div className="section-heading">
                                        <h3>Useful Links</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul>
                                        <li>
                                        <Link to="#">About us</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Services</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Projects</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Our Team</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                        <Link to="#">Contact us</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Blog</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Testimonials</Link>
                                        </li>
                                        <li>
                                        <Link to="#">Faq</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-md-12 col-lg-6">
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Subscribe</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <p className='footer-content'>
                                        Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                                    <form action="#">
                                        <div className="form-row">
                                            <div className="col dk-footer-form">
                                                <input type="email" className="form-control" placeholder="Email Address" />
                                                <button type="submit">
                                                    <i className="fa fa-send"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span>Copyright © 2022, All Right Reserved Gnoin</span>
                        </div>

                        <div className="col-md-6">
                            <div className="copyright-menu">
                                <ul>
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Terms</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </footer>
        <div id="back-to-top" className="back-to-top">
                <button  onClick={() => scrollToTop()} className="btn btn-dark" title="Back to Top" style={{ display: "block" }}>
                    <a className='pointer'><i className="fa fa-angle-up"></i></a>
                </button>
            </div></>
    )
}

export default Footer