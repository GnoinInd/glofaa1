import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { Country, State } from "country-state-city";
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from "./chekOutStep";
import { toast } from "react-toastify";

function Shiping() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [ serviceDate, setServiceDate] = useState(shippingInfo.serviceDate);


    const shippingCharges = subtotal > 1000 ? 0 : 200;

    const tax = subtotal * 0.18;
  
    const totalPrice = subtotal + tax + shippingCharges;


    const shippingSubmit = (e) => {

        e.preventDefault();
        if (!address || !city || !state || !country || !pinCode || !phoneNo || !serviceDate) {
            toast.error(`please all  shoud be fill`);
            return;
        }

        if (phoneNo.length < 10 || phoneNo.length > 10) {
            toast.error("Phone Number should be 10 digits Long");
            return;
        }

        dispatch(
            saveShippingInfo({ address, city,  serviceDate, state, country, pinCode, phoneNo })
        );
        navigate("/order/confirm");
    };
    return (

        <div className='Cart-Secton'>
            <div className='container mt-0'>

                <CheckoutSteps activeStep={0} />
                <div className=" mt-3  px-0 px-md-5">


                    <div className="row">
                        <div className="col-md-8">
                            <form encType="multipart/form-data"
                                onSubmit={shippingSubmit}>



                                <div className="card p-3 mb-3">

                                    <div className="mt-4 mb-4">

                                        <h6 className="text-uppercase">Billing Address</h6>


                                        <div className="row mt-3">

                                            <div className="col-md-6">

                                                <div className="inputbox mt-3 mr-2">
                                                    <input type="text"

                                                        required
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)} className="form-control" /> <span>Street Address</span> </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="inputbox mt-3 mr-2">
                                                    <input className="form-control" type="text"

                                                        required
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)} /> <span>City</span> </div>


                                            </div>

                                            <div className="col-md-6">

                                                <div className="inputbox mt-3 mr-2">
                                                    <input type="number"

                                                        required
                                                        value={pinCode}
                                                        onChange={(e) => setPinCode(e.target.value)} className="form-control" />
                                                    <span>Pin Code</span> </div>


                                            </div>


                                            <div className="col-md-6">

                                                <div className="inputbox mt-3 mr-2">
                                                    <input type="number"

                                                        required
                                                        value={phoneNo}
                                                        onChange={(e) => setPhoneNo(e.target.value)}
                                                        size="10" className="form-control" /> <span>Phone Number</span> </div>


                                            </div>
                                            <div className="col-md-6">

                                                <div className="inputbox mt-3 mr-2">
                                                    <select
                                                        className="form-control"
                                                        required
                                                        value={country}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                    >
                                                        <option value="">Country</option>
                                                        {Country &&
                                                            Country.getAllCountries().map((item) => (
                                                                <option key={item.isoCode} value={item.isoCode}>
                                                                    {item.name}
                                                                </option>
                                                            ))}
                                                    </select>

                                                </div>



                                            </div>
                                            {country && (
                                                <div className="col-md-6">

                                                    <div className="inputbox mt-3 mr-2">
                                                        <select
                                                            className="form-control"
                                                            required
                                                            value={state}
                                                            onChange={(e) => setState(e.target.value)}
                                                        >
                                                            <option value="">State</option>
                                                            {State &&
                                                                State.getStatesOfCountry(country).map((item) => (
                                                                    <option key={item.isoCode} value={item.isoCode}>
                                                                        {item.name}
                                                                    </option>
                                                                ))}
                                                        </select>

                                                    </div>



                                                </div>

                                            )}

                                            <div className="col-md-6">

                                                <div className="inputbox mt-3 mr-2">
                                                    <lable>Choose date</lable>
                                                    <input type="date"
                                                        min={new Date().toISOString().split('T')[0]}
                                                        required
                                                        value={serviceDate}
                                                        onChange={(e) => setServiceDate(e.target.value)}
                                                        className="form-control" /></div>


                                            </div>

                                        </div>

                                    </div>


                                    <div className="mt-4 mb-4 d-flex justify-content-between">


                                        <Link to={"/me/cart"}>
                                            <span >Previous step</span>
                                        </Link>

                                        <input
                                            type="submit"
                                            value="Continue"
                                            className={state ? "btn btn-success px-4" : "btn btn-dark no-drop"}
                                            disabled={state ? false : true}
                                        />





                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="col-md-4 Checkout">

                            <div className="card card-blue p-3 text-white mb-3">

                                <span>You have to pay</span>
                                <div className="d-flex flex-row align-items-end mb-3">
                                    <h1 className="mb-0 yellow">₹ {totalPrice}</h1>
                                </div>

                                <span>Enjoy all the features and perk after you complete the payment</span>
                                <a className="yellow decoration">Know all the features</a>

                                <div className="hightlight">

                                    <span>100% Guaranteed support and update for the next 5 years.</span>


                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default Shiping