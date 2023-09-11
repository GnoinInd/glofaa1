import React from 'react'
import { Link, } from 'react-router-dom';
function Advertisment(props) {
    return (
        <div className="image-container">
             <Link to={`/Product-Categorie/${props.link}`}>
            <img className="image-addvertise " src={props.img} alt="" itemProp="image" />
            </Link>
        </div>
    )
}

export default Advertisment