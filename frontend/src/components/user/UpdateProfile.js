import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const UpdateProfile = () => {
    let navigate = useNavigate()

    // const { user, loading } = useSelector(state => state.auth)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('')
    // const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')
    const [avatarPreview, setAvatarPreview] = useState('https://random.imagecdn.app/150/150')


    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user);

    useEffect(() => {

        if (user) {
            // navigate('/')
            setName(user.name)
            setName(user.email)
            setAvatarPreview(user.avatar.url)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User Updated Successfully');
            dispatch(loadUser());
            navigate('/me')
            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }

    }, [dispatch, alert, error, isUpdated, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('avatar', avatar);

        dispatch(updateProfile(formData))
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Update Profile'} />
                    {/* <!-- Breadcumb Area --> */}
                    <div className="breadcumb_area">
                        <div className="container h-100">
                            <div className="row h-1  00 align-items-center">
                                <div className="col-12">
                                    <h5>{user.name}'s Update Profile Page</h5>
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
                                        <h5 className="mb-3">Account Details</h5>

                                        <form onSubmit={submitHandler}>
                                            <div className="row">
                                                {/* <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="firstName">First Name *</label>
                                                        <input type="text" className="form-control" id="firstName" placeholder={name}
                                                            name='name'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Last Name *</label>
                                                        <input type="text" className="form-control" id="lastName" placeholder={email}
                                                            name='email'
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                </div> */}
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="displayName">Display Name *</label>
                                                        <input type="text" className="form-control" id="displayName" placeholder={name}
                                                            name='name'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="emailAddress">Email Address *</label>
                                                        <input type="email" className="form-control" id="emailAddress" placeholder={email}
                                                            name='email'
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className='form-group'>
                                                    <label htmlFor='avatar_upload'>Avatar</label>
                                                    <div className='d-flex align-items-center'>
                                                        <div>
                                                            <figure className='avatar mr-3 item-rtl'>
                                                                <img
                                                                    src={avatarPreview}
                                                                    className='rounded-circle'
                                                                    alt='Avatar Preview'
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className='custom-file'>
                                                            <input
                                                                type='file'
                                                                name='avatar'
                                                                className='custom-file-input'
                                                                id='customFile'
                                                                accept="iamges/*"
                                                                onChange={onChange}
                                                            />
                                                            <label className='custom-file-label' htmlFor='customFile'>
                                                                Choose Avatar
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="currentPass">Current Password (Leave blank to leave unchanged)</label>
                                                        <input type="password" className="form-control" id="currentPass" />
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="newPass">New Password (Leave blank to leave unchanged)</label>
                                                        <input type="password" className="form-control" id="newPass" />
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="confirmPass">Confirm New Password</label>
                                                        <input type="password" className="form-control" id="confirmPass" />
                                                    </div>
                                                </div> */}
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary">Save Changes</button>
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

export default UpdateProfile
