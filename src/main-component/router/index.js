import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import HomePage3 from '../HomePage3';
import HomePage4 from '../HomePage4';
import HomePage5 from '../HomePage5';
import HomePage6 from '../HomePage6';
import HomePage7 from '../HomePage7';
import TeamSinglePage from '../TeamSinglePage'
import AboutPage from '../AboutPage'
import StoryPage from '../StoryPage'
import AccomodationPage from '../AccomodationPage'
import RSVPPage from '../RSVPPage'
import GalleryPage from '../GalleryPage'
import PlannerPage from '../PlannerPage'
import BrideGroomPage from '../BrideGroomPage'
import PortfolioGridPage from '../PortfolioGridPage'
import PortfolioMasonaryPage from '../PortfolioMasonaryPage'
import PortfolioMasonaryPageS2 from '../PortfolioMasonaryPageS2'
import ShopPage from '../ShopPage'
import CheckoutPage from '../CheckoutPage'
import CartPage from '../CartPage'
// import WishlistPage from '../WishlistPage'
import OrderRecived from '../OrderRecived'
// import ProjectSinglePage from '../ProjectSinglePage'
// import ProjectPage from '../ProjectPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ErrorPage from '../ErrorPage'  
import ContactPage from '../ContactPage' 
import ProductSinglePage from '../ProductSinglePage'
import ServicePage from '../ServicePage'
import ServicePageS2 from '../ServicePageS2'
import SeviceSinglePage from '../SeviceSinglePage'
import ProjectSinglePage from '../ProjectSinglePage'
import PricingPage from '../PricingPage'
import ComingSoonPage from '../ComingSoonPage'
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage' 
import ForgotPassword from '../ForgotPassword'

import AdminPage from "../AdminPage";
import PrivateRoute from "../../components/PrivateRoute";
import RsvpCustomerPage from "../RsvpCustomer";


const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/invitation' component={HomePage7}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={SignUpPage}/>
            <Route path='/album/engagement_ceremony' component={ () => (<PortfolioGridPage pageTitle="Lễ đính hôn" media_type="engagement_ceremony" />) } subTitle='album/engagement_ceremony/'/>
            <Route path='/album/pre_wedding' component={() => (<PortfolioGridPage pageTitle="Album ảnh cưới"  media_type="pre_wedding"/>)} subTitle='album/pre_wedding'/>
            <Route path='/album/wedding_ceremony' component={ () => (<PortfolioGridPage pageTitle="Lễ cưới" media_type="wedding_ceremony" />) } subTitle='album/wedding_ceremony/'/>
            <Route path='/rsvp/customer/:id' component={RsvpCustomerPage}/>
            <PrivateRoute exact path="/admin" component={AdminPage} />
            <Route component={ErrorPage}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
