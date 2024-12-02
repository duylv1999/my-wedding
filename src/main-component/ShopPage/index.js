import React, {Fragment} from 'react';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import Logo from "../../images/logo.png";
import Footer from '../../components/footer';
import ProductSidebar from './sidebar';
import ShopProduct from '../../components/ShopProduct';



const ShopPage =({ addToCart }) => {

    const productsArray = api();

    const addToCartProduct = (product) => {
        addToCart(product);
    };

    const products = productsArray

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
              <section className="wpo-shop-page section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-9 order-lg-2">
                              <ShopProduct
                                      addToCartProduct={addToCartProduct}
                                      products={products}
                                  />
                          </div>
                          <ProductSidebar addToCartProduct={addToCartProduct}
                                      products={products}/>
                      </div>
                  </div>
              </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);