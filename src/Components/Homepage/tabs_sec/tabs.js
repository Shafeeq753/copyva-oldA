import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import "./tabs.css";
import { useState } from "react";
import Music_img from "../../../assets/Frame 11 (1).png";
import First_tab from "../../../assets/Frame 29.png";
import Sec_tab from "../../../assets/Frame 30.png";
import Third_tab from "../../../assets/Frame 31.png";
import Fourth_tab from "../../../assets/Frame 33.png";
import Five_img from "../../../assets/Frame 34.png";
import Six_img from "../../../assets/Frame 35.png";
import Content_img from "../../../assets/Frame 11 (2).png";
import Artist_img from "../../../assets/Frame 11 (3).png";
import { useNavigate } from "react-router-dom";

const TabsSection = () => {
  const musicItems = [
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: true,
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a direct video link here
    },
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: false,
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a direct video link here
    },
    // Add more items as needed
  ];
  const [tabIndex, setTabIndex] = useState(0);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const navigate = useNavigate();
  const handler = () => {
    navigate("/viewall");
  };
  const handleImageClick = (videoSrc) => {
    
    setVideoSrc(videoSrc);
    setShowVideoPlayer(true);
  };

  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setVideoSrc("");
  };
  return (
    <section className="Container tabs_section">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList classID="tab_list">
          <Tab>
            <h4>
              <img src={Music_img} alt="Music_img" />
              Music
            </h4>
          </Tab>
          <Tab>
            <h4>
              <img src={Content_img} alt="Content_img" />
              Content
            </h4>
          </Tab>
          <Tab>
            <h4>
              <img src={Artist_img} alt="Artist_img" />
              Artist
            </h4>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="Tab_content">
            <div>
              <img src={First_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Sec_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Third_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Fourth_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Five_img} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Six_img} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Tab_content">
            <div>
              <img src={First_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Sec_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Third_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Fourth_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Five_img} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Six_img} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Tab_content">
            <div>
              <img src={First_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Sec_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Third_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Fourth_tab} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Five_img} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
            <div>
              <img src={Six_img} alt="video"
                // className="music-image"
                onClick={() => handleImageClick(musicItems[0]?.videoSrc)} />
            </div>
          </div>

        </TabPanel>
      </Tabs>
      <button type="otton" className="btn_one" onClick={() => handler()}>
        View all
      </button>
      {showVideoPlayer && (
        <div className="video-player-overlay">
          <div className="video-player">
            <button className="close-button" onClick={handleCloseVideoPlayer}>X</button>
            <video controls src={videoSrc} className="video-element"></video>
          </div>
        </div>
      )}
    </section>
  );
};

export default TabsSection;
