import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/femi/owl.css'

const BestSelling = () => {
    return (
        <div>
            {/* <!-- Best Selling Products --> */}
            <div className="best-selling-products-area mb-70">
                <div className="container">
                    {/* <div className="row">
                <div className="col-12">
                    <div className="section-heading mb-50">
                        <h5>Best Selling Products</h5>
                    </div>
                </div>
            </div> */}

                    <div class="row pt-5">
                        <div class="col-12">
                            <div class="section_heading new_arrivals">
                                <h5>News Arrivals</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/1.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Boutique Silk Dress</a>
                                    <h6 className="product-price">$69.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/2.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Flower Textured Dress</a>
                                    <h6 className="product-price">$39.99 <span>$49.99</span></h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/17.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Ballerina Dress</a>
                                    <h6 className="product-price">$89.99 <span>$107.99</span></h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/4.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Gracia Plaid Dress</a>
                                    <h6 className="product-price">$139.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/5.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Boutique Silk Dress</a>
                                    <h6 className="product-price">$69.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/6.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Flower Textured Dress</a>
                                    <h6 className="product-price">$39.99 <span>$49.99</span></h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/7.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Ballerina Dress</a>
                                    <h6 className="product-price">$89.99 <span>$107.99</span></h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product --> */}
                        <div className="col-9 col-sm-6 col-md-4 col-lg-3">
                            <div className="single-product-area mb-30">
                                <div className="product_image">
                                    {/* <!-- Product Image --> */}
                                    <img className="normal_img" src="/bigshop/assets/img/product-img/8.jpg" alt="" />

                                    {/* <!-- Product Badge --> */}
                                    <div className="product_badge">
                                        <span>Top</span>
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
                                        <a href="#"><i className="icofont-cart"></i> Add to Cart</a>
                                    </div>

                                    {/* <!-- Quick View --> */}
                                    <div className="product_quick_view">
                                        <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
                                    </div>

                                    <a href="#">Gracia Plaid Dress</a>
                                    <h6 className="product-price">$139.99</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Best Selling Products --> */}
        </div>
    );
};

export default BestSelling;