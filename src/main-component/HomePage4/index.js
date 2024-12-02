import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import Hero4 from '../../components/hero4';
import TimeCountDown from '../../components/countdown';
import StorySection from '../../components/StorySection';
import PortfolioSection2 from '../../components/PortfolioSection2';
import TeamSection from '../../components/team';
import CtaSection2 from '../../components/CtaSection2';
import BlogSection2 from '../../components/BlogSection2';
import Scrollbar from '../../components/scrollbar'
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';
import PartnerSection from '../../components/PartnerSection';
import EventSection from '../../components/EventSection';



const HomePage4 =() => {

    return(
        <Fragment>
            <Navbar Logo={Logo} topbarNone={'topbarNone'} hclass={'wpo-header-style-2'}/>
            <Hero4/>
            <TimeCountDown/>
            <StorySection/>
            <PortfolioSection2/>
            <TeamSection/>
            <CtaSection2/>
            <EventSection/>
            <PartnerSection tNone={'wpo-partners-section-s3'}/>
            <BlogSection2 blogClass={'wpo-blog-section-s3'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage4;