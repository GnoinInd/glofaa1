import React from 'react'
import { BsFacebook, BsTwitter,BsLinkedin,BsInstagram} from "react-icons/bs";
import { Link } from 'react-router-dom';
function teamcard() {
  return (
    <>
      <div className="TeamSection d-block m-auto px-3">
        <h1 className='text-center text-muted'>Our Leadership Team</h1>
              <div className="row w-100 text-center">


                  <div className="col-xl-3 col-sm-6 mb-5 ">
                      <div className="bg-white rounded shadow-sm py-5 px-4 card "><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm' alt="" />
                          <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item"><Link to='#' className="social-link"><BsFacebook/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link"> <BsTwitter/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsLinkedin/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsInstagram/></Link></li>
                          </ul>
                      </div>
                  </div>

              
                  <div className="col-xl-3 col-sm-6 mb-5 ">
                      <div className="bg-white rounded shadow-sm py-5 px-4 card "><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                          <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item"><Link to='#' className="social-link"><BsFacebook/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link"> <BsTwitter/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsLinkedin/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsInstagram/></Link></li>
                          </ul>
                    
                      </div>
                  </div>

                  <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="bg-white rounded shadow-sm py-5 px-4 card"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                          <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item"><Link to='#' className="social-link"><BsFacebook/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link"> <BsTwitter/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsLinkedin/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsInstagram/></Link></li>
                          </ul>
                      </div>
                  </div>


                  <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="bg-white rounded shadow-sm py-5 px-4 card"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                          <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item"><Link to='#' className="social-link"><BsFacebook/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link"> <BsTwitter/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsLinkedin/></Link></li>
                              <li className="list-inline-item"><Link to='#' className="social-link">  <BsInstagram/></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          </>
  )
}

export default teamcard