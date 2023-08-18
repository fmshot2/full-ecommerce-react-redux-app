import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useSelector } from "react-redux";

import { saveShippingInfo } from '../../actions/cartActions'
import CheckoutSteps from './CheckoutSteps';

const ConfirmOrder = () => {
    const { cartItems, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)

    // Calculate Order Prices
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2))

    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const proceedToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }
        sessionStorage.setItem(data, data)
    }

    return (
        <Fragment> <MetaData title={'confirm order Info'} />
            <Fragment>
                <div className="breadcumb_area">
                    <div className="container h-100">
                        <div className="row h-1  00 align-items-center">
                            <div className="col-12">
                                <h5>Confirm/Order</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <CheckoutSteps confirmOrder />
                <div className="checkout_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="checkout_details_area clearfix">
                                    <h5 className="mb-30">Review Your Order</h5>

                                    <div className="cart-table">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mb-30">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Edit</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartItems.map(item => (
                                                        <Fragment>
                                                            <tr key={item.product}>
                                                                {/* <th scope="row" onClick={() => removeCartItemHandler(item.product)}> */}
                                                                <th scope="row">
                                                                    <i className="icofont-close"></i>
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </th>
                                                                <td>
                                                                    <img src={item.image} alt="Product" />
                                                                </td>
                                                                <td>
                                                                    <Link to={`/products/${item.product}`}>{item.name} </Link>
                                                                </td>
                                                                <td>{item.quantity} x {item.price} = <b>${item.quantity * item.price}</b></td>
                                                            </tr>
                                                        </Fragment>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-lg-5">
                                <div className="cart-apply-coupon mb-30">
                                    <h6>Your Details</h6>
                                    <p><b>Name:</b> {user && user.name}</p>
                                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                                    <p className='mb-4'><b>Address:</b>{`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>

                                </div>
                            </div>


                            <div className="col-12 col-lg-7 ml-auto">
                                <div className="cart-total-area">
                                    <h5 className="mb-3">Cart Totals</h5>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td>${itemsPrice}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>${shippingPrice}</td>
                                                </tr>
                                                <tr>
                                                    <td>VAT (10%)</td>
                                                    <td>${taxPrice}</td>
                                                </tr>
                                                <tr>
                                                    <td>Total</td>
                                                    <td>${totalPrice}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout_pagination d-flex justify-content-end mt-3">
                                        <a href="checkout-4.html" className="btn btn-primary mt-2 ml-2 d-none d-sm-inline-block">Go Back</a>
                                        <button className="btn btn-primary mt-2 ml-2" onClick={proceedToPayment}>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
}

export default ConfirmOrder