import React from "react";
import "./Recent.css";
import Carousel from 'react-bootstrap/Carousel';
import MusicImg from '../../../assets/music_img.png'
import VideoImg from '../../../assets/video_img.png'
import SimpleSlider from "./MobileUpdated";

const RecentUpdate = () => {

  // Render the static UI
  return (
    <div className='Recent_updates dashboard_bg'>
        <h3>Recent Uploads</h3>

        <div className="Recent_musicVideo">
        <div className="recent_innerContent">
            <img src={MusicImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>

        <div className="recent_innerContent">
            <img src={VideoImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>


        <div className="recent_innerContent">
            <img src={MusicImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>


        <div className="recent_innerContent">
            <img src={VideoImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>


        <div className="recent_innerContent">
            <img src={MusicImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>



  
        </div>

        <div className="View_all"><button>View all</button></div>
        <div className="mobile_slider">
<SimpleSlider />
</div>
  </div>
  );
};

export default RecentUpdate;
