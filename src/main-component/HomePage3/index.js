import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero3 from '../../components/hero3';
import TimeCountDown from '../../components/countdown';
import CoupleSection from '../../components/CoupleSection';
import StorySection from '../../components/StorySection';
import VideoSection2 from '../../components/VideoSection2';
import PortfolioSection from '../../components/PortfolioSection';
import RSVP from '../../components/RSVP';
import CtaSection2 from '../../components/CtaSection2';
import BlogSection2 from '../../components/BlogSection2';
import Scrollbar from '../../components/scrollbar'
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';
import PartnerSection from '../../components/PartnerSection';
import EventSection from '../../components/EventSection';



const HomePage3 =() => {

    return(
        <Fragment>
            <Navbar2 Logo={Logo} topbarNone={'topbarNone'}/>
            <Hero3/>
            <TimeCountDown/>
            <CoupleSection/>
            <VideoSection2/>
            <StorySection/>
            <PortfolioSection/>
            <RSVP/>
            <CtaSection2/>
            <EventSection/>
            <PartnerSection tNone={'wpo-partners-section-s3'}/>
            <BlogSection2 blogClass={'wpo-blog-section-s3'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage3;