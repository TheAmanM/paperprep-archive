import React, { useState } from 'react'
import './HeroTextEffect.css'
// import TextTransition, { presets } from 'react-text-transition'
// import AnimatedText from 'react-animated-text-content';
import TextAnimation from 'react-text-animations';

const HeroTextEffect = () => {
    const [animationIndex, setAnimationIndex] = useState(0);

    setTimeout(() => {
        setAnimationIndex(animationIndex + 1);
    }, 3200);

    const words = [
        'organized',
        'fun',
        'impactful',
        'efficient',
    ];

    return (
        // <h1>
        /* <TextTransition
            // text={words[animationIndex % words.length]}
            // springConfig={{ tension: 160, friction: 12, easing: 'cubic-bezier(0.5, -0.8, 0.5, 1.4)' }}
            springConfig={{easing: `easeIn`}}
            direction='up'
            inline
        >
            {words[animationIndex % words.length]}
        </TextTransition> */
        // </h1>

        /* <div>
            <h1 className='heading-text'>Past Papers</h1>
            <h1 className='heading-text'>can be <div className="blue-text">
                <TextTransition
                    text={words[animationIndex % words.length]}
                    springConfig={{ tension: 160, friction: 12, easing: 'cubic-bezier(0.5, -0.8, 0.5, 1.4)' }}
                    inline /></div>
            </h1>
        </div > */

        /* <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '0px',
                y: '200px',
                scale: 1.1,
                ease: 'cubic-bezier(0.8, 0, 0.2, 1)',
            }}
            animationType="lights"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
        >
            {words[animationIndex % words.length]}
        </AnimatedText> */

        <div>
            <TextAnimation.Slide text={words} target={words[0]} animation={{
                duration: 750,
                delay: 3000,
                timingFunction: 'cubic-bezier(0.5, -0.6, 0.5, 1.4)',
            }}>
                organized
            </TextAnimation.Slide>
        </div>
    );
}

export default HeroTextEffect