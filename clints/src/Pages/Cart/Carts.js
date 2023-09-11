import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import BackToprevNav from '../../compponate/BackTopervNav/BackToprevNav';


const calculateProductsTotal = (products) =>
    products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );


function Cart() {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const increaseQuantity = (id, quantity) => {
    
        const newQty = quantity + 1;
        dispatch(addItemsToCart(id, newQty));
    };

    const decreaseQuantity = (id, quantity) => {
        if (quantity >= 1) {
            const newQty = quantity - 1;
            dispatch(addItemsToCart(id, newQty));

        }
        if (quantity === 0) {
            dispatch(removeItemsFromCart(id));
        }
    };

    const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };

    const chekoutHandler = () => {
        navigate("/order/shipnig")
    }


    return (
        <>
            <div className='Cart-Secton'>
                <div className='container'>
                    {cartItems.length === 0 ?

                        <div className="container-fluid  mt-100">
                            <div className="row">

                                <div className="col-md-12">

                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Cart</h5>
                                        </div>
                                        <div className="card-body cart">
                                            <div className="col-sm-12 empty-cart-cls text-center">
                                                <img src="https://i.imgur.com/dCdflKN.png" className=" w-25 h-25 img-fluid mb-4 mr-3" />
                                                <h3><strong>Your Cart is Empty</strong></h3>
                                                <h4>Add something to make me happy :</h4>
                                                <Link to="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>


                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                        :

                        <>
                        <BackToprevNav title='Summery'/>
                            <div className="container-fluid">
                                <div className="row">
                                    <aside className="col-lg-9">
                                        <div className="card">
                                            <div className="table-responsive">
                                                <table className="table table-borderless table-shopping-cart">
                                                    <thead className="text-muted">
                                                        <tr className="small text-uppercase">
                                                            <th scope="col">Product</th>
                                                            <th scope="col" width="120">Quantity</th>
                                                            <th scope="col" width="120">Price</th>
                                                            <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {cartItems.map((data, i) => {
                                                            return (
                                                                <tr key={data.product}>
                                                                    <td>
                                                                        <figure className="itemside align-items-center">
                                                                            <div className="aside"><img src={data.image} className="img-sm" /></div>
                                                                            <figcaption className="info"> <a className="title text-dark" data-abc="true">{data.name}</a>
                                                                                <p className="text-muted small">{data.category}</p>
                                                                            </figcaption>
                                                                        </figure>

                                                                    </td>
                                                                    <td className='p-0'>
                                                                        <div className="input-group d-flex   w-auto justify-content-end align-items-center">
                                                                            <button className="btn "
                                                                                onClick={() =>
                                                                                    increaseQuantity(
                                                                                        data.product,
                                                                                        data.quantity,

                                                                                    )
                                                                                }
                                                                            >
                                                                                +
                                                                            </button>
                                                                            <input type="number" value={data.quantity} readOnly name="quantity" className="quantity-field border-0 text-center w-25" />

                                                                            <button className="btn  "
                                                                                onClick={() =>
                                                                                    decreaseQuantity(data.product, data.quantity)
                                                                                }
                                                                            >
                                                                                -
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="price-wrap">
                                                                            <var className="price">₹ {data.quantity * data.price} </var>
                                                                            <small className="text-muted">Mrp:₹ {data.price}</small>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-right d-none d-md-block">
                                                                        <button onClick={() => deleteCartItems(data.product)} className="btn btn-light" data-abc="true"> Remove</button>
                                                                    </td>

                                                                </tr>
                                                            );
                                                        })}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="ofers-grid-box py-3 px-3">
                                            <div className='cart-summery'>

                                                <h4>Frequently added together</h4>

                                            </div>

                                        </div>
                                    </aside>
                                    <aside className="col-lg-3">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-group"> <label>Have coupon?</label>
                                                        <div className="input-group"> <input type="text" className="form-control coupon" name="" placeholder="Coupon code" />
                                                            <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-group">  <h4 className='py-3'>Delevery Instruction</h4>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Avoid calling before reaching the location
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className='py-3'>Payment Summery</h4>
                                                <dl className="dlist-align">
                                                    <dt>Total price:</dt>
                                                    <dd className="text-right ml-3">₹ {calculateProductsTotal(cartItems)}</dd>
                                                </dl>
                                                <dl className="dlist-align">
                                                    <dt>Tax:</dt>
                                                    <dd className="text-right text-danger ml-3">10%</dd>
                                                </dl>
                                                <dl className="dlist-align">
                                                    <dt>Total:</dt>
                                                    <dd className="text-right text-dark b ml-3"><strong>₹ {calculateProductsTotal(cartItems) * 0.18 + calculateProductsTotal(cartItems)}</strong></dd>
                                                </dl>
                                                <hr />
                                                <a className='btn btn-out btn-primary btn-square btn-main mt-2' onClick={chekoutHandler}>Make Purchase </a>
                                                <Link to="/" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true"><a>Continue Shopping</a></Link>
                                            </div>
                                        </div>
                                    </aside>

                                </div>

                            </div></>

                    }
                </div>
            </div>

        </>
    )
}

export default Cart