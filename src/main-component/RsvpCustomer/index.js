import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Logo from "../../images/logo.png";
import RsvpElement from "../../components/RsvpElement";

const RsvpCustomerPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} topbarNone={'topbarNone'} hclass={'wpo-header-style-2'}/>
            <RsvpElement/>
        </Fragment>
    )
};
export default RsvpCustomerPage;