import React, { useRef } from 'react'
import Nav from '../../components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import Features from './sections/Features/Features'
import './Home.css'
import BenefitClean from './sections/BenefitClean/BenefitClean'
import BenefitCommunity from './sections/BenefitCommunity/BenefitCommunity'
import BenefitReporting from './sections/BenefitReporting/BenefitReporting'
import FlowBreak from './sections/FlowBreak/FlowBreak'
import CTA from './sections/CTA/CTA'
import Footer from './sections/Footer/Footer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const bottomRef = useRef(null);

  function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Nav scrollToBottom={scrollToBottom}/>
      <Hero scrollToBottom={scrollToBottom}/>
      <Features />
      <BenefitClean/>
      <BenefitCommunity />
      <BenefitReporting />
      <FlowBreak />
      <CTA />
      <Footer reference={bottomRef}/>

      <ToastContainer />
    </>
  )
}

export default Home