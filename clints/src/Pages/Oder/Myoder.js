import React, { useEffect, useState } from "react";
import './oder.css'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../../compponate/Loader/Loader";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";
import BackToprevNav from "../../compponate/BackTopervNav/BackToprevNav";

const MyOrders = () => {
    const dispatch = useDispatch();



    const { loading,
        error,
        orders,
        ordersCount,
        resultPerPage,
        filteredordersCount, } = useSelector((state) => state.myOrders);

    const [currentPage, setCurrentPage] = useState(1);
    const [orderStatus, setOrderStatus] = useState("");
    const [keyword, setKeyword] = useState("");
    const [keywords, setKeywords] = useState("");
    const [isChecked, setIsChecked] = useState(null)

    const { user } = useSelector((state) => state.user);


    const searchSubmitHandler = (e) => {
        e.preventDefault();
        setKeyword(keywords);

    };
    let count = filteredordersCount;
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const handleChange = async (e) => {
        setIsChecked(e.target.checked)
        if (isChecked === true) {
            setOrderStatus(e.target.value)
        } else {
            setOrderStatus('')
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(myOrders(keyword, currentPage, orderStatus));
    }, [dispatch, error, keyword, currentPage, orderStatus]);

    return (
        <>


            {loading ? (
                <Loader />
            ) : (



                <div className='bg-light '>
                    <div className="container">
                     <BackToprevNav title='All Oders'/>
                        <div id="resent-job-post" >
                            <form onSubmit={searchSubmitHandler}>
                                <div className="d-flex mb-3 mt-3 ">
                                    <div className="form-outline w-100">
                                        <input type="search"
                                            onChange={(e) => setKeywords(e.target.value)} id="form1" placeholder="Search" className="form-control" />

                                    </div>
                                    <button type="submit" className="btn btn-primary " style={{ width: '6%' }}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                            <div className="vertical-space-30"></div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="Job-Category-box h-100 card">
                                        <h5 className="title border-top-0 border-right-0 border-left-0 border p-1">Filters</h5>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="text-muted mb-1 mt-3">ORDER STATUS</p>
                                                <div className="form-check">
                                                    <input type="checkbox" onChange={(e) => handleChange(e)} value='Delivered' className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black" for="exampleCheck1">Delivered</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox"
                                                        onChange={(e) => handleChange(e)} value='Cancelled' className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black" for="exampleCheck1">Cancelled</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" onChange={(e) => handleChange(e)} value='Processing'
                                                        className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black" for="exampleCheck1">Proccesing</label>
                                                </div>


                                            </div>
                                            <div className="col-12">
                                                <p className="text-muted mb-1 mt-3">ORDER TIME</p>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black" for="exampleCheck1">Last 30 days</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black"  for="exampleCheck1">2022</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black" for="exampleCheck1">2021</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black"  for="exampleCheck1">2020</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label font-color-black"  for="exampleCheck1">Older</label>
                                                </div>

                                            </div>
                                        </div>


                                    </div>


                                </div>
                                <div className="col-lg-8 col-md-12">

                                    {orders.length >= 1 ?
                                        orders.map((data) => {

                                            return (
                                                <div className="detail">
                                                    <div className="card p-2">
                                                        <div className="row w-100 m-auto">

                                                            <div className="col-sm-2 product-card-list">

                                                                <img src={data.orderItems[0]?.image} alt={data.orderItems[0]?.name} className="img-fuild" />
                                                            </div>
                                                            <div className="col-sm-5">

                                                                <div className='media-body text-left  text-align-center'>
                                                                    <h6>{data.orderItems[0]?.name}</h6>

                                                                    {data.paymentInfo.status &&
                                                                        <>
                                                                            <i className="large font-size material-icons">Payment Status </i>
                                                                            <span className={data.paymentInfo.status === 'succeeded' ? ' text  text-success' : data.paymentInfo.status === 'Failed' ? 'text text-danger' : 'text text-warning'}>{data.paymentInfo.status}</span>
                                                                            <br />
                                                                        </>
                                                                    }
                                                                    <span className="text font-size">Items Qty: {data.orderItems.length} </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-1 m-auto">

                                                                <div className='media-body text-center  text-align-center'>
                                                                    <span className="text">₹{data.totalPrice}</span>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4 float-right  text-align-center">
                                                                <div className="row juctify-conten-center text-center align-itmes-center">
                                                                    <div className="col-sm-12 mt-2">
                                                                        <Link to={`/order/details/${data._id}`} >  <a className="part-full-time">Track</a></Link>
                                                                    </div>
                                                                    <div className="col-sm-12 mt-2">
                                                                        <p className="date-time m-0">Status: <span className={data.orderStatus === 'Delivered' ? 'text-success' : data.orderStatus === 'Cancelled' ? 'text-danger' : 'text-warning'} >{data.orderStatus}</span></p>
                                                                        <p className="date-time text-primary m-0"><span className="px-2"><i className="fa fa-star"></i></span>Rate & Review Product</p>
                                                                    </div>

                                                                </div>



                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })

                                        : <div className="detail">
                                            <div className="card p-2">
                                                <h4 className="text-center">No  Any Oders :</h4>
                                            </div>
                                        </div>
                                    }



                                    <div className="vertical-space-25"></div>
                                     {resultPerPage < count && (
                                                <><div className="hint-text">Showing <b>{resultPerPage}</b> out of <b>{ ordersCount}</b> entries</div><ul className="pagination">
                                                    <Pagination
                                                        activePage={currentPage}
                                                        itemsCountPerPage={resultPerPage}
                                                        totalItemsCount={ordersCount}
                                                        onChange={setCurrentPageNo}
                                                        nextPageText="Next"
                                                        prevPageText="Prev"
                                                        firstPageText="1st"
                                                        lastPageText="Last"
                                                        itemclassName="page-item"
                                                        linkclassName="page-link"
                                                        activeclassName="pageItemActive"
                                                        activeLinkclassName="pageLinkActive" />
                                                </ul></>
                                            )}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>





            )}
        </>
    );
};

export default MyOrders;
