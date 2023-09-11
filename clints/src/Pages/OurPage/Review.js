import React from 'react'
import HederBox from "../../compponate/OurPageComponate/HederBox";
import { Link } from 'react-router-dom';
function Review() {
    return (
        <>
            <HederBox headerTitle="Custmer Review" />
            <div className='container'>
                <div className="row  justify-space-between p-1">
                    <div className="col-sm-6 col-12 d-block m-auto ">

                        <div className="img">

                            <img className='img-fuild h-50' src='https://media.istockphoto.com/id/1367691681/vector/five-star-rating-vector-in-paper-cut-style-design-isolated-on-grey-background-feedback.jpg?s=612x612&w=0&k=20&c=G9InAZmZqq7_rpmPyCkVqngtTix5N2AZpjmxvhrtrbc=' />
                        </div>
                    </div>
                    <div className="col-sm-6  d-block m-auto">

                        <div className="card p-4">
                            <div className='card-footer text-muted'><h4 >Rating breakdown</h4></div>
                            <div className="row justify-content-left d-flex">
                                <div className="col-md-4 d-flex flex-column">
                                    <div className="rating-box d-block m-auto">
                                        <h1 className="pt-4 text-center">4.0</h1>
                                        <p className="text-center">out of 5</p>
                                    </div>
                                    <div>
                                        <span className="fa fa-star star-active mx-1"></span>
                                        <span className="fa fa-star star-active mx-1"></span>
                                        <span className="fa fa-star star-active mx-1"></span>
                                        <span className="fa fa-star star-active mx-1"></span>
                                        <span className="fa fa-star star-inactive mx-1"></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="rating-bar0 justify-content-center">
                                        <table className="text-left mx-auto">
                                            <tr>
                                                <td className="rating-label">Excellent</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-5"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">123</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">Good</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-4"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">23</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">Average</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-3"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">Poor</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-2"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">3</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">Terrible</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-1"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">0</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row  mt-4 pt-3">
                    <div className="col-sm-8 review-card ">
                        <h3 className='text-title pb-4 text-muted'>Recently Added Reviews</h3>
                        {[1, 2, 3, 4, 5].map((data, i) => {
                            return (
                                <div key={i} className="card">
                                    <div className="row d-flex">
                                        <div className="">
                                            <img className="profile-pic" src="https://i.imgur.com/V3ICjlm.jpg" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h3 className="mt-2 mb-0">Vikram jit Singh</h3>
                                            <div>
                                                <p className="text-left"><span className="text-muted">4.0</span>
                                                    <span className="fa fa-star star-active ml-3"></span>
                                                    <span className="fa fa-star star-active"></span>
                                                    <span className="fa fa-star star-active"></span>
                                                    <span className="fa fa-star star-active"></span>
                                                    <span className="fa fa-star star-inactive"></span></p>
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <p className="text-muted pt-5 pt-sm-3">10 Sept</p>
                                        </div>
                                    </div>
                                    <div className="row text-left">
                                        <h4 className="blue-text mt-3">"An awesome activity to experience"</h4>
                                        <p className="content">If you really enjoy spending your vacation 'on water' or would like to try something new and exciting for the first time.</p>
                                    </div>

                                </div>
                            )
                        })}
                      <div className='Pagination mt-3  py-4'>
                      <nav aria-label="Page navigation example">
                            {/* <ul className="pagination justify-content-center">
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
                                    <Link className="page-link" to="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </Link>
                                </li>
                            </ul> */}
                        </nav>
                      </div>
                    </div>
                    <div className="col-sm-4 d-block m-0-auto">

                        <h3 className='text-title pb-4 text-muted'>Custemer Testimonials</h3>
                        {[1, 2, 3].map((data, i) => {
                            return (

                                <div key={i} className="card mt-3">
                                    <iframe src="https://www.youtube.com/embed/pWahNIMRxR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div className="card-body text-center">
                                        <h5 className="card-title ">Card title</h5>
                                        <p className="card-text para">Some quick example text to build on the card title content.</p>
                                        <div className="card-footer text-muted">
                                            2 days ago
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </div>
                </div>
            </div>
        </>
    )
}

export default Review