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
import Search from './layout/Search';
// import { FontAwesomeIcon } from '@htmlFortawesome/react-fontawesome'
// import { faStar as farFaStar } from '@htmlFortawesome/free-regular-svg-icons'
// import { faStar as fasFaStar } from '@htmlFortawesome/free-solid-svg-icons'

const attributeElements = {
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
};

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const SearchPage = () => {

  const [currentPage, setcurrentPage] = useState(1)
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [price, setPrice] = useState([1, 1000])
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)
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

  let count = productsCount;
  console.log('filtered', filteredProductsCount);
  if (keyword) {
    count = filteredProductsCount
  }


  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />
          {/* <!-- Breadcumb Area --> */}
          <div className="breadcumb_area">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <h5>Shop Grid</h5>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">Shop Grid</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Breadcumb Area --> */}

          <section className="shop_grid_area section_padding_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                  <div className="shop_sidebar_area">

                    {/* <!-- Single Widget --> */}
                    <div className="widget catagory mb-30">
                      <h6 className="widget-title">Product Categories</h6>
                      <div className="widget-desc">
                        {/* <!-- Single Checkbox --> */}
                        {categories.map(category => (

                          <div className="custom-control custom-checkbox d-flex align-items-center mb-2" >
                            <Fragment>
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" style={{
                                cursor: 'pointer',
                                listStyleType: 'none'
                              }} key={category} onClick={() => setCategory(category)} for="customCheck1">{category} <span
                                className="text-muted">(109)</span></label>
                            </Fragment>
                          </div>
                        ))}

                      </div>
                    </div>

                    {/* <!-- Single Widget --> */}
                    <div className="widget price mb-30">
                      <h6 className="widget-title">Filter by Price</h6>
                      <div className="widget-desc">
                        <div className=' py-5'>
                          <Range marks={{
                            1: `$1`,
                            1000: `1000`
                          }}
                            min={1}
                            max={1000}
                            defaultValue={[1, 1000]}
                            tipFormatter={value => `$${value}`}
                            tipProps={{
                              placement: "top",
                              visible: true
                            }}
                            value={price}
                            onChange={price => setPrice(price)}
                          />
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
                          <label className="custom-control-label black" for="customCheck6">Black <span
                            className="text-muted">(9)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck7" />
                          <label className="custom-control-label pink" for="customCheck7">Pink <span
                            className="text-muted">(6)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck8" />
                          <label className="custom-control-label red" for="customCheck8">Red <span
                            className="text-muted">(8)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck9" />
                          <label className="custom-control-label purple" for="customCheck9">Purple <span
                            className="text-muted">(4)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center">
                          <input type="checkbox" className="custom-control-input" id="customCheck10" />
                          <label className="custom-control-label orange" for="customCheck10">Orange <span
                            className="text-muted">(7)</span></label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Widget --> */}
                    <div className="widget brands">
                      <h6 className="widget-title">Filter by brands</h6>
                      <div className="widget-desc">
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck11" />
                          <label className="custom-control-label" for="customCheck11">Zara <span
                            className="text-muted">(213)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck12" />
                          <label className="custom-control-label" for="customCheck12">Gucci <span
                            className="text-muted">(65)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck13" />
                          <label className="custom-control-label" for="customCheck13">Addidas <span
                            className="text-muted">(70)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                          <input type="checkbox" className="custom-control-input" id="customCheck14" />
                          <label className="custom-control-label" for="customCheck14">Nike <span
                            className="text-muted">(104)</span></label>
                        </div>
                        {/* <!-- Single Checkbox --> */}
                        <div className="custom-control custom-checkbox d-flex align-items-center">
                          <input type="checkbox" className="custom-control-input" id="customCheck15" />
                          <label className="custom-control-label" for="customCheck15">Denim <span
                            className="text-muted">(71)</span></label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Widget --> */}
                    <div className="widget rating mb-30">
                      <h6 className="widget-title">Average Rating</h6>
                      <div className="widget-desc">
                        <ul className="pl-0">
                          {[5, 4, 3, 2, 1].map(star => (
                            <li
                              style={{
                                cursor: 'pointer',
                                listStyleType: 'none'
                              }}
                              key={star}
                              onClick={() => setRating(star)}
                            >
                              <div className="rating-outer">
                                <div className="rating-inner"
                                  style={{
                                    width: `${star * 20}%`
                                  }}
                                >
                                </div>
                              </div>
                            </li>
                          ))}
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
                    <div className="container">
                      <div className="row">
                        {/* <!-- Single Product --> */}
                        {products && products.map(product => (

                          <Product key={product._id} product={product} />
                        ))}


                      </div>
                    </div>
                  </div>

                  {/* <!-- Shop Pagination Area --> */}

                  <div className="shop_pagination_area mt-30">
                    <nav aria-label="Page navigation">
                      <ul className="pagination pagination-sm justify-content-center">
                        {resPerPage <= products.length && (
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
              </div>
            </div>
          </section>

          {/* </main> */}
        </Fragment >
      )
      }
    </Fragment >
  );
};

export default SearchPage;