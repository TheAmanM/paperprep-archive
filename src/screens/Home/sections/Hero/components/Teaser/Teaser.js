import React from 'react'
import './Teaser.css'

const Teaser = (props) => {
  return (
    <h3 className='blue-text teaser-text'>
        {props.question}
    </h3>
  )
}

export default Teaser