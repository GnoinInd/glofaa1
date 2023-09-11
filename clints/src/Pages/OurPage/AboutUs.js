import React from 'react'
import { Link } from 'react-router-dom';
import HederBox from "../../compponate/OurPageComponate/HederBox";
import ContentBox from '../../compponate/OurPageComponate/ContentBox';
import AboutContentBox from '../../compponate/OurPageComponate/TeamrowBoxWithImage/AboutContentBox';
import ImageContainer from '../../compponate/OurPageComponate/TeamrowBoxWithImage/ImageConatiner';
import TeamCard from '../../compponate/OurPageComponate/TeamrowBoxWithImage/teamcard';

function AboutUs() {
    return (
        <section>
            <HederBox headerTitle="About Us" />
            <div className='container'>

                <div className="about-section ">
                    <div className="row w-100 p-1">
                        <AboutContentBox spamtitle="About Company" title="Who we are" descreption=" Urban Company is Asia's largest online home services platform.  Launched in 2014, Urban Company today operates in India, Australia, Singapore, the USA, the UAE and The Kingdom of Saudi Arabia. The platform helps customers book reliable & high quality services -  beauty treatments, massages, haircuts, home cleaning, handymen, appliance repair, painting, pest control and more – delivered by trained professionals conveniently at home.   Urban Company's vision is to empower millions of professionals worldwide to deliver services at home like never experienced before. The Company raised Series F funding of USD 255 million in April 2021. The Series F round was led by new investors - Prosus Ventures, Dragoneer and Wellington Management with participation from existing investors - Vy Capital, Tiger Global and Steadview. The latest round includes a primary capital infusion of USD 188 million and a secondary sale of approximately USD 67 million by select angels and early investors" />

                        <ImageContainer img="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" imgTitle="Uc Clap" />

                    </div>
                    <div className="sec-title pt-3 w-75 row m-auto justify-content-between">

                        <div className='AboutUs-first-section-box'>
                            <h3 className='text-muted'>32,000+</h3>
                            <p className='text'>Trained Professionals</p>
                        </div>
                        <div className='AboutUs-first-section-box'>
                            <h3 className='text-muted'>5 Million+</h3>
                            <p className='text'>Happy Customers</p>
                        </div>
                        <div className='AboutUs-first-section-box'>
                            <h3 className='text-muted'>63</h3>
                            <p className='text'>Cities</p>
                        </div>
                        <div className='AboutUs-first-section-box'>
                            <h3 className='text-muted'>5</h3>
                            <p className='text'>Countries</p>
                        </div>
                    </div>
                    <ContentBox title="How We do it" p="Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date." />

                    <ContentBox title="Our Story so far" p="54 cities in India: Agra, Ahmedabad, Alwar, Amritsar, Aurangabad, Bangalore, Bhopal, Bhubaneswar, Chandigarh Tricity, Chennai, Coimbatore, Cuttack, Dehradun, Delhi NCR, Guntur, Guwahati, Gwalior, Hyderabad, Indore, Jabalpur, Jaipur, Jamshedpur, Jodhpur, Kakinada, Kanpur, Karnal, Kochi, Kolkata, Kota, Lucknow, Ludhiana, Madurai, Meerut, Mumbai, Mysore, Nagpur, Nashik, Panipat, Patna, Prayagraj, Pune, Raipur, Rajahmundry, Ranchi, Rohtak, Sonipat, Surat, Thiruvananthapuram, Udaipur, Vadodara, Varanasi, Vijayawada, Visakhapatnam, Warangal" />
                    <div className='d-block m-auto img w-75'>
                        <img className='img-fuild' src='https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1625467758316-8b45f4.png' />
                    </div>
                    <p className='text text-center'>9 cities internationally: Abu Dhabi, Austin, Dallas, Dubai, Jeddah, New York City, Riyadh, Sharjah, Singapore</p>
                    <div className='d-block m-auto img w-75'>
                        <img className='img-fuild' src='https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1625467761357-b1497d.png' />
                    </div>

                    <TeamCard/>
                   <div className='text-body text-center m-auto p-3'>
                    <h2>Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before. </h2>
                    <div>
                        <p>For general queries, contact: <span>help@urbancompany.com</span><span> | For media queries, contact: </span><span> press@urbancompany.com</span></p>
                    </div>
                    <p><strong>You could be a part of our journey. Interested?</strong></p>
                    <Link to={""} className="btn btn-dark"> Apply Now</Link>
                   </div>
                </div>

            </div>
        </section>
    )


}

export default AboutUs