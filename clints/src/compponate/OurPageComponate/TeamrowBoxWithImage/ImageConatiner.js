import React from 'react'

function ImageConatiner(props) {
  return (
    <div className="image-column col-lg-6 col-md-12 col-sm-12">
    <div className="inner-column wow fadeInLeft">
        <div className="author-desc">
            <h2>{props.imgTitle}</h2>

        </div>
        <figure className="image-1"><a  className="lightbox-image" data-fancybox="images"><img  src={props.img} alt="" /></a></figure>

    </div>
</div>
  )
}

export default ImageConatiner