import React, { useState, useEffect, useRef } from 'react'
import '../dashbord.css'

import { Link, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createJobPost, getAllJobsPost, deleteJobs } from "../../actions/caireerAction";
import { DELETE_JOB_RESET } from "../../constants/CaireerConstans";
import Loader from "../../compponate/Loader/Loader";
import MenuList from '../adminSideNav';
import Pagination from "react-js-pagination";
import { toast } from 'react-toastify';


function JobCreateGet() {
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
        "Web Devloper",
        "Softwear Devloper",
        "Food",
        "Politics",
        "Celebrity",
        "Politics",
        "Travel",
        "Lifestyle"
    ]

    const {
        Jobs,
        JobsCount,
        resultPerPage,
        filteredJobsCount,
        loading, error: getBlogError,
    } = useSelector((state) => state.alljobs);

    let count = filteredJobsCount;

    const catogeryHandler = (e) => {
        if (e.target.id === "All") {
            setfliterCategory('')
        } else
            setfliterCategory(e.target.id)
    }


    // ||||| for Delete |||||||\\
    const { error: deleteError, isDeleted, loading: dleLoding } = useSelector(
        (state) => state.JobsDelete
    );

    const handleClickDlted = (id) => {
        setDelet(true)
        setdltId(id)
    }
    const deleteProductHandler = () => {
        if (dleLoding === true) {
            return <Loader />
        }
        dispatch(deleteJobs(dltId));
        setDelet(false)
    };


    // ||||||||| FOr Create Jobs|||||||||||
    const { success, error, loading: createLoding } = useSelector(
        (state) => state.NewJobPost
    );

    const [NewJobPost, setNewJobPost] = useState({
        category: '',
        jobtitle: '',
        locations: '',
        salary: '',
        jobinfo: '',
        jobdescription: '',
        skills: '',
        vacancy: '',
        experience: '',
        deadline: '',
        emplloymenttatus: '',

    });

    const { category, jobtitle, locations, salary, jobinfo, jobdescription, skills, vacancy, experience, deadline, emplloymenttatus, } = NewJobPost;
    const [image, setimage] = useState(null);

    const createJobSubmitHandler = (e) => {

        if (createLoding === true) {
            return <Loader />
        }
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("category", category);
        myForm.set("jobtitle", jobtitle);
        myForm.set("locationst", locations);
        myForm.set("salary", salary);
        myForm.set("jobinfo", jobinfo);
        myForm.set("jobdescription", jobdescription);
        myForm.set("skills", skills);
        myForm.set("vacancy", vacancy);
        myForm.set("jobdescription", jobdescription);
        myForm.set("experience", experience);
        myForm.set("deadline", deadline);
        myForm.set("emplloymenttatus", emplloymenttatus);
        myForm.set("jobtitleImg", image);
        dispatch(createJobPost(myForm));
    };
    const JobPostDataChange = (e) => {
        if (e.target.name === "jobtitleImg") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setimage(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        } else {
            setNewJobPost({ ...NewJobPost, [e.target.name]: e.target.value });
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
            dispatch({ type: DELETE_JOB_RESET });
        }
        if (success) {
            toast.success("created sucsessfully")
            setOpenForm(false)
            setNewJobPost("")
        }

        dispatch(getAllJobsPost(keyword, getBlogError, fliterCategory));
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
                                    <h2 className=''>Manage Jobs</h2>
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
                                {!Jobs ?

                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h2 className='text-center  text-primary'>Sorry No Any Job Post available </h2>
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
                                                        <th>deadline</th>
                                                        <th>Toatl application</th>
                                                        <th>View</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Jobs.map((data, i) => {
                                                        return <tr key={data._id}>

                                                            <td>{i + 1}</td>
                                                            <td>{data.jobtitle.slice(0, 50)}</td>
                                                            <td>{data.category}</td>
                                                            <td style={{ width: "25px" }}><img src={data?.jobtitleImg?.url} /></td>
                                                            <td>{String (data.deadline).substr(0, 10)}</td>
                                                            <Link to={`/admin/JobAplicaions/${data._id}`}><td> View Apllication: {data.JobAplication.length}</td></Link>
                                                            <td>

                                                                <Link to={`/admin/#/${data._id}`}><a className="view " ><i className="fa fa-eye"></i></a></Link>

                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/UpdateJobPost/${data._id}`}>   <a className="edit" ><i className="fa fa-pen-to-square"></i></a></Link>

                                                                <a onClick={() => handleClickDlted(data._id)} className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                                            </td>
                                                        </tr>
                                                    })}


                                                </tbody>
                                            </table>
                                            <div className="clearfix">
                                                {resultPerPage < count && (
                                                    <><div className="hint-text">Showing <b>{resultPerPage}</b> out of <b>{JobsCount}</b> entries</div><ul className="pagination">
                                                        <Pagination
                                                            activePage={currentPage}
                                                            itemsCountPerPage={resultPerPage}
                                                            totalItemsCount={JobsCount}
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
                                            <form onSubmit={createJobSubmitHandler}>


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Post New job Opening</h4>
                                                    <button type="button" onClick={(e) => setOpenForm(false)} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="row ">

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="jobtitle">job title </label>
                                                                <input type="text" className="form-control" id="jobtitle" name="jobtitle"
                                                                    placeholder=" Type a unquie Title here  "
                                                                    value={jobtitle}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="category">Choose Category</label>
                                                                <select
                                                                    onChange={JobPostDataChange}
                                                                    className="form-control" name="category" id="category">
                                                                    {Catogerys.splice(1).map((items, i) => {
                                                                        return <option key={i} value={items} Selected>{items}</option>
                                                                    })}
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="skills"> skills</label>
                                                                <input type="text" className="form-control" id="skills" name="skills"
                                                                    placeholder=" Type a  skills here  "
                                                                    value={skills}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for=" locations"> locations</label>
                                                                <input type="text" className="form-control" id=" locations" name="locations"
                                                                    placeholder=" Type a  locations here  "
                                                                    value={locations}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="experience"> experience required </label>
                                                                <input type="text" className="form-control" id="experience" name="experience"
                                                                    placeholder=" how much Experinec required "
                                                                    value={experience}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="vacancy"> vacancy</label>
                                                                <input type="number" className="form-control" id="vacancy" name="vacancy"
                                                                    placeholder=" Type a  No of vacancy  "
                                                                    value={vacancy}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="salary">salary</label>
                                                                <input type="number" className="form-control" id="salary" name="salary"
                                                                    placeholder=" Type a  salary for this role "
                                                                    value={salary}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="category">Choose  a emplloyment status</label>
                                                                <select
                                                                    onChange={JobPostDataChange}
                                                                    className="form-control" name="emplloymenttatus" id="emplloymenttatus">
                                                                    <option value='Full-Time' Selected>Full-Time</option>
                                                                    <option value='Part-Time' >Part-Time</option>
                                                                    <option value='Full-Time'>Full-Time</option>
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label for="images"> images</label>
                                                                <input
                                                                    type="file"
                                                                    name="jobtitleImg"
                                                                    accept="image/*"

                                                                    onChange={JobPostDataChange}
                                                                    multiple
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="deadline">deadline </label>
                                                                <input type="date" className="form-control" id="deadline" name="deadline"
                                                                    placeholder=" last Dead Line for Apllying a Job "
                                                                    value={deadline}
                                                                    onChange={JobPostDataChange} />
                                                            </div>
                                                        </div>


                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">

                                                                <label className="required-field" for="jobinfo">brif of Job </label>
                                                                <textarea className="form-control" id="jobinfo" name="jobinfo" rows="4"
                                                                    placeholder="Type Here Short Intro of Blogs"
                                                                    value={jobinfo}
                                                                    onChange={JobPostDataChange}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="jobdescription">Blog Post</label>
                                                                <textarea className="form-control" id="jobdescription" name="jobdescription" rows="4"
                                                                    placeholder="Write a job description here"
                                                                    value={jobdescription}
                                                                    onChange={JobPostDataChange}></textarea>
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
                                                <h4 className="modal-title">Delete Jobs</h4>
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

export default JobCreateGet