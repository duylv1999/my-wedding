import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import Hero5 from '../../components/hero5';
import CoupleSection from '../../components/CoupleSection';
import StorySection from '../../components/StorySection';
import VideoSection2 from '../../components/VideoSection2';
import PortfolioSection from '../../components/PortfolioSection';
import RSVP from '../../components/RSVP';
import CtaSection2 from '../../components/CtaSection2';
import BlogSection2 from '../../components/BlogSection2';
import Scrollbar from '../../components/scrollbar'
import Logo from "../../images/logo-2.png";
import Footer from '../../components/footer';
import PartnerSection from '../../components/PartnerSection';
import EventSection from '../../components/EventSection';



const HomePage5 =() => {

    return(
        <Fragment>
            <Navbar2 Logo={Logo} topbarNone={'topbarNone'} hclass={'wpo-header-style-3'}/>
            <Hero5/>
            <CoupleSection cClass={'pt-160'}/>
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

export default HomePage5;