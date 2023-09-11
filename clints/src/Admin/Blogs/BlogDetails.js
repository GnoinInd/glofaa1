
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getBlogsDetails, deleteComment } from "../../actions/blogAction";
import { NEW_COMMENT_RESET } from "../../constants/blogConstants";
import Loader from "../../compponate/Loader/Loader";
import { toast } from 'react-toastify';
import moment from 'moment';
import MenuList from '../adminSideNav';


function Catogery() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { Blog, loading, error } = useSelector(
        (state) => state.blogsDetails
    );

    const { error: deleteError, isDeleted } = useSelector(
        (state) => state.commentDelete
    );
    const { success, error: blogcommentError } = useSelector(
        (state) => state.blogComment
    );

    const [comment, setComment] = useState("");

    const [BlogId, setBlogId] = useState(id);
    const deleteReviewHandler = (commentId) => {
        dispatch(deleteComment(commentId, BlogId));
    };


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            toast.error(deleteError);
            dispatch(clearErrors());
        } 
        if (blogcommentError) {
            toast.error(blogcommentError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            toast.success("Comment Deleted Successfully");
            // dispatch({ type: DELETE__RESET });
        }

        dispatch(getBlogsDetails(id));
    }, [dispatch, id, error, blogcommentError,deleteError,isDeleted, toast]);


let formattedTime = moment(Blog.createdAt).format('MMM/DD/YYYY');


    return (
        <>
            {loading ?
                <Loader /> :
                <section>
                    <div className='container'>
                        <div className="table-title mt-2">
                            <div className="row justify-content-between">
                                <div className="col-xs-6">
                                    <h2 className=''>Manage Blogs Comments</h2>
                                </div>

                            </div>
                        </div>

                        <div className='row'>

                            <MenuList />
                            <div className=" col-xl-10 ">
                                <div className="post-content" data-aos="fade-up">


                                    <div className="single-post">
                                        <div className="post-meta">  <span className="date">{Blog.category}</span> <span className="mx-1">&#8226;</span> <span>{formattedTime}</span>
                                        </div>
                                        <h1 className="mb-5">{Blog.Title}</h1>
                                        <p><span className="firstcharacter">{Blog?.blogIntro?.slice(0, 1)}</span>{Blog.blogIntro}</p>

                                        <div className='img'>
                                            <figure className="my-4">
                                                <img src={Blog?.image?.url} alt="" />
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

                                                            <div key={comnt._id} className="comment d-flex position-relative mb-4">
                                                                <div className="flex-shrink-0">
                                                                    <div className="avatar avatar-sm  rounded-circle">
                                                                        {comnt.name.slice(0, 2)}
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 ms-sm-3">
                                                                    <div className="comment-meta d-flex align-items-baseline">
                                                                        <h6 className="me-2 text-capitalize text-bold"> {comnt.name}</h6>
                                                                        <span className="text-muted mx-2 ">{days}d ago</span>

                                                                    </div>
                                                                    <div className="comment-body">
                                                                        {comnt.comments}
                                                                    </div>
                                                                </div>
                                                                <a onClick={() =>
                                                                    deleteReviewHandler(comnt._id)
                                                                } className="delete position-absolute  end-0" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                                            </div>
                                                        );
                                                    })}
                                            </div>

                                        ) : (
                                            <h6 >No Comments Yet</h6>
                                        )}



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