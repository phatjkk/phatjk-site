import "./App.css";
import ProfileUI from "./ProfileUI";
import { useState, useRef } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Donate from "./pages/Donate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import PlayingGif from "./playing.gif";
import MusicPlayer from "./MusicPlayer";
import bai1 from "./music/1.mp3";
import Marquee from 'react-fast-marquee';
import Snowfall from "react-snowfall";
const navBarItem = ["Home", "Project", "Donate"];

function App() {
  const [navChoose, ChangeNav] = useState("Home");
  const [playingStatus, ChangePlayingST] = useState(false);
  const musicPlayer = useRef();
  const handleLoadedData = () => {
    if (playingStatus) {
      musicPlayer.current.play();
    }
  };
  return (
    <div className=" bg-[url('/sunset.jpg')] bg-origin-content bg-cover flex items-center justify-center sm:h-fit lg:h-screen">
      <Snowfall snowflakeCount={10} />
      <div className="md:flex h-4/5 w-4/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30">
        {/* profile */}
        <ProfileUI />
        {/* main view */}
        <div className="mt-5 mx-auto h-[90%] md:w-[67%] sm:w-[90%]  p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30">
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
              <Marquee className="" gradient={false}>| Cứ chill thôi - Chillies ft Suni Hạ Linh |</Marquee>
            </button>
          </div>
          <div className="text-white font-mono">
            <div className="flex justify-center">
              {navBarItem.map((e, i) =>
                e === navChoose ? (
                  <button
                    key={i}
                    className="p-2 mr-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:border-opacity-60 "
                  >
                    {e}
                  </button>
                ) : (
                  <button
                    key={i}
                    onClick={() => {
                      ChangeNav(e);
                    }}
                    className="p-2 mr-2 hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-5 border border-transparent hover:border-gray-100 hover:border-opacity-30  "
                  >
                    {e}
                  </button>
                )
              )}
            </div>
            {/* content view */}
            {navChoose === "Home" ? (
              <Home />
            ) : navChoose === "Blog" ? (
              <Blog />
            ) : navChoose === "Project" ? (
              <Project />
            ) : navChoose === "Donate" ? (
              <Donate />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
