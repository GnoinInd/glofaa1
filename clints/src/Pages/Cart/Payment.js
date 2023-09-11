import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./payment.css"
import CheckoutSteps from "./chekOutStep";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
import Loader from '../../compponate/Loader/Loader'
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

import { createOrder, clearErrors } from "../../actions/orderAction";


const Payment = () => {

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
const navigate =useNavigate()
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error, loading, success} = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;
     
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
             
            },
            items:cartItems.name
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          dispatch(createOrder(order));
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      navigate("/order/success");
    }
  }, [dispatch, error,success,loading]);

  return (
    <Fragment>
{
  loading?
  <Loader />
  :<div className='Checkout-box bg-light'>
            <div className='container mt-0'>
              <CheckoutSteps activeStep={2} />

              <div id="Checkout" className="inline mt-4 mb-4">
                <h1>Pay Invoice</h1>
                <div className="card-row">
                  <span className="visa"></span>
                  <span className="mastercard"></span>
                  <span className="amex"></span>
                  <span className="discover"></span>
                </div>
                <form onSubmit={(e) => submitHandler(e)}>
                  <div className="form-group">
                    <label for="PaymentAmount">Payment amount</label>
                    <div className="amount-placeholder">
                      <span>₹</span>
                      <span>{orderInfo && orderInfo.totalPrice}</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="CreditCardNumber">Card number</label>
                    <CardNumberElement id="CreditCardNumber" className="null card-image form-control" />

                  </div>
                  <div className="expiry-date-group form-group">
                    <label for="ExpiryDate">Expiry date</label>
                    <CardExpiryElement id="ExpiryDate" className="form-control" />

                  </div>
                  <div className="security-code-group form-group">
                    <label for="SecurityCode">cvc code</label>
                    <div className="input-container">
                      <CardCvcElement id="SecurityCode" className="form-control" />
                      <i id="cvc" className="fa fa-question-circle"></i>
                    </div>

                  </div>

                  <button id="PayButton" className={payBtn ? " btn btn-block btn-success submit-button mt-3" : "btn mt-3 btn-block no-drop"} ref={payBtn} type="submit">
                    <span className="submit-button-lock"></span>
                    <span className="align-middle">{`Pay - $${orderInfo && orderInfo.totalPrice}`}</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
}

    </Fragment>
  );
};

export default Payment;
