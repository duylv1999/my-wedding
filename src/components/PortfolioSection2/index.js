import SectionTitleS2 from '../SectionTitleS2'
import React, {Component, useEffect, useState} from 'react'
import axios from "../../axios/axios";
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Fancybox from "../../js/FancyBox";
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PortfolioSection2 = (props) => {
    const [images, setImages] = useState([]);
    const [dataStatus, setDataStatus] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setDataStatus("");
        axios.get('/images/' + props.media_type).then((response) => {
            setImages(response.data.data);
            if(response.data.data.length === 0) {
                setDataStatus("Album ảnh đang được cập nhật");
            }
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);
            if(error.response.status === 429) {
                setDataStatus("Yêu cầu bị từ chối, vui lòng thử lại sau ít phút");
            }
            console.error('Error', error);
        });
    }, [])

    return(
        <section className={`wpo-portfolio-section-s3 section-padding ${props.pClass}`} id="gallery">
            <LoadingOverlay
                active={isLoading}
                styles={{
                    overlay: (base) => ({
                        ...base,
                        background: 'rgba(0, 0, 0, 0)'
                    })
                }}
                spinner={<ScaleLoader />}
            >
                <div>
                    {images.length === 0
                        ? <p style={{textAlign: 'center'}}>{dataStatus}</p>
                        :
                        <div className="container">
                            <SectionTitleS2 MainTitle={'Khoảnh khắc ngọt ngào'}/>
                            <div className="sortable-gallery">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="portfolio-grids gallery-container clearfix">
                                            {images.map((image, image_item) => (
                                                <div className="grid" key={image_item}>
                                                    <div className="img-holder">
                                                        {/* <Fancybox>
                                                            <a data-fancybox="gallery" data-caption={props.media_type} data-src={image.media_url} >
                                                                <img src={image.media_preview_url} style={{cursor:"zoom-in"}} />
                                                            </a>
                                                        </Fancybox> */}
                                                        <LazyLoadImage
                                                        alt={props.media_type}
                                                        src={image.media_url}
                                                        effect="blur" 
                                                        />
                                                        <span>{props.media_type}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </LoadingOverlay>
        </section>
    )
}

export default PortfolioSection2;