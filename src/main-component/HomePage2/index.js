import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2';
import About from '../../components/about';
import ServiceSection2 from '../../components/ServiceSection2';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/ProjectSection';
import Testimonial from '../../components/Testimonial';
import TeamSection from '../../components/team';
import CtaSection from '../../components/CtaSection';
import BlogSection from '../../components/BlogSection';
import Scrollbar from '../../components/scrollbar'
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';
import PartnerSection from '../../components/PartnerSection';



const HomePage2 =() => {

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <div className="wpo-box-style">
                <Hero2/>
                <About/>
                <ServiceSection2/>
                <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'}/>
                <ProjectSection/>
                <Testimonial/>
                <TeamSection/>
                <CtaSection ctClass={'wpo-cta-section-s2'}/>
                <BlogSection blogClass={'wpo-blog-section-s2'}/>
                <PartnerSection tNone={'wpo-partners-section-s2'}/>
                <Footer/>
            </div>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage2;