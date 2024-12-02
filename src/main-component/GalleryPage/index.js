import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import PortfolioSection2 from '../../components/PortfolioSection2';
import Logo from "../../images/logo.png";

const GalleryPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'}/> 
            <PortfolioSection2 pClass={'tb-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GalleryPage;
