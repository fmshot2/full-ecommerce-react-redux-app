import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'

const Login = () => {
    let navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();
    const location = useLocation();


    const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    const state = location.state;
    

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if (isAuthenticated) {

            if (state && (state.from)) {

                // Redirects back to the previous unauthenticated routes
               return navigate(state?.from);
            }
               return navigate('/');
            }
            // navigate('/')
    

        if (error) {
            console.log('login error', error)
            alert.error(error);
            dispatch(clearErrors());
        }
 
    }, [dispatch, alert, isAuthenticated, error, navigate, state])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Login'} />

                    <div className="bigshop_reg_log_area section_padding_100_50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <div className="login_form mb-50">
                                        <h5 className="mb-3">Login</h5>

                                        <form onSubmit={submitHandler}>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="username" placeholder="Email or Username"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="password" placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            {/* <div className="form-check">
                                        <div className="custom-control custom-checkbox mb-3 pl-1">
                                            <input type="checkbox" className="custom-control-input" id="customChe" />
                                            <label className="custom-control-label" for="customChe">Remember me for this computer</label>
                                        </div>
                                    </div> */}
                                            <div className='d-flex justify-content-between'>
                                                <button type="submit" className="btn btn-primary btn-sm">Login</button>
                                                <Link to="/register" className="">or  SignUp here</Link>
                                            </div>
                                        </form>
                                        {/* <!-- Forget Password --> */}
                                        <div className="forget_pass mt-15">
                                            <Link to="/password/forgot">Forgot Password?</Link>
                                        </div>
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

export default Login
