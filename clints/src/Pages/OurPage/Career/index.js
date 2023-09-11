import React from 'react'
import { Link } from 'react-router-dom';
const Index = () => {
    return (
        <>


            <div id="intro">
                <div className='conatainer'>
                    <div className="career-hero">
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="font-color-white">Find Jobs Now more Easy Way</h2>
                                <p className="font-color-white">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida,
                                    mollis suspendisse pretium dictumst inceptos mattis euismod lorem nulla, magna duis nostra
                                    sodales luctus nulla praesent fermentum a elit mollis purus aenean curabitur eleifend </p>
                                <a to="#" className='btn' data-toggle="modal" data-target="#myModal">Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                <div className="container">
                    <div id='Job-Category'>

                        <h3 className="text-center">Choose Job Category</h3>
                        <div className="vertical-space-30"></div>
                        <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                            suspendisse pretium dictumst inceptos mattis euismod
                        </p>
                        <div className="vertical-space-60">
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-1.png" alt="" />
                                    </div>
                                    <h6>Education & Training</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>36 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-2.png" alt="" />
                                    </div>
                                    <h6>Sales and Marketing</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>72 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-3.png" alt="" />
                                    </div>
                                    <h6>Computer Programing</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>42 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-4.png" alt="" />
                                    </div>
                                    <h6>Customer Support</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>18 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-5.png" alt="" />
                                    </div>
                                    <h6>Design & Multimedia</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>48 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-6.png" alt="" />
                                    </div>
                                    <h6>Web Development</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>94 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50 margin-left-18">
                                <div className="box background-color-white-light">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-7.png" alt="" />
                                    </div>
                                    <h6>Medical/Pharma</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>64 Job
                                        Posts</span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 max-width-50">
                                <div className="box background-color-white-light ">
                                    <div className="circle">
                                        <img src="/images/icone/service-icone-8.png" alt="" />
                                    </div>
                                    <h6>Engineer/Architects</h6>
                                    <a to="#" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>52 Job
                                        Posts</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-space-40">

                        </div>
                        <Link to={"/Career/CareerCatogery"} className="Brows-All-Category"><a>Brows All Category</a></Link>
                    </div>
                </div>
            </section>


            <section className="background-color-white">
                <div className="container"></div>
                <div id="resent-job-post" className="text-center">
                    <h3 className="text-center">Recent Job Post</h3>
                    <div className="vertical-space-30"></div>
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60"></div>
                    <div className="detail">
                        <Link to={"/OurPage/Career/abc"} className="card p-2">
                            <div className="row w-100 m-auto">

                                <div className="col-sm-2 product-card-list">

                                    <img src="/images/job-post-icone-1.png" alt="John Doe" className="img-fuild" />
                                </div>
                                <div className="col-sm-6">

                                    <div className='media-body text-left  text-align-center'>
                                        <h6>Jopitar looking for a senior UX Designer</h6>
                                        <i className="large material-icons">account_balance</i>
                                        <span className="text">Jopitar inc.</span>
                                        <br />
                                        <i className="large material-icons">place</i>
                                        <span className="text font-size">11907 Doyle Cape Cydneyview</span>
                                    </div>
                                </div>
                                <div className="col-sm-4 float-right  text-align-center">
                                    <div className="row juctify-conten-center text-center align-itmes-center">
                                        <div className="col-sm-12">
                                            <a to="#" className="part-full-time">Part Time</a>
                                        </div>
                                        <div className="col-sm-12">
                                            <p className="date-time">Deadline: May 23, 2018</p>
                                        </div>

                                    </div>



                                </div>


                            </div>
                        </Link>
                    </div>
                    <div className="vertical-space-20"></div>
                    <div className="job-list">
                        <Link to={"/OurPage/Career/JobCatogery"} className="Open-Jobs-Page margin-auto">Open Jobs Page</Link>
                        <div className='Pagination mt-3  py-4'>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" to="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" to="#">1</a></li>
                                    <li className="page-item"><a className="page-link" to="#">2</a></li>
                                    <li className="page-item"><a className="page-link" to="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" to="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Index