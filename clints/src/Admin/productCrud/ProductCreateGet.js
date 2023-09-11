import React, { useState, useEffect, useRef } from 'react'
import '../dashbord.css'

import { Link, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createProduct, getAllAdminProduct, deleteProduct } from "../../actions/adminProductAction";
import { DELETE_PRODUCT_RESET } from "../../constants/adminProductsConstans";
import Loader from "../../compponate/Loader/Loader";
import MenuList from '../adminSideNav';
import { toast } from 'react-toastify';
import Pagination from "react-js-pagination";

function CreateProductGet() {
    const [OpenForm, setOpenForm] = useState(false)
    const [Delet, setDelet] = useState(false)
    const [fliterBtn, setfliterBtn] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [fliterCategory, setfliterCategory] = useState("");
    const [dltId, setdltId] = useState("")

    const dispatch = useDispatch();
    const { keyword } = useParams()
    const filterRef = useRef()




    // ||||||||| Get  Blog|||||||||||


    const Catogerys = [
        "All",
        "Salon for Women",
        "Womens Therapies",
        "services for Driving",
        "Salon for Men",
        "Mens Therapies",
        "Appliance Repair",
        "Home Painting",
        "Cleaning & Pest Control",
        "Electricians",
        "Plumbers & Carpenters"
    ]

    const {
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
        error: getProductError,
    } = useSelector((state) => state.adminproduct);

    let count = filteredProductsCount;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };
    const catogeryHandler = (e) => {
        if (e.target.id === "All") {
            setfliterCategory('')
        } else
            setfliterCategory(e.target.id)
    }


    // ||||| for Delete |||||||\\
    const { error: deleteError, isDeleted, loading: dltLoding } = useSelector(
        (state) => state.productDeleteUpdate
    );

    const handleClickDlted = (id) => {
        setDelet(true)
        setdltId(id)
    }
    const deleteProductHandler = () => {
        if (dltLoding === true) {
            return <Loader />
        }
        dispatch(deleteProduct(dltId));
        setDelet(false)
    };
    // ||||| for Delete |||||||\\



    // ||||||||| FOr Create|||||||||||
    const { success, error, loading } = useSelector(
        (state) => state.productCategory
    );

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [Videolink, setVideolink] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);


    const createCatogrySubmitHandler = (e) => {
        e.preventDefault();
        if (loading === true) {
            return <Loader />
        }
        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("price", price);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.set("videoLink", Videolink);

        images.forEach((image) => {
            myForm.append("images", image);
        });
        dispatch(createProduct(myForm));
    };
    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
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
        if (getProductError) {
            toast.error(getProductError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            toast.success("Product Deleted Successfully");
            dispatch({ type: DELETE_PRODUCT_RESET });
        }
        if (success) {
            toast.success("created sucsessfully")
            setOpenForm(false)
        }

        dispatch(getAllAdminProduct(getProductError, currentPage, fliterCategory, keyword));
        filterhandler()
    }, [dispatch, keyword, fliterCategory, currentPage, getProductError, deleteError, isDeleted, error, success]);


    return (
        <>
            {loading ? (
                <Loader />
            ) :

                <div className="main modal-open">

                    <div className='container  table-custom-style'>
                        <div className="table-title mt-2">
                            <div className="row justify-content-between">
                                <div className="col-xs-6">
                                    <h2 className=''>Manage Prodcuts</h2>
                                </div>
                                <div className="col-xs-6">
                                    <a onClick={(e) => setOpenForm(true)} className="btn btn-success" data-toggle="modal"><i className="fa-solid fa-circle-plus"></i> <span>Add New Prodcut</span></a>
                                    <a  className="btn btn-danger" data-toggle="modal"><i className="fa fa-square-minus"></i> <span>Delete</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='row'>

                            <MenuList />
                            <div className=" col-xl-10 ">
                                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                    <div className={fliterBtn ? "btn-group dropup more" : "btn-group dropdwon more"}>
                                        <button onClick={(e) => setfliterBtn(!fliterBtn)} type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Fliter Products
                                        </button>
                                        <ul ref={filterRef} class className={fliterBtn ? "dropdown-menu  d-block" : "dropdown-menu"}>
                                            {Catogerys.map((category, i) => (
                                                <li key={i}
                                                    className="category-link ml-2  cursor-pointer"
                                                    onClick={catogeryHandler}
                                                    id={category}
                                                >
                                                    {category}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {!products?

                                   <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h2 className='text-center  text-primary'>Sorry No Any Prodcut available </h2>
                                        <a onClick={(e) => setOpenForm(true)} className="btn btn-success " data-toggle="modal"><i className="fa-solid fa-circle-plus"></i> <span>Add Product</span></a>

                                  

                                    </div>
                                    :
                                    <div className="table-responsive">
                                        <div className="table-wrapper">

                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sl.No.</th>
                                                        <th>Name</th>
                                                        <th>Catogery</th>
                                                        <th>Price</th>
                                                        <th>Image</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((data, i) => {
                                                        return <tr key={data._id}>

                                                            <td>{i + 1}</td>
                                                            <td>{data.name}</td>
                                                            <td>{data.category}</td>
                                                            <td>{data.price}</td>
                                                            <td style={{ width: "25px" }}>
                                                                <img src={data.images[0].url} alt={data.name} /></td>

                                                            <td>
                                                                <Link to={`/admin/updateProdcut/${data._id}`}>   <a className="edit" ><i className="fa fa-pen-to-square"></i></a></Link>

                                                                <a onClick={() => handleClickDlted(data._id)} className="delete" data-toggle="modal"><i className="fa fa-trash"></i></a>
                                                            </td>
                                                        </tr>
                                                    })}


                                                </tbody>
                                            </table>
                                            <div className="clearfix">
                                                {resultPerPage < count && (
                                                    <><div className="hint-text">Showing <b>{resultPerPage}</b> out of <b>{productsCount}</b> entries</div><ul className="pagination">
                                                        <Pagination
                                                            activePage={currentPage}
                                                            itemsCountPerPage={resultPerPage}
                                                            totalItemsCount={productsCount}
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
                                            <form onSubmit={createCatogrySubmitHandler}>


                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add Product Catogry</h4>
                                                    <button type="button" onClick={(e) => setOpenForm(false)} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="Title">Product Name</label>
                                                                <input className="form-control"
                                                                    type="text"
                                                                    placeholder="Product Name"
                                                                    required
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="category">Choose Category</label>
                                                                <select
                                                                    onChange={(e) => setCategory(e.target.value)}
                                                                    className="form-control" name="category" id="category">
                                                                    {Catogerys.splice(1).map((items, i) => {
                                                                        return <option key={i} value={items} Selected>{items}</option>
                                                                    })}
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="Title">Price </label>
                                                                <input className="form-control"
                                                                    type="number"
                                                                    placeholder="Price"
                                                                    required
                                                                    onChange={(e) => setPrice(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="Videolink">Videolink </label>
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="Video Link"
                                                                    required
                                                                    onChange={(e) => setVideolink(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <label className="required-field" for="Title">Product Description</label>
                                                                <textarea
                                                                    className="form-control"
                                                                    placeholder="Product Description"
                                                                    value={description}
                                                                    onChange={(e) => setDescription(e.target.value)}
                                                                    cols="30"
                                                                    rows="1"
                                                                ></textarea>
                                                            </div>
                                                        </div>



                                                        <div className="col-sm-12 ">
                                                            <div className="form-group">
                                                                <label for="icon"> images icon</label>
                                                                <input
                                                                    className="form-control"
                                                                    type="file"
                                                                    name="icon"
                                                                    accept="image/*"
                                                                    onChange={createProductImagesChange}
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

export default CreateProductGet