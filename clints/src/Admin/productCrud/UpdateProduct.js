import React, { useEffect, useState } from "react";
import '../dashbord.css'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails, updateProduct } from "../../actions/adminProductAction";
import Loader from "../../compponate/Loader/Loader";
import { toast } from 'react-toastify';
import { UPDATE_PRODUCT_RESET } from "../../constants/adminProductsConstans";
import MenuList from '../adminSideNav';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const UpdateBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { product, error, loading } = useSelector(
        (state) => state.productDetails
    );

    const {
        loading: updateLoding,
        error: updateError,
        isUpdated,
    } = useSelector((state) => state.productDeleteUpdate);

    const [Name, setName] = useState("");
    const [Price, setPrice] = useState(0);
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState("");
    const [Videolink, setVideolink] = useState(0);
    const [Images, setImages] = useState([]);
    const [ImagesPreview, setImagesPreview] = useState([]);


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

    const ProductId = id;

    useEffect(() => {
        if (product && product._id !== ProductId) {
            dispatch(getProductDetails(ProductId));
        } else {
            setName(product.name)
            setPrice(product.price)
            setDescription(product.description)
            setCategory(product.category)
            setVideolink(product.videoLink)
            setImagesPreview(product.images)
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
            navigate("/admin/createProductGet")
            dispatch({ type: UPDATE_PRODUCT_RESET });
        }
    }, [
        dispatch,
        navigate,
        error,
        isUpdated,
        ProductId,
        product,
        updateError,
    ]);

    const updateProductSubmitHandler = (e) => {
        if (updateLoding === true) {
            return <Loader />
        }
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", Name);
        myForm.set("price", Price);
        myForm.set("description", Description);
        myForm.set("category", Category);
        myForm.set("videoLink", Videolink)
        Images.forEach((image) => {
            myForm.append("images", image);
        });
        dispatch(updateProduct(ProductId, myForm));
    };

    const updateProductImagesChange = (e) => {
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




    return (


        <>
            {loading ? (
                <Loader />
            ) :

                <div className="main modal-open">

                    <div className='container table-custom-style'>
                        <div className="table-title mt-2">
                            <div className="row justify-content-between">
                                <div className="col-xs-6">
                                    <h2 className=''>Manage Prodcuts</h2>
                                </div>
                                <div className="col-xs-6">
                                    </div>
                            </div>
                        </div>

                        <div className='row'>

                            <MenuList />
                            <div className=" col-xl-10 ">

                                <form onSubmit={updateProductSubmitHandler}>


                                    <div className="modal-header">
                                        <h4 className="modal-title">Update Product</h4>

                                    </div>

                                    <div className="modal-body">
                                        <div className="row ">

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label className="required-field" for="name">Name </label>
                                                    <input type="text" className="form-control" id="name" name="name"

                                                        value={Name}
                                                        onChange={(e) => setName(e.target.value)} required />
                                                </div>
                                            </div>


                                            <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="category">Choose Category</label>
                                                    <select
                                                        onChange={(e) => setCategory(e.target.value)} value={Category}
                                                        className="form-control" name="category" id="category">
                                                        {Catogerys.splice(1).map((items, i) => {
                                                            return <option key={i} value={items} Selected>{items}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div> <div className="col-sm-6 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="Title">price </label>
                                                    <input type="text" className="form-control" id="Title" name="price"

                                                        value={Price}
                                                        onChange={(e) => setPrice(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 ">
                                                <label for="images"> images</label>
                                                <div className="update-crousel"> <Carousel showArrows={true} >

                                                    {ImagesPreview &&
                                                        ImagesPreview.map((item, i) => (
                                                            <img
                                                                className="CarouselImage"
                                                                key={i}
                                                                src={item.url}
                                                                alt={`${i} Slide`}
                                                            />
                                                        ))}

                                                </Carousel>
                                                </div>
                                                <div className="form-group">

                                                    <input
                                                        type="file"
                                                        name="image"
                                                        accept="image/*"

                                                        onChange={updateProductImagesChange}
                                                        multiple
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 ">
                                                <label className="required-field" for="videoLink">Video Link</label>
                                                <div className="m-auto h-75" >
                                                    <video className=" m-auto w-100 h-100 " id="video" controls autoPlay loop muted>
                                                        <source src={Videolink} type="video/mp4">
                                                        </source>
                                                    </video></div>
                                                <div className="form-group ">

                                                    <input type="text" className="form-control" id="videoLink" name="videolink"

                                                        value={Videolink}
                                                        onChange={(e) => setVideolink(e.target.value)} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 ">
                                                <div className="form-group">
                                                    <label className="required-field" for="description">Prodcut Details</label>
                                                    <textarea className="form-control" id="description" name="description" rows="4"
                                                        placeholder="Type Here Short Intro of Blogs"
                                                        value={Description}
                                                        onChange={(e) => setDescription(e.target.value)} required></textarea>
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
