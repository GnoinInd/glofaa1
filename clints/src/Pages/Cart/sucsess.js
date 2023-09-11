import React from 'react'
import { Link } from "react-router-dom"
function sucsess() {
    return (
        <div className='Sucsess-oder-page bg-light'>
            <div className='container mt-0'>
                <div className="card">
                    <div className='card-checkmark'>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Success</h1>
                    <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                    <div className='d-flex justify-content-center align-items-centr mt-3'>
                    <Link to={"/me/order"}><a className='btn btn-sucsess d-block m-auto'>View Oders</a></Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default sucsess