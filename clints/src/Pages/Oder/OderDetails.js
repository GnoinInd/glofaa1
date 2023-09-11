import React, { useEffect } from "react";
import "./oder.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../../compponate/Loader/Loader";
import { toast } from "react-toastify";
import { isCancel } from "axios";
import OdersTrackProgarse from "../../compponate/OderProgressBar/OdersTrackProgarse";
import BackToprevNav from "../../compponate/BackTopervNav/BackToprevNav";


const OrderDetails = ({ match }) => {
    const { id } = useParams()
    const dispatch = useDispatch();

    const { order, error, loading } = useSelector((state) => state.orderDetails);


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getOrderDetails(id));
    }, [dispatch, error, id]);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>

                    <div className='Cart-Secton my-oder-page'>
                        <div className='container mt-0'>
                    <BackToprevNav title=''/>

                            <div className="row mt-3 mb-3">
                                <div className="col-md-4">
                                    <div className="card ">
                                        <div className="title">Shipping Info</div>
                                        <div className="info">
                                            <div className="row">
                                                <div className="col-7">
                                                    <span id="heading">Name</span><br />
                                                    <span id="details">{order.user && order.user.name}</span>
                                                </div>
                                                <div className="col-5 pull-right">
                                                    <span id="heading">Phone No.</span><br />
                                                    <span id="details">{order.shippingInfo && order.shippingInfo.phoneNo}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing">
                                            <span id="heading">Address</span><br />
                                            <span id="details">
                                                {order.shippingInfo &&
                                                    `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                                            </span>


                                        </div>
                                        <div className="tracking">
                                            <div className="title">Payment</div>
                                        </div>
                                        <div className="progress-track">
                                            <ul id="progressbar">

                                                {order.paymentInfo ?
                                                    <>
                                                        <li className="step0 active " id="step1">Payment Start</li>
                                                        {order.paymentInfo.status === "succeeded" &&
                                                            <li className={order.paymentInfo.status === "succeeded" ? "step0 text-success success-bg active text-right" : "step0 text-right"} id="step4">succeeded</li>
                                                        }
                                                        {order.paymentInfo.status === "Failed" &&
                                                            <li className={order.paymentInfo.status === "Failed" ? "step0 active red .text-danger danger-bg text-right" : "step0 text-right"} id="step4">Failed</li>
                                                        }
                                                        {order.paymentInfo.status === "Incomplete" &&
                                                            <li className={order.paymentInfo.status === "Incomplete" ? "step0 text-warning warning-bg active text-right" : "step0 text-right"} id="step4">Incomplete</li>
                                                        }
                                                        {order.paymentInfo.status === "Refunded" &&
                                                            <li className={order.paymentInfo.status === "Refunded" ? "step0 active text-info info-bg text-right" : "step0 text-right"} id="step4">Refunded</li>
                                                        }
                                                    </>

                                                    :
                                                    <li className="step0 active " id="step1">Payment Type Not Avilable  </li>
                                                }


                                            </ul>
                                        </div>


                                        <div className="footer">
                                            <div className="row">
                                                <div className="col-2"><img className="img-fluid" src="/images/logo.png" /></div>
                                                <div className="col-10">Want any help? Please &nbsp;<a> contact us</a></div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card ">
                                        <div className="title">Purchase Info</div>
                                        <div className="info pt-0 pb-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <span id="heading">Date</span><br />
                                                    <span id="details">{String(order.createdAt).substr(0, 10)}</span>
                                                </div>
                                                <div className="col-5 pull-right">
                                                    <span id="heading">Order No.</span><br />
                                                    <span id="details">{order && order._id}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tracking">
                                            <div className="title">Tracking Order</div>
                                        </div>
                                        <div className="progress-track">
                                            {order.orderStatus === "Shipped" &&

                                                <OdersTrackProgarse class2="step0 active text-warning warning-bg text-center" class3="step0  text-center " class4="step0  text-right" title='Delivered' />
                                            }
                                            {order.orderStatus === "Processing" &&
                                                <OdersTrackProgarse class2="step0 active text-warning warning-bg text-center" class3="step0 text-info info-bg active text-center" class4="step0  text-right" title='Delivered' />

                                            }
                                            {order.orderStatus === "Delivered" &&
                                                <OdersTrackProgarse class2="step0 active  text-warning warning-bg text-center" class3="step0 text-info info-bg active text-center" class4="step0 text-success success-bg active text-right" title='Delivered' />

                                            }
                                            {order.orderStatus === "Cancelled" &&

                                                <OdersTrackProgarse class2="step0 active  text-warning warning-bg text-center" class3="step0 text-info info-bg active text-center" class4="step0 active text-danger danger-bg text-right" title='Cancelled' />

                                            }
                                        </div>
                                        <div className="pricing" style={{lineHeight:'1.2rem'}}>
                                            {order.orderItems &&
                                                order.orderItems.map((item) => (
                                                    <div key={item.product} className="row mb-2">
                                                        <div className="col-3 " style={{height:"70px"}}>
                                                            <img src={item.image} alt="Product" className="h-100" />
                                                        </div>
                                                        <div className="col-6">
                                                            <Link to={`/product/${item.product}`}>
                                                                <span id="name"> {item.name}</span>
                                                            </Link>
                                                            <br />
                                                            <span>
                                                                Items Qty: {item.quantity}

                                                            </span>
                                                        </div>
                                                        <div className="col-3">
                                                            <span id="price">₹{item.price * item.quantity}</span>
                                                        </div>
                                                    </div>
                                                ))}

                                            <div className="row">
                                                <div className="col-3">
                                                    <span id="name"></span>
                                                </div>
                                                <div className="col-6">
                                                    <span id="name">Tax</span>
                                                </div>
                                                <div className="col-3">
                                                    <span id="price">₹{order.taxPrice}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">
                                                    <span id="name"></span>
                                                </div>
                                                <div className="col-6">
                                                    <span id="name">Shipping Charges</span>
                                                </div>
                                                <div className="col-3">
                                                    <span id="price">₹{order.shippingPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="total">
                                            <div className="row">
                                                <div className="col-9">Total Price</div>
                                                <div className="col-3"><big>₹{order.totalPrice}</big></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </>
            )}
        </>
    );
};

export default OrderDetails;
