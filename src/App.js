import "./App.css";
import ProfileUI from "./ProfileUI";
import { useState, useRef, useEffect } from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Donate from "./pages/Donate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import PlayingGif from "./playing.gif";
import bai1 from "./music/2.mp3";
import Marquee from 'react-fast-marquee';
import Snowfall from "react-snowfall";

import { useLocation,useNavigate } from 'react-router-dom'; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate ();
  const navBarItem = {"Home":"/", "Project":"/project", "Donate":"/donate"};
  const [navChoose, ChangeNav] = useState("Home");
  const [playingStatus, ChangePlayingST] = useState(false);
  const musicPlayer = useRef();
  const handleLoadedData = () => {
    if (playingStatus) {
      musicPlayer.current.play();
    }
  };
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  useEffect(() => {
    ChangeNav(getKeyByValue(navBarItem,location.pathname));
  } , []);
  return (
    <div className="backdrop-blur-lg bg-[url('/image.jpg')] bg-origin-content bg-cover flex items-center justify-center sm:h-fit lg:h-screen">
      
      <Snowfall snowflakeCount={10} />
      <div className="md:flex h-4/5 w-4/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30">
        {/* profile */}
        <ProfileUI />
        {/* main view */}
        <div className="mt-5 mx-auto h-[93%] md:w-[67%] sm:w-[90%]  p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30">
          {/* menu */}
          {/*absolute z-20 right-0 */}
          <div className="flex justify-center z-20 top-5 mb-2 sm:absolute sm:right-0 sm:top-2">
            <audio
              ref={musicPlayer}
              src={bai1}
              onLoadedData={handleLoadedData}
            />
            <button
              onClick={() => {
                ChangePlayingST(!playingStatus);
                !playingStatus
                  ? musicPlayer.current.play()
                  : musicPlayer.current.pause();
              }}
              // invisible sm:visible
              className="flex group w-[15em] sm:w-[7em] text-white font-mono p-2 mr-2 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:border-opacity-60 "
            >
              {playingStatus ? (
                  <img
                    className="h-[1.5em] w-[1.5em] mr-1"
                    src={PlayingGif}
                    alt="loading..."
                  />
              ) : (
                <div className="flex">
                <FontAwesomeIcon className="mt-1 ml-1 mr-1" icon={faMusic} />
                {/* <Marquee text="Cứ chill thôi - Chilles" className="hidden group-hover:block"/> */}
                </div>
              )}
              <Marquee className="" gradient={false}>| seasons - wave to earth |</Marquee>
            </button>
          </div>
          <div className="text-white font-mono">
            <div className="flex justify-center">
              {
                Object.entries(navBarItem)
                .map( ([key, value]) => 
                  key === navChoose? (
                    <button
                      key={key}
                      className="p-2 mr-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:border-opacity-60 "
                    >
                      {key}
                    </button>
                  ) : (
                    <button
                      key={key}
                      onClick={() => {
                        navigate(value);
                        ChangeNav(key);
                      }}
                      className="p-2 mr-2 hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-5 border border-transparent hover:border-gray-100 hover:border-opacity-30  "
                    >
                      {key}
                    </button>
                  )
                
                )
                
              }
            </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="project" element={<Project />} />
          <Route path="donate" element={<Donate />} />
        </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
