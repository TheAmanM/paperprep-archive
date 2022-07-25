import React, { useState } from 'react'
import './Hero.css'
import booksImg from './assets/books.svg'
import Button from './components/Button/Button'
import HeroTextEffect from './components/HeroTextEffect/HeroTextEffect'
// import TextTransition from 'react-text-transition';

const Hero = (props) => {
    /* const [animationIndex, setAnimationIndex] = useState(0);

    const words = [
        'organized',
        'fun',
        'impactful',
        'efficient',
    ]; */

    return (
        <>
            <div className="hero section-light">
                {/* <div className="hero__text"> */}
                {/* <h1 className='hero__text__1'>Past Papers</h1>
                    <h1 className='hero__text__2'>can be</h1>
                    <h1 className='hero__text__3 blue-text'>organized</h1> */}
                <h1 className="hero__text">
                    <div>
                        Past Papers
                    </div>
                    <div>
                        can be
                    </div>
                    <HeroTextEffect />
                </h1>
                <div className="hero__description">
                    <p>
                        Paper Prep is a web-based software that enables students to practice for their O-Level, A-Level and IGCSE exams through past papers using a well designed functioning system, all for free.
                    </p>
                </div>
                <div className="hero__button-row">
                    <Button title="Get Started" variant='filled' onPress={props.scrollToBottom} />
                    <p className='hero__button-row__split'>
                        or
                    </p>
                    <Button title="View Subjects" variant='outlined' onPress={props.scrollToBottom} />
                </div>
                <img src={booksImg} alt="Books" className='hero__hero-image' />
            </div>
        </>
    )
}

export default Hero