import React, { Fragment, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'

const Register = ({ history, location }) => {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = user;
    const [avatar, setAvatar] = useState('')
    // const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')
    const [avatarPreview, setAvatarPreview] = useState('https://random.imagecdn.app/150/150')


    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {


        if (isAuthenticated) {
            // history.push(redirect)
            navigate('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);

        dispatch(register(formData))
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Register User'} />
                    <div className="bigshop_reg_log_area section_padding_100_50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <div className="login_form mb-50">
                                        <h5 className="mb-3">Register</h5>

                                        <form onSubmit={submitHandler} encType='multipart/form-data'>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="username" placeholder="Full Name"
                                                    name='name'
                                                    value={name}
                                                    onChange={onChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="username" placeholder="Email"
                                                    name='email'
                                                    value={email}
                                                    onChange={onChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="password" placeholder="Password" name='password'
                                                    value={password}
                                                    onChange={onChange} />
                                            </div>
                                            {/* <div className="form-group">
                                                <input type="password" className="form-control" id="password" placeholder="Repeat Password" />
                                            </div> */}
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
                                            <button type="submit" className="btn btn-primary btn-sm" id="register_button"
                                                disabled={loading ? true : false}>Register</button>
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

export default Register
