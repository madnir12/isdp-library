import React from 'react'

function Input({type,placeholder,value,runOnChange}) {
  return (
    <input type={type} placeholder={placeholder} value={value}  onChange={(e)=> runOnChange(e.target.value)}  />
  )
}

export default Input