import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import Hero4 from '../../components/hero4';
import TimeCountDown from '../../components/countdown';
import StorySection from '../../components/StorySection';
import Scrollbar from '../../components/scrollbar'
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';
import EventSection from '../../components/EventSection';
import VideoSection from "../../components/VideoSection";
import RSVP from "../../components/RSVP";
import FunFact from "../../components/FunFact";
import Testimonial from "../../components/Testimonial";

const HomePage4 =() => {

    return(
        <Fragment>
            <Navbar Logo={Logo} topbarNone={'topbarNone'} hclass={'wpo-header-style-2'}/>
            <Hero4/>
            <TimeCountDown/>
            <FunFact/>
            <VideoSection/>
            <StorySection/>
            <EventSection/>
            <Testimonial/>
            <RSVP/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage4;