import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { forgotPassword, clearErrors } from '../../actions/userActions'

const ForgotPassword = () => {
    let navigate = useNavigate()

    // const { user, loading } = useSelector(state => state.auth)

    const [email, setEmail] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, message, loading } = useSelector(state => state.forgotPassword);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success('message');
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Forgot Password'} />
                    {/* <!-- Breadcumb Area --> */}
                    <div className="breadcumb_area">
                        <div className="container h-100">
                            <div className="row h-1  00 align-items-center">
                                <div className="col-12">
                                    <h5> Forgot Password Page</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Breadcumb Area --> */}

                    <div className="bigshop_reg_log_area section_padding_100_50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <div className="login_form mb-50">
                                        <h5 className="mb-3">Enter Your Email To Recieve the Forgot Password Link</h5>

                                        <form onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="username" placeholder="Enter Your Email Here"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <button disabled={loading ? true : false} type="submit" className="btn btn-primary btn-sm">Send Email</button>
                                                <Link to="/register" className="">or  Login / Register here</Link>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default ForgotPassword