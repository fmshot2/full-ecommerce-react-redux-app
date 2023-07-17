import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/css/femi/owl.css'
export class Owldemo extends Component {
    render() {
        return (
            <div>
                <div className='' >
                    <OwlCarousel items={1}
                        className="owl-theme"
                        loop
                        nav
                        margin={8} >
                        {/* <OwlCarousel className='owl-theme' loop margin={10} nav> */}

                        {/* <!-- Single Slide --> */}
                        <div className="single_slide bg-img item" style={{ backgroundImage: 'url(/bigshop/assets/img/bg-img/8.jpg)' }}>
                            {/* <div className="single_slide bg-img"> */}
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-7 col-md-8">
                                        <div className="welcome_slide_text">
                                            <p data-animation="fadeInUp" data-delay="0">Special Offer</p>
                                            <h2 data-animation="fadeInUp" data-delay="300ms">40% Off Today</h2>
                                            <h4 data-animation="fadeInUp" data-delay="600ms">Only $78</h4>
                                            <a href="#" className="btn btn-primary" data-animation="fadeInUp" data-delay="1s">Buy
                                                Now</a>
                                        </div>
                                    </div>
                                    <div className="col-5 col-md-4">
                                        <div className="welcome_slide_image">
                                            <img src="/bigshop/assets/img/bg-img/slide-1.png" alt="" data-animation="bounceInUp" data-delay="500ms" />
                                            <div className="discount_badge" data-animation="bounceInDown" data-delay="1.2s">
                                                <span>30%<br />OFF</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* img/bg-img/8.jpg */}
                        {/* <!-- Single Slide --> */}
                        <div className="single_slide bg-img item" style={{ backgroundImage: 'url(/bigshop/assets/img/bg-img/7.jpg)' }}>
                            {/* style={{ backgroundImage: `url("https://via.placeholder.com/500")`}} */}
                            {/* <div className="single_slide bg-img"> */}
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-12 col-md-8">
                                        <div className="welcome_slide_text">
                                            <p data-animation="fadeInUp" data-delay="0">Sustainable Clock</p>
                                            <h2 data-animation="fadeInUp" data-delay="300ms">Smart Watch</h2>
                                            <h4 data-animation="fadeInUp" data-delay="600ms">Only $31 <span
                                                className="regular-price">$43</span></h4>
                                            <a href="#" className="btn btn-primary" data-animation="fadeInUp" data-delay="600ms">Check
                                                Collection</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Slide --> */}
                        <div className="single_slide bg-img item" style={{ backgroundImage: "url(/bigshop/assets/img/bg-img/6.jpg)" }}>
                            {/* style={{ backgroundImage: "url(/image.png)" }} */}
                            {/* <div className="single_slide bg-img"> */}
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">
                                    <div className="col-12 col-md-6">
                                        <div className="welcome_slide_text">
                                            <p className="text-white" data-animation="fadeInUp" data-delay="0">100% Cotton</p>
                                            <h2 className="text-white" data-animation="fadeInUp" data-delay="300ms">Hot Shoes</h2>
                                            <h4 className="text-white" data-animation="fadeInUp" data-delay="600ms">Now $19</h4>
                                            <a className="btn btn-primary" data-animation="fadeInUp" data-delay="900ms">Add to
                                                cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        )
    }
}


export default Owldemo