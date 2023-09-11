import React, { useEffect, useState,useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Loader from "../../../compponate/Loader/Loader";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllBlog } from "../../../actions/blogAction";
import { toast } from 'react-toastify';
import moment from 'moment'

function Index() {

    const dispatch = useDispatch();

    const [fliterBtn, setfliterBtn] = useState(false)
   
     const    filterRef = useRef()
    const Catogerys = [
        "All",
        "Business",
        "Culture",
        "Sport",
        "Food",
        "Politics",
        "Celebrity",
        "Politics",
        "Travel",
        "Lifestyle"
    ]



    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("");

    const {
        Blogs,
        error, loading
    } = useSelector((state) => state.allBlog);

    const { keyword } = useParams()

    const catogeryHandler = (e) => {
        if (e.target.id === "All") {
            setCategory('')
        } else
            setCategory(e.target.id)
    }

    let filterhandler= ()=>{

        const handler =(e)=>{
            if (!filterRef.current.contains(e.target)){
                setfliterBtn(false)
            }
            }
            document.addEventListener("mousedown", handler);
            return()=>{
            document.removeEventListener("mousedown", handler)
            }
    }


    useEffect(() => {
        
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllBlog(keyword, currentPage, category));
        filterhandler()
    }, [dispatch, keyword, currentPage, category, error]);

    if (Blogs.length <= 0) {
        return <div className='p-5 d-flex flex-column align-items-center  justify-content-center '>
            <h2 className='text-center  text-primary'>Sorry No Any Blog Avilable </h2>

            <a className='btn btn-pripary ' onClick={(e) => setCategory("")}>Go Back</a>
        </div>

    }
    return (
        <>
            {loading ? (
                <Loader />
            ) :

                <main id="main">


                    <section id="hero-slider" className="hero-slider">
                        <div className="container" data-aos="fade-in">
                            <div className="row">
                                <div className="col-12">
                                    <div className="swiper sliderFeaturedPosts">
                                        <Swiper
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Autoplay, Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            {
                                                Blogs.reverse().slice(0, 3).map((data) => {
                                                    return <SwiperSlide>
                                                        <div key={data._id} className="swiper-slide img-bg " style={{ backgroundImage: `url(${data.image.url})` }}>
                                                            <Link to={`/Blog/BlogPost/${data._id}`}> <a className=" d-flex align-items-end">
                                                                <div className="img-bg-inner">
                                                                    <h2 className='text-title text-center text-light'>{data.Title}</h2>
                                                                    <p className='text-light text-juctify'>{data.blogIntro.slice(0,250)}</p>

                                                                </div>
                                                            </a>
                                                            </Link>
                                                        </div>
                                                    </SwiperSlide>
                                                })
                                            }



                                        </Swiper>

                                        <div className="custom-swiper-button-next">
                                            <span className="bi-chevron-right"></span>
                                        </div>
                                        <div className="custom-swiper-button-prev">
                                            <span className="bi-chevron-left"></span>
                                        </div>

                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*     */}


                    <section className="category-section">
                        <div className="container" data-aos="fade-up">

                            <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                <h2>Blogs</h2>

                                <div className={fliterBtn ? "btn-group dropup more" : "btn-group dropdwon more"}>
                                    <button onClick={(e) => setfliterBtn(!fliterBtn)} type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Fliter Blogs
                                    </button>
                                    <ul ref={ filterRef} class className={fliterBtn ? "dropdown-menu  d-block" : "dropdown-menu"}>
                                        {Catogerys.map((category) => (
                                            <li
                                                className="category-link ml-2 cursor-pointer"
                                                key={category}
                                                onClick={catogeryHandler}
                                                id={category}
                                            >
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <div className="row g-5">
                                        {
                                            Blogs.slice(1, 12).map((data) => {
                                                let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');

                                                return <div className="col-lg-4 border-start custom-border">
                                                    <div className="post-entry-1">
                                                        <Link to={`/Blog/BlogPost/${data._id}`}>
                                                            <a>
                                                                <img src={data.image.url} alt="" className="img-fluid" />
                                                            </a>
                                                        </Link>
                                                        <div className="post-meta">
                                                            <span className="date">{data.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span>
                                                        </div>
                                                        <h2>
                                                            <Link to={`/Blog/BlogPost/${data._id}`}>
                                                                <a >{data.Title.slice(0, 150)}</a>
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                </div>




                                            })
                                        }

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {
                                        Blogs.reverse().slice(0, 1).map((data) => {
                                            let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');

                                            return <div className="post-entry-1 lg">

                                                <Link to={`/Blog/BlogPost/${data._id}`}> <a><img src={data.image.url} alt="" className="img-fluid" /></a></Link>
                                                <div className="post-meta"><span className="date">{data.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span></div>
                                                <h2><Link to={`/Blog/BlogPost/${data._id}`}><a >{data.Title.slice(0, 150)}</a></Link></h2>
                                                <p className="mb-4 d-block">{data.blogIntro.slice(0, 300)}</p>

                                            </div>



                                        })
                                    }

                                    {
                                        Blogs.reverse().slice(3, 8).map((data) => {
                                            let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');

                                            return <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">{data.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span></div>
                                                <h2><Link to={`/Blog/BlogPost/${data._id}`}><a >{data.Title.slice(0, 150)}</a></Link></h2>
                                                <span className="author mb-3 d-block">{formattedTime}</span>
                                            </div>



                                        })
                                    }




                                </div>



                            </div>
                        </div>
                    </section>


                    <section className="category-section">
                        <div className="container" data-aos="fade-up">



                            <div className="row g-5">
                                <div className="col-lg-4">
                                    {
                                        Blogs.reverse().slice(1, 2).map((data) => {
                                            let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');

                                            return <div className="post-entry-1 lg">

                                                <Link to={`/Blog/BlogPost/${data._id}`}> <a ><img src={data.image.url} alt="" className="img-fluid" /></a></Link>
                                                <div className="post-meta"><span className="date">{data.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span></div>
                                                <h2><Link to={`/Blog/BlogPost/${data._id}`}><a >{data.Title.slice(0, 150)}</a></Link></h2>
                                                <p className="mb-4 d-block">{data.blogIntro.slice(0, 300)}</p>

                                            </div>



                                        })
                                    }

                                    {
                                        Blogs.reverse().slice(10, 20).map((data) => {
                                            let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');

                                            return <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">{data.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span></div>
                                                <h2><Link to={`/Blog/BlogPost/${data._id}`}><a>{data.Title.slice(0, 150)}</a></Link></h2>
                                                <span className="author mb-3 d-block">{formattedTime}</span>
                                            </div>




                                        })
                                    }




                                </div>

                                <div className="col-lg-8">
                                    <div className="row g-5">
                                        {
                                            Blogs.slice(1, 24).map((data) => {
                                                let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');

                                                return <div className="col-lg-4 border-start custom-border">
                                                    <div className="post-entry-1">
                                                        <Link to={`/Blog/BlogPost/${data._id}`}> <a ><img src={data.image.url} alt="" className="img-fluid" /></a></Link>
                                                        <div className="post-meta"><span className="date">{data.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span></div>
                                                        <h2><Link to={`/Blog/BlogPost/${data._id}`}><a >{data.Title.slice(0, 150)}</a></Link></h2>
                                                    </div>
                                                </div>




                                            })
                                        }



                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </main>


            }
        </>
    )
}

export default Index