import React, { useRef, useState } from "react";
import "./musictab.css";
import nextTrack from "../../../../../assets/nextbtn.svg";
import PreTrack from "../../../../../assets/prebtn.svg";
import VideoIcon from "../../../../../assets/video_icon.svg";
import HearIcon from "../../../../../assets/heart.svg";
import QullSound from "../../../../../assets/quill_sound.svg";
import SolarLink from "../../../../../assets/solar_link-bold.svg";
import Five_img from "../../../../../assets/Frame 34.png";
import videoIcons from "../../../../../assets/Vector_td.png";

import DwnloadBtn from "../../../../../assets/downloade_btn.png";
import cartFooter from "../../../../../assets/cart_foter.png";
import filterIcon from "../../../../../assets/filter.png";

// import Frame from "../../../assets/Frame 22.png";
const Musictab = () => {
  const [musicItems, setMusicItems] = useState([
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: true,
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: false,
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    // Add more items as needed
  ]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % musicItems.length);
    setIsPlaying(false);
  };

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };

  const handleImageClick = (videoSrc) => {
    debugger
    setVideoSrc(videoSrc);
    setShowVideoPlayer(true);
  };

  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setVideoSrc("");
  };
  const toggleLike = (index) => {
    const updatedMusicItems = musicItems.map((item, i) => 
      i === index ? { ...item, liked: !item.liked } : item
    );
    setMusicItems(updatedMusicItems);
  };
  return (
    <div>
      <div className={`purchases-list1 ${showVideoPlayer ? 'blurred' : ''}`}>
        {musicItems.length > 0 ? (
          <div>
            <div className="Top_header">
              <h2>List of Music</h2>
              <div className="iput_search">
                <input type="text" placeholder="Search by genre, mood, artist" />
                <div className='d-md-none d-block filter_icon'><img src={filterIcon} alt='filterIcon' /></div>

                <span className="search_icon">
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <table className="purchase_table">
              <thead className="thheader">
                <tr>
                  <th>Title</th>
                  <th>Genres</th>
                  <th>Mood</th>
                  <th>Artists</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {musicItems.map((purchase, index) => (
                  <tr key={index}>
                    <td>
                      <div className="music-item">
                        <img
                          src={Five_img}
                          style={{cursor:'pointer'}}
                          alt="video"
                          className="music-image"
                          onClick={() => handleImageClick(purchase.videoSrc)}
                        />
                        <img src={videoIcons} alt={videoIcons} className="video_sec" />
                        <div>
                          <p className="music-title">{purchase.title}</p>
                          <p className="music-artist">by Lorem</p>
                        </div>
                      </div>
                    </td>
                    <td className="d-md-inline-block d-none">{purchase.genre}</td>
                    <td className="d-md-inline-block d-none">{purchase.mood}</td>
                    <td className="d-md-inline-block d-none">{purchase.artist}</td>
                    <td
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLike(index)}
            >
              {purchase.liked ? "🖤" : "🤍"}
            </td>
                    <td><button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Buy license</span></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-purchases">

            <div className="Top_header">
              <h2>List of Purchases</h2>
              <div className="iput_search">
                <input type="text" placeholder="Search by genre, mood, artist" className="d-md-block d-none" />
                <span className="search_icon">
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div className="no-purchases-content">
              <h3>No purchase yet</h3>
              <p>Browse through our large section of royalty-free music</p>
              <button className="explore-button">Explore more</button>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="player d-none">
          <div className="play_botto">
            <div className="left_contentfooter">
              <button onClick={handlePlayPause} className="d-md-block d-none">
                <img src={PreTrack} alt="PreTrack" />
              </button>
              <audio ref={audioRef} src={musicItems[currentTrack].audio}></audio>
              <span className="play_btn"><img src={VideoIcon} alt="VideoIcon" /></span>
              <button onClick={handleNext} className="d-md-block d-none"><img src={nextTrack} alt="nextTrack" /></button>
              <h3>{musicItems[currentTrack].title}<span>by Lorem</span></h3>
            </div>
            <div className="right_footer">
              <div className="icons_right">
                <img src={QullSound} alt="QullSound" />
                <img src={SolarLink} alt="SolarLink" />
                <img src={HearIcon} alt="SolarLink" />
              </div>
              <button className="btn_One"><img src={DwnloadBtn} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Download</span></button>
              <button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Buy license</span></button>
            </div>
          </div>
        </div>
      </div>


      {showVideoPlayer && (
        <div className="video-player-overlay">
          <div className="video-player">
            <button className="close-button" onClick={handleCloseVideoPlayer}>X</button>
            <video controls src={videoSrc} className="video-element"></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Musictab;
