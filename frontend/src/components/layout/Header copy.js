import React, { Fragment, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import useExternalScripts from "../../hooks/useExternalScripts";
import Owldemo from '../Owldemo';
import Category from '../Category';
import BestSelling from '../BestSelling';
import Newarrival from '../Newarrival';


// import "../../App.css"
// import {  Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './Search'
// import Category from '../category';
const Header = () => {
    useExternalScripts("https://www.scriptdomain.com/script");
    const [tabKey, initTabKey] = useState('one')

    return (
        <div>
            {/* <Fragment> */}
            {/* <!-- Header Area --> */}
            <header className="header_area">
                {/* <!-- Top Header Area --> */}
                <div className="top-header-area z-index-reduce">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-6">
                                <div className="welcome-note">
                                    <span className="popover--text" data-toggle="popover"
                                        data-content="Welcome to Bigshop ecommerce template."><i
                                            className="icofont-info-square"></i></span>
                                    <span className="text">feeeemiii Welcome to Bigshop ecommerce template.</span>
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
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div>

                                {/* <!-- Menu --> */}
                                <div className="classy-menu">
                                    {/* <!-- Close --> */}
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div>

                                    {/* <!-- Nav --> */}
                                    <div className="classynav">
                                        <ul>
                                            <li className='cn-dropdown-item has-down'><a>Home</a>
                                                {/* <li><a href="#">Home</a> */}
                                                <ul className="dropdown">
                                                    <li><a>Home - 1</a></li>
                                                    <li><a>Home - 2</a></li>
                                                    <li><a>Home - 3</a></li>

                                                    {/* <li><a href="index-1.html">Home - 1</a></li>
                                            <li><a href="index-2.html">Home - 2</a></li>
                                            <li><a href="index-3.html">Home - 3</a></li> */}
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
                                            <li><a>Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Hero Meta --> */}
                                <div className="hero_meta_area ml-auto d-flex align-items-center justify-content-end">
                                    {/* <!-- Search --> */}
                                    <div className="search-area">
                                        <div className="search-btn"><i className="icofont-search"></i></div>
                                        {/* <!-- Form --> */}
                                        <div className="search-form">
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
                                    <div className="account-area">
                                        <div className="user-thumbnail">
                                            <img src="../assets/img/bg-img/user.jpg" alt="" />/
                                        </div>
                                        <ul className="user-meta-dropdown">
                                            <li className="user-title"><span>Hello,</span> Lim Sarah</li>
                                            <li><a>My Account</a></li>
                                            <li><a>Orders List</a></li>
                                            <li><a>Wishlist</a></li>
                                            <li><a><i className="icofont-logout"></i> Logout</a></li>

                                            {/* <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="order-list.html">Orders List</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="login.html"><i className="icofont-logout"></i> Logout</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Header Area End --> */}

            </header>

            {/* <!-- Welcome Slides Area --> */}
            <section className="welcome_area">
                <Owldemo />
            </section>
            {/* <!-- Welcome Slides Area --> */}
            <Category />

            <BestSelling />

            {/* <!-- Best Rated/Onsale/Top Sale Product Area --> */}
            <section className="best_rated_onsale_top_sellares section_padding_100_70">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs_area">
                                {/* <!-- Tabs --> */}
                                {/* <ul className="nav nav-tabs" role="tablist" id="product-tab">
                <li className="nav-item">
                    <a href="#top-sellers" className="nav-link" data-toggle="tab" role="tab">Top Sellers</a>
                </li>
                <li className="nav-item">
                    <a href="#best-rated" className="nav-link" data-toggle="tab" role="tab">Best Rated</a>
                </li>
                <li className="nav-item">
                    <a href="#on-sale" className="nav-link active" data-toggle="tab" role="tab">On Sale</a>
                </li>
            </ul> */}

                                <Tabs className="nav nav-tabs" role="tablist" id="product-tab" activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                                    <Tab eventKey="one" title="Top Sellers">
                                        <div className="top_sellers_area">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/top-1.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>KID’s Fashion</h5>
                                                            <h6>$49.39 <span>$55.31</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/top-2.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Beach Cap</h5>
                                                            <h6>$20 <span>$25</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/top-3.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Gold Neckless</h5>
                                                            <h6>$69 <span>$71</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/top-4.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Diamond Neckless</h5>
                                                            <h6>$300 <span>$310</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/top-5.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Sport Shoes</h5>
                                                            <h6>$30 <span>$34</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/top-6.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Pin Up Bikini</h5>
                                                            <h6>$27 <span>$29</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="two" title="Best Rated">
                                        <div className="best_rated_area">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/best-1.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Sports Bra</h5>
                                                            <h6>$60 <span>$63</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/best-2.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Trendy Glasses</h5>
                                                            <h6>$30 <span>$32</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/best-3.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Women Watch</h5>
                                                            <h6>$79 <span>$85</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/best-4.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Headphone</h5>
                                                            <h6>$18 <span>$21</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/best-5.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Plus Bra</h5>
                                                            <h6>$51 <span>$58</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/best-6.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Laptop</h5>
                                                            <h6>$130 <span>$160</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="three" title="On Sale">
                                        <div className="on_sale_area">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/onsale-1.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Speaker</h5>
                                                            <h6>$60 <span>$70</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/onsale-2.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Fancy Lamp</h5>
                                                            <h6>$34 <span>$40</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/onsale-3.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Sport Bra</h5>
                                                            <h6>$63 <span>$70</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/onsale-4.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>S'well Water</h5>
                                                            <h6>$12 <span>$13</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/onsale-5.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>Slipper</h5>
                                                            <h6>$24 <span>$36</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-lg-4">
                                                    <div className="single_top_sellers">
                                                        <div className="top_seller_image">
                                                            <img src="/bigshop/assets/img/product-img/onsale-6.png" alt="Top-Sellers" />
                                                        </div>
                                                        <div className="top_seller_desc">
                                                            <h5>T-shirt</h5>
                                                            <h6>$96 <span>$120</span></h6>
                                                            <div className="top_seller_product_rating">
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                            </div>

                                                            {/* <!-- Info --> */}
                                                            <div
                                                                className="ts-seller-info mt-3 d-flex align-items-center justify-content-between">
                                                                {/* <!-- Add to cart --> */}
                                                                <div className="ts_product_add_to_cart">
                                                                    <a href="#" data-toggle="tooltip" data-placement="top"
                                                                        title="Add To Cart"><i
                                                                            className="icofont-shopping-cart"></i></a>
                                                                </div>

                                                                {/* <!-- Wishlist --> */}
                                                                <div className="ts_product_wishlist">
                                                                    <a href="wishlist.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Wishlist"><i
                                                                            className="icofont-heart"></i></a>
                                                                </div>

                                                                {/* <!-- Compare --> */}
                                                                <div className="ts_product_compare">
                                                                    <a href="compare.html" data-toggle="tooltip"
                                                                        data-placement="top" title="Compare"><i
                                                                            className="icofont-exchange"></i></a>
                                                                </div>

                                                                {/* <!-- Quick View --> */}
                                                                <div className="ts_product_quick_view">
                                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                                        className="icofont-eye-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Best Rated/Onsale/Top Sale Product Area */}


            <Newarrival />
        </div>
        // {/* </Fragment> */}
    )
}

export default Header