import React, { useEffect, useRef, useState } from 'react';
import USerImg from "../../../../assets/dashboard_img.png";
import RecentUpdate from "../../Recent_Uploads/Recent";
import MusisVideo from "../../upload_music_videoCard/musicvideo";
import LiveChart from '../../liveChart/liveChart';


export default function Home() {


  return (
    <div className="home_dashboard">
      <div>
        <div className="users_dashboard dashboard_bg">
          <div className="Dashbaordimg_content">
            <img src={USerImg} alt="USerImg" />
            <div>
              <h4>Welcome to Copyva </h4>
              <h4>
                <b>Thamas varghese</b>
              </h4>
            </div>
          </div>

          <div className="Dashbaordimg_content">
            <div className="Music_update">
              <h5>Music Uploaded </h5>
              <p>0</p>
            </div>

            <div className="Content_update">
              <h5>Content Uploaded </h5>
              <p>0</p>
            </div>
          </div>
        </div>

        <MusisVideo />

        <LiveChart />

       
      </div>

      <RecentUpdate />
    </div>
  );
}
