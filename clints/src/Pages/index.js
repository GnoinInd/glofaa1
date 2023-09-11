
import React, { useEffect } from 'react'
import { Link, } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAdminProduct } from "../actions/adminProductAction";
import { toast } from 'react-toastify';
import Advertismentbox from "../compponate/componatesLayout/advertisment"
import Loader from "../compponate/Loader/Loader";
import NavService from '../compponate/componatesLayout/NavService';

import GeoLoaction from '../compponate/GeoLoaction/GeoLoaction';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";






function Index() {
  const {
    products,
    loading, error
  } = useSelector((state) => state.adminproduct);

  const Catogerys = [
    {
      id: 1,
      catogery: "Salon for Women",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"

    }, {
      id: 2,
      catogery: "Womens Therapies",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"

    },
    {
      id: 4,
      catogery: "services for Driving",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"

    },
    {
      id: 5,
      catogery: "Salon for Men",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"

    },
    {
      id: 6,
      catogery: "Men's Therapies",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"

    },
    {
      id: 7,
      catogery: "AC/Appliance Repair",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"

    },
    {
      id: 8,
      catogery: "Home Painting",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"

    },
    {
      id: 9,
      catogery: "Cleaning & Pest Control",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"

    },
    {
      id: 10,
      catogery: "Electricians",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg"

    },
    {
      id: 11,
      catogery: "Plumbers & Carpenters",
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"

    },

  ]

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAdminProduct(error));
  }, [dispatch, error,]);


  const topProduct = Object.values(products).reverse().slice(0, 15)
  const Product1 = Object.values(products).filter(products => products.category === 'Salon for Women')
  const Product2 = Object.values(products).filter(products => products.category === '"Womens Therapies')
  const Product5 = Object.values(products).filter(products => products.category === 'Salon for Men')
  const Product6 = Object.values(products).filter(products => products.category === 'Mens Therapies')
  const Product7 = Object.values(products).filter(products => products.category === 'Appliance Repair')
  const Product9 = Object.values(products).filter(products => products.category === 'Cleaning & Pest Control')
  const Product10 = Object.values(products).filter(products => products.category === 'Electricians')
  const Product11 = Object.values(products).filter(products => products.category === 'Plumbers & Carpenters')


  return (
    <>
      {loading ?
        <Loader /> :
        <>
          <NavService />
          <section className='Hero-Banner m-0'>
            <div className='container h-100'>
              <div className='hero-Contant-box mt-1 mt-md-4 h-100'>
                <h6 className='hero-text-title '>
                  <Link to="/"> <span itemProp="name">Home</span></Link> <span>&nbsp;/&nbsp;</span><Link to="/"> <span itemProp="name">Kolkata</span></Link>
                </h6>
                <h1 className='text-center hero-text-title-main'>Home services, on demand.</h1>
                <GeoLoaction />
                <div className='hero-link-box'>
                  <ul className='hero-link-wraper '>
                    <li ><Link to={`/Product-Categorie/Mens Therapies`}>Men's Therapies</Link></li>
                    <li ><Link to={`/Product-Categorie/Womens Therapies`}>Women's Therapies</Link></li>
                    <li ><Link to={`/Product-Categorie/Appliance Repair`}>Appliance Repair</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>


          {topProduct &&
            <section className='p-0 m-0'>

              <div className="container">
                <div className="Swiper-Box">

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={2}

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
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >


                    {topProduct.map((data) => {
                      return (
                        <SwiperSlide key={data._id}>
                          <Link to={`/product/${data._id}`} className="slide-img">
                            <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />

                          </Link>

                        </SwiperSlide>
                      )
                    })}


                  </Swiper>

                </div>
              </div>
            </section>
          }
          <section>
            <div className="container">
              <Advertismentbox link={"Salon for Women"} img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_716/t_high_res_template/images/growth/luminosity/1661747124999-5ae839.png" />
            </div>
          </section>

          {Product1.length >= 1 &&
            <section>
              <div className="container">
                <div className="best-ofers-box">
                  <div className="ofers-grid-box">
                    <h1 className='text-center ofer-tilte'><strong>{Product1[0].category}</strong></h1>
                    <h5 className='text-center ' >Hygienic & Single use products | Low-contact services</h5>
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product1.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div className=" ofers-crad h-100">
                                <Link to={`/product/${data._id}`} >
                                  <div className="slide-img">
                                    <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />

                                  </div>
                                  <div className=" card-body text-center">

                                    <p className="text-title ">
                                      {data.name}
                                    </p>
                                    <small className="text-center">₹ {data.price}</small>
                                  </div>
                                </Link>
                              </div>

                            </SwiperSlide>
                          )
                        })}

                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          }

          {Product5.length >= 1 &&
            <section>
              <div className="container">
                <div className="best-ofers-box">
                  <div className="ofers-grid-box">
                    <h1 className='text-center ofer-tilte'><strong>{Product5[0].category}</strong></h1>
                    <h5 className='text-center ' >Hygienic & Single use products | Low-contact services</h5>
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product5.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div className=" ofers-crad h-100">
                                <Link to={`/product/${data._id}`} >
                                  <div className="slide-img">
                                    <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />

                                  </div>
                                  <div className=" card-body text-center">

                                    <p className="text-title ">
                                      {data.name}
                                    </p>
                                    <small className="text-center">${data.price}</small>
                                  </div>
                                </Link>
                              </div>

                            </SwiperSlide>
                          )
                        })}

                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          }
          {Product7.length >= 1 &&
            <section>
              <div className="container">
                <div className="container">
                  <div className="best-ofers-box">
                    <div className="ofers-grid-box">
                      <h1 className='text-center ofer-tilte p-top-5'><strong>{Product7[0].category}</strong></h1>
                      <h5 className='text-center ' >Servicing, Repair, Installation & Uninstallation</h5>
                    </div>
                    <div className="ofers-grid-box">

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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product7.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div key={data._id} className="col">
                                <div className="card border-0 pointer ">
                                  <Link to={`/product/${data._id}`} >
                                    <img className="Carousel-img w-100 h-100 " src={data.images[0].url} alt="" itemProp="image" />
                                  </Link>
                                  <div className="card-body m-auto">
                                    <h6 className="card-text ">
                                      {data.name}
                                    </h6>
                                  </div>
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
            </section>

          }

          {Product6.length >= 1 &&
            <section>
              <div className="container">
                <div className="best-ofers-box">
                  <div className="ofers-grid-box">
                    <h1 className='text-center ofer-tilte'><strong>{Product6[0].category}</strong></h1>
                    <h5 className='text-center ' >Hygienic & Single use products | Low-contact services</h5>
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product6.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div className=" ofers-crad h-100">
                                <div className="slide-img">
                                  <Link to={`/product/${data._id}`} className="slide-img">
                                    <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />
                                  </Link>
                                </div>
                                <div className=" card-body text-center">

                                  <p className="text-title ">
                                    {data.name}
                                  </p>
                                  <small className="text-center"></small>
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
            </section>

          }

          {Product2.length >= 1 &&
            <section>
              <div className="container">
                <div className="best-ofers-box">
                  <div className="ofers-grid-box">
                    <h1 className='text-center ofer-tilte'><strong>{Product2[0].category}</strong></h1>
                    <h5 className='text-center ' >Hygienic & Single use products | Low-contact services</h5>
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product2.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div className=" ofers-crad h-100">
                                <div className="slide-img">
                                  <Link to={`/product/${data._id}`} className="slide-img">
                                    <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />
                                  </Link>
                                </div>
                                <div className=" card-body text-center">

                                  <p className="text-title ">
                                    {data.name}
                                  </p>
                                  <small className="text-center"></small>
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
            </section>

          }
          {Product9.length >= 1 &&
            <section>
              <div className="container">
                <div className="best-ofers-box">
                  <div className="ofers-grid-box">
                    <h1 className='text-center ofer-tilte'><strong>{Product9.category}</strong></h1>
                    <h5 className='text-center ' >Hygienic & Single use products | Low-contact services</h5>
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product9.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div className=" ofers-crad h-100">
                                <div className="slide-img">
                                  <Link to={`/product/${data._id}`} className="slide-img">
                                    <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />
                                  </Link>
                                </div>
                                <div className=" card-body text-center">

                                  <p className="text-title ">
                                    {data.name}
                                  </p>
                                  <small className="text-center"></small>
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
            </section>

          }





          <section>
            <div className="container">
              <Advertismentbox link={"services for Driving"} img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1368/t_high_res_template/images/growth/home-screen/1602763387610-2c1c7e.jpeg" />
            </div>
          </section>

          {Product10.length >= 1 &&
            <section>
              <div className="container">
                <div className="best-ofers-box">
                  <div className="ofers-grid-box">
                    <h1 className='text-center ofer-tilte'><strong>{Product10[0].category}</strong></h1>
                    <h5 className='text-center ' >Hygienic & Single use products | Low-contact services</h5>
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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product10.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div className=" ofers-crad h-100">
                                <div className="slide-img">
                                  <Link to={`/product/${data._id}`} className="slide-img">
                                    <img className="Carousel-img " src={data.images[0].url} alt={data.name} itemProp="image" />
                                  </Link>
                                </div>
                                <div className=" card-body text-center">

                                  <p className="text-title ">
                                    {data.name}
                                  </p>
                                  <small className="text-center"></small>
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
            </section>

          }
          {Product11.length >= 1 &&
            <section>
              <div className="container">
                <div className="container">
                  <div className="best-ofers-box">
                    <div className="ofers-grid-box">
                      <h1 className='text-center ofer-tilte p-top-5'><strong>{Product11[0].category}</strong></h1>
                      <h5 className='text-center ' ></h5>
                    </div>
                    <div className="ofers-grid-box">

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
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {Product11.map((data) => {
                          return (
                            <SwiperSlide key={data._id}>

                              <div key={data._id} className="col">
                                <div className="card border-0 pointer ">
                                  <Link to={`/product/${data._id}`} >
                                    <img className="Carousel-img w-100 h-100 " src={data.images[0].url} alt="" itemProp="image" />
                                  </Link>
                                  <div className="card-body m-auto">
                                    <h6 className="card-text ">
                                      {data.name}
                                    </h6>
                                  </div>
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
            </section>

          }

          <section>
            <div className="container">
              <Advertismentbox img="/images/advertiseImg.png" />
            </div>
          </section>

          <section>
            <div className="container">
              <Advertismentbox img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1368/t_high_res_template/images/growth/home-screen/1624344861242-558286.png" />
            </div>
          </section>
          <section>
            <div className="container">
              <Advertismentbox img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1368/t_high_res_template/categories/category_v2/category_3cffdf20.png" />
            </div>
          </section>

        </>
      }
    </>
  )
}
export default Index