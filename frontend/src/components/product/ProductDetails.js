import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useParams, Link } from "react-router-dom";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
// import { Carousel } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import { getProductDetails, ClearErrors } from "../../actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  let params = useParams();
  useEffect(() => {
    dispatch(getProductDetails(params.id));
    // loading = false;

    if (error) {
      alert.error(error);
      dispatch(ClearErrors());
    }
  }, [dispatch, alert, error, params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          {/* <!-- Breadcumb Area --> */}
          <div className="breadcumb_area">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <h5>Shop Grid</h5>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={`/product/${product._id}`} href="index.html">Home</Link></li>
                    <li className="breadcrumb-item active">Shop Grid</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Breadcumb Area --> */}


          {/* <!-- Single Product Details Area --> */}
          <section className="single_product_details_area section_padding_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-7 col-lg-6">
                  {/* <!-- Single News Area --> */}
                  <div className="single_blog_area">
                    <div className="blog_post_thumb">
                      <Link to={`/product/${product._id}`}>
                        <Carousel pause="hover">
                          {product.images &&
                            product.images.map((image) => (
                              <Carousel.Item key={image.public_id}>
                                <p>{product.title}</p>
                                <img
                                  className="d-block w-100"
                                  src={image.url}
                                  // src="../assets/images/product-sidebar/002.jpg"

                                  alt={product.title}
                                />
                              </Carousel.Item>
                            ))}
                        </Carousel>
                      </Link>
                      {/* <!-- Post Date --> */}
                      <div className="post-date">
                        <Link to={`/product/${product._id}`}>9 Aug</Link>
                        <span>3 min read</span>
                      </div>
                    </div>
                    <div className="blog_post_content">
                      <Link to={`/product/${product._id}`} className="blog_title">{product.name} </Link>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, dolorem accusamus. Tenetur sit dolore nesciunt ipsum aspernatur nam et, expedita placeat labore alias consequatur accusamus autem aliquam optio assumenda obcaecati.</p>
                      <Link to={`/product/${product._id}`}>Continue Reading <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                    </div>
                  </div>
                </div>

                {/* <!-- Single Product Description --> */}
                <div className="col-12 col-lg-6">
                  <div className="single_product_desc">
                    <h4 className="title">{product.name}</h4>
                    <p className="">Product # {product._id}</p>
                    <div className="single_product_ratings mb-2">
                      <div className="ratings mt-auto">
                        <div className="rating-outer">
                          <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                      </div>
                    </div>
                    <h4 className="price mb-4">${product.price} <span>$190</span></h4>

                    {/* <!-- Overview --> */}
                    <div className="short_overview mb-4">
                      <h6>Overview</h6>
                      <p>{product.description}</p>
                      <p id="product_seller mb-3">sold by: <strong>{product.seller}</strong></p>
                      <hr />
                      <p id="product_seller mb-3">Status: <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                    </div>

                    {/* <!-- Color Option --> */}
                    <div className="widget p-0 color mb-3">
                      <h6 className="widget-title">Color</h6>
                      <div className="widget-desc d-flex">
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label black" htmlFor="customRadio1"></label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label pink" htmlFor="customRadio2"></label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label red" htmlFor="customRadio3"></label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label purple" htmlFor="customRadio4"></label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label white" htmlFor="customRadio5"></label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Size Option --> */}
                    <div className="widget p-0 size mb-3">
                      <h6 className="widget-title">Size</h6>
                      <div className="widget-desc">
                        <ul>
                          <li><Link to={`/product/${product._id}`}>XS</Link></li>
                          <li><Link to={`/product/${product._id}`}>S</Link></li>
                          <li><Link to={`/product/${product._id}`}>M</Link></li>
                          <li><Link to={`/product/${product._id}`}>L</Link></li>
                          <li><Link to={`/product/${product._id}`}>XL</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* <!-- Add to Cart Form --> */}
                    <form className="cart clearfix my-5 d-flex flex-wrap align-items-center" method="post">
                      <div className="quantity">
                        <input type="number" className="qty-text form-control" id="qty2" step="1" min="1" max="12" name="quantity" />
                      </div>
                      <button type="submit" name="addtocart" className="btn btn-primary mt-1 mt-md-0 ml-1 ml-md-3">Add to cart</button>
                    </form>

                    {/* <!-- Others Info --> */}
                    <div className="others_info_area mb-3 d-flex flex-wrap">
                      <Link to={`/product/${product._id}`} className="add_to_wishlist" href="wishlist.html"><i className="fa fa-heart" aria-hidden="true"></i> WISHLIST</Link>
                      <Link to={`/product/${product._id}`} className="add_to_compare" href="compare.html"><i className="fa fa-th" aria-hidden="true"></i> COMPARE</Link>
                      <Link to={`/product/${product._id}`} className="share_with_friend" href="#"><i className="fa fa-share" aria-hidden="true"></i> SHARE WITH FRIEND</Link>
                    </div>

                    {/* <!-- Size Guide --> */}
                    <div className="sizeguide">
                      <h6>Size Guide</h6>
                      <div className="size_guide_thumb d-flex">
                        <Link to={`/product/${product._id}`} className="size_guide_img" href="img/bg-img/size-1.png" style={{ backgroundImage: "url(img/bg-img/size-1.png)" }}>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="product_details_tab section_padding_100_0 clearfix">
                    {/* <!-- Tabs --> */}
                    <ul className="nav nav-tabs" role="tablist" id="product-details-tab">
                      <li className="nav-item">
                        <Link to={`/product/${product._id}`} className="nav-link active" data-toggle="tab" role="tab">Description</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/product/${product._id}`} href="#reviews" className="nav-link" data-toggle="tab" role="tab">Reviews <span className="text-muted">(3)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/product/${product._id}`} href="#addi-info" className="nav-link" data-toggle="tab" role="tab">Additional Information</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/product/${product._id}`} href="#refund" className="nav-link" data-toggle="tab" role="tab">Return &amp; Cancellation</Link>
                      </li>
                    </ul>
                    {/* <!-- Tab Content --> */}
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade show active" id="description">
                        <div className="description_area">
                          <h5>Description</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur nulla similique deserunt nemo ea eum expedita, et repellat repudiandae unde quia molestias deleniti incidunt, ad cupiditate. Corporis ipsam minus officiis neque magni harum accusantium nobis labore veritatis, consectetur ab rerum.</p>

                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum dolore, adipisci vitae quidem. Quaerat tenetur explicabo tempore beatae dolor. Quo ipsa labore, itaque ea ratione. Ratione labore quae corporis.</p>

                          <div className="embed-responsive embed-responsive-16by9 mb-3">
                            {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tjvOOKx7Ytw?ecver=1" allowfullscreen></iframe> */}
                          </div>

                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic facere quos repudiandae ratione maiores accusantium suscipit, quod fugiat. Fugit quod laborum quidem, quos adipisci harum aspernatur, repudiandae, beatae expedita rerum ipsam dicta molestias et quis sapiente maiores amet laudantium minus nostrum. Nobis amet veritatis autem illo neque voluptas culpa vero iusto distinctio perspiciatis.</p>

                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima animi ab, quis atque, sed nulla veniam quisquam amet perspiciatis, aliquam dolore tempora, consequuntur beatae quae dolor rem repellendus! Vitae architecto sequi quo eaque iusto impedit suscipit non maxime sint totam, nesciunt necessitatibus iste nulla ab, veritatis assumenda.</p>
                        </div>
                      </div>

                      <div role="tabpanel" className="tab-pane fade" id="reviews">
                        <div className="reviews_area">
                          <ul>
                            <li>
                              <div className="single_user_review mb-15">
                                <div className="review-rating">
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <span>for Quality</span>
                                </div>
                                <div className="review-details">
                                  <p>by <Link to={`/product/${product._id}`} href="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                </div>
                              </div>
                              <div className="single_user_review mb-15">
                                <div className="review-rating">
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <span>for Design</span>
                                </div>
                                <div className="review-details">
                                  <p>by <Link to={`/product/${product._id}`} href="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                </div>
                              </div>
                              <div className="single_user_review">
                                <div className="review-rating">
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                  <span>for Value</span>
                                </div>
                                <div className="review-details">
                                  <p>by <Link to={`/product/${product._id}`} href="#">Designing World</Link> on <span>12 Sep 2019</span></p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="submit_a_review_area mt-50">
                          <h4>Submit A Review</h4>
                          <form action="#" method="post">
                            <div className="form-group">
                              <span>Your Ratings</span>
                              <div className="stars">
                                <input type="radio" name="star" className="star-1" id="star-1" />
                                <label className="star-1" htmlFor="star-1">1</label>
                                <input type="radio" name="star" className="star-2" id="star-2" />
                                <label className="star-2" htmlFor="star-2">2</label>
                                <input type="radio" name="star" className="star-3" id="star-3" />
                                <label className="star-3" htmlFor="star-3">3</label>
                                <input type="radio" name="star" className="star-4" id="star-4" />
                                <label className="star-4" htmlFor="star-4">4</label>
                                <input type="radio" name="star" className="star-5" id="star-5" />
                                <label className="star-5" htmlFor="star-5">5</label>
                                <span></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Nickname</label>
                              <input type="email" className="form-control" id="name" placeholder="Nazrul" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="options">Reason for your rating</label>
                              <select className="form-control small right py-0 w-100" id="options">
                                <option>Quality</option>
                                <option>Value</option>
                                <option>Design</option>
                                <option>Price</option>
                                <option>Others</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="comments">Comments</label>
                              <textarea className="form-control" id="comments" rows="5" data-max-length="150"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Review</button>
                          </form>
                        </div>
                      </div>

                      <div role="tabpanel" className="tab-pane fade" id="addi-info">
                        <div className="additional_info_area">
                          <h5>Additional Info</h5>
                          <p>What should I do if I receive a damaged parcel?
                            <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit impedit similique qui, itaque delectus labore.</span></p>
                          <p>I have received my order but the wrong item was delivered to me.
                            <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam voluptatum beatae harum tempore, ab?</span></p>
                          <p>Product Receipt and Acceptance Confirmation Process
                            <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus, temporibus soluta impedit minus rerum?</span></p>
                          <p className="mb-0">How do I cancel my order?
                            <br /> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius eum, minima!</span></p>
                        </div>
                      </div>

                      <div role="tabpanel" className="tab-pane fade" id="refund">
                        <div className="refund_area">
                          <h6>Return Policy</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quidem, eos eius laboriosam voluptates totam mollitia repellat rem voluptate obcaecati quas fuga similique impedit cupiditate vitae repudiandae. Rem, tenetur placeat!</p>

                          <h6>Return Criteria</h6>
                          <ul className="mb-30 ml-30">
                            <li><i className="icofont-check"></i> Package broken</li>
                            <li><i className="icofont-check"></i> Physical damage in the product</li>
                            <li><i className="icofont-check"></i> Software/hardware problem</li>
                            <li><i className="icofont-check"></i> Accessories missing or damaged etc.</li>
                          </ul>

                          <h6>Q. What should I do if I receive a damaged parcel?</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit impedit similique qui, itaque delectus labore.</p>

                          <h6>Q. I have received my order but the wrong item was delivered to me.</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam voluptatum beatae harum tempore, ab?</p>

                          <h6>Q. Product Receipt and Acceptance Confirmation Process</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus, temporibus soluta impedit minus rerum?</p>

                          <h6>Q. How do I cancel my order?</h6>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius eum, minima!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* // </div> */}
          </section >
          {/* <!-- Single Product Details Area End --> */}
        </Fragment >
      )}
    </Fragment >
  );
};

export default ProductDetails;
