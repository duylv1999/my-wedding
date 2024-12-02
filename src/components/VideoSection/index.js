import React from 'react'
import VideoModal from '../ModalVideo'
import vimg1 from '../../images/video/bg_video.jpeg'
import vimg2 from '../../images/video/bg_video_youtube.jpeg'
import SectionTitle from '../SectionTitle'
import './style.css';


const VideoSection = (props) => {
    return(
        <section className="wpo-video-section section-padding">
            <div className="container">
                <SectionTitle topTitle={'Kỷ niệm tình yêu'} MainTitle={''}/>
                <div className="wpo-video-item">
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mg-bottom'>
                            <div className="wpo-video-img">
                                <img src={vimg1} alt="my_wedding_video" style={{width: '100%', minWidth: '100%'}}/>
                                <VideoModal type = {"s3_video"}/>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                            <div className="wpo-video-img">
                                <img src={vimg2} alt="my_wedding_video" style={{width: '100%', minWidth: '100%'}}/>
                                <VideoModal type = {"youtube"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;