import React from 'react'
import { Link } from 'react-router-dom';
function adminSideNav() {
  return (
    <div className=" col-xl-2 ">
                        <ul>
                           
                        <li className="nav-item"><Link to="/admin/dashbord"><a className='nav-link' ><i className="fa fa-home fa-lg"></i> Home </a></Link></li>
                            <li className="nav-item"><Link to="/admin/createProductGet"><a className='nav-link' ><i className="fa fa-tachometer fa-lg"></i> Products </a></Link></li>
                            <li className="nav-item"><Link to="/abc"><a className='nav-link' ><i className="fa fa-line-chart fa-lg"></i> Oders </a></Link></li>
                            <li className="nav-item"><Link to="/abc"><a className='nav-link' ><i className="fa fa-rocket fa-lg"></i> Users </a></Link></li>
                            <li className="nav-item"><Link to="/admin/createBlog"><a className='nav-link' ><i className="fa fa-table fa-lg"></i> Blogs </a></Link></li>
                         
                            <li className="nav-item"><Link to="/admin/CreatJobPost"><a className='nav-link' ><i className="fa fa-street-view fa-lg"></i> Careers </a></Link></li>
                            <li className="nav-item"><Link to="/admin/CreatJobCatogre"><a className='nav-link' ><i className="fa fa-street-view fa-lg"></i> Job Categorie </a></Link></li>
                           
                        </ul>
                    </div>
  )
}

export default adminSideNav