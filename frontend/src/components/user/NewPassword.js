import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import {resetPassword, clearErrors } from '../../actions/userActions'

const NewPassword = () => {
    let navigate = useNavigate()
    let { token } = useParams();
    console.log('reset passtoken', token);


    // const { user, loading } = useSelector(state => state.auth)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success, loading } = useSelector(state => state.forgotPassword);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Password updated successfully');
            navigate('/login')
        }

    }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);

        dispatch(resetPassword(token, formData))
    }
  return (
    <Fragment>
    {loading ? <Loader /> : (
        <Fragment>
            <MetaData title={'Create New Password'} />
            {/* <!-- Breadcumb Area --> */}
            <div className="breadcumb_area">
                <div className="container h-100">
                    <div className="row h-1  00 align-items-center">
                        <div className="col-12">
                            <h5> Reset Password Page</h5>
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
                                        <input type="password" className="form-control" id="username" placeholder="Enter Your Email Here"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="username" placeholder="Enter Your Email Here"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)} />
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

export default NewPassword