import React, { Fragment, useEffect } from 'react'
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";

import { saveShippingInfo } from '../../actions/cartActions'
import CheckoutSteps from './CheckoutSteps';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'
import axios from 'axios'
const options = {
    style:{
        base: {
            fontSize: 'i6px'
        },
        invalid: {
            color: '#9e2146'
        }
    }
}

const Payment = () => {
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const { cartItems, shippingInfo } = useSelector(state => state.auth)

    useEffect(() => {

    }, []);
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        document.querySelector('#pay_btn').disabled = true;

        let res;

        try {
            
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            res = await axios.post('/api/v1/payment/process', paymentData, config)
            const clientSecret = res.data.client_secret;

        } catch (error) {
            document.querySelector('#pay_btn').disabled = true
        }
    }
  return (
    <Fragment>
    <MetaData title={'Shipping Info'} />
    <Fragment>
        <div className="breadcumb_area">
            <div className="container h-100">
                <div className="row h-1  00 align-items-center">
                    <div className="col-12">
                        Home / Checkout
                    </div>
                </div>
            </div>
        </div>

        <CheckoutSteps shipping confirmOrder payment />

        {/* <!-- Checkout Area --> */}
    <div className="checkout_area section_padding_100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="checkout_details_area clearfix">
                        <div className="payment_method">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                {/* <!-- Single Payment Method --> */}
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="one">
                                        <h6 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_one" aria-expanded="false" aria-controls="collapse_one"><i className="icofont-mastercard-alt"></i> Pay with Credit Card</a>
                                        </h6>
                                    </div>
                                    <div aria-expanded="false" id="collapse_one" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="one">
                                        <div className="panel-body">
                                            <div className="pay_with_creadit_card">
                                                <form onSubmit={submitHandler}>
                                                    <div className="row">
                                                        <div className="col-12 mb-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1">Credit or Debit Card</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3">
                                                            <label htmlFor="cardNumber">Card Number</label>
                                                            <CardNumberElement type="text" className="form-control" id="cardNumber" placeholder="" required options={options} />
                                                            <small id="card_info_store" className="form-text text-muted"><i className="fa fa-lock" aria-hidden="true"></i> Your payment info is stored securely. <a href="#">Learn More</a></small>
                                                        </div>
                                                        <div className="col-12 col-md-3 mb-3">
                                                            <label htmlFor="expiration">Expiration</label>
                                                            <CardExpiryElement type="text" className="form-control" id="expiration" placeholder="MM / YY" required options={options}/>
                                                        </div>
                                                        <div className="col-12 col-md-3 mb-3">
                                                            <label htmlFor="security_code">Security Code <a href="#" className="security_code_popover" data-container="body" data-toggle="popover" data-placement="top" data-content="" data-img="img/bg-img/cvc.jpg"> <i className="fa fa-question-circle" aria-hidden="true"></i></a></label>
                                                            <CardCvcElement type="text" className="form-control" id="security_code" placeholder="" required options={options}/>
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Payment Method --> */}
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="three">
                                        <h6 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_three" aria-expanded="false" aria-controls="collapse_three"><i className="icofont-bank-transfer-alt"></i> Direct Bank Transfer</a>
                                        </h6>
                                    </div>
                                    <div aria-expanded="false" id="collapse_three" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="three">
                                        <div className="panel-body">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Payment Method --> */}
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="five">
                                        <h6 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_five" aria-expanded="false" aria-controls="collapse_five"><i className="icofont-cash-on-delivery-alt"></i> Cash on Delivery
                                            </a>
                                        </h6>
                                    </div>
                                    <div aria-expanded="false" id="collapse_five" className="panel-collapse collapse" role="tabpanel" aria-labelledby="five">
                                        <div className="panel-body">
                                            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="checkout_pagination d-flex justify-content-end mt-30">
                        <a href="checkout-3.html" className="btn btn-primary mt-2 ml-2">Go Back</a>
                        <a href="checkout-5.html" className="btn btn-primary mt-2 ml-2">Final Step</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Checkout Area End --> */}
        </Fragment>
        </Fragment>
  )
}

export default Payment