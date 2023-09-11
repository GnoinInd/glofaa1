import React from 'react'
import { Link } from 'react-router-dom'

function AboutContentBox(props) {
    return (
        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
                <div className="sec-title">
                    <span className="title">{props.spamtitle}</span>
                    <h2 className='text-muted'>{props.title}</h2>
                </div>

                <p className="text">
                   {props.descreption}
                </p>
                <div className="btn-box">
                <Link to="#" className="theme-btn btn-style-one">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutContentBox