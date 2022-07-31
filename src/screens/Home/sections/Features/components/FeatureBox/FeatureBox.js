import React from 'react'
import './FeatureBox.css'

const FeatureBox = (props) => {
    return (
        <div className="features__feature-box">
            <div className="features__feature-row">
                {props.data.icon}
                <h3 className="features__feature-text">
                    {props.data.title}
                </h3>
            </div>
            <p className="features__feature-description">
                {props.data.description}
            </p>
        </div>
    )
}

export default FeatureBox