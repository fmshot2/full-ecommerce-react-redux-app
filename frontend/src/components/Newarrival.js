import React, { Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/femi/owl.css'

const Newarrival = (props) => {

    return (
        <div>
            <div className='' >
                <div class="new_arrivals_area section_padding_100 clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section_heading new_arrivals">
                                    <h5>New Arrivals</h5>
                                </div>
                                <div class="section_heading featured">
                                    <h5>Featured Products</h5>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"></div>
                            <OwlCarousel items={3}
                                className="owl-theme"
                                loop
                                nav
                                margin={8} >

                                {/* <!-- Single Slide --> */}
                                <div class="single-product-area">
                                    <div class="product_image">
                                        {/* <!-- Product Image --> */}
                                        <img class="normal_img" src="/bigshop/assets/img/product-img/new-1-back.png" alt="" />
                                        <img class="hover_img" src="/bigshop/assets/img/product-img/new-1.png" alt="" />

                                        {/* <!-- Product Badge --> */}
                                        <div class="product_badge">
                                            <span>New</span>
                                        </div>

                                        {/* <!-- Wishlist --> */}
                                        <div class="product_wishlist">
                                            <a href="wishlist.html"><i class="icofont-heart"></i></a>
                                        </div>

                                        {/* <!-- Compare --> */}
                                        <div class="product_compare">
                                            <a href="compare.html"><i class="icofont-exchange"></i></a>
                                        </div>
                                    </div>

                                    {/* <!-- Product Description --> */}
                                    <div class="product_description">
                                        {/* <!-- Add to cart --> */}
                                        <div class="product_add_to_cart">
                                            <a href="#"><i class="icofont-shopping-cart"></i> Add to Cart</a>
                                        </div>

                                        {/* <!-- Quick View --> */}
                                        <div class="product_quick_view">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                class="icofont-eye-alt"></i> Quick View</a>
                                        </div>

                                        <p class="brand_name">Top</p>
                                        <a href="#">Boutique Silk Dress</a>
                                        <h6 class="product-price">$48.99</h6>
                                    </div>
                                </div>
                                {/* <!-- Single Slide --> */}
                                <div class="single-product-area">
                                    <div class="product_image">
                                        {/* <!-- Product Image --> */}
                                        <img class="normal_img" src="/bigshop/assets/img/product-img/new-1-back.png" alt="" />
                                        <img class="hover_img" src="/bigshop/assets/img/product-img/new-1.png" alt="" />

                                        {/* <!-- Product Badge --> */}
                                        <div class="product_badge">
                                            <span>New</span>
                                        </div>

                                        {/* <!-- Wishlist --> */}
                                        <div class="product_wishlist">
                                            <a href="wishlist.html"><i class="icofont-heart"></i></a>
                                        </div>

                                        {/* <!-- Compare --> */}
                                        <div class="product_compare">
                                            <a href="compare.html"><i class="icofont-exchange"></i></a>
                                        </div>
                                    </div>

                                    {/* <!-- Product Description --> */}
                                    <div class="product_description">
                                        {/* <!-- Add to cart --> */}
                                        <div class="product_add_to_cart">
                                            <a href="#"><i class="icofont-shopping-cart"></i> Add to Cart</a>
                                        </div>

                                        {/* <!-- Quick View --> */}
                                        <div class="product_quick_view">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                class="icofont-eye-alt"></i> Quick View</a>
                                        </div>

                                        <p class="brand_name">Top</p>
                                        <a href="#">Boutique Silk Dress</a>
                                        <h6 class="product-price">$48.99</h6>
                                    </div>
                                </div>
                                {/* <!-- Single Slide --> */}
                                <div class="single-product-area">
                                    <div class="product_image">
                                        {/* <!-- Product Image --> */}
                                        <img class="normal_img" src="/bigshop/assets/img/product-img/new-1-back.png" alt="" />
                                        <img class="hover_img" src="/bigshop/assets/img/product-img/new-1.png" alt="" />

                                        {/* <!-- Product Badge --> */}
                                        <div class="product_badge">
                                            <span>New</span>
                                        </div>

                                        {/* <!-- Wishlist --> */}
                                        <div class="product_wishlist">
                                            <a href="wishlist.html"><i class="icofont-heart"></i></a>
                                        </div>

                                        {/* <!-- Compare --> */}
                                        <div class="product_compare">
                                            <a href="compare.html"><i class="icofont-exchange"></i></a>
                                        </div>
                                    </div>

                                    {/* <!-- Product Description --> */}
                                    <div class="product_description">
                                        {/* <!-- Add to cart --> */}
                                        <div class="product_add_to_cart">
                                            <a href="#"><i class="icofont-shopping-cart"></i> Add to Cart</a>
                                        </div>

                                        {/* <!-- Quick View --> */}
                                        <div class="product_quick_view">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                class="icofont-eye-alt"></i> Quick View</a>
                                        </div>

                                        <p class="brand_name">Top</p>
                                        <a href="#">Boutique Silk Dress</a>
                                        <h6 class="product-price">$48.99</h6>
                                    </div>
                                </div>
                                {/* <!-- Single Slide --> */}
                                <div class="single-product-area">
                                    <div class="product_image">
                                        {/* <!-- Product Image --> */}
                                        <img class="normal_img" src="/bigshop/assets/img/product-img/new-1-back.png" alt="" />
                                        <img class="hover_img" src="/bigshop/assets/img/product-img/new-1.png" alt="" />

                                        {/* <!-- Product Badge --> */}
                                        <div class="product_badge">
                                            <span>New</span>
                                        </div>

                                        {/* <!-- Wishlist --> */}
                                        <div class="product_wishlist">
                                            <a href="wishlist.html"><i class="icofont-heart"></i></a>
                                        </div>

                                        {/* <!-- Compare --> */}
                                        <div class="product_compare">
                                            <a href="compare.html"><i class="icofont-exchange"></i></a>
                                        </div>
                                    </div>

                                    {/* <!-- Product Description --> */}
                                    <div class="product_description">
                                        {/* <!-- Add to cart --> */}
                                        <div class="product_add_to_cart">
                                            <a href="#"><i class="icofont-shopping-cart"></i> Add to Cart</a>
                                        </div>

                                        {/* <!-- Quick View --> */}
                                        <div class="product_quick_view">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i
                                                class="icofont-eye-alt"></i> Quick View</a>
                                        </div>

                                        <p class="brand_name">Top</p>
                                        <a href="#">Boutique Silk Dress</a>
                                        <h6 class="product-price">$48.99</h6>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newarrival;