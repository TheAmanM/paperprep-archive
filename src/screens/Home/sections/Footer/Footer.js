import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        /*  <div className="footer section-dark" ref={props.reference}>
                <div className='no-wrap'><p>Copyright ©2022 Paper Prep. </p></div>
                <div className='no-wrap'><p>Designed and Developed by <span className='blue-text-wrapper'>
                    <span className="blue-text"> Aman Meherally</span>
                </span>.</p></div>
        </div>  */

        <div className="footer section-dark" ref={props.reference}>
            <div className="no-wrap">
                Copyright ©2022 Paper Prep.&nbsp;
            </div>
            <div className="no-wrap">
                Designed and Developed by&nbsp;
            </div>
            <span className="blue-text-wrapper">
                <a href="/">
                    <span className="blue-text"> Aman Meherally</span>
                </a>
            </span>.
        </div>
    )
}

export default Footer