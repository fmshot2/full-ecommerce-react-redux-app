import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
   return (
      <div className="col-9 col-sm-12 col-md-4 col-lg-4">
         <div className="single-product-area mb-30">
            <div className="product_image">
               {/* <!-- Product Image --> */}
               <Link to={`/product/${product._id}`} tabindex="0">
                  <img src={product.images[0].url} alt=""
                     className="normal_img" />
                  <img src={product.images[0].url} alt=""
                     className="hover_img" />
               </Link>

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
                  <a href="#"><i className="icofont-shopping-cart"></i> Adds to Cart</a>
               </div>

               {/* <!-- Quick View --> */}
               <div className="product_quick_view">
                  <a href="#" data-toggle="modal" data-target="#quickview"><i className="icofont-eye-alt"></i> Quick View</a>
               </div>

               <p className="brand_name">Eye</p>
               {/* <a href="#">Filmy Sunglases</a> */}
               <Link to={`/product/${product._id}`} tabindex="0">
                  <h3>{product.name}</h3>
               </Link>
               <div className="ratings mt-auto">
                  <div className="rating-outer">
                     <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                  </div>
                  <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
               </div>
               <h6 className="product-price">$({product.price})</h6>
            </div>
         </div>
      </div>

   );
};

export default Product