import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { updatePassword, clearErrors } from '../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'

const UpdatePassword = () => {
    let navigate = useNavigate()

    // const { user, loading } = useSelector(state => state.auth)

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');


    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Password Updated Successfully');
            navigate('/me')
            dispatch({
                type: UPDATE_PASSWORD_RESET
            })
        }

    }, [dispatch, alert, error, isUpdated, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('password', password);

        dispatch(updatePassword(formData))
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Change Password'} />
                    {/* <!-- Breadcumb Area --> */}
                    <div className="breadcumb_area">
                        <div className="container h-100">
                            <div className="row h-1  00 align-items-center">
                                <div className="col-12">
                                    <h5> Update Password Page</h5>
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
                                            {/* {user.role !== 'admin' && (
                                                <li><Link to="#!">Orders</Link></li>
                                            )} */}
                                            <li><Link to="#!">Downloads</Link></li>
                                            <li><Link to="#!">Addresses</Link></li>
                                            <li><Link to="/me/update">Account Details</Link></li>
                                            <li><Link to="/password/update">Update Password</Link></li>
                                            <li><Link to="#!">Logout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-9">
                                    <div className="my-account-content mb-50">
                                        <h5 className="mb-3">Account Details</h5>

                                        <form onSubmit={submitHandler}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="currentPass">Current Password (Leave blank to leave unchanged)</label>
                                                        <input type="password" className="form-control" id="currentPass" 
                                                        value={oldPassword}
                                                        onChange={(e) => setOldPassword(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="newPass">New Password (Leave blank to leave unchanged)</label>
                                                        <input type="password" className="form-control" id="newPass" 
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}/>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="confirmPass">Confirm New Password</label>
                                                        <input type="password" className="form-control" id="confirmPass" />
                                                    </div>
                                                </div> */}
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary"
                                                     disabled={loading ? true : false}>Update Password</button>
                                                </div>
                                            </div>
                                        </form>
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

export default UpdatePassword
