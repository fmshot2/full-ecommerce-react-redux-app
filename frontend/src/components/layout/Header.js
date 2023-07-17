import React, { Fragment, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import useExternalScripts from "../../hooks/useExternalScripts";
import Category from '../Category';
import BestSelling from '../BestSelling';
import Newarrival from '../Newarrival';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../../actions/userActions'



// import "../../App.css"
// import {  Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './Search'
// import Category from '../category';
const Header = () => {
    useExternalScripts("https://www.scriptdomain.com/script");
    const [tabKey, initTabKey] = useState('one')
    const [searchForm, setSearchForm] = useState(false);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth);

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully')
    }

    console.log('user', user);

    // function showSearchForm() {
    //     return setSearchForm(true) = !setSearchForm(false);
    // }
    return (
        <Fragment>
            {/* <!-- Header Area --> */}
            <header className="header_area">
                {/* <!-- Top Header Area --> */}
                <div className="top-header-area z-index-reduce">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-6">
                                <div className="welcome-note">
                                    <span className="popover--text" data-toggle="popover"
                                        data-content="Welcome  to Bigshop ecommerce template."><i
                                            className="icofont-info-square"></i></span>
                                    <span className="text">Welcome to Bigshop ecommerce template.</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="language-currency-dropdown d-flex align-items-center justify-content-end">
                                    {/* <!-- Language Dropdown --> */}
                                    <div className="language-dropdown">
                                        <div className="dropdown">
                                            <a className="btn btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenu1"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                English
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                                <a className="dropdown-item" href="#">Bangla</a>
                                                <a className="dropdown-item" href="#">Arabic</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Currency Dropdown --> */}
                                    <div className="currency-dropdown">
                                        <div className="dropdown">
                                            <a className="btn btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenu2"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                $ USD
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                                                <a className="dropdown-item" href="#">৳ BDT</a>
                                                <a className="dropdown-item" href="#">€ Euro</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Menu --> */}
                <div className="bigshop-main-menu">
                    <div className="container">
                        <div className="classy-nav-container breakpoint-off">
                            <nav className="classy-navbar" id="bigshopNav">

                                {/* <!-- Nav Brand --> */}
                                {/* <a href="index.html" className="nav-brand"><img src="../assets/img/core-img/logo.png" alt="logo" /></a> */}
                                <a className="nav-brand"><img src="../assets/img/core-img/logo.png" alt="logo" /></a>


                                {/* <!-- Toggler --> */}
                                {/* <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div> */}

                                {/* <!-- Menu --> */}
                                <div className="classy-menu">
                                    {/* <!-- Close --> */}
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div>

                                    {/* <!-- Nav --> */}
                                    <div className="classynav">
                                        <Search />

                                        <ul>
                                            {/* <li className='cn-dropdown-item has-down'><a>Home</a>
                                                <ul className="dropdown">
                                                    <li><a>Home - 1</a></li>
                                                    <li><a>Home - 2</a></li>
                                                    <li><a>Home - 3</a></li>
                                                </ul>
                                            </li>
                                            <li className='cn-dropdown-item has-down'><a>Shop</a>
                                                <ul className="dropdown">
                                                    <li><a>Shop Grid</a>
                                                        <ul className="dropdown">
                                                            <li><a>Shop Grid Left Sidebar</a>
                                                            </li>
                                                            <li><a>Shop Grid Right
                                                                Sidebar</a></li>
                                                            <li><a>Shop Grid Top Sidebar</a>
                                                            </li>
                                                            <li><a>Shop Grid No Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='megamenu-item'><a>Shop List</a>
                                                        <ul className="dropdown">
                                                            <li><a>Shop List Left Sidebar</a>
                                                            </li>
                                                            <li><a>Shop List Right
                                                                Sidebar</a></li>
                                                            <li><a>Shop List Top Sidebar</a>
                                                            </li>
                                                            <li><a>Shop List No Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Single Product</a></li>
                                                    <li><a>Cart</a></li>
                                                    <li><a>Checkout</a>
                                                        <ul className="dropdown">
                                                            <li><a>Login</a></li>
                                                            <li><a>Billing</a></li>
                                                            <li><a>Shipping Method</a></li>
                                                            <li><a>payment Method</a></li>
                                                            <li><a>Review</a></li>
                                                            <li><a>Complate</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>Account Page</a>
                                                        <ul className="dropdown">
                                                            <li><a>- Dashboard</a></li>
                                                            <li><a>- Orders</a></li>
                                                            <li><a>- Downloads</a></li>
                                                            <li><a>- Addresses</a></li>
                                                            <li><a>- Account Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a>hlist</a></li>
                                                    <li><a>Compare</a></li>
                                                </ul>
                                            </li>
                                            <li className='megamenu-item'><a>Pages</a>
                                                <div className="megamenu">
                                                    <ul className="single-mega cn-col-4">
                                                        <li><a>- About Us</a></li>
                                                        <li><a>- FAQ</a></li>
                                                        <li><a>- Contact</a></li>
                                                        <li><a>- Login &amp; Register</a></li>
                                                        <li><a>- 404</a></li>
                                                        <li><a>- 500</a></li>
                                                    </ul>
                                                    <ul className="single-mega cn-col-4">
                                                        <li><a>- Dashboard</a></li>
                                                        <li><a>- Orders</a></li>
                                                        <li><a>- Downloads</a></li>
                                                        <li><a>- Addresses</a></li>
                                                        <li><a>- Account Details</a></li>
                                                        <li><a>- Coming Soon</a></li>
                                                    </ul>
                                                    <div className="single-mega cn-col-2">
                                                        <div className="megamenu-slides owl-carousel">
                                                            <a>
                                                                <img src="../assets/img/bg-img/mega-slide-2.jpg" alt="" />
                                                            </a>
                                                            <a>
                                                                <img src="../assets/img/bg-img/mega-slide-1.jpg" alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='cn-dropdown-item has-down'><a href="#">Blog</a>
                                                <ul className="dropdown">
                                                    <li><a>Blog Left Sidebar</a></li>
                                                    <li><a>Blog Right Sidebar</a></li>
                                                    <li><a> Sidebar</a></li>
                                                    <li><a>Single Blog</a></li>
                                                </ul>
                                            </li>
                                            <li className='megamenu-item'><a>Elements</a>
                                                <div className="megamenu">
                                                    <ul className="single-mega cn-col-4">
                                                        <li><a>- Accordions</a></li>
                                                        <li><a>- Alerts</a></li>
                                                        <li><a>- Badges</a></li>
                                                        <li><a>- Blockquotes</a></li>
                                                    </ul>
                                                    <ul className="single-mega cn-col-4">
                                                        <li><a>- Breadcrumbs</a></li>
                                                        <li><a>- Buttons</a></li>
                                                        <li><a>- Forms</a></li>
                                                        <li><a>- Gallery</a></li>
                                                    </ul>
                                                    <ul className="single-mega cn-col-4">
                                                        <li><a>- Headings</a></li>
                                                        <li><a>- Icon FontAwesome</a></li>
                                                        <li><a>- Icon Ico Font</a></li>
                                                        <li><a>- Labels</a></li>
                                                    </ul>
                                                    <ul className="single-mega cn-col-4">
                                                        <li><a>- Modals</a></li>
                                                        <li><a>- Pagination</a></li>
                                                        <li><a>- Progress Bars</a></li>
                                                        <li><a>- Tables</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a>Contact</a></li> */}
                                            {/* <li>   */}
                                            {/* <Search /> */}

                                            {/* </li> */}

                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Hero Meta --> */}
                                <div className="hero_meta_area ml-auto d-flex align-items-center justify-content-end">
                                    {/* <!-- Search --> */}
                                    {/* <div className="search-area"> */}
                                    <div className="search-area" onClick={() => setSearchForm(!searchForm)} >
                                        <div className="search-btn"><i className="icofont-search"></i></div>
                                        {/* <!-- Form --> */}

                                        < div className={`search-form ${searchForm ? "active" : ""}`}>
                                            <input type="search" className="form-control" placeholder="Search" />
                                            <input type="submit" className="d-none" value="Send" />
                                        </div>
                                    </div>

                                    {/* <!-- Wishlist --> */}
                                    <div className="wishlist-area">
                                        <a className="wishlist-btn"><i className="icofont-heart"></i></a>
                                    </div>

                                    {/* <!-- Cart --> */}
                                    <div className="cart-area">
                                        <div className="cart--btn"><i className="icofont-cart"></i> <span className="cart_quantity">2</span>
                                        </div>

                                        {/* <!-- Cart Dropdown Content --> */}
                                        <div className="cart-dropdown-content">
                                            <ul className="cart-list">
                                                <li>
                                                    <div className="cart-item-desc">
                                                        <a className="image">
                                                            <img src="../assets/img/product-img/top-1.png" className="cart-thumb" alt="" />
                                                        </a>
                                                        <div>
                                                            <a>Kid's Fashion</a>
                                                            <p>1 x - <span className="price">$32.99</span></p>
                                                        </div>
                                                    </div>
                                                    <span className="dropdown-product-remove"><i className="icofont-bin"></i></span>
                                                </li>
                                                <li>
                                                    <div className="cart-item-desc">
                                                        <a className="image">
                                                            <img src="../assets/img/product-img/best-4.png" className="cart-thumb" alt="" />
                                                        </a>
                                                        <div>
                                                            <a>Headphone</a>
                                                            {/* <a href="#">Headphone</a> */}
                                                            <p>2x - <span className="price">$49.99</span></p>
                                                        </div>
                                                    </div>
                                                    <span className="dropdown-product-remove"><i className="icofont-bin"></i></span>
                                                </li>
                                            </ul>
                                            <div className="cart-pricing my-4">
                                                <ul>
                                                    <li>
                                                        <span>Sub Total:</span>
                                                        <span>$822.96</span>
                                                    </li>
                                                    <li>
                                                        <span>Shipping:</span>
                                                        <span>$30.00</span>
                                                    </li>
                                                    <li>
                                                        <span>Total:</span>
                                                        <span>$856.63</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="cart-box">
                                                <a className="btn btn-primary d-block">Checkout</a>
                                                {/* <a href="checkout-1.html" className="btn btn-primary d-block">Checkout</a> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Account --> */}
                                    {user ? (

                                        <div className="account-area">
                                            <div className="user-thumbnail">
                                                <img height="1500px" width="150px" src={user && user?.avatar?.url} alt={user && user?.name} />
                                            </div>
                                            <ul className="user-meta-dropdown">
                                                <li className="user-title"><span>Hello,</span>{user && user?.name} </li>
                                                {user && user.role !== 'admin' ? (
                                                    <li><Link to="/orders/me">Orders List</Link></li>
                                                ) : (
                                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                                )}
                                                <li><Link to="/me">Profile</Link></li>

                                                <li><a>My Account</a></li>
                                                <li><a>Wishlist</a></li>
                                                <li onClick={logoutHandler}><Link><i className="icofont-logout"></i> Logout</Link></li>
                                            </ul>
                                        </div>
                                    ) : !loading &&
                                    // <div className="classynav">

                                    <Link to='/login' className='signup-text px-2'>SignUp / Login</Link>
                                        // </div>
                                    }

                                    {/* <li className='cn-dropdown-item has-down'><a>Home</a>
                                        <ul className="dropdown">
                                            <li><a>Home - 1</a></li>
                                            <li><a>Home - 2</a></li>
                                        </ul>
                                    </li> */}


                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Header Area End --> */}

            </header >

            {/* <Category /> */}
        </Fragment >
    )
}

export default Header