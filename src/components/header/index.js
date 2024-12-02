import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import min3 from "../../images/love.png";
import { removeFromCart } from "../../store/actions/action";
import HeaderTopbar from "../HeaderTopbar";

class Header extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false,
  }

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow
    })
  }
  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow
    })
  }

  render() {
    const { isSearchShow, isCartShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault()
    }

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }

    const { carts } = this.props;

    let totalPrice = 0;
    if (carts && carts.length > 0) {
      for (let i = 1; i <= carts.length; i++) {
        totalPrice += Number(carts[i-1].price);
      }
    }

    return (
      <header id="header" className={this.props.topbarNone}>
        <HeaderTopbar/>
        <div className={`wpo-site-header ${this.props.hclass}`} id="home">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={this.props.Logo}
                      alt="" /></Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder">
                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/">Trang chủ</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/album/engagement_ceremony">lễ đính hôn</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/album/wedding_ceremony">lễ cưới</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/album/pre_wedding">ảnh cưới</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/invitation">Thiệp mời</Link>
                      </li>
                      <li><Link onClick={ClickHandler} to="/contact">Liên hệ</Link></li>
                    </ul>

                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-2">
                  <div className="header-right">
                    <div className="header-search-form-wrapper">
                      <div className="cart-search-contact">
                        <Link to="/login">
                          <button className="search-toggle-btn"><i className={'ti-user'}></i></button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
