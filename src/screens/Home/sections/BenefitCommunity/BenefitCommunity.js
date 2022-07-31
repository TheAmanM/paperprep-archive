import React from 'react'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import './BenefitCommunity.css'
import imgLight from './assets/imgLight.png';

const BenefitCommunity = () => {
    return (
        <div className="benefit-community section-accent">
            <FeatureTitle title={
                <div className='feature-text'>
                    <h2>Available <span className="blue-text">Community</span> Support.</h2>
                </div>
            } />
            <div className="benefit-community__description">
                <p>
                    Students build on top of each other’s efforts. Everyone is in the same boat, with the same end goal.
                </p>
            </div>
            <div className="benefit-community__img">
                <img src={imgLight} alt="Collections View" className='benefit-community__img svg'/>
            </div>
        </div>
    )
}

export default BenefitCommunity