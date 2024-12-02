import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import CoupleSection from '../../components/CoupleSection';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import TimeCountDown from '../../components/countdown';
import CtaSection2 from '../../components/CtaSection2';
import EventSection from '../../components/EventSection';
import Logo from "../../images/logo.png";

const AccomodationPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Accomodation'} pagesub={'Accomodation'}/> 
            <TimeCountDown/>
            <CoupleSection cClass={'pt-160'}/>
            <CtaSection2/>
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AccomodationPage;
