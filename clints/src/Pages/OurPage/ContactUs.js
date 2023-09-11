import React from 'react'

import HederBox from "../../compponate/OurPageComponate/HederBox";


function ContactUs() {
    return (
        <section>
            <HederBox headerTitle="Contact Us" />
            <div className='container'>

                <div className="section-contact">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="header-section text-center">
                                <h2 className="title">Get In Touch
                                </h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur commodo risus, nec pellentesque turpis efficitur non.</p>

                            </div>
                        </div>
                    </div>
                    <div className="form-contact">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <i className="fas fa-user"></i>
                                        <input type="text" name="name" placeholder="ENTER YOUR NAME" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <i className="fas fa-envelope"></i>
                                        <input type="text" name="email" placeholder="ENTER YOUR EMAIL" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <i className="fas fa-phone"></i>
                                        <input type="text" name="phoneNumber" placeholder="ENTER YOUR PHONE NUMBER" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <i className="fas fa-check"></i>
                                        <input type="text" name="subject" placeholder="ENTER YOUR SUBJECT" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input">
                                        <i className="fas fa-comment-dots"></i>
                                        <textarea placeholder="ENTER YOUR MESSAGE"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="submit-input text-center">
                                        <input type="submit" name="submit" value="SUBMIT NOW" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className=" w-100 justify-content-center">
                    <div className="">
                        <div className="header-section text-center">
                            <h2 className="title">Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.
                            </h2>
                            <p className="description">For any help regarding your bookings, please log-in and visit our <span><a>Help Now</a> </span>| For media queries, please send us an email on<span><a>press@urbancompany.com</a> </span></p>

                        </div>
                        <div className="row w-100 text-center">
                                {["Kolakta","delhi","uk","Us","PATNA","Up"].map((e)=>{
                                    return(
                                        <div className="col-xl-3 col-sm-6 mb-5  mt-2">
                                        <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{e}</h5>
                                        <p className="card-text">Plot No:- 66, Phase-2, Industrial Area, Chandigarh</p>
                                       
                                    </div>
                                </div>
                            </div>
                                    )
                                })}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs