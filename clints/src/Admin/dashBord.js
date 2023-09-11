import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import MenuList from './adminSideNav';
import { useDispatch, useSelector } from "react-redux";
import {clearErrors, getAdminProduct } from "../actions/adminProductAction";
import { toast } from 'react-toastify';

function DashBord() {
    const dispatch = useDispatch();
    const {
        products, error
    } = useSelector((state) => state.adminproduct);
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAdminProduct(error));
    }, [dispatch, error]);

    return (
        <div className="main">
            <div className='container'>
                <div className="card mb-3"><Link to="/admin/dashbord" ><h2 className='p-3 pointer'>Dashboards</h2></Link></div>
                <div className='row'>

                    <MenuList />
                    <div className=" col-xl-9 ">

                        <div className="row dashbord">
                            <div className="col-md-4 col-xl-3">
                                <div className="card bg-c-blue order-card">
                                    <div className="card-block">
                                        <h6 className="m-b-20">Total Product</h6>
                                        <h2 className="text-right"><i className="fa fa-refresh f-left"></i><span>{ products.length}</span></h2>
                                        <p className="m-b-0">Total Stock<span className="f-right">{products.length}</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xl-3">
                                <div className="card bg-c-green order-card">
                                    <div className="card-block">
                                        <h6 className="m-b-20">Orders Received</h6>
                                        <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span>486</span></h2>
                                        <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xl-3">
                                <div className="card bg-c-yellow order-card">
                                    <div className="card-block">
                                        <h6 className="m-b-20">Orders Received</h6>
                                        <h2 className="text-right"><i className=" fa fa-cart-plus f-left"></i><span>486</span></h2>
                                        <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xl-3">
                                <div className="card bg-c-pink order-card">
                                    <div className="card-block">
                                        <h6 className="m-b-20">Orders Received</h6>
                                        <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>486</span></h2>
                                        <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
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

export default DashBord