import React, { useEffect, useState} from 'react'
import Form from './Form/Form'
import FormButton from './FormButton/FormButton'
import styles from './Register.module.scss'

const Register = () => {
  const initialValues = {
    email:"",
    usename:"",
    fullname:"",
    password:"",
    repassword:"",
    phone:""
  };
  const[formValues, setFormValues] = useState(initialValues);
  const[formError, setFormError] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const{ name, value} = e.target;
    setFormValues({ ...formValues, [name] : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
    console.log(e.target.value)
  };

  useEffect(() => {
      console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValues);
    }

  },[formError])
  const validate = (values) => {
    const errors = {}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!values.email) {
      errors.email = "Email không hợp lệ"
    } else if(!regex.test(values.email)){
      errors.email = "không phải định dạng email"
    }
    
    if (!values.usename) {
      errors.usename = "Tên người dùng không hợp lệ"
    }
    if (!values.fullname) {
      errors.fullnamename = "Tên đầy đủ không hợp lệ"
    }
    if (!values.password) {
      errors.password = "Mật khẩu không hợp lệ"
    } else if(values.password.length < 6){
      errors.password = "Mật khẩu không ít hơn 6 ký tự"
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Mật khẩu không trùng khớp"
    }
    if (!values.phone) {
      errors.phone = "Số điện thoạikhông hợp lệ"
    }
    console.log(values)
    return errors;
  };


  const formArr = [
    {label: 'Địa chỉ email', place: 'name@domain.com', required : true, isPassword : false, name:'email' },
    {label: 'Tên người dùng', place: 'Nhập tên hiển thị', required : true, isPassword : false, name:'usename' },
    {label: 'Tên đầy đủ', place: 'Nhập tên đầy đủ của bạn', required : false, isPassword : false, name: 'fullname'},
    {label: 'Mật khẩu', place: 'Nhập tên mật khẩu của bạn', required : true, isPassword : true, name:'password' },
    {label: 'Nhập lại mật khẩu', place: 'Nhập lại mật khẩu của bạn', required : true, isPassword : true, name: 'confirmPassword'},
    {label: 'Số điện thoại', place: 'Nhập số điện thoại của bạn', required : false, isPassword : false, name:'phone' },
  ]

  const ButtonArr=[
    {name : 'Đăng ký bằng Google', icon:'gg-removebg-preview.png'},
    {name : 'Đăng ký bằng Facebook', icon:'fb-removebg-preview.png'},
  ]
  return (
    <div className= {styles.container}>
  <div className={`${styles['bg-white']} ${styles['register-container']}`}>
      <img src="Screenshot 2024-08-06 095219.png" alt="" width="100%" />
      <h2 className={styles.text-center}><b>Đăng ký để thưởng thức giai điệu</b></h2>
      <form>
        {
          formArr.map((item) => {
            return <Form label={item.label} placeholder={item.place} required={item.required} isPassword={item.isPassword} handelChange={handleChange} error={formError} name={item.name}/>
          })
        }

        <FormButton type='submit' name='Đăng ký' other={false} handleClick={handleSubmit}/>
        <div id='otherOption'>
          <span className={styles.otherOption-left}></span>
          <span className={styles.otherOption-center}>hoặc</span>
          <span className={styles.otherOption-right}></span>
        </div>
        {styles.
          ButtonArr.map((item) =>{
            return <FormButton type='button' icon={item.icon} name={item.name} other={true}/>
          })
        }
    

      </form>
      <p className={`${styles['text-center']} ${styles['mt-3']}`}>Bạn đã có tài khoản? <a href="#" style={{ fontWeight: 700 }}>Đăng nhập tại đây</a></p>
    </div>
</div>
  )
}

export default Register
