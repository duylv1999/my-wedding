import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Trang chủ',
        link: '/',
        // submenu: [
            // submenu{
            //     id: 11,
            //     title: 'Main Home',
            //     link: '/home'
            // }
            // {
            //     id: 12,
            //     title: 'Wedding Planner',
            //     link: '/home2'
            // },
            // {
            //     id: 13,
            //     title: 'Announcement S1',
            //     link: '/home3'
            // },
            // {
            //     id: 14,
            //     title: 'Announcement S2',
            //     link: '/home4'
            // },
            // {
            //     id: 15,
            //     title: 'Wedding Home',
            //     link: '/home5'
            // },
            // {
            //     id: 16,
            //     title: 'Shop Home',
            //     link: '/home6'
            // },
            // {
            //     id: 17,
            //     title: 'Invitation',
            //     link: '/home7'
            // },
        // ]
    },
    {
        id: 2,
        title: 'Lễ đính hôn',
        link: '/album/engagement_ceremony',
    },
    {
        id: 3,
        title: 'Lễ cưới',
        link: '/album/wedding_ceremony',
    },
    {
        id: 4,
        title: 'Ảnh cưới',
        link: '/album/pre_wedding',
    },
    {
        id: 5,
        title: 'Thiệp mời',
        link: '/invitation',
    },

// {
//     id: 2,
//         title: 'Pages',
//         link: '/',
//         submenu: [
//             {
//                 id: 21,
//                 title: 'About',
//                 link: '/about'
//             },
//             {
//                 id: 22,
//                 title: 'Our story',
//                 link: '/story'
//             },
//             {
//                 id: 23,
//                 title: 'Accomodation',
//                 link: '/accomodation'
//             },
//             {
//                 id: 24,
//                 title: 'RSVP',
//                 link: '/404'
//             },
//             {
//                 id: 255,
//                 title: 'Gallery',
//                 link: '/gallery'
//             },
//             {
//                 id: 266,
//                 title: 'Planners',
//                 link: '/planner'
//             },
//             {
//                 id: 258,
//                 title: 'Planner Single',
//                 link: '/team-single/1'
//             },
//             {
//                 id: 267,
//                 title: 'Bridesmaid & Groomsman',
//                 link: '/groom-bride'
//             },
//             {
//                 id: 253,
//                 title: 'Serevice',
//                 link: '/service'
//             },
//             {
//                 id: 26,
//                 title: 'Serevice S2',
//                 link: '/service-s2'
//             },
//             {
//                 id: 27,
//                 title: 'Serevice Single',
//                 link: '/service-single/1'
//             },
//             {
//                 id: 28,
//                 title: 'Pricing',
//                 link: '/pricing'
//             },
//             {
//                 id: 29,
//                 title: 'coming',
//                 link: '/coming'
//             },
//             {
//                 id: 221,
//                 title: '404 Error',
//                 link: '/404'
//             },
//             {
//                 id: 251,
//                 title: 'Login',
//                 link: '/login'
//             },
//             {
//                 id: 262,
//                 title: 'Register',
//                 link: '/register'
//             },
//         ]
//     },
// {
//     id: 4,
//         title: 'Portfolio',
//         link: '/portfolio-grid',
//         submenu: [
//             {
//                 id: 41,
//                 title: 'Portfolio Grid',
//                 link: '/portfolio-grid'
//             },
//             // {
//             //     id: 42,
//             //     title: 'Portfolio Masonary',
//             //     link: '/portfolio-masonary'
//             // },
//             // {
//             //     id: 43,
//             //     title: 'Portfolio Masonary S2',
//             //     link: '/portfolio-masonary-s2'
//             // },
//             // {
//             //     id: 44,
//             //     title: 'Portfolio Single',
//             //     link: '/project-single/1'
//             // }
//         ]
//     },

    // {
    //     id: 7,
    //     title: 'Shop',
    //     link: '/shop',
    //     submenu: [
    //         {
    //             id: 71,
    //             title: 'Shop',
    //             link: '/shop',
    //         },
    //         {
    //             id: 75,
    //             title: 'Shop Single',
    //             link: '/product-single/1'
    //         },
    //         {
    //             id: 76,
    //             title: 'Cart',
    //             link: '/cart'
    //         },
    //         {
    //             id: 77,
    //             title: 'Checkout',
    //             link: '/checkout'
    //         }
    //
    //     ]
    // },
    //
    // {
    //     id: 5,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 52,
    //             title: 'Blog Left sidebar',
    //             link: '/blog-left'
    //         },
    //         {
    //             id: 53,
    //             title: 'Blog full width',
    //             link: '/blog-fullwidth'
    //         },
    //         {
    //             id: 54,
    //             title: 'Blog single',
    //             link: '/blog-single/1'
    //         },
    //         {
    //             id: 55,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-left-sidebar/1'
    //         },
    //         {
    //             id: 56,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-fullwidth/1'
    //         },
    //     ]
    // },
    {
        id: 88,
        title: 'Liên hệ',
        link: '/contact',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                         <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link onClick={ClickHandler} to={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link onClick={ClickHandler} className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
