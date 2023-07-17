import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap'
import useExternalScripts from "../hooks/useExternalScripts";
import Owldemo from './Owldemo';
import Category from './Category';
import BestSelling from './BestSelling';
import Newarrival from './Newarrival';

import { getProducts } from '../actions/productActions';
import MetaData from './layout/MetaData'
import Product from './product/Product';
import HomeProduct from './product/HomeProduct';
import Sliders from './layout/Sliders'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
// import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'

const attributeElements = {
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
};

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = () => {
  useExternalScripts("https://www.scriptdomain.com/script");
  const [tabKey, initTabKey] = useState('one')
  const [currentPage, setcurrentPage] = useState(1)
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [price, setPrice] = useState([1, 1000])
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage, } = useSelector(state => state.products)
  const location = useLocation();
  const [rating, setRating] = useState(0)
  const totalStars = 5;
  const activeStars = 0;


  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home'
  ]


  if (location.state !== null && location.pathname === `/search/${location.state.keyword}`) {
    location.state.keyword = setKeyword(location.state.keyword)
  }
  console.log('dloca', location);


  if (location.state == null) {
    location.state = {
      ...location.state,
      keyword: ''
    }
    location.state.keyword = setKeyword(location.state.keyword)
  }


  useEffect(() => {

    if (error) {
      return alert.error(error)
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));

  }
    , [dispatch, alert, error, keyword, currentPage, price, category, rating])

  function setCurrentPageNo(pageNumber) {
    setcurrentPage(pageNumber)
  }

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />

          {/* <!-- Welcome Slides Area --> */}
          <section className="welcome_area">
            <Sliders />
          </section>
          {/* <!-- End Welcome Slides Area --> */}
          <Category />

          <div>
            {/* <!-- Best Selling Products --> */}
            <div className="best-selling-products-area mb-70">
              <div className="container">

                <div className="row pt-5">
                  <div className="col-12">
                    <div className="section_heading new_arrivals">
                      <h5>New Arrivals</h5>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  {/* <!-- Single Product --> */}

                  {products && products.map(product => (

                    <HomeProduct key={product._id} product={product} />
                  ))}

                </div>
              </div>

              <div className="shop_pagination_area mt-30">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-sm justify-content-center">
                    {resPerPage <= productsCount && (
                      <Pagination className="pagination pagination-sm justify-content-center"
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productsCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'Next'}
                        prevPageText={'Prev'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        itemClass="page-item"
                        linkClass="page-link"
                        hideDisabled="true"
                      />

                    )}

                  </ul>
                </nav>
              </div>

            </div>
            {/* <!-- Best Selling Products --> */}
          </div>

          {/* <BestSelling /> */}

          {/* <!-- Best Rated/Onsale/Top Sale Product Area --> */}
          <section className="best_rated_onsale_top_sellares section_padding_100_70">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tabs_area">
                    {/* <!-- Tabs --> */}

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


          {/* <Newarrival /> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;