import React from 'react'
// import Music_img from "../../../../assets/Frame 11 (1).png";
import First_tab from "../../../../../assets/Frame 29.png";
import Sec_tab from "../../../../../assets/Frame 30.png";
import Third_tab from "../../../../../assets/Frame 31.png";
import Fourth_tab from "../../../../../assets/Frame 33.png";
import Five_img from "../../../../../assets/Frame 34.png";
import Six_img from "../../../../../assets/Frame 35.png";
import filterIcon from "../../../../../assets/filter.png";
// import Content_img from "../../../../assets/Frame 11 (2).png";
// import Artist_img from "../../../../assets/Frame 11 (3).png";
import "./alltab.css"

const Alltab = () => {
    return (
        <div className="purchases-list1">
            <div className="Top_header" style={{ borderBottom: "none" }}><h2>Explore</h2>
                <div className="iput_search">
            <div className='d-md-none d-block filter_icon'><img src={filterIcon} alt='filterIcon' /></div>

                    <input type="text" placeholder="Search by genre, mood, artist" />
                    <span className="search_icon"><button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button></span>
                </div>
            </div>
            <div class="header_alltab">
                <h1>Music</h1>
                <a href="#" class="explore-link">Explore all</a>
            </div>



            <div className="Tab_content" style={{ padding: "20px" }}>
                <div>
                    <img src={First_tab} alt="" />
                </div>
                <div>
                    <img src={Sec_tab} alt="" />
                </div>
                <div>
                    <img src={Third_tab} alt="" />
                </div>
                <div>
                    <img src={Fourth_tab} alt="" />
                </div>
                <div>
                    <img src={Five_img} alt="" />
                </div>
                <div>
                    <img src={Six_img} alt="" />
                </div>
            </div>
            <div class="header_alltab">
                <h1>Content</h1>
                <a href="#" class="explore-link">Explore all</a>
            </div>
            <div className="Tab_content" style={{ padding: "20px" }}>
                <div>
                    <img src={First_tab} alt="" />
                </div>
                <div>
                    <img src={Sec_tab} alt="" />
                </div>
                <div>
                    <img src={Third_tab} alt="" />
                </div>
                <div>
                    <img src={Fourth_tab} alt="" />
                </div>
                <div>
                    <img src={Five_img} alt="" />
                </div>
                <div>
                    <img src={Six_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Alltab