import React, { Fragment } from 'react'
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
// import Carousel from 'react-bootstrap/Carousel';

import { getProductDetails, ClearErrors } from "../../actions/productActions";

import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'


const Cart = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    let navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const dispatch = useDispatch();
    const alert = useAlert();
    const { cartItems } = useSelector(
        (state) => state.cart
    );

    const removeCartItemHandler  = (id) => {
        dispatch(removeItemFromCart(id))
    }
    const { user, loading } = useSelector(state => state.auth)
    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addItemToCart(id, newQty))
    }

    const decreaseQty = (id, quantity) => {

        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addItemToCart(id, newQty))

    }

    const checkoutHandler = () => {
        if (isAuthenticated) {
           return navigate('/shipping');
            }
           return navigate('/login', { state: { from: currentPath } });
    }
    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            {cartItems.length === 0 ? <h2 className='m-5 text-center'>Your Cart is Empty</h2>
                : (
                    <Fragment>
                        <div className="breadcumb_area">
                            <div className="container h-100">
                                <div className="row h-1  00 align-items-center">
                                    <div className="col-12">
                                        <h5>{user.name}'s Cart</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart_area section_padding_100_70 clearfix">
                            <div className="container">
                                {/* <div className="col-12 col-lg-5">
                                        <div className="cart-total-area mb-30">
                                            <h5 className="mb-3">Total Cart Items: {cartItems.length}</h5>
                                            <div className="table-responsive">
                                            </div>
                                            <a href="checkout-1.html" className="btn btn-primary d-block">Proceed To Checkout</a>
                                        </div>
                                    </div> */}
                                <div className="row justify-content-between">
                                    <div className="col-12">
                                        <div className="cart-table">
                                            <div className="table-responsive">
                                                <table className="table table-bordered mb-30">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"><i className="icofont-ui-delete"></i></th>
                                                            <th scope="col">Image</th>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Unit Price</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartItems.map(item => (
                                                            <Fragment>
                                                                <tr key={item.product}>
                                                                <th scope="row" onClick={() => removeCartItemHandler(item.product)}>
                                                                    <i className="icofont-close"></i>
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </th>
                                                                <td>
                                                                    <img src={item.image} alt="Product" />
                                                                </td>
                                                                <td>
                                                                    <Link to={`/products/${item.product}`}>{item.name} </Link>
                                                                </td>
                                                                <td>{item.price}</td>
                                                                <td>
                                                                    {/* <div className="quantity">
                                                                        <input type="number" className="qty-text" id="qty3" step="1" min="1" max="99" name="quantity" value={item.quantity} />
                                                                    </div> */}
                                                                    <div className="stockCounter d-inline">
                                                                        <span className="btn btn-danger minus femi-cart-change-btn" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                                                                        <input type="number" className="form-control count d-inline femi-cart-change-btn" value={item.quantity} readOnly />

                                                                        <span className="btn btn-primary plus femi-cart-change-btn" onClick={() => increaseQty(item.product, item.quantity, item.stock)}>+</span>
                                                                    </div>
                                                                </td>
                                                                <td>$11</td>
                                                            </tr>
                                                            </Fragment>
                                                        ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="cart-apply-coupon mb-30">
                                            <h6>Have a Coupon?</h6>
                                            <p>Enter your coupon code here &amp; get awesome discounts!</p>
                                            {/* <!-- Form --> */}
                                            <div className="coupon-form">
                                                <form action="#">
                                                    <input type="text" className="form-control" placeholder="Enter Your Coupon Code" />
                                                    <button type="submit" className="btn btn-primary">Apply Coupon</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-5">
                                        <div className="cart-total-area mb-30">
                                            <h5 className="mb-3">Cart Totals</h5>
                                            <div className="table-responsive">
                                                <table className="table mb-3">
                                                    <tbody>
                                                        <tr>
                                                            <td>Total Quantity</td>
                                                            <td>{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} (Units)</td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>Sub Total</td>
                                                            <td>{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)}</td>
                                                        </tr> */}
                                                        {/* <tr>
                                                            <td>Shipping</td>
                                                            <td>$10.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VAT (10%)</td>
                                                            <td>$5.60</td>
                                                        </tr> */}
                                                        <tr>
                                                            <td>Total</td>
                                                        <td>${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <button onClick={checkoutHandler} className="btn btn-primary d-block">Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
        </Fragment>
    )
}

export default Cart