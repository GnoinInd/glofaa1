import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getBlogsDetails, updateBlog } from "../../actions/blogAction";
import Loader from "../../compponate/Loader/Loader";
import { toast } from 'react-toastify';
import { UPDATE_BLOG_RESET } from "../../constants/blogConstants";
import MenuList from '../adminSideNav';

const UpdateBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Blog, error } = useSelector(
        (state) => state.blogsDetails
    );
    const {
        loading,
        error: updateError,
        isUpdated,
    } = useSelector((state) => state.blogDeleteUpdate);

    const [Title, setTitle] = useState("");
    const [blogIntro, setblogIntro] = useState(0);
    const [post, setpost] = useState("");
    const [category, setcategory] = useState("");
    const [image, setImage] = useState("");
    const [imagePerivew, setImagePerivew] = useState("");



    const categories = [

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
    ];

    const BlogId = id;

    useEffect(() => {
        if (Blog && Blog._id !== BlogId) {
            dispatch(getBlogsDetails(BlogId));
        } else {
            setTitle(Blog.Title);
            setblogIntro(Blog.blogIntro)
            setcategory(Blog.category)
            setpost(Blog.post)
            setImagePerivew(Blog.image.url);
        }
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (updateError) {
            toast.error(updateError);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            toast.success("Product Updated Successfully");
            dispatch({ type: UPDATE_BLOG_RESET });
            navigate("/admin/createBlog")
        }
    }, [
        dispatch,
        navigate,
        error,
        isUpdated,
        BlogId,
        Blog,
        updateError,
    ]);

    const updateBlogSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("Title", Title);
        myForm.set("blogIntro", blogIntro);
        myForm.set("post", post);
        myForm.set("category", category);
        myForm.set("image", image);
        dispatch(updateBlog(BlogId, myForm));
    };
  
    const updateBlogImagesChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage( reader.result);
            }
        };  

        reader.readAsDataURL(e.target.files[0]);
    };

    return (


        <>
            {loading ? (
                <Loader />
            ) :

                <div className="main modal-open">

                    <div className='container'>
                        <div className="table-title mt-2">
                            <div className="row justify-content-between">
                                <div className="col-xs-12">
                                    <h2 className=''>Manage Blogs</h2>
                                </div>

                            </div>
                        </div>

                        <div className='row'>

                            <MenuList />
                            <div className=" col-xl-10 ">

                                <form onSubmit={updateBlogSubmitHandler}>


                                    <div className="modal-header">
                                        <h4 className="modal-title">Update Blog</h4>
                                        
                                    </div>

                                    <div className="modal-body">
                                        <div className="row ">

                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="Title">Title </label>
                                                    <input type="text" className="form-control" id="Title" name="Title"
                                                        placeholder=" Type a unquie Title here  "
                                                        value={Title}
                                                        onChange={(e) => setTitle(e.target.value)} />
                                                </div>
                                            </div>


                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="category">Choose Category</label>
                                                    <select
                                                        onChange={(e) => setcategory(e.target.value)} value={category}
                                                        className="form-control" name="category" id="category">
                                                        {categories.splice(1).map((items, i) => {
                                                            return <option key={i} value={items} Selected>{items}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="col-sm-12 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="blogIntro">Blog Intro</label>
                                                    <textarea className="form-control" id="blogIntro" name="blogIntro" rows="4"
                                                        placeholder="Type Here Short Intro of Blogs"
                                                        value={blogIntro}
                                                        onChange={(e) => setblogIntro(e.target.value)}></textarea>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 ">
                                                <div className="form-group">
                                                    <span> <img className="w-25 px-3" src={imagePerivew} alt="Avatar Preview" /></span>
                                                    <label for="images"> images</label>
                                                    <input
                                                        type="file"
                                                        name="image"
                                                        accept="image/*"

                                                        onChange={updateBlogImagesChange}
                                                        multiple
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-sm-12 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="post">Blog Post</label>
                                                    <textarea className="form-control" id="post" name="post" rows="4"
                                                        placeholder="Write a Post here"
                                                        value={post}
                                                        onChange={(e) => setpost(e.target.value)}></textarea>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <input type="submit" className="btn d-block m-auto btn-success" value="Update" />

                                </form>



                            </div>
                        </div>


                    </div>
                </div>}
        </>



    );
};

export default UpdateBlog;
