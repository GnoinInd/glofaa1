import React from 'react'
import { Link, } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function NavService(props) {
  const Catogerys = [
    {
      id: 1,
      catogery: "Salon for Women",
      img: "/images/icone/women-salon.png"

    }, {
      id: 2,
      catogery: "Womens Therapies",
      img: "/images/icone/women-therpi.png"

    },
    {
      id: 4,
      catogery: "services for Driving",
      img: "/images/icone/driving.png"

    },
    {
      id: 5,
      catogery: "Salon for Men",
      img: "/images/icone/men-salon.png"

    },
    {
      id: 6,
      catogery: "Men's Therapies",
      img: "/images/icone/men-therpi.png"

    },
    {
      id: 7,
      catogery: "Appliance Repair",
      img: "/images/icone/applince.png"

    },
    {
      id: 8,
      catogery: "Home Painting",
      img: "/images/icone/home-paint.png"

    },
    {
      id: 9,
      catogery: "Cleaning & Pest-Control",
      img: "/images/icone/cleaning.png"

    },
    {
      id: 10,
      catogery: "Electricians",
      img: "/images/icone/electrician-icon.png"

    },
    {
      id: 11,
      catogery: "Plumbers & Carpenters",
      img: "/images/icone/plum-icon.png"

    },

  ]

  return (
    <div className="bg-light service-categores">
      <div className="container p-0">
        <div className="Swiper-Box p-0 m-0">

          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={5000}
            loop={true}
            grabCursor={true}
            keyboardcontrol="true"
            pagination={{
              clickable: true,
            }}


            breakpoints={{
              370: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              540: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >



            <div className="grid-row ">

              {Catogerys.map((e) => {
                return (
                  <SwiperSlide key={e.id}>
                    <Link  to={`/Product-Categorie/${e.catogery}`}>
                      <div className='service-card m-auto'>
                      <div className='service-catogery-icon'>
                        <img src={e.img} alt='' />
                      </div>
                      <p className='service-title'>{e.catogery}</p>
                      </div>
                    </Link>

                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default NavService