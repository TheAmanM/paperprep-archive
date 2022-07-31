import React from "react";
// import { useState } from 'react'
import "./Hero.css";
import booksImg from "./assets/books.svg";
import Button from "./components/Button/Button";
import HeroTextEffect from "./components/HeroTextEffect/HeroTextEffect";
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
      <div className="hero-section section-light">
        <div className="hero__intro-section">
          <h1 className="hero__text">
            <div className="inline-block">Past Papers&nbsp;</div>
            <div className="inline-block">can be&nbsp;</div>
            <HeroTextEffect />
          </h1>
          <div className="hero__description">
            <p>
              Paper Prep is a web-based software that enables students to
              practice for their O-Level, A-Level and IGCSE exams through past
              papers using a well designed functioning system, all for free.
            </p>
          </div>
          <div className="hero__button-row">
            <Button
              title="Get Started"
              variant="filled"
              onPress={props.scrollToBottom}
            />
            <p className="hero__button-row__split">or</p>
            <Button
              title="View Subjects"
              variant="outlined"
              onPress={props.scrollToBottom}
            />
          </div>
        </div>
        <div className="hero__hero-image-wrapper">
          <img
            src={booksImg}
            alt="Books"
            className="hero__hero-image svg no-select"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
