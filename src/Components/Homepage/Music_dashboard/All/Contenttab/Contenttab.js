// import React from 'react';
// import './contenttab.css';

// const Contenttab = () => {
//   const musicItems = [
//     {
//       title: "Lorem ipsum dolor sit",
//       genre: "Lorem ipsum do",
//       mood: "Lorem ipsum do",
//       category: "Music",
//       liked: true,
//     },
//     {
//       title: "Lorem ipsum dolor sit",
//       genre: "Lorem ipsum do",
//       mood: "Lorem ipsum do",
//       category: "content",
//       liked: false,
//     },
//     // Add more items as needed
//   ];

//   return (
//     <div className="music-list container">
//       <div className="header">
//         <div>
//           <button className="back-button">←</button>
//           <h2>AR Rahman</h2>
//         </div>



//         <div>
//           <input
//             type="text"
//             placeholder="Search by artist"
//             className="search-input"
//           />
//         </div>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Genres</th>
//             <th>Mood</th>
//             <th>Category</th>
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {musicItems.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <div className="music-item">
//                   <button className="play-button">▶</button>
//                   <div>
//                     <p className="music-title">{item.title}</p>
//                     <p className="music-artist">by Lorem</p>
//                   </div>
//                 </div>
//               </td>
//               <td>{item.genre}</td>
//               <td>{item.mood}</td>
//               <td>
//                 {item.category === "Music" ? '🎵 Music' : '📺 content'}
//               </td>
//               <td>
//                 <button className="like-button">
//                   {item.liked ? '🖤' : '♡'}
//                 </button>
//               </td>
//               <td>
//                 <button className="buy-button">Buy licence</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Contenttab;


import React, { useRef, useState } from "react";
import './contenttab.css';
import { IoIosMusicalNotes } from "react-icons/io";
import nextTrack from "../../../../../assets/nextbtn.svg"
import PreTrack from "../../../../../assets/prebtn.svg";
import VideoIcon from "../../../../../assets/video_icon.svg";
import { IoVideocamOutline } from "react-icons/io5";
import HearIcon from "../../../../../assets/heart.svg";
import QullSound from "../../../../../assets/quill_sound.svg";
import SolarLink from "../../../../../assets/solar_link-bold.svg";
import filterIcon from "../../../../../assets/filter.png";
import cartFooter from "../../../../../assets/cart_foter.png";



const Contenttab = () => {
  const musicItems = [
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: true,
    },
    {
      title: "Lorem ipsum dolor sit",
      genre: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artist: "Lorem ipsum do",
      liked: false,
    },
    // Add more items as needed
  ];
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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
  return (
    <div>


      <div className="purchases-list1">
        {musicItems.length > 0 ? (
          <div >
            <div className="Top_header"><h2>List of Content</h2>
              <div className="iput_search">
                <div className='d-md-none d-block filter_icon'><img src={filterIcon} alt='filterIcon' /></div>

                <input type="text" placeholder="Search by genre, mood, artist" />
                <span className="search_icon"><button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button></span>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {musicItems.map((purchase, index) => (
                  <tr key={index}>
                    <td> <span className="play_btn p-2"><img src={VideoIcon} alt="VideoIcon" /></span>{purchase.title}</td>
                    <td className="d-md-inline-block d-none">{purchase.genre}</td>
                    <td className="d-md-inline-block d-none">{purchase.mood}</td>
                    <td className="d-md-inline-block d-none">{purchase.artist}</td>
                    <td>
                      {purchase.category === "Music" ? (

                        <span>
                          <IoIosMusicalNotes /> Music
                        </span>
                      ) : (
                        <span>
                          <IoVideocamOutline /> content
                        </span>
                      )}
                    </td>
                    <td>

                      {purchase.liked ? '🖤' : '♡'}

                    </td>
                    {/* <td><img src={HearIcon} alt="SolarLink" /></td> */}
                    <td><button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Buy license</span></button></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ) : (
          <div className="no-purchases">
            <h2>List of Purchases</h2>
            <div className="no-purchases-content">
              <p>No purchase yet</p>
              <p>Browse through our large section of royalty-free music</p>
              <button className="explore-button">Explore more</button>
            </div>
          </div>
        )}




      </div >




    </div>

  );
};

export default Contenttab;
