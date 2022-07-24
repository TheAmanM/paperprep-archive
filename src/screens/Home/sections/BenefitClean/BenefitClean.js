import React from 'react'
import './BenefitClean.css'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import imgLight from './assets/light.png'

const BenefitClean = () => {
    return (
        <div className="section-dark benefit-clean">
            <FeatureTitle
                title={
                    <h2 className='benefit-clean__heading'>
                        A <span className="blue-text"> clean</span> interface.
                    </h2>
                }
            />
            <div className="benefit-clean__body-text">
                <p>
                    An interface built from the ground up, with your convenience kept in mind. Everything has been built deliberately and intentionally.
                </p>
            </div>
            <div className="benefit-clean__img">
                <img className='benefit-clean__img' src={imgLight} alt="Subjects View" />
            </div>
        </div>
    )
}

export default BenefitClean