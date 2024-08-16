import React from 'react'

const FormButton = ({type,name, icon, other, handleClick}) => {
  return (
    <button onClick={(e) => handleClick(e)} type={type} className={other === false ? 'btn' : 'otherBtn'}>
    <img src= {icon}></img> 
    <span>{name}</span>
  </button>
  )
}

export default FormButton
