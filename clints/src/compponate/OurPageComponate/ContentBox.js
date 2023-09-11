import React from 'react'

function ContentBox(props) {
  return (
    <div className=" p-4  inner-column ">
            <div className=" text text-center ">

                <h2>{props.title}</h2>
            </div>

            <p className="text text-center ">
                {props.p}
            </p>
        </div>
  )
}

export default ContentBox