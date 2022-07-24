import React from 'react'
import './Features.css'
import Teaser from '../Hero/components/Teaser/Teaser'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import FeatureBox from './components/FeatureBox/FeatureBox'

// import { MdDesignServices } from 'react-icons/md'
// import { FaRegMehRollingEyes } from 'react-icons/fa'
// import { ImBooks } from 'react-icons/im'
// import { IoAccessibility } from 'react-icons/io5'

import { BiBook, BiMehAlt, BiPencil, BiUserVoice } from 'react-icons/bi'

const Features = () => {
    const iconSize = '1.375rem'
    const data = [
        {
            id: 1,
            // icon: <MdDesignServices size={'1.25rem'} />,
            icon: <BiPencil size={iconSize} className='feature__feature-icon'/>,
            title: 'Seamless Design',
            description: 'No complicated buttons, confusing sections or getting lost. Just professional design. '
        },
        {
            id: 2,
            // icon: <FaRegMehRollingEyes size={'1.25rem'}/>,
            icon: <BiMehAlt size={iconSize} className='feature__feature-icon'/>,
            title: 'Zero advertisements',
            description: 'What’s the point of studying, if you’re bombarded by ads? Forget the ads, keep the flow! '
        },
        {
            id: 3,
            // icon: <ImBooks size={'1.25rem'} />,
            icon: <BiBook size={iconSize} className='feature__feature-icon'/>,
            title: 'Complete Library',
            description: 'A complete collection of all O-Level, A-Level and IGCSE subjects. Starting a session is simple. '
        },
        {
            id: 4,
            icon: <BiUserVoice size={iconSize} className='feature__feature-icon'/>,
            title: 'Built for Accessibility',
            description: 'We believe that education should always be free and accessible. Paper Prep is available for free, and will always be. '
        }
    ];

    return (
        <div className="features section-accent">
            <Teaser question="Why use Paper Prep?" />
            <FeatureTitle title={
                <div className='feature-text'>
                    {/* <h2>A <span className="blue-text">painless</span></h2>
                    <h2>experience while</h2>
                    <h2>you study.</h2> */}
                    <h2>A <span className="blue-text">painless</span> experience while you study.</h2>
                </div>
            }
                bottomMargin='3rem'
            />
            <div className="feature__feature-boxes">
                {data.map((object) => {
                    return <FeatureBox data={object} key={object.id}/>
                })}
            </div>
        </div>
    )
}

export default Features