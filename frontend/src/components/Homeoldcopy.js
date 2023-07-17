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

const Home = () => {

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
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />
          <main>
            {/* collection banner start */}

            <section className="product section-pb-space mb--5">
              <div className="custom-container">
                <div className="row">
                  <div className="col pr-0">
                    <div className="product-slide-6 no-arrow slick-initialized slick-slider">
                      <button
                        className="slick-prev slick-arrow"
                        aria-label="Previous"
                        type="button"
                        style={{ display: "inline-block" }}
                      >
                        Previous
                      </button>
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
                      <button
                        className="slick-next slick-arrow"
                        aria-label="Next"
                        type="button"
                        style={{ display: "inline-block" }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {resPerPage <= productsCount && (
              <div className='d-flex justify-content-center mt-5'>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={'Next'}
                  prevPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass="page-item"
                  linkClass='page-link'
                />
              </div>

            )}

          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;