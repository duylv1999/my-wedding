import React, {Fragment} from 'react';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar'
import Hero6 from '../../components/hero6'
import ArrivalProduct from '../../components/ArrivalProduct'
import Category from '../../components/Category'
import Scrollbar from '../../components/scrollbar'
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';
import ProductS2 from '../../components/ProductS2';
import ShopBanner from '../../components/ShopBanner';
import PartnerSection from '../../components/PartnerSection';



const HomePage6 =({ addToCart }) => {

    const productsArray = api();

    const addToCartProduct = (product) => {
        addToCart(product);
    };

    const products = productsArray

    return(
        <Fragment>
            <Navbar Logo={Logo} topbarNone={'topbarNone'}/>
            <Hero6/>
            <ProductS2
                    addToCartProduct={addToCartProduct}
                    products={products}
                />
            <Category/>
            <ArrivalProduct
                    addToCartProduct={addToCartProduct}
                    products={products}/>
            <ShopBanner/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(HomePage6);