import React, { useContext, useState } from 'react';
import styles from'./Login.module.scss';
import instance from '../../api';
import Auth from '../../Components/Auth';
import { useNavigate } from 'react-router-dom';
import gg from './images/gg.svg';
import fb from './images/fb.svg';
import lg from './images/lg.png';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import {GlobalContext} from '../../Context';



const Button = ({ label, logo, require }) => (
  require === true ?  
  <Auth>
    <button type="button" className={styles.btn}>
        {logo && <img src={logo} alt={label} className={styles.btnLogo} />}
        <span>{label}</span>
      </button>
  </Auth>
  : <button type="button" className={styles.btn}>
    {logo && <img src={logo} alt={label} className={styles.btnLogo} />}
    <span>{label}</span>
  </button>
 
);

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid ] = useState('')
  const getContext = useContext(GlobalContext);
  let navigate = useNavigate();

  const buttons = [
    { label: "Tiếp tục bằng Googgle", logo: gg, require : true },
    { label: "Tiếp tục bằng Facebook", logo: fb, require: false },
    { label: "Tiếp tục bằng số điện thoại", require: false },
  ];

  const handleLogin = () => {
    (async () => {
      try {
        const formData = new FormData()
        formData.append('username', userName)
        formData.append('password', password)
        const data = await instance.post('/user/login', formData,   { headers: {
          'Content-Type': 'multipart/form-data'
        }});
        if(data.status === 200){
          console.log(data)
          const userInfo = JSON.parse(atob(data.data.token.split('.')[1]))
          getContext.setAuth(userInfo)
          localStorage.setItem('access_token', data.data.token)
          navigate('/')
        }
      } catch (error) {
        // invalid infor
        alert('Invalid username')
        setPassword('')
        setUsername('')
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
          <div className={styles.invalid}>{invalid}</div>
          <button type="submit" 
           className={styles.btnPrimary}>
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