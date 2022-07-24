import React from 'react'
import './FeatureTitle.css'

const FeatureTitle = (props) => {
    return (
        <div className="feature-title" style={{marginBottom: props.bottomMargin ?? '0rem'}}>
            {props.title}
        </div>
    )
}

export default FeatureTitle