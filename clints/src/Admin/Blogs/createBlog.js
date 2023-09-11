import React, { useState, useEffect, useRef } from 'react'
import '../dashbord.css'

import { Link, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createBLOG, getAllAdminBlog, deleteBlog } from "../../actions/blogAction";
import { DELETE_BLOG_RESET } from "../../constants/blogConstants";
import Loader from "../../compponate/Loader/Loader";
import MenuList from '../adminSideNav';
import Pagination from "react-js-pagination";
import { toast } from 'react-toastify';

function CreateBlog() {
    const [OpenForm, setOpenForm] = useState(false)
    const [Delet, setDelet] = useState(false)
    const [fliterBtn, setfliterBtn] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [fliterCategory, setfliterCategory] = useState("");
    const [dltId, setdltId] = useState("")
    const dispatch = useDispatch();
    const { keyword } = useParams()





    // ||||||||| Get  Blog|||||||||||
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };
    const filterRef = useRef()
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

    const {
        Blogs,
        BlogsCount,
        resultPerPage,
        filteredBlogsCount,
        loading, error: getBlogError,
    } = useSelector((state) => state.allBlog);


    let count = filteredBlogsCount;

    const catogeryHandler = (e) => {
        if (e.target.id === "All") {
            setfliterCategory('')
        } else
            setfliterCategory(e.target.id)
    }


    // ||||| for Delete |||||||\\
    const { error: deleteError, isDeleted, loading: dleLoding } = useSelector(
        (state) => state.blogDeleteUpdate
    );

    const handleClickDlted = (id) => {
        setDelet(true)
        setdltId(id)
    }
    const deleteProductHandler = () => {
        if (dleLoding === true) {
            return <Loader />
        }
        dispatch(deleteBlog(dltId));
        setDelet(false)
    };


    // ||||||||| FOr Create Blog|||||||||||
    const { success, error, loading: createLoding } = useSelector(
        (state) => state.blog
    );

    const [NewBlog, setNewBlog] = useState({
        Title: "",
        blogIntro: "",
        post: "",
        category: "",
    });

    const { Title, blogIntro, post, category } = NewBlog;
    const [image, setimage] = useState("https://mdbootstrap.com/img/new/avatars/1.jpg");

    const createBlogSubmitHandler = (e) => {

        if (createLoding === true) {
            return <Loader />
        }
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("Title", Title);
        myForm.set("blogIntro", blogIntro);
        myForm.set("post", post);
        myForm.set("category", category);
        myForm.set("image", image);
        dispatch(createBLOG(myForm));
    };
    const blogDataChange = (e) => {
        if (e.target.name === "image") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setimage(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setNewBlog({ ...NewBlog, [e.target.name]: e.target.value });
        }
    };

    // filter list close function 
    let filterhandler = () => {

        const handler = (e) => {
            if (!filterRef.current.contains(e.target)) {
                setfliterBtn(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (deleteError) {
            toast.error(deleteError);
            dispatch(clearErrors());
        }
        if (getBlogError) {
            toast.error(getBlogError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            toast.success("Blog Deleted Successfully");
            dispatch({ type: DELETE_BLOG_RESET });
        }
        if (success) {
            toast.success("created sucsessfully")
            setOpenForm(false)
            setNewBlog("")
        }

        dispatch(getAllAdminBlog(keyword, getBlogError, fliterCategory));
        filterhandler()
    }, [dispatch, keyword, fliterCategory, getBlogError, deleteError, isDeleted, error, success]);




    return (
        <>
            {loading ? (
                <Loader />
            ) :

                <div className="main modal-open " >

                    <div className='container table-custom-style'>
                        <div className="table-title mt-2">
                            <div className="row justify-content-between">
                                <div className="col-xs-6">
                                    <h2 className=''>Manage Blogs</h2>
                                </div>
                                <div className="col-xs-6">
                                    <a onClick={(e) => setOpenForm(true)} className="btn btn-success" data-toggle="modal"><i className="fa-solid fa-circle-plus"></i> <span>Add New Blog</span></a>
                                    <a className="btn btn-danger" data-toggle="modal"><i className="fa fa-square-minus"></i> <span>Delete</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='row'>

                            <MenuList />
                            <div className=" col-xl-10 ">
                                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                    <div className={fliterBtn ? "btn-group dropup more" : "btn-group dropdwon more"}>
                                        <button onClick={(e) => setfliterBtn(!fliterBtn)} type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Fliter Blogs
                                        </button>
                                        <ul ref={filterRef} class className={fliterBtn ? "dropdown-menu  d-block" : "dropdown-menu"}>
                                            {Catogerys.map((category, i) => (
                                                <li key={i}
                                                    className="category-link ml-2 cursor-pointer"
                                                    onClick={catogeryHandler}
                                                    id={category}
                                                >
                                                    {category}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {!Blogs ?

                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h2 className='text-center  text-primary'>Sorry No Any blog available</h2>
                                        <a onClick={(e) => setOpenForm(true)} className="btn btn-success " data-toggle="modal"><i className="fa-solid fa-circle-plus"></i> <span>Add blog</span></a>



                                    </div>
                                    :

                                    <div className="table-responsive">
                                        <div className="table-wrapper">

                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.No.</th>
                                                        <th>Title</th>
                                                        <th>Catogery</th>
                                                        <th>Image</th>
                                                        <th>View</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Blogs.map((data, i) => {
                                                        return <tr key={data._id}>

                                                            <td>{i + 1}</td>
                                                            <td>{data.Title.slice(0, 50)}</td>
                                                            <td>{data.category}</td>
                                                            <td style={{ width: "25px" }}><img src={data.image.url} /></td>
                                                            <td>

                                                                <Link to={`/admin/BlogPost/${data._id}`}><a className="view " ><i className="fa fa-eye"></i></a></Link>

                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/updateBlog/${data._id}`}>   <a className="edit" ><i className="fa fa-pen-to-square"></i></a></Link>

                                                                <a onClick={() => handleClickDlted(data._id)} className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                                            </td>
                                                        </tr>
                                                    })}


                                                </tbody>
                                            </table>
                                            <div className="clearfix">
                                                {resultPerPage < count && (
                                                    <><div className="hint-text">Showing <b>{resultPerPage}</b> out of <b>{BlogsCount}</b> entries</div><ul className="pagination">
                                                        <Pagination
                                                            activePage={currentPage}
                                                            itemsCountPerPage={resultPerPage}
                                                            totalItemsCount={BlogsCount}
                                                            onChange={setCurrentPageNo}
                                                            nextPageText="Next"
                                                            prevPageText="Prev"
                                                            firstPageText="1st"
                                                            lastPageText="Last"
                                                            itemClass="page-item"
                                                            linkClass="page-link"
                                                            activeClass="pageItemActive"
                                                            activeLinkClass="pageLinkActive" />
                                                    </ul></>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                }

                                <div id="addEmployeeModal" className={OpenForm ? "modal show fade d-block fixed-top " : "modal fade"}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <form onSubmit={createBlogSubmitHandler}>


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add Blog</h4>
                                                    <button type="button" onClick={(e) => setOpenForm(false)} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="row ">

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="Title">Title </label>
                                                                <input type="text" className="form-control" id="Title" name="Title"
                                                                    placeholder=" Type a unquie Title here  "
                                                                    value={Title}
                                                                    onChange={blogDataChange} />
                                                            </div>
                                                        </div>


                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="category">Choose Category</label>
                                                                <select
                                                                    onChange={blogDataChange}
                                                                    className="form-control" name="category" id="category">
                                                                    {Catogerys.splice(1).map((items, i) => {
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
                                                                    onChange={blogDataChange}></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <label for="images"> images</label>
                                                                <input
                                                                    type="file"
                                                                    name="image"
                                                                    accept="image/*"

                                                                    onChange={blogDataChange}
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
                                                                    onChange={blogDataChange}></textarea>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div className="modal-footer">
                                                    <input type="button" onClick={(e) => setOpenForm(false)} className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                    <input type="submit" className="btn btn-success" value="Add" />

                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>

                                <div id="deleteEmployeeModal" className={Delet ? "modal show d-block fade" : "modal fade"}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h4 className="modal-title">Delete Blog</h4>
                                                <button onClick={(e) => setDelet(false)} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Are you sure you want to delete these Records?</p>
                                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                                            </div>
                                            <div className="modal-footer">
                                                <input type="button" onClick={(e) => setDelet(false)} className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                <input type="submit" onClick={
                                                    deleteProductHandler}
                                                    className="btn btn-danger" value="Delete" />
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>}
        </>



    )
}

export default CreateBlog