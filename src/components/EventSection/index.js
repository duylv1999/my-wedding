import React from 'react'
import SectionTitleS2 from '../SectionTitleS2'
import sImg1 from '../../images/event-shape-1.png'
import sImg2 from '../../images/event-shape-2.png'
import LocationMap from '../Modal'


const Events = [
    {
        Simg1: sImg1,
        Simg2: sImg2,
        title:'Lễ đính hôn',
        date:'19-03-2022 ÂL',
        li1:'Thứ 3, 19-04-2022 7:00 AM – 14:30 PM',
        li2:'thôn Phú Đông. xã Tam Phú, thành phố Tam Kỳ, tỉnh Quảng Nam',
        li3:'(+84)0765534228',
        mapDescription: 'Tư gia nhà gái - Quán cà phê cô Thiệt di chuyển sang trái vài căn nhà',
        mapKey: 'https://www.google.com/maps/' +
            'embed?pb=!1m18!1m12!1m3!1d1523.831892342686!2d108.52570658151132!3d15.572442820683687!2m3!1f0' +
            '!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169db63aeb23f65%3A0x47f45af86f9e3631!2zQ8O0IFRoa' +
            'eG7h3QgQ2Fmw6kgQmluIEtpbg!5e1!3m2!1svi!2s!4v1649837541387!5m2!1svi!2s'
    },
    {
        Simg1: sImg1,
        Simg2: sImg2,
        title:'Lễ vu quy',
        date:'19-06-2022 ÂL',
        li1:'Chủ nhật, 17-07-2022 10:00 AM – 14:30 PM',
        li2:'thôn Phú Đông. xã Tam Phú, thành phố Tam Kỳ, tỉnh Quảng Nam',
        li3:'(+84)0765534228',
        mapDescription: 'Tư gia nhà gái - Quán cà phê cô Thiệt di chuyển sang trái vài căn nhà',
        mapKey: 'https://www.google.com/maps/' +
            'embed?pb=!1m18!1m12!1m3!1d1523.831892342686!2d108.52570658151132!3d15.572442820683687!2m3!1f0' +
            '!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169db63aeb23f65%3A0x47f45af86f9e3631!2zQ8O0IFRoa' +
            'eG7h3QgQ2Fmw6kgQmluIEtpbg!5e1!3m2!1svi!2s!4v1649837541387!5m2!1svi!2s'
    },
    {
        Simg1: sImg1,
        Simg2: sImg2,
        title:'Lễ thành hôn',
        date:'20-06-2022 ÂL',
        li1: 'Thứ 2, 18-07-2022 10:00 AM – 14:30 PM',
        li2: 'nhà hàng Phú Vĩnh, phường Vĩnh Điện, thị xã Điện Bàn, tỉnh Quảng Nam',
        li3:'(+84)0765534228',
        mapDescription: '49 Đường Trần Thị Lý, phường Vĩnh Điện, thị xã Điện Bàn, Quảng Nam, Việt Nam',
        mapKey: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.91725442331!2d108.244815914077!3d15.889492648451977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420f84c385608f%3A0x61dfbf84e8c2e462!2zTmjDoCBow6BuZyBQaMO6IFbEqW5o!5e1!3m2!1svi!2s!4v1653393956407!5m2!1svi!2s'
    },
]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
            <div className="container">
                <SectionTitleS2 MainTitle={'THỜI GIAN VÀ ĐỊA ĐIỂM'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}<br/><small>{event.date}</small></h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li><LocationMap mapKey={event.mapKey} mapDescription={event.mapDescription}/></li>
                                        </ul>
                                    </div>
                                    <div className="event-shape-1">
                                        <img src={event.Simg1} alt="" />
                                    </div>
                                    <div className="event-shape-2">
                                        <img src={event.Simg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;