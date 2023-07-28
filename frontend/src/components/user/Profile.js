import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Your Profile'} />
                    {/* <!-- Breadcumb Area --> */}
                    <div className="breadcumb_area">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <h5>{user.name}'s Profile Page</h5>
                                    {/* <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={`/product/${product._id}`} href="index.html">Home</Link></li>
                                        <li className="breadcrumb-item active">Shop Grid</li>
                                    </ol> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Breadcumb Area --> */}

                    {/* <!-- My Account Area --> */}
                    <section className="my-account-area section_padding_100_50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-3">
                                    <div className="my-account-navigation mb-50">
                                        <ul>
                                            <li className="active"><Link to="/me">Dashboard</Link></li>
                                            {user.role !== 'admin' && (
                                                <li><Link to="#!">Orders</Link></li>
                                            )}
                                            <li><Link to="#!">Downloads</Link></li>
                                            <li><Link to="#!">Addresses</Link></li>
                                            <li><Link to="/me/update">Account Details</Link></li>
                                            <li><Link to="/password/update">Change Password</Link></li>
                                            <li><Link to="#!">Logout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-9">
                                    <div className="my-account-content mb-50">
                                        <p>Hello <strong>{user.name}</strong> (not <strong>{user.name}</strong>? <Link to="#!">Log out</Link>)</p>
                                        <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and <Link to="update">edit your password and account details</Link>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- My Account Area --> */}
                </Fragment>
            )}
        </Fragment>
    )
}

export default Profile
