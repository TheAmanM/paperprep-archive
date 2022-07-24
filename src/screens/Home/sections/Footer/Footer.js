import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <div className="footer section-dark" ref={props.reference}>
            <p>Copyright ©2022 Paper Prep.</p>
            <p>Designed and Developed by <span className='blue-text-wrapper'>
                    <span className="blue-text">
                        Aman Meherally</span>
                </span>.
            </p>
        </div>
    )
}

export default Footer