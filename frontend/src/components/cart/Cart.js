import React, { Fragment } from 'react'
import { useParams, Link } from "react-router-dom";

import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";
// import Carousel from 'react-bootstrap/Carousel';

import { getProductDetails, ClearErrors } from "../../actions/productActions";

import { addItemToCart } from '../../actions/cartActions'


const Cart = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { cartItems } = useSelector(
        (state) => state.cart
    );
    
    const { user, loading } = useSelector(state => state.auth)
    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            {cartItems.length === 0 ? <h2 className='mt-5'>Your Cart is Empty</h2>
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
                                                        <tr>
                                                            <th scope="row">
                                                                <i className="icofont-close"></i>
                                                            </th>
                                                            <td>
                                                                <img src="img/product-img/onsale-1.png" alt="Product" />
                                                            </td>
                                                            <td>
                                                                <a href="#">Bluetooth Speaker</a>
                                                            </td>
                                                            <td>$9</td>
                                                            <td>
                                                                <div className="quantity">
                                                                    <input type="number" className="qty-text" id="qty2" step="1" min="1" max="99" name="quantity" value="1" />
                                                                </div>
                                                            </td>
                                                            <td>$9</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <i className="icofont-close"></i>
                                                            </th>
                                                            <td>
                                                                <img src="img/product-img/onsale-2.png" alt="Product" />
                                                            </td>
                                                            <td>
                                                                <a href="#">Roof Lamp</a>
                                                            </td>
                                                            <td>$11</td>
                                                            <td>
                                                                <div className="quantity">
                                                                    <input type="number" className="qty-text" id="qty3" step="1" min="1" max="99" name="quantity" value="1" />
                                                                </div>
                                                            </td>
                                                            <td>$11</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <i className="icofont-close"></i>
                                                            </th>
                                                            <td>
                                                                <img src="img/product-img/onsale-6.png" alt="Product" />
                                                            </td>
                                                            <td>
                                                                <a href="#">Cotton T-shirt</a>
                                                            </td>
                                                            <td>$6</td>
                                                            <td>
                                                                <div className="quantity">
                                                                    <input type="number" className="qty-text" id="qty4" step="1" min="1" max="99" name="quantity" value="1" />
                                                                </div>
                                                            </td>
                                                            <td>$6</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <i className="icofont-close"></i>
                                                            </th>
                                                            <td>
                                                                <img src="img/product-img/onsale-4.png" alt="Product" />
                                                            </td>
                                                            <td>
                                                                <a href="#">Water Bottle</a>
                                                            </td>
                                                            <td>$17</td>
                                                            <td>
                                                                <div className="quantity">
                                                                    <input type="number" className="qty-text" id="qty5" step="1" min="1" max="99" name="quantity" value="1" />
                                                                </div>
                                                            </td>
                                                            <td>$17</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <i className="icofont-close"></i>
                                                            </th>
                                                            <td>
                                                                <img src="img/product-img/onsale-5.png" alt="Product" />
                                                            </td>
                                                            <td>
                                                                <a href="#">Alka Sliper</a>
                                                            </td>
                                                            <td>$13</td>
                                                            <td>
                                                                <div className="quantity">
                                                                    <input type="number" className="qty-text" id="qty6" step="1" min="1" max="99" name="quantity" value="1" />
                                                                </div>
                                                            </td>
                                                            <td>$13</td>
                                                        </tr>
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
                                                            <td>Sub Total</td>
                                                            <td>$56.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping</td>
                                                            <td>$10.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VAT (10%)</td>
                                                            <td>$5.60</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total</td>
                                                            <td>$71.60</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="checkout-1.html" className="btn btn-primary d-block">Proceed To Checkout</a>
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