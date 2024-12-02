import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import BrideGrooms from '../../components/BrideGrooms';
import Logo from "../../images/logo.png";

const BrideGroomPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Our Planners'} pagesub={'Planners'}/> 
            <BrideGrooms/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BrideGroomPage;
