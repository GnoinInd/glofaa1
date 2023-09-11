import React from 'react'

function OdersTrackProgarse(props) {
    return (
        <ul id="progressbar">

            <li className='step0 active' id="step1">Ordered</li>
            <li className={props.class2} id="step2">Shipped</li>
            <li className={props.class3} id="step3">On the way</li>
            <li className={props.class4} id="step4">{props.title}</li>
        </ul>
    )
}

export default OdersTrackProgarse