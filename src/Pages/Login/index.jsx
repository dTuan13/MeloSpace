import React, { useContext, useState } from 'react';
import styles from'./Login.module.scss';
import instance from '../../api';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context';
import gg from './images/gg.svg';
import fb from './images/fb.svg';
import lg from './images/lg.png';



const Button = ({ label, logo }) => (
  <button type="button" className={styles.btn}>
    {logo && <img src={logo} alt={label} className={styles.btnLogo} />}
    
    <span>{label}</span>
  </button>
);

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const getAuthContext = useContext(GlobalContext);
  let navigate = useNavigate();

  const buttons = [
    { label: "Tiếp tục bằng Googgle", logo: gg },
    { label: "Tiếp tục bằng Facebook", logo: fb },
    { label: "Tiếp tục bằng số điện thoại" },
  ];

  const handleLogin = () => {
    (async () => {
      try {
        // get User by username and password
        const user = {
          id: 1,
          name: 'Adam',
          email: '',
          image: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
          mail: 3,
          notify: 2,
        };

        getAuthContext.setAuth(user);
        localStorage.setItem('accessToken', '123');
        navigate('/');
      } catch (error) {
        // handle error
        console.error("Login failed", error);
      }
    })();
  };

  return (
    <div className={styles.loginPage}>  
      <div className={styles.loginFormContainer}>
        <img src={lg} alt="Header" className={styles.headerImage} />
        <h1 className={styles.title}>Đăng nhập vào MeloSpace</h1>
        <form
          action="#"
          className={styles.loginForm}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}

          <div className={styles.separator}></div>

          <div className="mb-4">
            <label htmlFor="email" className={styles.formLabel}>
              Email hoặc tên người dùng
            </label>
            <input
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className={styles.formControl}
              id="email"
              placeholder="Email hoặc tên người dùng"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className={styles.formLabel}>
              Mật khẩu
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className={styles.formControl}
              id="password"
              placeholder="Mật khẩu"
              required
            />
          </div>

          <div className={styles.rememberMeContainer}>
            <input type="checkbox" id="rememberMe" className={styles.rememberMeCheckbox} />
            <label htmlFor="rememberMe" className={styles.rememberMeLabel}>Hãy nhớ tôi</label>
          </div>

          <button type="submit" className={styles.btnPrimary}>
            Đăng nhập
          </button>
          <a href="#" className={styles.forgotPass}>Quên mật khẩu của bạn?</a>
        </form>

        <div className={styles.separatorLine}></div>

        <p className={styles.signupText}>
          Bạn chưa có tài khoản? 
          <a href="#" className={styles.register}>
            Đăng ký MeloSpace
          </a>
        </p>
        <br />
      </div>
    </div>
  );
};

export default Login;