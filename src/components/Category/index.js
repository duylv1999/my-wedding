import React from 'react'
import {Link} from 'react-router-dom'
import catimg from '../../images/category/1.jpg'
import catimg2 from '../../images/category/2.jpg'
import catimg3 from '../../images/category/3.jpg'


const Category = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="wpo-category-section">
            <div className="container-fluid">
                <div className="wpo-category-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <img src={catimg} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} to="/shop">Wedding Shoes</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <img src={catimg2} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} to="/shop">Wedding Cake</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <img src={catimg3} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} to="/shop">Wedding bouquet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;