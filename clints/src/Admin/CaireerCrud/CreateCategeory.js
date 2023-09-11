import React, { useState, useEffect, useRef } from 'react'
import '../dashbord.css'
import { Link, useParams, } from 'react-router-dom';
import MenuList from '../adminSideNav';
import { toast } from 'react-toastify';
import axios from 'axios';



function JobCreateGet() {
    const [OpenForm, setOpenForm] = useState(false)
    const [Delet, setDelet] = useState(false)
    const [dltId, setdltId] = useState("")
    const [GetCatogeryData, setGetCatogeryData] = useState('')


    // ||||||||| Get  Blog|||||||||||
    const getAllJobCatogery = async (e) => {
        try {
            let { data } = await axios.get(`/api/v1/JobCategery`);
            setGetCatogeryData(data.JobCatogerys)
        } catch (error) {
            toast(error.response.data.message)
        }
    };



    // ||||| for Delete |||||||\\

    const handleClickDlted = (id) => {
        setDelet(true)
        setdltId(id)
    }
    const deleteProductHandler = async () => {

        try {
            const { data } = await axios.delete(`/api/v1/admin/JobCategery/${dltId}`);
            if (data.sucsess===true) {
                setDelet(false)
                toast(data.sucsess)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
       
    };


    // ||||||||| FOr Create Jobs Categry|||||||||||

    const [category, setCategory] = useState('');
    const [image, setimage] = useState(null);


    const JobPostDataChange = (e) => {
        if (e.target.name === "categoryIcone") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setimage(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const createJobSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { "Content-Type": "multipart/form-data" } };
            const myForm = new FormData();
            myForm.set("category", category);
            myForm.set("categoryIcone", image);
            const { data } = await axios.post(`/api/v1/admin/New/JobCategery`, myForm, config);
           
           
        } catch (error) {
            toast(error.response.data.message)
        }
    };
    // filter list close function 


    useEffect(() => {
        getAllJobCatogery()



    }, []);

    console.log(GetCatogeryData);


    return (
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

                        {!GetCatogeryData ?

                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h2 className='text-center  text-primary'>Sorry No Any Job Categorie available </h2>
                                <a onClick={(e) => setOpenForm(true)} className="btn btn-success " data-toggle="modal"><i className="fa-solid fa-circle-plus"></i> <span>Add blog</span></a>



                            </div>
                            :

                            <div className="table-responsive">
                                <div className="table-wrapper">

                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Sl.No.</th>

                                                <th>Catogery</th>
                                                <th>Image</th>

                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {GetCatogeryData.map((data, i) => {
                                                return <tr key={data._id}>

                                                    <td>{i + 1}</td>

                                                    <td>{data.category}</td>
                                                    <td style={{ width: "25px" }}><img src={data?.categoryIcone?.url} /></td>

                                                    <td>
                                                        <Link to={`/admin/UpdateJobPost/${data._id}`}>   <a className="edit" ><i className="fa fa-pen-to-square"></i></a></Link>

                                                        <a onClick={() => handleClickDlted(data._id)} className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                                    </td>
                                                </tr>
                                            })}


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        }

                        <div id="addEmployeeModal" className={OpenForm ? "modal show fade d-block fixed-top " : "modal fade"}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <form onSubmit={createJobSubmitHandler}>


                                        <div className="modal-header">
                                            <h4 className="modal-title">Create a New job Categorie</h4>
                                            <button type="button" onClick={(e) => setOpenForm(false)} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="row ">

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label className="required-field" for="category">Categorie </label>
                                                        <input type="text" className="form-control" id="category" name="category"
                                                            placeholder=" Type a unquie Title here  "
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label for="categoryIcone"> images</label>
                                                        <input
                                                            type="file"
                                                            name="categoryIcone"
                                                            accept="image/*"

                                                            onChange={JobPostDataChange}
                                                            multiple
                                                        />
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
        </div>



    )
}

export default JobCreateGet