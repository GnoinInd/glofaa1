import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct } from "../actions/adminProductAction";
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavService from '../compponate/componatesLayout/NavService';
import Loader from '../compponate/Loader/Loader';
import { addItemsToCart } from "../actions/cartAction";
// const calculateProductsTotal = (products) =>
//     products.reduce(
//         (total, product) => total + product.price * product.quantity,
//         0
//     );

function ProductCategory() {

    const { catogery } = useParams();

    const dispatch = useDispatch();
    const {
        products,
        loading, error
    } = useSelector((state) => state.adminproduct);

    const ProductCategoreis = Object.values(products).filter(products => products.category === catogery)




    const [quantity, setQuantity] = useState(1);


    const addToCartHandler = (id) => {
        dispatch(addItemsToCart(id, quantity));
        toast.success("Item Added To Cart");
    };



    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getAdminProduct(error));
    }, [dispatch, error]);





    return (


        <>
            {loading ?
                <Loader /> :

                <><section>
                    <div className='container'>

                        <NavService />

                    </div>
                </section>



                    <section>

                        <div className='container'>
                            {ProductCategoreis.length >= 1 ?

                                <div className="  row ">

                                    {ProductCategoreis.map((data, i) => {
                                        return (
                                            <div key={data._id} className="col-md-6 ">
                                                <div className="row p-2 bg-white border rounded">
                                                    <div className="col-md-3 mt-1">
                                                        <img className="img-fluid img-responsive rounded product-image" src={data.images[0].url} /></div>
                                                    <div className="col-md-6 mt-1">
                                                        <h5>{data.name}</h5>
                                                        <div className="d-flex flex-row">
                                                            <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                                        </div>
                                                        <div className="mt-1 mb-1 spec-1"><span>High gloss, high style</span></div>
                                                        <div className="mt-1 mb-1 spec-1"><span>Easy-access hydraulic storage</span></div>
                                                        <p className="text-justify text-truncate para mb-0">{data.description}<br /><br /></p>
                                                    </div>
                                                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <h4 className="mr-1">${data.price}</h4><span className="strike-text">${data.price}</span>
                                                        </div>
                                                        <h6 className="text-success">Free shipping</h6>
                                                        <div className="d-flex flex-column mt-4"> <Link to={`/product/${data._id}`} ><a className="btn btn-primary btn-sm">Details</a></Link>
                                                            <button onClick={() => addToCartHandler(data._id)} className="btn btn-outline-primary btn-sm mt-2" type="button">Add to Cart</button></div>
                                                    </div>
                                                </div>



                                            </div>
                                        );
                                    })}
                                </div>

                                : <div>No Item Yet </div>
                            }
                        </div>
                    </section>


                </>
            }
        </>
    )
}

export default ProductCategory