import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
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
          {/* <!-- breadcrumb start --> */}
          <div className="breadcrumb-main ">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="breadcrumb-contain">
                    <div>
                      <h2>product</h2>
                      <ul>
                        <li>
                          <a href="index.html">home</a>
                        </li>
                        <li>
                          <i className="fa fa-angle-double-right"></i>
                        </li>
                        <li>
                          <a href="#">product</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- breadcrumb End --> */}

          {/* <!-- section start --> */}
          <section className="section-big-pt-space b-g-light">
            <div className="collection-wrapper">
              <div className="custom-container">
                <div className="row">
                  <div className="col-lg-5">
                    <Carousel pause="hover">
                      {product.images &&
                        product.images.map((image) => (
                          <Carousel.Item key={image.public_id}>
                            <p>{product.title}</p>
                            <img
                              className="d-block w-100"
                            //   src={image.url}
                            src="../assets/images/product-sidebar/002.jpg"

                              alt={product.title}
                            />
                          </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className="product-slick no-arrow">
                      {/* <div>
                        <img
                          src="../assets/images/product-sidebar/001.jpg"
                          alt=""
                          className="img-fluid  image_zoom_cls-0"
                        />
                      </div>
                      <div>
                        <img
                          src="../assets/images/product-sidebar/002.jpg"
                          alt=""
                          className="img-fluid  image_zoom_cls-1"
                        />
                      </div>
                      <div>
                        <img
                          src="../assets/images/product-sidebar/003.jpg"
                          alt=""
                          className="img-fluid  image_zoom_cls-2"
                        />
                      </div>
                      <div>
                        <img
                          src="../assets/images/product-sidebar/004.jpg"
                          alt=""
                          className="img-fluid  image_zoom_cls-3"
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-7 rtl-text">
                    <div className="product-right">
                      <div className="pro-group">
                        <h2>{product.name}</h2>
                        <p>
                          Status:{" "}
                          <span
                            id="stock_status"
                            className={
                              product.stock > 0 ? "greenColor" : "redColor"
                            }
                          >
                            {product.stock > 0 ? "In stock" : "Out of Stock"}
                          </span>
                        </p>
                        <ul className="pro-price">
                          <li>${product.price}</li>
                          <li>
                            <span>mrp $140</span>
                          </li>
                          <li>50% off</li>
                        </ul>
                        <div className="ratings mt-auto">
                          <div className="rating-outer revieu-box">
                            <div
                              className="rating-inner"
                              style={{
                                width: `${(product.ratings / 5) * 100}%`,
                              }}
                            ></div>
                            <span id="no_of_reviews">
                              ({product.numOfReviews} Reviews)
                            </span>
                          </div>
                        </div>
                        {/* <div className="revieu-box">                                     
                                      <ul>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                      </ul>
                                      <a href="review.html"><span>(6 reviews)</span></a>
                                    </div>  */}
                        <ul className="best-seller">
                          <li>
                            <svg
                              viewBox="0 0 128 128"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path
                                  d="m102.427 43.155-2.337-2.336a3.808 3.808 0 0 1 -.826-4.149l1.263-3.053a3.808 3.808 0 0 0 -2.063-4.975l-3.036-1.256a3.807 3.807 0 0 1 -2.352-3.519v-3.286a3.808 3.808 0 0 0 -3.809-3.808h-3.3a3.81 3.81 0 0 1 -3.518-2.35l-1.269-3.052a3.808 3.808 0 0 0 -4.98-2.059l-3.032 1.258a3.807 3.807 0 0 1 -4.152-.825l-2.323-2.323a3.809 3.809 0 0 0 -5.386 0l-2.336 2.336a3.808 3.808 0 0 1 -4.149.826l-3.053-1.263a3.809 3.809 0 0 0 -4.975 2.063l-1.257 3.036a3.808 3.808 0 0 1 -3.519 2.353h-3.285a3.808 3.808 0 0 0 -3.809 3.808v3.3a3.808 3.808 0 0 1 -2.349 3.519l-3.053 1.266a3.809 3.809 0 0 0 -2.059 4.976l1.259 3.035a3.81 3.81 0 0 1 -.825 4.152l-2.324 2.323a3.809 3.809 0 0 0 0 5.386l2.337 2.337a3.807 3.807 0 0 1 .826 4.149l-1.263 3.056a3.808 3.808 0 0 0 2.063 4.975l3.036 1.256a3.807 3.807 0 0 1 2.352 3.519v3.286a3.808 3.808 0 0 0 3.809 3.808h3.3a3.809 3.809 0 0 1 3.518 2.35l1.265 3.052a3.808 3.808 0 0 0 4.984 2.059l3.035-1.259a3.811 3.811 0 0 1 4.152.825l2.323 2.324a3.809 3.809 0 0 0 5.386 0l2.336-2.336a3.81 3.81 0 0 1 4.149-.827l3.053 1.264a3.809 3.809 0 0 0 4.975-2.063l1.257-3.037a3.809 3.809 0 0 1 3.519-2.352h3.285a3.808 3.808 0 0 0 3.809-3.808v-3.3a3.808 3.808 0 0 1 2.349-3.518l3.053-1.266a3.809 3.809 0 0 0 2.059-4.976l-1.259-3.036a3.809 3.809 0 0 1 .825-4.151l2.324-2.324a3.809 3.809 0 0 0 -.003-5.39z"
                                  fill="#f9cc4e"
                                />
                                <circle
                                  cx="64"
                                  cy="45.848"
                                  fill="#4ec4b5"
                                  r="29.146"
                                />
                                <path
                                  d="m59.795 41.643 4.205-12.614 4.205 12.614h12.615l-8.41 8.41 4.205 12.615-12.615-8.41-12.615 8.41 4.205-12.615-8.41-8.41z"
                                  fill="#f9cc4e"
                                />
                                <path
                                  d="m87.579 74.924h-1.6a3.809 3.809 0 0 0 -3.519 2.352l-1.257 3.037a3.809 3.809 0 0 1 -4.975 2.063l-3.053-1.264a3.81 3.81 0 0 0 -4.149.827l-2.336 2.336a3.809 3.809 0 0 1 -5.386 0l-2.323-2.324a3.811 3.811 0 0 0 -4.152-.825l-3.029 1.259a3.808 3.808 0 0 1 -4.977-2.059l-1.265-3.052a3.809 3.809 0 0 0 -3.518-2.35h-1.618l-17.417 35.386 17.255-5.872 5.872 17.256 17.868-36.304 17.868 36.3 5.872-17.256 17.26 5.876z"
                                  fill="#f95050"
                                />
                              </g>
                            </svg>
                            3 best seller
                          </li>
                          <li>
                            <svg
                              enable-background="new 0 0 497 497"
                              viewBox="0 0 497 497"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path
                                  d="m329.63 405.42-.38.43c-10.048 19.522-48.375 35.567-80.775 35.607-24.881 0-53.654-9.372-71.486-20.681-5.583-3.54-2.393-10.869-6.766-15.297l19.149-5.13c3.76-1.22 6.46-4.54 6.87-8.47l8.574-59.02 82.641-2.72 12.241 28.06.837 8.668-1.844 9.951 3.456 6.744.673 6.967c.41 3.93 3.11 7.25 6.87 8.47z"
                                  fill="#f2d1a5"
                                />
                                <path
                                  d="m420.39 497h-343.78c-6.21 0-7.159-6.156-6.089-12.266l2.53-14.57c3.82-21.96 16.463-37.323 37.683-44.153l27.702-8.561 28.754-8.035c18.34 18.57 48.615 27.957 81.285 27.957 32.4-.04 61.709-8.478 80.259-26.809l.38-.43 31.486 5.256 26.39 8.5c21.22 6.83 36.9 24.87 40.72 46.83l2.53 14.57c1.07 6.111-3.64 11.711-9.85 11.711z"
                                  fill="#7e8b96"
                                />
                                <g>
                                  <path
                                    d="m384.055 215c-2.94 43.71-18.85 104.74-24.92 130.96-.68 2.94-2.33 5.45-4.56 7.22-2.23 1.78-5.05 2.82-8.06 2.82-6.88 0-12.55-5.37-12.94-12.23 0 0-5.58-84.28-7.63-128.77z"
                                    fill="#dc4955"
                                  />
                                </g>
                                <path
                                  d="m141 271c-27.062 0-49-21.938-49-49 0-11.046 8.954-20 20-20h8.989l240.468-6.287 8.293 6.287h15.25c11.046 0 20 8.954 20 20 0 27.062-21.938 49-49 49z"
                                  fill="#f2bb88"
                                />
                                <path
                                  d="m360.6 415.39-.06.09c-49.3 66.23-174.56 66.38-223.76.56l-.43-.63 18.171-1.91 12.669-8.02c18.34 18.57 48.41 29.8 81.08 29.8h.15c32.4-.04 62.28-11.1 80.83-29.43l.38-.43z"
                                  fill="#a9a4d3"
                                />
                                <path
                                  d="m147.8 418.394v10.136l-32.89 10.59c-15.6 5.02-27.05 18.18-29.86 34.34l-3.59 23.54h-4.85c-6.21 0-10.92-5.6-9.85-11.71l2.53-14.57c3.82-21.96 19.5-40 40.72-46.83l26.34-8.48z"
                                  fill="#64727a"
                                />
                                <path
                                  d="m182.19 417.45-34.39 11.08c-3.99-3.86-7.68-8.02-11.02-12.49l-.43-.63 30.84-9.93c1.828 1.848 10.344.351 12.353 2.02 2.928 2.433-.561 7.928 2.647 9.95z"
                                  fill="#938dc8"
                                />
                                <path
                                  d="m299.7 358.2-2.71-28.06-79.861 2.255.001-.005-16.48.47-2.98 26.56-.763 6.8 2.039 12.83-3.989 4.55-.778 6.93c-.41 3.93-3.11 7.25-6.87 8.47l-20.12 6.48c4.37 4.43 9.41 8.44 15 11.97l10.02-3.22c9.79-3.17 16.79-11.79 17.88-21.97l2.058-17.506c.392-3.33 3.888-5.367 6.958-4.02 11.414 5.008 21.565 7.765 28.393 7.765 11.322.001 31.852-7.509 52.202-20.299z"
                                  fill="#f2bb88"
                                />
                                <path
                                  d="m134.539 164.427s-.849 18.411-.849 33.002c0 38.745 9.42 76.067 25.701 105.572 20.332 36.847 72.609 61.499 88.109 61.499s68.394-24.653 89.275-61.499c14.137-24.946 23.338-55.482 25.843-87.741.458-5.894-9.799-20.073-9.799-26.058l10.491-24.775c0-38.422-36.205-111.427-114.81-111.427s-113.961 73.005-113.961 111.427z"
                                  fill="#f2d1a5"
                                />
                                <g>
                                  <path
                                    d="m294 227.5c-4.142 0-7.5-3.358-7.5-7.5v-15c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5z"
                                    fill="#64727a"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m203 227.5c-4.142 0-7.5-3.358-7.5-7.5v-15c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v15c0 4.142-3.358 7.5-7.5 7.5z"
                                    fill="#64727a"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m249 260.847c-5.976 0-11.951-1.388-17.398-4.163-3.691-1.88-5.158-6.397-3.278-10.087 1.88-3.691 6.398-5.158 10.087-3.278 6.631 3.379 14.547 3.379 21.178 0 3.689-1.881 8.207-.413 10.087 3.278 1.88 3.69.413 8.207-3.278 10.087-5.447 2.775-11.422 4.163-17.398 4.163z"
                                    fill="#f2bb88"
                                  />
                                </g>
                                <path
                                  d="m288.989 40.759c0 22.511-9.303 40.759-40.489 40.759s-48.702-42.103-48.702-42.103 17.516-39.415 48.702-39.415c25.911 0 47.746 12.597 54.392 29.769 1.353 3.497-13.903 7.182-13.903 10.99z"
                                  fill="#df646e"
                                />
                                <path
                                  d="m254.305 81.307c1.031-.099 2.069-.167 3.093-.295 26.96-3.081 47.572-19.928 47.572-40.252 0-3.81-.72-7.49-2.08-10.99-15.42-6.31-33.46-10.34-54.39-10.34-4.139 0-8.163.159-12.073.462-5.127.397-7.393-6.322-3.107-9.163 7.36-4.878 16.519-8.364 26.68-9.879-3.71-.56-7.56-.85-11.5-.85-25.933 0-47.766 12.621-54.393 29.813-.006.002-.011.004-.017.007-1.337 3.487-2.055 7.201-2.06 10.94 0 22.51 25.28 40.76 56.47 40.76 1.946.008 3.872-.09 5.805-.213z"
                                  fill="#dc4955"
                                />
                                <path
                                  d="m363.31 164.43v33c0 5.99-.23 11.94-.7 17.83-4.32-.91-8.4-2.66-12.05-5.19-22.785-15.834-31.375-40.163-37.64-60.936-.382-1.268-1.547-2.134-2.871-2.134h-30.949c-4.96 0-9.65-2.15-12.89-5.91l-10.947-12.711c-1.197-1.39-3.349-1.39-4.546 0l-10.947 12.711c-3.24 3.76-7.93 5.91-12.89 5.91h-90.33c8.47-39.6 44.09-94 111.95-94 78.61 0 114.81 73 114.81 111.43z"
                                  fill="#f2bb88"
                                />
                                <path
                                  d="m381 164.19v37.81h-11.25c-4 0-7.93-1.16-11.22-3.44-19.74-13.72-26.93-35.65-33.69-58.43-1.26-4.24-5.16-7.13-9.58-7.13h-36.165c-.873 0-1.703-.38-2.273-1.042l-21.559-25.029c-1.197-1.389-3.349-1.389-4.546 0l-21.559 25.029c-.57.662-1.4 1.042-2.273 1.042h-38.015c-5.3 0-9.68 4.14-9.98 9.44 0 0-2.331 25.591-4.032 66.31-1.765 42.256-7.908 135.02-7.908 135.02-.16 2.822-1.215 5.393-2.879 7.441-2.381 2.929-5.67.375-9.72.375-3.01 0-5.83-1.04-8.06-2.82-2.23-1.77-.792-5.474-1.472-8.414-6.7-28.94-23.83-94.686-23.83-138.351 0-13.73-.14-34.689 0-37.649.14-26.43 12.74-54.048 32-78.128 12.937-16.178 28.667-38.955 58.628-47.692 10.986-3.204 23.248-5.101 36.883-5.101 50.8 0 82.75 26.31 100.6 48.39 19.68 24.319 31.9 55.879 31.9 82.369z"
                                  fill="#df646e"
                                />
                                <path
                                  d="m211.62 38.54c-19.38 9.9-33.55 23.84-43.37 36.44-19.26 24.69-31.27 56.78-31.41 83.88-.14 3.03-.84 25.18-.84 39.25 0 44.77 18.69 117.93 25.39 147.6.47 2.08 1.4 3.94 2.68 5.5-2.38 2.93-6.01 4.79-10.06 4.79-3.01 0-5.83-1.04-8.06-2.82-2.23-1.77-3.88-4.28-4.56-7.22-6.7-28.94-25.39-100.29-25.39-143.96 0-13.73.7-35.33.84-38.29.14-26.43 12.15-57.73 31.41-81.81 12.94-16.18 33.4-34.63 63.37-43.36z"
                                  fill="#dc4955"
                                />
                                <g>
                                  <path
                                    d="m316.539 193.816c-1.277 0-2.571-.327-3.755-1.013-11.762-6.82-25.806-6.82-37.567 0-3.583 2.078-8.172.858-10.25-2.726-2.078-3.583-.857-8.172 2.726-10.25 16.474-9.552 36.143-9.552 52.616 0 3.583 2.078 4.804 6.667 2.726 10.25-1.392 2.399-3.909 3.739-6.496 3.739z"
                                    fill="#df646e"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m225.539 193.816c-1.277 0-2.571-.327-3.755-1.013-11.762-6.82-25.806-6.82-37.567 0-3.583 2.078-8.171.858-10.25-2.726-2.078-3.583-.857-8.172 2.726-10.25 16.474-9.552 36.143-9.552 52.616 0 3.583 2.078 4.804 6.667 2.726 10.25-1.392 2.399-3.909 3.739-6.496 3.739z"
                                    fill="#df646e"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m302.143 383.517c-16.23 10.87-34.973 16.353-53.643 16.353s-37.3-5.41-53.54-16.27l3.476-6.313-1.526-11.067 4.15 3.37c28.46 20.41 66.63 20.37 95.05-.12.2-.14.39-.27.6-.39l3.826-2.211z"
                                    fill="#a9a4d3"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m211.98 376.2-1.85 15.68c-5.23-2.27-10.31-5.03-15.17-8.28l1.95-17.38 4.15 3.37c3.5 2.51 7.15 4.72 10.92 6.61z"
                                    fill="#938dc8"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m269.5 306.5h-42c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h42c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"
                                    fill="#df646e"
                                  />
                                </g>
                              </g>
                            </svg>
                            44 active view this
                          </li>
                        </ul>
                      </div>
                      <div className="pro-group">
                        <h6 className="product-title">
                          hurry up ! Deal end in :
                        </h6>
                        <div className="timer">
                          <p id="demo"></p>
                        </div>
                      </div>
                      <div
                        id="selectSize"
                        className="pro-group addeffect-section product-description border-product mb-0"
                      >
                        <h6 className="product-title size-text">
                          select size
                          <span>
                            <a
                              href=""
                              data-bs-toggle="modal"
                              data-bs-target="#sizemodal"
                            >
                              size chart
                            </a>
                          </span>
                        </h6>
                        <div
                          className="modal fade"
                          id="sizemodal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Sheer Straight Kurta
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <img
                                  src="../assets/images/size-chart.jpg"
                                  alt=""
                                  className="img-fluid "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <h6 className="error-message">please select size</h6>
                        <div className="size-box">
                          <ul>
                            <li>
                              <a href="">s</a>
                            </li>
                            <li>
                              <a href="">m</a>
                            </li>
                            <li>
                              <a href="">l</a>
                            </li>
                            <li>
                              <a href="">xl</a>
                            </li>
                            <li>
                              <a href="">2xl</a>
                            </li>
                          </ul>
                        </div>
                        <h6 className="product-title">color</h6>
                        <div className="color-selector inline">
                          <ul>
                            <li>
                              <div className="color-1 active"></div>
                            </li>
                            <li>
                              <div className="color-2"></div>
                            </li>
                            <li>
                              <div className="color-3"></div>
                            </li>
                            <li>
                              <div className="color-4"></div>
                            </li>
                            <li>
                              <div className="color-5"></div>
                            </li>
                            <li>
                              <div className="color-6"></div>
                            </li>
                            <li>
                              <div className="color-7"></div>
                            </li>
                          </ul>
                        </div>
                        <h6 className="product-title">quantity</h6>
                        <div className="qty-box">
                          <div className="input-group">
                            <button className="qty-minus"></button>
                            <input
                              className="qty-adj form-control"
                              type="number"
                            //   value="1"
                            />
                            <button className="qty-plus"></button>
                          </div>
                        </div>
                        <div className="product-buttons">
                          <a
                            href=""
                            id="cartEffect"
                            className="btn cart-btn btn-normal tooltip-top"
                            data-tippy-content="Add to cart"
                          >
                            <i className="fa fa-shopping-cart"></i>
                            add to cart
                          </a>
                          <a
                            href=""
                            className="btn btn-normal add-to-wish tooltip-top"
                            data-tippy-content="Add to wishlist"
                          >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <div className="pro-group">
                        <h6 className="product-title">delivery location</h6>
                        <div className="delivery-detail">
                          <div className="delivery-detail-contian">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="ti-location-pin"></i>
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Pincode for delivery"
                              />
                            </div>
                            <a href="" className="btn btn-solid btn-md ">
                              check
                            </a>
                          </div>
                          <div className="delivery-lable">
                            <svg
                              enable-background="new 0 0 512 512"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <g>
                                  <path
                                    d="m412.65 107.667h-80.65v148.333l180-21.056v-.108z"
                                    fill="#cce6ff"
                                  />
                                  <path
                                    d="m332 234.944h180v158.722h-180z"
                                    fill="#cc295f"
                                  />
                                </g>
                                <g>
                                  <path
                                    d="m356.333 65h-170.065l-15.601 159 15.601 169.667h170.065z"
                                    fill="#fdae02"
                                  />
                                  <path
                                    d="m0 393.667h186.268v-148.334l-186.267 20.334z"
                                    fill="#fdcb02"
                                  />
                                  <path
                                    d="m0 65 .001 96 186.267 20.333v-116.333z"
                                    fill="#fdcb02"
                                  />
                                  <path
                                    d="m235.314 265.667 29.905-104.667h-78.951l-15.601 52.333 15.601 52.334z"
                                    fill="#cc295f"
                                  />
                                  <path
                                    d="m.001 161h186.267v104.666h-186.267z"
                                    fill="#ff4d4d"
                                  />
                                </g>
                                <g>
                                  <circle
                                    cx="122.667"
                                    cy="384"
                                    fill="#f9f9f9"
                                    r="48"
                                  />
                                  <path
                                    d="m122.667 447c-34.738 0-63-28.262-63-63s28.262-63 63-63 63 28.262 63 63-28.262 63-63 63zm0-96c-18.196 0-33 14.804-33 33s14.804 33 33 33 33-14.804 33-33-14.804-33-33-33z"
                                    fill="#29376d"
                                  />
                                </g>
                                <g>
                                  <circle
                                    cx="389.333"
                                    cy="384"
                                    fill="#eaf1ff"
                                    r="48"
                                  />
                                  <path
                                    d="m389.333 447c-34.738 0-63-28.262-63-63s28.262-63 63-63 63 28.262 63 63-28.261 63-63 63zm0-96c-18.196 0-33 14.804-33 33s14.804 33 33 33 33-14.804 33-33-14.803-33-33-33z"
                                    fill="#23305b"
                                  />
                                </g>
                              </g>
                            </svg>
                            Order within 12 hrs
                          </div>
                        </div>
                      </div>
                      <div className="pro-group">
                        <div className="product-offer">
                          <h6 className="product-title">
                            <i className="fa fa-tags"></i>5 offers Available{" "}
                          </h6>
                          <div className="offer-contain">
                            <ul>
                              <li>
                                <span className="code-lable">OFFER40</span>
                                <div>
                                  <h5>Get extra $40 off on first Orders</h5>
                                  <p>
                                    Use code "OFFER40" Min. Cart Value $99 |
                                    Max. Discount $40
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <ul className="offer-sider">
                              <li>
                                <span className="code-lable">OFFER25</span>
                                <div>
                                  <h5>Get extra $25 off on second Orders</h5>
                                  <p>
                                    Use code "OFFER25" Min. Cart Value $99 |
                                    Max. Discount $25
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="code-lable">OFFER40</span>
                                <div>
                                  <h5>
                                    Bank Offer40% Unlimited Cashback on bideal
                                    Axis Bank Credit Card
                                  </h5>
                                  <p>
                                    Use code "OFFER40" Min. Cart Value $99 |
                                    Max. Discount $40
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="code-lable">OFFER10</span>
                                <div>
                                  <h5>
                                    Bank Offer10% off* with Axis Bank Buzz
                                    Credit Card
                                  </h5>
                                  <p>
                                    Use code "OFFER10" Min. Cart Value $99 |
                                    Max. Discount $10
                                  </p>
                                </div>
                              </li>
                              <li>
                                <span className="code-lable">OFFER5</span>
                                <div>
                                  <h5>
                                    Bank Offer5% Unlimited Cashback on bideal
                                    sbi banck Credit Card
                                  </h5>
                                  <p>
                                    Use code "OFFER5" Min. Cart Value $99 | Max.
                                    Discount $5
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <h5 className="show-offer">
                              <span className="more-offer">
                                show more offer
                              </span>
                              <span className="less-offer">less offer</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="pro-group">
                        <h6 className="product-title">product infomation</h6>
                        {/* <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,</p> */}
                        <p>{product.description}</p>
                      </div>
                      <div className="pro-group">
                        <h6 className="product-title">Delivery option</h6>
                        <ul className="delivery-services">
                          <li>
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <path d="M466.244,257.845l-58.193-86.841H300v-120H0v364.992h61.899c6.678,25.849,30.195,45,58.101,45s51.424-19.151,58.101-45h155.797c6.678,25.849,30.195,45,58.101,45s51.424-19.151,58.101-45H512V269.284L466.244,257.845z M135,81.003h30v60h-30V81.003z M120,430.995c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30S136.542,430.995,120,430.995z M270,385.995h-91.899c-6.677-25.849-30.195-45-58.101-45s-51.424,19.151-58.101,45H30v-75h240V385.995z M270,280.995H30V81.003h75v90h90v-90h75V280.995z M392,430.995c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30S408.542,430.995,392,430.995z M482,385.995h-31.899c-6.678-25.849-30.195-45-58.101-45s-51.424,19.151-58.101,45H300V201.003h92.041l55.715,83.143L482,292.707V385.995z" />
                                </g>
                              </g>
                            </svg>
                            free shipping
                          </li>
                          <li>
                            <svg
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m410 0c8.285156 0 15 6.714844 15 15v199.027344c52.363281 26.195312 87 79.976562 87 140.722656 0 86.84375-70.40625 157.25-157.25 157.25-60.746094 0-114.527344-34.636719-140.722656-87h-199.027344c-8.285156 0-15-6.714844-15-15v-395c0-8.285156 6.714844-15 15-15zm-126 30v84.0625c0 10.785156-11.507812 19.085938-22.746094 12.84375l-48.753906-24.773438-49.761719 25.289063c-9.988281 5.058594-21.710937-2.324219-21.703125-13.359375l-.035156-84.0625h-111v365h172.703125c-14.519531-54.976562 1.808594-112.394531 40.855469-151.441406s96.464844-55.375 151.441406-40.855469v-172.703125zm23 391h69.996094c15.984375 0 30.488281-6.511719 40.988281-17.015625 11.039063-11.035156 17.015625-25.332031 17.015625-41.980469 0-31.96875-26.035156-58.003906-58.003906-58.003906h-41.683594l8.804688-8.820312c13.871093-13.953126-7.339844-35.042969-21.210938-21.09375l-34.402344 34.464843c-5.824218 5.855469-5.800781 15.328125.058594 21.152344l34.46875 34.402344c13.949219 13.871093 35.042969-7.339844 21.09375-21.210938l-8.914062-8.894531h41.785156c16.242187 0 28.003906 12.984375 28.003906 28.996094 0 15.40625-12.597656 28.003906-28.003906 28.003906h-69.996094c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15zm-42.230469-156.230469c-49.691406 49.695313-49.691406 130.269531 0 179.960938 49.695313 49.695312 130.269531 49.695312 179.960938 0 49.695312-49.691407 49.695312-130.265625 0-179.960938-49.691407-49.691406-130.269531-49.691406-179.960938 0zm-10.769531-234.769531h-83v59.65625l34.726562-17.648438c4.097657-2.078124 9.09375-2.246093 13.511719-.019531l34.761719 17.667969zm0 0"
                                fillRule="evenodd"
                              />
                            </svg>
                            10 Days Returnable
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="-38 0 512 512.00142"
                            >
                              <g id="surface1">
                                <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 384.773438 331.523438 C 358.414062 402.992188 304.605469 452.074219 220.273438 481.566406 C 219.972656 481.667969 219.652344 481.757812 219.320312 481.824219 C 218.449219 481.996094 217.5625 481.996094 216.679688 481.820312 C 216.351562 481.753906 216.03125 481.667969 215.734375 481.566406 C 131.3125 452.128906 77.46875 403.074219 51.128906 331.601562 C 28.09375 269.097656 29.398438 200.519531 30.550781 140.019531 L 30.558594 139.683594 C 30.792969 134.484375 30.949219 129.039062 31.035156 123.054688 C 31.222656 110.519531 41.207031 100.148438 53.765625 99.449219 C 87.078125 97.589844 116.34375 91.152344 143.234375 79.769531 C 170.089844 68.402344 193.941406 52.378906 216.144531 30.785156 C 217.273438 29.832031 218.738281 29.828125 219.863281 30.785156 C 242.070312 52.378906 265.921875 68.402344 292.773438 79.769531 C 319.664062 91.152344 348.929688 97.589844 382.246094 99.449219 C 394.804688 100.148438 404.789062 110.519531 404.972656 123.058594 C 405.0625 129.074219 405.21875 134.519531 405.453125 139.683594 C 406.601562 200.253906 407.875 268.886719 384.773438 331.523438 Z M 384.773438 331.523438 " />
                                <path d="M 217.996094 128.410156 C 147.636719 128.410156 90.398438 185.652344 90.398438 256.007812 C 90.398438 326.367188 147.636719 383.609375 217.996094 383.609375 C 288.351562 383.609375 345.59375 326.367188 345.59375 256.007812 C 345.59375 185.652344 288.351562 128.410156 217.996094 128.410156 Z M 217.996094 353.5625 C 164.203125 353.5625 120.441406 309.800781 120.441406 256.007812 C 120.441406 202.214844 164.203125 158.453125 217.996094 158.453125 C 271.785156 158.453125 315.546875 202.214844 315.546875 256.007812 C 315.546875 309.800781 271.785156 353.5625 217.996094 353.5625 Z M 217.996094 353.5625 " />
                                <path d="M 254.667969 216.394531 L 195.402344 275.660156 L 179.316406 259.574219 C 173.449219 253.707031 163.9375 253.707031 158.070312 259.574219 C 152.207031 265.441406 152.207031 274.953125 158.070312 280.816406 L 184.78125 307.527344 C 187.714844 310.460938 191.558594 311.925781 195.402344 311.925781 C 199.246094 311.925781 203.089844 310.460938 206.023438 307.527344 L 275.914062 237.636719 C 281.777344 231.769531 281.777344 222.257812 275.914062 216.394531 C 270.046875 210.523438 260.535156 210.523438 254.667969 216.394531 Z M 254.667969 216.394531 " />
                              </g>
                            </svg>
                            1 Year Warranty
                          </li>
                        </ul>
                      </div>
                      <div className="pro-group pb-0">
                        <h6 className="product-title">share</h6>
                        <ul className="product-social">
                          <li>
                            <a href="">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i className="fa fa-rss"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section ends --> */}

          {/* modal start */}
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal end */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
