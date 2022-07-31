import React from 'react'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import './BenefitReporting.css'
import imgLight from './assets/imgLight.png';

const BenefitReporting = () => {
    return (
        <div className="benefit-reporting section-light">
            <FeatureTitle title={
                <div className='feature-text'>
                    <h2>Active <span className="blue-text">Reporting</span>.</h2>
                </div>
            } />
            <div className="benefit-reporting__description">
                <p>
                Statistics and data to help you accurately determine what you are great at, and what you need to focus on. Studying should be actively efficient. 
                </p>
            </div>
            <div className="benefit-reporting__img">
                <img src={imgLight} alt="Reporting View" className='benefit-reporting__img svg'/>
            </div>
        </div>
    )
}

export default BenefitReporting