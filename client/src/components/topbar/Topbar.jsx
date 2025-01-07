import { useState } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications,Brightness3TwoTone,Brightness7TwoTone} from "@material-ui/icons";
import { useEffect } from "react";

import logo from "../../images/logoDark.png"
import lightLogo from "../../images/logoLight.png"
export default function Topbar() {
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    // Apply theme to the document's root element
    document.body.classList.toggle('dark', theme === 'dark'); 
  }, [theme]);

  const handleTheme=()=>{
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <div className="topbarContainer">
      {/* left side of topbar */}
      <div className="topbarLeft">
        <span className="logo"><img src={theme==="light"?logo:lightLogo} alt="dark-logo" /></span>
      </div>

      {/* Center of topbar */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput"/>
        </div>
      </div>

      {/* right side of topbar */}
      <div className="topbarRight">
          <div className="topbarLinks">
            <span onClick={handleTheme} className="toggleTheme topbarLink">{theme==="light"?
              <Brightness3TwoTone className="toggleIcon"/>:<Brightness7TwoTone className="toggleIcon"/>
            }</span>
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
