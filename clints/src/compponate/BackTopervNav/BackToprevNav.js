import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackToprevNav(props) {

const navigate = useNavigate()
const BackToPreviousPath = ()=>{
    navigate(-1)

    }
    return (
        <div className='cart-summery'>
            <i className="fa fa-arrow-left-long" onClick={()=>BackToPreviousPath()}></i>
            <h4>{props.title}</h4>
        </div>
    )
}

export default BackToprevNav