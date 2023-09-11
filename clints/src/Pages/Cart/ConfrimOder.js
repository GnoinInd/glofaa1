import React from "react";
import CheckoutSteps from "./chekOutStep";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > -0 ? 0 : 200;

  const tax = subtotal * 0;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.serviceDate}, ${shippingInfo.serviceDate}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <>
      <div className='Cart-Secton'>
        <div className='container mt-0'>
          <CheckoutSteps activeStep={1} />

          <div className=" mt-3 px-0 px-md-5">


            <div className="row">
              <div className="col-md-8">
                <div className="card p-3 mb-3">

                  <div className="mt-4 mb-4">

                    <h6 className="text-uppercase">Your Cart Items</h6>
                    {cartItems &&
                      cartItems.map((item) => (
                        <div key={item.product} className="mb-2">
                          <div className="row p-2 bg-white border rounded">
                            <div className="col-md-3 mt-1">
                              <img className="img-fluid img-responsive rounded product-image" src={item.image} /></div>
                            <div className="col-md-6 mt-1">
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>{" "}

                              <div className="mt-1 mb-1 spec-1"><span>{item.category}</span></div>

                              <div className="d-flex flex-row align-items-center">
                                <span className="text-">{item.quantity} X ₹ {item.price}</span>
                                <span className="text-primary"> =₹ {item.price * item.quantity}</span>
                              </div>
                            </div>

                          </div>



                        </div>

                      ))}



                  </div>

                </div>
                <div className="mt-4 mb-4 d-flex justify-content-between">


                  <Link to={"/order/shipnig"}>
                    <span >Previous step</span>
                  </Link>

                </div>
              </div>
              <div className="col-md-4 Checkout">
                <div className="row">
                  <div className="col-12">
                    <div className="card card-blue p-3 text-white mb-3">

                      <span className="border-bottom">Shipping Info</span>
                      <div className="d-flex flex-row align-items-end mb-3">
                        <h1 className="mb-0 yellow">{user.name}</h1>
                      </div>

                      <span>Address:</span>
                      <a className="yellow decoration">{address}</a>

                      <div className="hightlight">

                        <span>Phone: {shippingInfo.phoneNo}</span>


                      </div>

                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className='py-3'>Payment Summery</h4>
                        <dl className="dlist-align">
                          <dt>Total price:</dt>
                          <dd className="text-right ml-3">₹ {subtotal}</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Tax:</dt>
                          <dd className="text-right text-danger ml-3">₹ {tax}</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Shiping Charges</dt>
                          <dd className="text-right text-danger ml-3">₹ {shippingCharges}</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Total:</dt>
                          <dd className="text-right text-dark b ml-3"><strong>₹ {totalPrice}</strong></dd>
                        </dl>
                        <hr />

                        <button className="btn btn-out btn-primary btn-square btn-main mt-2" onClick={proceedToPayment}>Proceed To Payment</button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </div>


          </div>
        </div>
      </div>


    </>
  );
};

export default ConfirmOrder;
