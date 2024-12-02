import React from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
 
class VideoModal extends React.Component {
 
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
    console.log(this.state.type)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 

  render () {
    return (
      this.props.type === 's3_video' ? 
      <>
        <React.Fragment>
          <ModalVideo channel='custom' autoplay url='https://cyberthunderpublic.s3.ap-southeast-1.amazonaws.com/wedding_video/NhuThanhWedding.mp4' 
            isOpen={this.state.isOpen}  onClose={() => this.setState({isOpen: false})} />
            <div className="video-btn">
                <ul>
                    <li>
                      <button className="wrap" onClick={this.openModal}><i className="fi flaticon-play" aria-hidden="true"></i></button> 
                    </li>
                </ul>
            </div>
        </React.Fragment>
      </> :
      <>
      <React.Fragment>
          <ModalVideo channel='youtube' autoplay videoId="g-bCmSC7sQw"
            isOpen={this.state.isOpen}  onClose={() => this.setState({isOpen: false})} />
            <div className="video-btn">
                <ul>
                    <li>
                      <button className="wrap" onClick={this.openModal}><i className="fi flaticon-play" aria-hidden="true"></i></button> 
                    </li>
                </ul>
            </div>
        </React.Fragment>
      </>
    )
  }
}

export default VideoModal;
