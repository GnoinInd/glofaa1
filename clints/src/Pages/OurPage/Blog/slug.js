
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getBlogsDetails, newComment, getAllBlog } from "../../../actions/blogAction";
import { NEW_COMMENT_RESET } from "../../../constants/blogConstants";
import Loader from "../../../compponate/Loader/Loader";
import { toast } from 'react-toastify';
import moment from 'moment';



function Catogery() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { Blog, loading, error } = useSelector(
        (state) => state.blogsDetails
    );

    const {  Blogs,  } = useSelector((state) => state.allBlog);

    const { success, error: blogcommentError } = useSelector(
        (state) => state.blogComment
    );

    const [comment, setComment] = useState("");



    const [toggleTab, settoggleTab] = useState(1)
    function toggle(index) {
        settoggleTab(index)
    }


    const commentSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("comment", comment);
        myForm.set("BlogId", id);

        dispatch(newComment(myForm));

    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (blogcommentError) {
            toast.error(blogcommentError);
            dispatch(clearErrors());
        }

        if (success) {
            toast.success("Comment Submitted Successfully");
            setComment("")
            dispatch({ type: NEW_COMMENT_RESET });

        }

        dispatch(getBlogsDetails(id));
        dispatch(getAllBlog());
    }, [dispatch, id, error, blogcommentError, success, toast]);


    let formattedTime = moment(Blog.createdAt).format('MMM/DD/YYYY');


    return (
        <>
            {loading ?
                <Loader /> :
                <section>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-9 post-content" data-aos="fade-up">


                                <div className="single-post">
                                    <div className="post-meta">  <span className="date">{Blog.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span>
                                    </div>
                                    <h1 className="mb-5">{Blog.Title}</h1>
                                    <p><span className="firstcharacter">{Blog?.blogIntro?.slice(0, 1)}</span>{Blog.blogIntro}</p>

                                    <div className='img'>
                                        <figure className="my-4">
                                            <img src={Blog?.image?.url} alt={Blog.Title} />
                                            <figcaption>{Blog?.Title?.slice(0, 50)}</figcaption>
                                        </figure>
                                    </div>
                                    <p style={{ whiteSpace: "pre-wrap" }}>{Blog.post}</p>
                                </div>


                                <div className="comments">
                                    {Blog.comments && Blog.comments[0] ? (
                                        <div className="">
                                            <h5 className="comment-title py-4">{Blog.numOfComments} Comments</h5>
                                            {Blog.comments &&
                                                Blog.comments.map((comnt) => {
                                                    let a = moment(comnt.createdAt);
                                                    let b = moment();
                                                    let days = b.diff(a, 'days');
                                                    return (

                                                        <div key={comnt._id} className="comment d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <div className="avatar avatar-sm  rounded-circle">
                                                                    {comnt.name.slice(0, 2)}
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-2 ms-sm-3">
                                                                <div className="comment-meta d-flex align-items-baseline">
                                                                    <h6 className="me-2 text-capitalize text-bold"> {comnt.name}</h6>
                                                                    {days === 0 ? <span className="text-muted mx-2 ">Today</span> :
                                                                        <span className="text-muted mx-2 ">{days}d ago</span>}

                                                                </div>
                                                                <div className="comment-body">
                                                                    {comnt.comments}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                       
                                    ) : (
                                        <h6 >No Comments Yet</h6>
                                    )}



                                </div>


                                <div className="row justify-content-center mt-5">

                                    <div className="col-lg-12">
                                        <h5 className="comment-title">Leave a Comment</h5>
                                        <form onSubmit={commentSubmitHandler}>
                                            <div className="row">

                                                <div className="col-12 mb-3">
                                                    <label for="comment-message">Message</label>

                                                    <textarea onChange={(e) => setComment(e.target.value)} className="form-control" id="comment-message" placeholder="Enter a comment here" cols="30" rows="10" required></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <input type="submit" className="btn btn-primary" value="Post comment" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="aside-block">

                                    <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => toggle(1)} className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => toggle(2)} className="nav-link" id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected="false">Trending</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => toggle(3)} className="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false">Latest</button>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="pills-tabContent">


                                        <div className={toggleTab === (1) ? "tab-pane fade show active" : "tab-pane fade "} id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">

                                            {Blogs.slice(0, 10).map((data) => {
                                                let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');
                                                return <div key={data._id} className="post-entry-1 border-bottom">
                                                    <div className="post-meta">
                                                        <span className="date">{data.category}</span>
                                                        <span className="mx-1">&#8226;</span>
                                                        <span>{formattedTime}</span>
                                                    </div>
                                                    <h2 className="mb-2">
                                                        <a href={`/Blog/BlogPost/${data._id}`}>{data.Title.slice(0, 100)}</a></h2>
                                                    <p className="mb-4 d-block">{data.blogIntro.slice(0, 100)}</p>
                                                </div>

                                            })}


                                        </div>


                                        <div className={toggleTab === (2) ? "tab-pane fade show active" : "tab-pane fade"} id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab">
                                            {Blogs.slice(10, 20).map((data) => {
                                                let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');
                                                return <div key={data._id} className="post-entry-1 border-bottom">
                                                    <div className="post-meta">
                                                        <span className="date">{data.category}</span>
                                                        <span className="mx-1">&#8226;</span>
                                                        <span>{formattedTime}</span>
                                                    </div>
                                                    <h2 className="mb-2"><a href={`/Blog/BlogPost/${data._id}`}>{data.Title.slice(0, 100)}</a></h2>
                                                    <p className="mb-4 d-block">{data.blogIntro.slice(0, 100)}</p>
                                                </div>

                                            })}
                                        </div>


                                        <div className={toggleTab === (3) ? "tab-pane fade show active" : "tab-pane fade"} id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                                            {Blogs.reverse().slice(0, 10).map((data) => {
                                                let formattedTime = moment(data.createdAt).format('MMM/DD/YYYY');
                                                return <div key={data._id} className="post-entry-1 border-bottom">
                                                    <div className="post-meta">
                                                        <span className="date">{data.category}</span>
                                                        <span className="mx-1">&#8226;</span>
                                                        <span>{formattedTime}</span>
                                                    </div>
                                                    <h2 className="mb-2"><a href={`/Blog/BlogPost/${data._id}`}>{data.Title.slice(0, 100)}</a></h2>
                                                    <p className="mb-4 d-block">{data.blogIntro.slice(0, 100)}</p>
                                                </div>

                                            })}
                                        </div>

                                    </div>
                                </div>




                            </div>

                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Catogery