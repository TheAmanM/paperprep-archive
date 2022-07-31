import React from 'react'
import './BenefitClean.css'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import imgLight from './assets/light.png'
import boxes from './../../assets/whiteBoxes.svg'
const BenefitClean = () => {
    return (
        <div className="section-dark benefit-clean">
            <div className="benefit-clean__section-primary">
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
                <img src={boxes} alt="Boxes" className='benefit-clean__image-boxes svg'/>
            </div>
            <div className="benefit-clean__img">
                <img className='benefit-clean__img svg' src={imgLight} alt="Subjects View" />
            </div>
        </div>
    )
}

export default BenefitClean