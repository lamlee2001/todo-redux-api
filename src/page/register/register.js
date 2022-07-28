import React from 'react';
import * as Yup from 'yup';
import './register.scss';
import { replace, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../saga/auth/auth.actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Vui lòng nhập mục này').min(2, 'Họ tên ít nhất 2 ký tự'),
            password: Yup.string()
                .required('Vui lòng nhập mục này')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Mật khẩu phải gồm : 8 ký tự trở lên, 1 chữ cái và 1 ký tự dặc biệt',
                ),
            confirmPassword: Yup.string()
                .required('Vui lòng nhập mục này')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp'),
        }),
        onSubmit: () => {
            dispatch(
                registerRequest({ email: formik.values.email, password: formik.values.password }, () => {
                    toast.success('Register Success');
                    navigate('/signIn', replace(true));
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
                {formik.errors.name && <p className="errorMsg"> {formik.errors.name} </p>}

                <label> Mật khẩu </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Nhập mật khẩu của bạn"
                />
                {formik.errors.password && <p className="errorMsg"> {formik.errors.password} </p>}
                <label> Nhập lại mật khẩu </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    placeholder="Nhập lại mật khẩu của bạn"
                />
                {formik.errors.confirmPassword && <p className="errorMsg"> {formik.errors.confirmPassword} </p>}

                <div className="footer-register">
                    <button className="btn-submit" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Register;
