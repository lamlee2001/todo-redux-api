import React from 'react';
import '../register/register.scss';
import { replace, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../saga/auth/auth.actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: () => {
            dispatch(
                signInRequest({ email: formik.values.email, password: formik.values.password }, () => {
                    toast.success('Login Success');
                    navigate('/home', replace(true));
                }),
            );
        },
    });

    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <label> Email </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Nhập email của bạn"
                />

                <label> Mật khẩu </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Nhập mật khẩu của bạn"
                />

                <div className="footer-register">
                    <button className="btn-submit" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </section>
    );
}

export default SignIn;
