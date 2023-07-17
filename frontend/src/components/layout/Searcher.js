import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "../../actions/productActions";
import MetaData from "./MetaData";
import Product from "../product/Product";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";

const attributeElements = {
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
};

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Searcher = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState([1, 1000]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );
  const location = useLocation();
  const [rating, setRating] = useState(0);
  const totalStars = 5;
  const activeStars = 0;

  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  if (
    location.state !== null &&
    location.pathname === `/search/${location.state.keyword}`
  ) {
    location.state.keyword = setKeyword(location.state.keyword);
  }
  console.log("dloca", location);

  if (location.state == null) {
    location.state = {
      ...location.state,
      keyword: "",
    };
    location.state.keyword = setKeyword(location.state.keyword);
  }

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setcurrentPage(pageNumber);
  }

  const my_class = () => {
    return keyword
      ? "col-lg-9 col-sm-12 col-xs-12"
      : "col-sm-3 collection-filter";
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />
          <div>
            <section className="section-big-pt-space b-g-light">
              <div className="collection-wrapper">
                <div className="custom-container">
                  <div className="row">
                    <div className="col-sm-3 collection-filter">
                      <div className="collection-filter-block creative-card creative-inner">
                        <div className="collection-mobile-back">
                          <span className="filter-back">
                            <i
                              className="fa fa-angle-left"
                              aria-hidden="true"
                            ></i>
                            back
                          </span>
                        </div>
                        <div className="collection-collapse-block border-0 open">
                          <h3 className="collapse-block-title">brand</h3>
                          <div className="collection-collapse-block-content">
                            <div className="collection-brand-filter">
                              <ul className="category-list">
                                <li>
                                  <a href="#">clothing</a>
                                </li>
                                <li>
                                  <a href="#">bags</a>
                                </li>
                                <li>
                                  <a href="#">footwear</a>
                                </li>
                                <li>
                                  <a href="#">watches</a>
                                </li>
                                <li>
                                  <a href="#">accessories</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection-filter-block creative-card creative-inner">
                        <div className="product-service">
                          <div className="media">
                            <div className="media-body">
                              <h4>free shipping</h4>
                              <p>free shipping world wide</p>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <h4>24 X 7 service</h4>
                              <p>online service for new customer</p>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <h4>festival offer</h4>
                              <p>new online special festival offer</p>
                            </div>
                          </div>
                          <div className="media border-0 m-0">
                            <div className="media-body">
                              <h4>online payment</h4>
                              <p>Contrary to popular belief.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- side-bar single product slider start --> */}
                      <div className="theme-card creative-card creative-inner">
                        <h5 className="title-border">new product</h5>
                        <div className="slide-1">
                          <div>
                            <div className="media-banner plrb-0 b-g-white1 border-0">
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/3.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>sumsung galaxy</p>
                                          </a>
                                          <h6>
                                            $47.05 <span>$55.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/1.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>bajaj rex mixer</p>
                                          </a>
                                          <h6>
                                            $40.05 <span>$60.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/2.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>usha table fan</p>
                                          </a>
                                          <h6>
                                            $52.05 <span>$60.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="media-banner plrb-0 b-g-white1 border-0">
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/2.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>usha table fan</p>
                                          </a>
                                          <h6>
                                            $52.05 <span>$60.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/3.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>sumsung galaxy</p>
                                          </a>
                                          <h6>
                                            $47.05 <span>$55.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/1.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>bajaj rex mixer</p>
                                          </a>
                                          <h6>
                                            $40.05 <span>$60.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="media-banner plrb-0 b-g-white1 border-0">
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/1.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>bajaj rex mixer</p>
                                          </a>
                                          <h6>
                                            $40.05 <span>$60.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/2.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>usha table fan</p>
                                          </a>
                                          <h6>
                                            $52.05 <span>$60.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <a
                                    href="product-page(left-sidebar).html"
                                    tabindex="0"
                                  >
                                    <img
                                      src="../assets/images/layout-2/media-banner/3.jpg"
                                      className="img-fluid "
                                      alt="banner"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                              <i className="fa fa-star-o"></i>
                                            </li>
                                          </ul>
                                          <a
                                            href="product-page(left-sidebar).html"
                                            tabindex="0"
                                          >
                                            <p>sumsung galaxy</p>
                                          </a>
                                          <h6>
                                            $47.05 <span>$55.21</span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button
                                            className="tooltip-top add-cartnoty"
                                            data-tippy-content="Add to cart"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              className="feather feather-shopping-cart"
                                            >
                                              <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                              ></circle>
                                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>{" "}
                                          </button>
                                          <a
                                            href="#"
                                            className="add-to-wish tooltip-top"
                                            data-tippy-content="Add to Wishlist"
                                          >
                                            <i
                                              data-feather="heart"
                                              className="add-to-wish"
                                            ></i>
                                          </a>
                                          <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quick-view"
                                            className="tooltip-top"
                                            data-tippy-content="Quick View"
                                          >
                                            <i data-feather="eye"></i>
                                          </a>
                                          <a
                                            href="compare.html"
                                            className="tooltip-top"
                                            data-tippy-content="Compare"
                                          >
                                            <i data-feather="refresh-cw"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- side-bar single product slider end --> */}
                    </div>
                    <div className="col-lg-9 col-sm-12 col-xs-12">
                      <div className="container-fluid">
                        {products.map((product) => (
                          <Product
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Searcher;
