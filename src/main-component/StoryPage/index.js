import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import CoupleSection from '../../components/CoupleSection';
import VideoSection2 from '../../components/VideoSection2';
import PortfolioSection from '../../components/PortfolioSection';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import StorySection from '../../components/StorySection';
import PartnerSection from '../../components/PartnerSection';
import Logo from "../../images/logo.png";

const StoryPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'}/> 
            <CoupleSection cClass={'pt-160'}/>
            <VideoSection2/>
            <StorySection/>
            <PortfolioSection/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default StoryPage;
