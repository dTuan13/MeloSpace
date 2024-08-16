import React from 'react'

const Form = ({label, placeholder,required,isPassword, handelChange, error, name}) => {
  return (
    <div className="form-group">
          <label className='labelInput' htmlFor={label}>
            <b>{label}</b> 
            <span className="text-danger">{required ? '*' : ''}</span>
          </label>
          <input 
            type ={isPassword ? 'password' : 'text'} 
            className="form-control"
            id={label} 
            placeholder={placeholder} 
            required={required}
            onChange={(e) => handelChange(e)}
          /> 
            <div className="error">
              <span className='error'>{error[name]}</span>
            </div>
    </div>
  )
  };
export default Form
