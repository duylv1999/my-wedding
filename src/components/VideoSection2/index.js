import React from 'react'
import VideoModal from '../ModalVideo'
import vimg from '../../images/cta2.jpg'


const VideoSection2 = (props) => {
    return(
        <section className="wpo-video-section-s2" style={{marginTop: "80px"}}>
            <div className="wpo-video-item">
                <div className="wpo-video-img">
                    <img src="https://wpocean.com/wp/loveme/wp-content/uploads/2021/10/video-cta-2.jpg" alt="nhuthanhwedding"/>
                    <VideoModal/>
                </div>
            </div>
        </section>
    )
}

export default VideoSection2;