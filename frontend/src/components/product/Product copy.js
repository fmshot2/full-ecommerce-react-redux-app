import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (

      <div className="slick-slide slick-current slick-active" 
      data-slick-index="0" aria-hidden="false" style={{width: "308px"}}><div>
        <div style={{width: "100%", display: "inline-block"}}/>
      <div className="product-box product-box2">
         <div className="product-imgbox">
            <div className="product-front">
               <Link to={`/product/${product._id}`} tabindex="0">
                  <img  src={product.images[0].url} alt=""
                   className="img-fluid"/>
                  {/* <img src="../assets/images/mega-store/product/1.jpg" className="img-fluid  " alt="product"/> */}
               </Link>
            </div>
            <div className="product-back">
               <Link to="product-page(left-sidebar).html" tabindex="0">
                  {/* <img src="../assets/images/mega-store/product/6.jpg" className="img-fluid  " alt="product"/> */}
                  {/* <img src="../assets/images/mega-store/product/6.jpg" className="img-fluid  " alt="product"/> */}
                  <img  src={product.images[0].url} alt=""
                   className="img-fluid"/>
               </Link>
            </div>
            <div className="product-icon icon-inline">
               <button className="tooltip-top  add-cartnoty" data-tippy-content="Add to cart" tabindex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
               </button>
               <div className="add-to-wish tooltip-top" data-tippy-content="Add to Wishlist" tabindex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
               </div>
               <div data-bs-toggle="modal" data-bs-target="#quick-view" className="tooltip-top" data-tippy-content="Quick View" tabindex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
               </div>
               {/* <a href="compare.html" className="tooltip-top" data-tippy-content="Compare" tabindex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
               </a> */}
            </div>
            <div className="new-label1">
               <div>new</div>
            </div>
            <div className="on-sale1">
               on sale
            </div>
         </div>
         <div className="product-detail product-detail2 ">
            {/* <ul>
               <li><i className="fa fa-star"></i></li>
               <li><i className="fa fa-star"></i></li>
               <li><i className="fa fa-star"></i></li>
               <li><i className="fa fa-star"></i></li>                           
               <li><i className="fa fa-star-o"></i></li>
            </ul> */}
            {/* <div> {[...new Array(totalStars)].map((arr, index) => {
            return index < activeStars ? <FontAwesomeIcon icon={fasFaStar} style={{ color: '#febd69' }} />
              : <FontAwesomeIcon icon={farFaStar} />;
          })}
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div> */}
                        
           <div className="ratings mt-auto">
             <div className="rating-outer">
               <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
             </div>
             <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
           </div>
            <Link to={`/product/${product._id}`} tabindex="0">
               <h3>{product.name}</h3>
            </Link>
            <h5>
               $50
               <span>
          $80
        </span>
            </h5>
         </div>
      </div>
   </div></div>

  );
};

export default Product