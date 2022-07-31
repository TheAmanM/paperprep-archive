import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className={`hero ${props.variant}`} onClick={props.onPress}>
        {props.title}
    </button>
  )
}

export default Button