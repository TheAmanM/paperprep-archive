import React from 'react'
import './CTA.css'
import Teaser from '../Hero/components/Teaser/Teaser'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import CTABox from './components/CTABox/CTABox'

const CTA = () => {
    return (
        <div className="cta section-light">
            <Teaser question="Is Paper Prep ready?" />
            <FeatureTitle title={
                <>
                    <div className='cta__title'>
                        <h2>Paper Prep is coming <span className="blue-text no-wrap">very soon</span>...</h2>
                    </div>
                </>
            }
                bottomMargin='1.5rem' />
            <p className="cta__description">
                We are focused on building the ultimate platform for education, rather than a small project. In light of this objective, Paper Prep is not ready yet.
            </p>
            <CTABox />
        </div>
    )
}

export default CTA