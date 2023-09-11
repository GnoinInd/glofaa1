import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsStarFill, BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, getProductDetails, getAdminProduct } from "../actions/adminProductAction";
import { GrCompliance } from 'react-icons/gr';
import Loader from "../compponate/Loader/Loader";

import "./productDetails.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { addItemsToCart } from "../actions/cartAction";
import { toast } from "react-toastify";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // product details 
    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

    const [quantity, setQuantity] = useState(1);


    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        toast.success("Item Added To Cart");
    };


    //  realtive product
    const {
        products
    } = useSelector((state) => state.adminproduct);
    //  fliter catogry
    const similerProduct = Object.values(products).filter(products => products.category === product.category)

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }

        dispatch(getProductDetails(id));
        dispatch(getAdminProduct())
    }, [dispatch, id, error,]);


    function cartRouterhandler() {
        navigate("/me/cart")
    }
    return (
        <>
            {loading ?
                <Loader /> :


                product &&
                <>
                    <section>
                        <div className='container'>
                            <div id="productVideo" className=''>
                                <div className='product-content-box'>
                                    <div className='product-content-body'>
                                        <div className='product-title'>
                                            <h2 className="text-capitalize"> {product.category} </h2>
                                            <a>
                                                <div className='logo-Buutun'>
                                                    <img
                                                        src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Security-Security-Checked-icon.png"
                                                        alt="" />
                                                </div>
                                                Glofaa Safe
                                            </a>
                                        </div>

                                        <p><BsStarFill /> <span>4.76 (978K)</span></p>
                                        <p><GrCompliance /> <span>23,569 bookings in India this year </span></p>
                                        <a>
                                            <p> <BsFillHeartFill /><span>UC Guide - Professionals and Hairstyles </span> <AiOutlineRight /></p>

                                        </a>
                                    </div>
                                </div>
                                <div className='product-video-box'>
                                    <video id="video" controls autoPlay loop muted>
                                        <source src={product.videoLink} type="video/mp4">
                                        </source>
                                    </video>
                                </div>
                            </div>



                        </div>
                    </section>
                    <section>

                        <div className='container' id="lightSlider">
                            <div className="row ">
                                <div className="col-md-6 product-box-one">
                                    <div className="card">
                                        <div className="demo">

                                            <Carousel showArrows={true} >

                                                {product.images &&
                                                    product.images.map((item, i) => (
                                                        <img
                                                            className="CarouselImage"
                                                            key={i}
                                                            src={item.url}
                                                            alt={`${i} Slide`}
                                                        />
                                                    ))}

                                            </Carousel>

                                        </div>
                                    </div>
                                    <div className="card mt-2">
                                        <h6>Reviews</h6>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-row">
                                                <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i> </div> <span className="ml-1 font-weight-bold">4.6</span>

                                            </div>
                                            <button className="btn btn-outline-warning btn-long cart">Write Reviews</button>
                                        </div>
                                        <hr />
                                        <div className="badges"> <span className="badge bg-dark ">All (230)</span> <span className="badge bg-dark "> <i className="fa fa-image"></i> 23 </span> <span className="badge bg-dark "> <i className="fa fa-comments-o"></i> 23 </span> <span className="badge bg-warning"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="ml-1">2,123</span> </span> </div>
                                        <hr />
                                        <div className="comment-section">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle profile-image" />
                                                    <div className="d-flex flex-column ml-1 comment-profile">
                                                        <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Lori Benneth</span>
                                                    </div>
                                                </div>
                                                <div className="date"> <span className="text-muted">2 May</span> </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/tmdHXOY.jpg" className="rounded-circle profile-image" />
                                                    <div className="d-flex flex-column ml-1 comment-profile">
                                                        <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Timona Simaung</span>
                                                    </div>
                                                </div>
                                                <div className="date"> <span className="text-muted">12 May</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="p-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1">5.0</span>
                                        </div>
                                        <div className="about"> <span className="font-weight-bold">{product.name}</span>
                                            <h4 className="font-weight-bold">${product.price}</h4>
                                        </div>
                                        <div className="buttons">
                                            <button onClick={addToCartHandler}
                                                className="btn btn-outline-warning btn-long cart">Add to Cart</button>
                                            <button onClick={cartRouterhandler}
                                                className="btn btn-warning btn-long ml-2 buy">View Cart</button>
                                        </div>
                                        <hr />
                                        <div className="product-description">

                                            <div className="d-flex flex-row align-items-center"> <i className="fa fa-tag text-primary"></i> <span className="ml-1 text-primary text-bold">{product.category}</span> </div>
                                            <div className="mt-2"> <span className="font-weight-bold">Description</span>
                                                <p className="text-justyfy">{product.description}</p>
                                                <div className="bullets">
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Best in Quality</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Anti-creak joinery</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Sturdy laminate surfaces</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Relocation friendly design</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">High gloss, high style</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Easy-access hydraulic storage</span> </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="similar-products mt-2"> <span>Similar items:</span>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={2}
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
                                                540: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 20,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 40,
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 50,
                                                },
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper "
                                        >
                                            <div className="grid-row">
                                                {similerProduct.map((data) => {
                                                    return (
                                                        <SwiperSlide key={data._id}>

                                                            <a href={`/product/${data._id}`}>
                                                                <div className="card border p-1" > <img className="border-0 card-img-top" src={data.images[0].url} alt={data.name} />
                                                                    <div className="card-body">
                                                                        <p className="bullet-text text-center"><span className="me-3 mx-3">{data.name} <br/> </span>${data.price}</p>
                                                                    </div>
                                                                </div>

                                                            </a>

                                                        </SwiperSlide>
                                                    );
                                                })}
                                            </div>
                                        </Swiper>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </section></>

            }
        </>
    )
}

export default ProductDetails



