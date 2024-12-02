import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import About2 from '../../components/about2'
import ServiceSection from '../../components/ServiceSection';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/team'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectSection from '../../components/ProjectSection';
import PricingSection from '../../components/PricingSection';
import Logo from "../../images/logo.png";

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About2/>
            <ServiceSection pbClass={'pb-0'}/>
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'}/>
            <ProjectSection/>
            <PricingSection ptClass={'pt-0 pb-0'}/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
