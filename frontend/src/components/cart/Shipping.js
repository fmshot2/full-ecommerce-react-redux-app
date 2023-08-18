import React, { Fragment, useState } from 'react'
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { countries } from 'countries-list'


import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useDispatch, useSelector } from "react-redux";

import { saveShippingInfo } from '../../actions/cartActions'
import CheckoutSteps from './CheckoutSteps';



const Shipping = () => {

    const countriesList = Object.values(countries)

    const { shippingInfo } = useSelector(state => state.cart)

    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)
    const [country, setCountry] = useState(shippingInfo.country)
    // const [color, setColor ] = useState()

    const location = useLocation();
    const currentPath = location.pathname;

    const dispatch = useDispatch();
    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(saveShippingInfo({ address, city, phoneNo, postalCode, country }))
        // navigate('/confirm')
        return navigate('/order/confirm', { state: { from: currentPath } });

    }
    return (
        <Fragment>
            <MetaData title={'Shipping Info'} />
            <Fragment>
                <div className="breadcumb_area">
                    <div className="container h-100">
                        <div className="row h-1  00 align-items-center">
                            <div className="col-12">
                                {/* <h5>{user.name}'s Cart</h5> */}
                            </div>
                        </div>
                    </div>
                </div>

                <CheckoutSteps shipping />

                <div className="checkout_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="checkout_details_area clearfix">
                                    <h5 className="mb-4">Billing Details</h5>
                                    <form onSubmit={submitHandler}>
                                        <div className="row">
                                            {/* <div className="col-md-6 mb-3">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" className="form-control" id="first_name" placeholder="First Name" value="" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email_address">Email Address</label>
                                    <input type="email" className="form-control" id="email_address" placeholder="Email Address" value=""/>
                                </div> */}
                                            <div className="col-md-12 mb-3">
                                                <label htmlFor="street_address">Street address</label>
                                                <input type="text" className="form-control" id="street_address" placeholder="Street Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="phone_number">Phone Number</label>
                                                <input type="number" className="form-control" id="phone_number" min="0" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="country">Country</label>
                                                <select className="custom-select d-block w-100 form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                                                    {countriesList.map(country => (
                                                        <option key={country.name} value={country.name}>{country.name}</option>
                                                    ))}

                                                </select>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="city">Town/City</label>
                                                <input type="text" className="form-control" id="city" placeholder="Town/City" value={city} onChange={(e) => setCity(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="city">Postal Code</label>
                                                <input type="text" className="form-control" id="city" placeholder="Town/City" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                                            </div>
                                            {/* <div className="col-md-6 mb-3">
                                    <label htmlFor="state">State</label>
                                    <input type="text" className="form-control" id="state" placeholder="State" value=""/>
                                </div> */}
                                            <div className="col-md-12">
                                                <label htmlFor="order-notes">Order Notes</label>
                                                <textarea className="form-control" id="order-notes" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="checkout_pagination d-flex justify-content-end mt-50">
                                                <a href="checkout-1.html" className="btn btn-primary mt-2 ml-2">Go Back</a>
                                                <button type='submit' className="btn btn-primary mt-2 ml-2">Continue</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
};
export default Shipping