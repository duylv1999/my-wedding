import React from 'react'
import ffImg1 from '../../images/f-shape-1.png'
import ffImg2 from '../../images/f-shape-2.png'

const funFact = [
  {
      title: '380+',
      subTitle: 'Khách mời'
  },
  {
      title: '400+',
      subTitle: 'Hình ảnh',
  },
  {
      title: '10+',
      subTitle: 'Lời chúc',
  },
  {
     title: '2+',
     subTitle: 'Địa điểm',
  },
]


const FunFact = (props) => {
    return(
      <section className={`wpo-fun-fact-section ${props.fClass}`} style={{marginTop: "42px"}}>
          <div className="container">
              <div className="row">
                  <div className="col col-xs-12">
                      <div className="wpo-fun-fact-grids clearfix">
                          {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                      </div>
                  </div>
              </div>
              <div className="f-shape-1">
                  <img src={ffImg1} alt=""/>
              </div>
              <div className="f-shape-2">
                  <img src={ffImg2} alt=""/>
              </div>
          </div>
      </section>
    )
}

export default FunFact;