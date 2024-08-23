import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from './Login.module.scss';
import instance from '../../api';
import Auth from '../../Components/Auth';
import { GlobalContext } from '../../Context';
import gg from './images/gg.svg';
import fb from './images/fb.svg';
import lg from './images/lg.png';

const Button = ({ label, logo, require }) =>
    require === true ? (
        <Auth>
            <button type="button" className={styles.btn}>
                {logo && <img src={logo} alt={label} className={styles.btnLogo} />}
                <span>{label}</span>
            </button>
        </Auth>
    ) : (
        <button type="button" className={styles.btn}>
            {logo && <img src={logo} alt={label} className={styles.btnLogo} />}
            <span>{label}</span>
        </button>
);

const Login = () => {
    const initialValues = { username: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [loginError, setLoginError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const getContext = useContext(GlobalContext);
    let navigate = useNavigate();

    const buttons = [
        { label: 'Tiếp tục bằng Google', logo: gg, require: true },
        { label: 'Tiếp tục bằng Facebook', logo: fb, require: false },
        { label: 'Tiếp tục bằng số điện thoại', require: false },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        if (value) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            handleLogin();
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Vui lòng nhập tên người dùng MeloSpace hoặc địa chỉ email.';
        }
        if (!values.password) {
            errors.password = 'Vui lòng nhập mật khẩu.';
        }
        return errors;
    };

    const handleLogin = async () => {
        try {
            const formData = new FormData();
            formData.append('username', formValues.username);
            formData.append('password', formValues.password);

            const data = await instance.post('/user/login', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (data.status === 200) {
                const decode = (token) =>
                    decodeURIComponent(
                        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
                            .split('')
                            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
                            .join(''),
                    );
                const userInfo = JSON.parse(decode(data.data.token));
                localStorage.setItem('userID', userInfo.payload.guid);
                localStorage.setItem('access_token', data.data.token);
                localStorage.setItem('avatar', userInfo.payload.avatar);
                navigate('/');
            }
        } catch (error) {
            setLoginError('Tên người dùng hoặc mật khẩu không chính xác.');
            setFormValues(initialValues);
            navigate('#');
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginFormContainer}>
                <img src={lg} alt="Header" className={styles.headerImage} />

                <h1 className={styles.title}>Đăng nhập vào MeloSpace</h1>

                <div className={`${styles.errorBar} ${loginError ? styles.visible : ''}`}>
                    <ErrorOutlineIcon className={styles.errorIcon} />
                    <div className={styles.errorMessage}>{loginError}</div>
                </div>

                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} />
                    ))}
                    <div className={styles.separator}></div>

                    <div className={`${styles.formGroup} ${formErrors.username ? styles.invalid : ''}`}>
                        <label htmlFor="username" className={styles.formLabel}>
                            Email hoặc tên người dùng
                        </label>
                        <input
                            value={formValues.username}
                            onChange={handleChange}
                            type="text"
                            name="username"
                            className={styles.formControl}
                            id="username"
                            placeholder="Email hoặc tên người dùng"
                        />
                        {formErrors.username && (
                            <div className={styles.errorContainer}>
                                <ErrorOutlineIcon className={styles.errorIcon} />
                                <div className={styles.errorMessage}>{formErrors.username}</div>
                            </div>
                        )}
                    </div>

                    <div className={`${styles.formGroup} ${formErrors.password ? styles.invalid : ''}`}>
                        <label htmlFor="password" className={styles.formLabel}>
                            Mật khẩu
                        </label>
                        <input
                            value={formValues.password}
                            onChange={handleChange}
                            type="password"
                            name="password"
                            className={styles.formControl}
                            id="password"
                            placeholder="Mật khẩu"
                        />
                        {formErrors.password && (
                            <div className={styles.errorContainer}>
                                <ErrorOutlineIcon className={styles.errorIcon} />
                                <div className={styles.errorMessage}>{formErrors.password}</div>
                            </div>
                        )}
                    </div>

                    <div className={styles.rememberMeContainer}>
                        <input type="checkbox" id="rememberMe" className={styles.rememberMeCheckbox} />
                        <label htmlFor="rememberMe" className={styles.rememberMeLabel}>
                            Hãy nhớ tôi
                        </label>
                    </div>

                    <button type="submit" className={styles.btnPrimary}>
                        Đăng nhập
                    </button>
                    <a href="/forgotpassword" className={styles.forgotPass}>
                        Quên mật khẩu của bạn?
                    </a>
                </form>

                <div className={styles.separatorLine}></div>

                <p className={styles.signupText}>
                    Bạn chưa có tài khoản?
                    <a href="/register" className={styles.register}>
                        Đăng ký MeloSpace
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
