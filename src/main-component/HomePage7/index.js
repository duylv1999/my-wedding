import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import Hero7 from '../../components/hero7';
import Logo from "../../images/logo.png";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";



const HomePage7 =() => {

    return(
        <Fragment>
            <Navbar Logo={Logo} topbarNone={'topbarNone'} hclass={'wpo-header-style-2'}/>
            <Hero7/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage7;