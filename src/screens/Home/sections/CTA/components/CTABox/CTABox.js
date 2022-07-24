import React, { useState } from 'react'
import './CTABox.css'

import { toast } from 'react-toastify'

const CTABox = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async () => {
        
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const result = validRegex.test(email);
        
        if (result === true) {
            setLoading(true);
            // Do Firestore stuff here
            successToast();
            setLoading(false);
        } else {
            errorToast('Invalid email!');
        }
    }

    const errorToast = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

    const successToast = () => toast.success('Thank you for registering!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });

    return (
        <div className="section-dark cta-box">
            <h2 className='cta-box__initial-text'>
                Excited for the first Paper Prep release?
            </h2>
            <h3 className="cta-box__explaination">
                -  Notify me when Paper Prep is launched  -
            </h3>

            <input className='cta-box__email' type="email" name="yes" id="email" placeholder='Email' onChange={(e) => handleChange(e)} />
            <button className={loading ? 'cta-box__button filled button-loading' : 'cta-box__button filled'} onClick={() => handleSubmit()}>{loading ? "• • •" : "Notify Me"}</button>

            {/* <ToastContainer /> */}
        </div>
    )
}

export default CTABox