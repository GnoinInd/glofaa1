import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateJob, getJobsDetails } from "../../actions/caireerAction";
import Loader from "../../compponate/Loader/Loader";
import { toast } from 'react-toastify';
import { UPDATE_JOB_RESET } from "../../constants/CaireerConstans";
import MenuList from '../adminSideNav';

const UpdateBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, Jobs, error } = useSelector(
        (state) => state.jobsDetails
    );
    const {
        loading: UpLoading,
        error: updateError,
        isUpdated,
    } = useSelector((state) => state.JobsDelete);

    const [category, setCategory] = useState('')
    const [jobinfo, setJobinfo] = useState('')
    const [jobtitle, setjobtitle] = useState('')
    const [locations, setLocations] = useState('')
    const [salary, setSalary] = useState('')
    const [jobdescription, setJobdescription] = useState('')
    const [skills, setSkills] = useState('')
    const [vacancy, setVacancy] = useState('')
    const [experience, setExperience] = useState('')
    const [deadline, setDeadline] = useState('')
    const [emplloymenttatus, setEmplloymenttatus] = useState('')
    const [Images, setImages] = useState('');
    const [ImagesPreview, setImagesPreview] = useState('');



    console.log(Jobs);

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

    const JobsId = id;

    useEffect(() => {
        if (Jobs && Jobs._id !== JobsId) {
            dispatch(getJobsDetails(JobsId));
        } else {

            setCategory(Jobs.category);
            setjobtitle(Jobs.jobtitle);
            setLocations(Jobs.locations)
            setSalary(Jobs.salary)
            setJobinfo(Jobs.jobinfo)
            setJobdescription(Jobs.jobdescription)
            setSkills(Jobs.skills)
            setVacancy(Jobs.vacancy)
            setExperience(Jobs.experience)
            setDeadline(String(Jobs.deadline).substr(0, 10))
            setEmplloymenttatus(Jobs.emplloymenttatus)
            setImagesPreview(Jobs?.jobtitleImg?.url)
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
            dispatch({ type: UPDATE_JOB_RESET });
            navigate("/admin/createBlog")
        }
    }, [
        dispatch,
        navigate,
        error,
        isUpdated,
        JobsId,
        Jobs,
        updateError,

    ]);

    const updateBlogSubmitHandler = (e) => {
        e.preventDefault();
        if (UpLoading === true) {
            return <Loader />
        }
        const myForm = new FormData();
        myForm.set('category', category);
        myForm.set('jobtitle', jobtitle);
        myForm.set('locations', locations)
        myForm.set('salary', salary)
        myForm.set('jobinfo', jobinfo)
        myForm.set('jobdescription', jobdescription)
        myForm.set('skills', skills)
        myForm.set('vacancy', vacancy)
        myForm.set('experience', experience)
        myForm.set('deadline', deadline)
        myForm.set('emplloymenttatus', emplloymenttatus)
        myForm.set("jobtitleImg", Images)

        dispatch(updateJob(JobsId, myForm));
    };
    const updateBlogImagesChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagesPreview(reader.result);
                setImages(reader.result);
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
                                        <h4 className="modal-title">Update Job Post</h4>

                                    </div>

                                    <div className="modal-body">
                                        <div className="row ">

                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="jobtitle">job title </label>
                                                    <input type="text" className="form-control" id="jobtitle" name="jobtitle"
                                                        placeholder=" Type a unquie Title here  "
                                                        value={jobtitle}
                                                        onChange={(e) => setjobtitle(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="category">Choose Category</label>
                                                    <select
                                                        onChange={(e) => setCategory(e.target.value)} value={category}
                                                        className="form-control" name="category" id="category" >
                                                        {categories.splice(1).map((items, i) => {
                                                            return <option key={i} value={items} >{items}</option>
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
                                                        onChange={(e) => setSkills(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for=" locations"> locations</label>
                                                    <input type="text" className="form-control" id=" locations" name="locations"
                                                        placeholder=" Type a  locations here  "
                                                        value={locations}
                                                        onChange={(e) => setLocations(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="experience"> experience required </label>
                                                    <input type="text" className="form-control" id="experience" name="experience"
                                                        placeholder=" how much Experinec required "
                                                        value={experience}
                                                        onChange={(e) => setExperience(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="vacancy"> vacancy</label>
                                                    <input type="number" className="form-control" id="vacancy" name="vacancy"
                                                        placeholder=" Type a  No of vacancy  "
                                                        value={vacancy}
                                                        onChange={(e) => setVacancy(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="salary">salary</label>
                                                    <input type="number" className="form-control" id="salary" name="salary"
                                                        placeholder=" Type a  salary for this role "
                                                        value={salary}
                                                        onChange={(e) => setSalary(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="category">Choose  a emplloyment status</label>
                                                    <select
                                                        onChange={(e) => setEmplloymenttatus(e.target.value)} value={emplloymenttatus}
                                                        className="form-control" name="emplloymenttatus" id="emplloymenttatus">
                                                        <option value='Full-Time'>Full-Time</option>
                                                        <option value='Part-Time' >Part-Time</option>
                                                        <option value='Full-Time'>Full-Time</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label for="images"> images</label>
                                                            <input
                                                                type="file"
                                                                name="jobtitleImg"
                                                                accept="image/*"

                                                                onChange={updateBlogImagesChange}
                                                                multiple
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-6  ">
                                                    <img className="img-fluid  w-50 m-auto" src={ImagesPreview && ImagesPreview} alt=""/>
                                                </div>
                                                </div>

                                            </div>
                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="deadline">deadline </label>
                                                    <input type="date" className="form-control" id="deadline" name="deadline"
                                                        placeholder=" last Dead Line for Apllying a Job "
                                                        value={deadline}
                                                        onChange={(e) => setDeadline(e.target.value)} />
                                                </div>
                                            </div>


                                            <div className="col-sm-12 ">
                                                <div className="form-group">

                                                    <label className="required-field" for="jobinfo">brif of Job </label>
                                                    <textarea className="form-control" id="jobinfo" name="jobinfo" rows="4"
                                                        placeholder="Type Here Short Intro of Blogs"
                                                        value={jobinfo}
                                                        onChange={(e) => setJobinfo(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="jobdescription">Blog Post</label>
                                                    <textarea className="form-control" id="jobdescription" name="jobdescription" rows="4"
                                                        placeholder="Write a job description here"
                                                        value={jobdescription}
                                                        onChange={(e) => setJobdescription(e.target.value)}></textarea>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="modal-footer">

                                        <input type="submit" className="btn btn-success" value="Add" />

                                    </div>

                                </form>



                            </div>
                        </div>


                    </div>
                </div>}
        </>



    );
};

export default UpdateBlog;
