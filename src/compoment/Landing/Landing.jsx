import React from 'react'
import  Navigation from './LandingNavigation'
import Banner from './Landing-page-banner'
import LandingDescription from './Landing-Description'
const Landing = () => {
    return (
        <div className="landing-page-container">
           <div className="landing-page-content-container">
                <Navigation/>
                <Banner/>
                <LandingDescription/>
                <h2 style={{textAlign:'center',fontSize:'16px'}}>Powered by JEAN DE DIEU | React Dev.</h2>
               </div>
        </div>
    )
}

export default Landing
