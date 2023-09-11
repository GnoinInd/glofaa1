import React from 'react'
import { Link } from 'react-router-dom';
function JobCatogery() {
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
                                <a href="#" data-toggle="modal" data-target="#myModal">play_arrow</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            <section className="background-color-white">
                <div className="container">
                    <div id="resent-job-post" >
                        <div className="vertical-space-30"></div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <h3 className="text-end">Filter Jobs Result</h3>
                                <div className="Job-Category-box card">
                                    <p className="title">Job Category</p>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" checked />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">Web Developer (54)</label>
                                    </div>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">User Experience Design (21)</label>
                                    </div>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">Digital Marketer (72)</label>
                                    </div>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">Branding and promotion (54)</label>
                                    </div>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">User Experience Design (21)</label>
                                    </div>

                                </div>
                                <div className="Job-Nature-box card">
                                    <p className="title">Job Nature</p>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" checked />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">Full Time</label>
                                    </div>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">part Time</label>
                                    </div>
                                    <div classname="form-check">
                                        <input type="checkbox" classname="form-check-input" id="exampleCheck1" checked />
                                        <label classname="form-check-label" className="font-color-black" for="exampleCheck1">Hrouly</label>
                                    </div>
                                </div>
                                <div className="Salary-Range-box card">
                                    <p className="title">Salary Range</p>
                                    <p>
                                        <input type="text" id="amount1" className="salery-range" /> <i className="fa fa-minus minus"></i>
                                        <input type="text" id="amount2" className="salery-range" />
                                    </p>

                                    <p className="small-title">Experience Level</p>
                                    <form action="#" className="search-box_search_form">
                                        <select className="dropdown_item_select search-box_search_input">
                                            <option>Select experience level</option>
                                            <option>Select experience level1</option>
                                            <option>Select experience level2</option>
                                        </select>
                                        <p className="small-title">Location</p>
                                        <input className="search-box_search_input Location " placeholder="Location" required="required"
                                            type="search" />
                                        <span className="fa fa-map-marker location-icone"></span>
                                    </form>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-12">
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
                                <div className="vertical-space-25"></div>
                                <div className='Pagination mt-3  py-4'>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}

export default JobCatogery