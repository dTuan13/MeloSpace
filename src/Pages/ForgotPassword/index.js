import React from 'react'
import styles from './ForgotPassword.module.scss';
import Auth from '../../Components/Auth';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import gg from './images/gg.svg';
import fb from './images/fb.svg';
import { Link } from 'react-router-dom';

const Button = ({ label, logo, require }) =>
  require === true ? (
      <Auth>
          <button type="button" className={cx('btn')}>
              {logo && <img src={logo} alt={label} className={cx('btnLogo')} />}
              <span>{label}</span>
          </button>
      </Auth>
  ) : (
      <button type="button" className={styles.btn}>
          {logo && <img src={logo} alt={label} className={cx('btnLogo')} />}
          <span>{label}</span>
      </button>
);

 const index = () => {
  const buttons = [
    { label: 'Tiếp tục bằng Google', logo: gg, require: true },
    { label: 'Tiếp tục bằng Facebook', logo: fb, require: false },
];

  return (
    <div className={cx('forgot-Page')}>
      <div className={cx('forgotForm-Container')}>
        
        <h1 className={cx('title')}>QUÊN MẬT KHẨU</h1>

        <div className={cx('separatorLine-1')}></div>

        <div className={cx('form')}>
          <form className={cx('forgotForm')}>
            <span className={cx('require')}>
              Bạn vui lòng nhập tên tài khoản của mình vào đây để lấy lại mật khẩu mới.
            </span>

            <div className={cx('form-Group')}>
              <label htmlFor='name' className={cx('formLabel-1')}>
                Tên đăng nhập <span className={cx('text-red')}>*</span>
              </label>

              <input
                // value={formValues.username}
                // onChange={handleChange}
                type="text"
                name="username"
                className={cx('formControl-1')}
                id="username"
                placeholder=""
                required=""
              />
            </div>

            <div className={cx('form-Group')}>
              <label htmlFor='code' className={cx('formLabel-2')}>
                Mã xác nhận <span className={cx('text-red')}>*</span>
              </label>

              <div className={cx('formControl-2')}></div>
            </div>

            <button type="submit" className={cx('btn-1')}>
              LẤY LẠI MẬT KHẨU
            </button>
          </form>

          <span className={cx('separator-2')}></span>
          
          <form className={cx('loginNowForm')}>
            <span className={cx('ask')}>
              Đã có tài khoản MeloSpace ID?
            </span>


              <button type="submit" className={cx('btn-2')}>
                <Link to='/login'>ĐĂNG NHẬP NGAY</Link>
              </button>
           

            <div className={cx('separatorLine')}>
              HOẶC
            </div>
            {buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
            
          </form>

        </div>
        
      </div>

    </div>
  )
};

export default index;
