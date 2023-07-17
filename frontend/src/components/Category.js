import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import Newarrival from './Newarrival';
import '../assets/css/femi/owl.css';
import BestSelling from './BestSelling';


function Category(props) {
    const [tabKey, initTabKey] = useState('one')

    return (
        <div>
            {/* <!-- Top Catagory Area --> */}
            <div className="top_catagory_area mt-50 clearfix">
                <div className="container">
                    <div className="row">
                        {/* <!-- Single Catagory --> */}
                        <div className="col-12 col-md-4">
                            <div className="single_catagory_area mt-50">
                                <a href="#">
                                    {/* <img src="/bigshop/assets/img/bg-img/8.jpg" alt="" /> */}
                                    <img src="/bigshop/assets/img/bg-img/c1.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Catagory --> */}
                        <div className="col-12 col-md-4">
                            <div className="single_catagory_area mt-50">
                                <a href="#">
                                    <img src="/bigshop/assets/img/bg-img/c2.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Catagory --> */}
                        <div className="col-12 col-md-4">
                            <div className="single_catagory_area mt-50">
                                <a href="#">
                                    <img src="/bigshop/assets/img/bg-img/c3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Top Catagory Area --> */}

        </div>
    );
}

export default Category;