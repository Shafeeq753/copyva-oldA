import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import type { ReactTabsFunctionComponent, TabProps } from "react-tabs";
// import "./tabs.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "../musicsec.css"
import Musictab from "./Musictab/musictab";

import Contenttab from "./Contenttab/Contenttab";
import Artisttab from "./Artisttab/Artisttab";
import Alltab from "./Alltab/Alltab";
import Filter from "./Filter";
// import TabsComponent from './TabsComponent';


const TabsComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const handler = () => {
    navigate("/viewall");
  };
  const [activeTabs, setActiveTab] = useState('All');
  return (
    <div>

      {/* <TabList classID="tab_list1" style={{ boxShadow: "0 10px 6px rgba(0, 0, 0, 0.1)" }}>
          <Tab>
            <h4>

              All
            </h4>
          </Tab>
          <Tab>
            <h4>

              Music
            </h4>
          </Tab>
          <Tab>
            <h4>

              Content
            </h4>
          </Tab>
          <Tab>
            <h4>
              Artist
            </h4>
          </Tab>

        </TabList> */}


      <div className="user-component">
        <div className="tab-content">
          <div className="tabs">
            <button onClick={() => setActiveTab("All")}> All</button>
            <button onClick={() => setActiveTab("Music")}> Music</button>
            <button onClick={() => setActiveTab("Content")}> Content</button>
            <button onClick={() => setActiveTab("Artist")}>  Artist</button>
          </div>
          <div>
          <div className="main_pageWidth">
            <div className="d-md-block d-none">
              <Filter />
            </div>

            <div >
              {activeTabs === "All" && <Alltab />}
              {activeTabs === "Music" && <Musictab />}
              {activeTabs === "Content" && <Contenttab />}
              {activeTabs === "Artist" && <Artisttab />}

            </div>
</div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default TabsComponent;

