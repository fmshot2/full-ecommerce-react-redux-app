import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



import { getProducts } from '../actions/productActions';
import MetaData from './layout/MetaData'
import Product from './product/Product';
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

const ProductByCategory = () => {
     
  const [currentPage, setcurrentPage] = useState(1)
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [price, setPrice] = useState([1, 1000])
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)
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

      <div>

      {/* <!-- Breadcumb Area --> */}
      <div className="breadcumb_area">
         <div className="container h-100">
            <div className="row h-100 align-items-center">
               <div className="col-12">
                  <h5>Shop Grid</h5>
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                     <li className="breadcrumb-item active">Shop Grid</li>
                  </ol>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- Breadcumb Area --> */}

      <div className="shop_grid_area section_padding_100">
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                  <div className="shop_sidebar_area">

                     {/* <!-- Single Widget --> */}
                     <div className="widget catagory mb-30">
                        <h6 className="widget-title">Product Categories</h6>
                        <div className="widget-desc">
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" for="customCheck1">Men <span className="text-muted">(109)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck2" />
                              <label className="custom-control-label" for="customCheck2">Women <span className="text-muted">(67)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck3" />
                              <label className="custom-control-label" for="customCheck3">Kids <span className="text-muted">(89)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck4" />
                              <label className="custom-control-label" for="customCheck4">Accessories <span className="text-muted">(425)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center">
                              <input type="checkbox" className="custom-control-input" id="customCheck5" />
                              <label className="custom-control-label" for="customCheck5">Fashion <span className="text-muted">(73)</span></label>
                           </div>
                        </div>
                     </div>

                     {/* <!-- Single Widget --> */}
                     <div className="widget price mb-30">
                        <h6 className="widget-title">Filter by Price</h6>
                        <div className="widget-desc">
                           <div className="slider-range">
                              <div data-min="0" data-max="1350" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                                 <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                 <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                 <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                              </div>
                              <div className="range-price">Price: 0 - 1350</div>
                           </div>
                        </div>
                     </div>

                     {/* <!-- Single Widget --> */}
                     <div className="widget color mb-30">
                        <h6 className="widget-title">Filter by Color</h6>
                        <div className="widget-desc">
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck6" />
                              <label className="custom-control-label black" for="customCheck6">Black <span className="text-muted">(9)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck7" />
                              <label className="custom-control-label pink" for="customCheck7">Pink <span className="text-muted">(6)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck8" />
                              <label className="custom-control-label red" for="customCheck8">Red <span className="text-muted">(8)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck9" />
                              <label className="custom-control-label purple" for="customCheck9">Purple <span className="text-muted">(4)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center">
                              <input type="checkbox" className="custom-control-input" id="customCheck10" />
                              <label className="custom-control-label orange" for="customCheck10">Orange <span className="text-muted">(7)</span></label>
                           </div>
                        </div>
                     </div>

                     {/* <!-- Single Widget --> */}
                     <div className="widget brands mb-30">
                        <h6 className="widget-title">Filter by brands</h6>
                        <div className="widget-desc">
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck11" />
                              <label className="custom-control-label" for="customCheck11">Zara <span className="text-muted">(213)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck12" />
                              <label className="custom-control-label" for="customCheck12">Gucci <span className="text-muted">(65)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck13" />
                              <label className="custom-control-label" for="customCheck13">Addidas <span className="text-muted">(70)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                              <input type="checkbox" className="custom-control-input" id="customCheck14" />
                              <label className="custom-control-label" for="customCheck14">Nike <span className="text-muted">(104)</span></label>
                           </div>
                           {/* <!-- Single Checkbox --> */}
                           <div className="custom-control custom-checkbox d-flex align-items-center">
                              <input type="checkbox" className="custom-control-input" id="customCheck15" />
                              <label className="custom-control-label" for="customCheck15">Denim <span className="text-muted">(71)</span></label>
                           </div>
                        </div>
                     </div>

                     {/* <!-- Single Widget --> */}
                     <div className="widget rating mb-30">
                        <h6 className="widget-title">Average Rating</h6>
                        <div className="widget-desc">
                           <ul>
                              <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <span className="text-muted">(103)</span></a></li>

                              <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <span className="text-muted">(78)</span></a></li>

                              <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <span className="text-muted">(47)</span></a></li>

                              <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <span className="text-muted">(9)</span></a></li>

                              <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <i className="fa fa-star-o" aria-hidden="true"></i> <span className="text-muted">(3)</span></a></li>
                           </ul>
                        </div>
                     </div>

                     {/* <!-- Single Widget --> */}
                     <div className="widget size mb-30">
                        <h6 className="widget-title">Filter by Size</h6>
                        <div className="widget-desc">
                           <ul>
                              <li><a href="#">XS</a></li>
                              <li><a href="#">S</a></li>
                              <li><a href="#">M</a></li>
                              <li><a href="#">L</a></li>
                              <li><a href="#">XL</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-12 col-sm-7 col-md-8 col-lg-9">
                  {/* <!-- Shop Top Sidebar --> */}
                  <div className="shop_top_sidebar_area d-flex flex-wrap align-items-center justify-content-between">
                     <div className="view_area d-flex">
                        <div className="grid_view">
                           <a href="shop-grid-left-sidebar.html" data-toggle="tooltip" data-placement="top" title="Grid View"><i className="icofont-layout"></i></a>
                        </div>
                        <div className="list_view ml-3">
                           <a href="shop-list-left-sidebar.html" data-toggle="tooltip" data-placement="top" title="List View"><i className="icofont-listine-dots"></i></a>
                        </div>
                     </div>
                     <select className="small right">
                        <option selected>Short by Popularity</option>
                        <option value="1">Short by Newest</option>
                        <option value="2">Short by Sales</option>
                        <option value="3">Short by Ratings</option>
                     </select>
                  </div>

                  <div className="shop_grid_product_area">
                     <div className="row justify-content-center">
                        {/* <!-- Single Product --> */}
                        {/* <div className="col-9 col-sm-12 col-md-6 col-lg-4"> */}
                       
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-2.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-2-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Zara</p>
                                 <a href="#">Flower Textured Dress</a>
                                 <h6 className="product-price">$34 <span>$48</span></h6>
                              </div>
                           </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-3.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-3-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Sarah</p>
                                 <a href="#">Silk Dress</a>
                                 <h6 className="product-price">$96</h6>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-4-back.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-4.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Havit</p>
                                 <a href="#">Box Shape Dress</a>
                                 <h6 className="product-price">$13 <span>$27</span></h6>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-5.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-5-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Women</p>
                                 <a href="#">Light Dress</a>
                                 <h6 className="product-price">$7.99</h6>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-6.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-6-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Top</p>
                                 <a href="#">Flower Textured Pants</a>
                                 <h6 className="product-price">$39</h6>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-7-back.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-7.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Lim</p>
                                 <a href="#">Fashion Dress</a>
                                 <h6 className="product-price">$88</h6>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-8.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-8-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Silk</p>
                                 <a href="#">Top's Short</a>
                                 <h6 className="product-price">$32</h6>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-9.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-9-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Eye</p>
                                 <a href="#">Filmy Sunglases</a>
                                 <h6 className="product-price">$14</h6>
                              </div>
                           </div>
                        </div>




                        

                          my Single Product
                          <div className="col-9 col-sm-12 col-md-6 col-lg-4">
                           <div className="single-product-area mb-30">
                              <div className="product_image">
                                 {/* <!-- Product Image --> */}
                                 <img className="normal_img" src="/bigshop/assets/img/product-img/new-9.png" alt="" />
                                 <img className="hover_img" src="/bigshop/assets/img/product-img/new-9-back.png" alt="" />

                                 {/* <!-- Product Badge --> */}
                                 <div className="product_badge">
                                    <span>New</span>
                                 </div>

                                 {/* <!-- Wishlist --> */}
                                 <div className="product_wishlist">
                                    <a href="wishlist.html"><i className="icofont-heart"></i></a>
                                 </div>

                                 {/* <!-- Compare --> */}
                                 <div className="product_compare">
                                    <a href="compare.html"><i className="icofont-exchange"></i></a>
                                 </div>
                              </div>

                              {/* <!-- Product Description --> */}
                              <div className="product_description">
                                 {/* <!-- Add to cart --> */}
                                 <div className="product_add_to_cart">
                                    <a href="#"><i className="icofont-shopping-cart"></i> Add to Cart</a>
                                 </div>

                                 {/* <!-- Quick View --> */}
                                 <div className="product_quick_view">
                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                 </div>

                                 <p className="brand_name">Eye</p>
                                 <a href="#">Filmy Sunglases</a>
                                 <h6 className="product-price">$14</h6>
                              </div>
                           </div>





                           map


                           <div className="slick-list draggable">
                        {products && products.map(product => (

                          //         <div key={product._id} class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "308px"}}><div><div style={{width: "100%", display: "inline-block"}}/>
                          //         <div class="product-box product-box2">
                          //            <div class="product-imgbox">
                          //               <div class="product-front">
                          //                  <Link to="product-page(left-sidebar).html" tabindex="0">
                          //                  <img  src={product.images[0].url} alt=""
                          //          className="img-fluid"/>                           </Link>
                          //               </div>
                          //               <div class="product-back">
                          //                  <Link to="product-page(left-sidebar).html" tabindex="0">
                          //                  <img  src={product.images[0].url} alt=""
                          //          className="img-fluid"/>                           </Link>
                          //               </div>
                          //               <div class="product-icon icon-inline">
                          //                  <button class="tooltip-top  add-cartnoty" data-tippy-content="Add to cart" tabindex="0">
                          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                          //                  </button>
                          //                  <a href="" class="add-to-wish tooltip-top" data-tippy-content="Add to Wishlist" tabindex="0">
                          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                          //                  </a>
                          //                  <a href="" data-bs-toggle="modal" data-bs-target="#quick-view" class="tooltip-top" data-tippy-content="Quick View" tabindex="0">
                          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          //                  </a>
                          //                  <a href="compare.html" class="tooltip-top" data-tippy-content="Compare" tabindex="0">
                          //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                          //                  </a>
                          //               </div>
                          //               <div class="new-label1">
                          //                  <div>new</div>
                          //               </div>
                          //               <div class="on-sale1">
                          //                  on sale
                          //               </div>
                          //            </div>
                          //            <div class="product-detail product-detail2 ">
                          //               {/* <ul>
                          //                  <li><i class="fa fa-star"></i></li>
                          //                  <li><i class="fa fa-star"></i></li>
                          //                  <li><i class="fa fa-star"></i></li>
                          //                  <li><i class="fa fa-star"></i></li>                           
                          //                  <li><i class="fa fa-star-o"></i></li>
                          //               </ul> */}

                          // <div className="ratings mt-auto">
                          //   <div className="rating-outer">
                          //     <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                          //   </div>
                          //   <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                          // </div>
                          //               <Link to="product-page(no-sidebar).html" tabindex="0">
                          //                  <h3>{product.name}</h3>
                          //               </Link>
                          //               <h5>
                          //                  $50
                          //                  <span>
                          //             $80
                          //           </span>
                          //               </h5>
                          //            </div>
                          //         </div>
                          //      </div></div>
                          // {products.map(product => (
                          // <div> key={product._id} {product.name}</div>

                          <Product key={product._id} product={product} />

                          // ))};
                        ))}

                      </div>


                           end map
                        </div>
                     </div>
                  </div>

                  {/* <!-- Shop Pagination Area --> */}
                  <div className="shop_pagination_area mt-30">
                     <nav aria-label="Page navigation">
                        <ul className="pagination pagination-sm justify-content-center">
                           <li className="page-item">
                              <a className="page-link" href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                           </li>
                           <li className="page-item active"><a className="page-link" href="#">1</a></li>
                           <li className="page-item"><a className="page-link" href="#">2</a></li>
                           <li className="page-item"><a className="page-link" href="#">3</a></li>
                           <li className="page-item"><a className="page-link" href="#">4</a></li>
                           <li className="page-item"><a className="page-link" href="#">5</a></li>
                           <li className="page-item"><a className="page-link" href="#">...</a></li>
                           <li className="page-item"><a className="page-link" href="#">8</a></li>
                           <li className="page-item"><a className="page-link" href="#">9</a></li>
                           <li className="page-item">
                              <a className="page-link" href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                           </li>
                        </ul>
                     </nav>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </div>

   );
};



export default ProductByCategory;