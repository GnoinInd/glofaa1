import React, {useState} from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


function Swiperbox(props) {
    const [item, setitem] = useState(props.data)

  return (
    <div className="container">
    <div className="best-ofers-box">
      <div className="ofers-grid-box">
        <h1 className='text-center ofer-tilte'><strong>{props.title}</strong></h1>
        <h5 className='text-center ' >{props.subTitle}</h5>
      </div>
      <div className="ofers-grid-box">
        <div className="Swiper-Box">
        <Swiper
       slidesPerView={1}
       spaceBetween={5}
    
       pagination={{
         clickable: true,
       }}
     
     
      breakpoints={{
       
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[ Pagination, Navigation]}
      className="mySwiper"
    >
      {item.map((e) => {
                return (
                  <SwiperSlide key={e.id}>
                    
                      <div className=" ofers-crad h-100">
                        <div className="slide-img">
                          <img className="Carousel-img " src={e.img} alt="" itemProp="image" />

                        </div>
                        <div className=" card-body text-center">

                          <p className="text-title ">
                            {e.title}
                          </p>
                          <small className="text-center">{e.subtitle}</small>
                        </div>
                      </div>
                   
                  </SwiperSlide>
                )
              })}
      
    </Swiper>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Swiperbox