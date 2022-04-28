import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const information = {
  facebook: "https://www.facebook.com/phatjk/",
  linkedin: "https://www.linkedin.com/in/phatjk/",
  youtube: "https://www.youtube.com/Autoit%20Tutorial%20Return",
  github: "https://github.com/phatjkk",
};
function ProfileUI() {
  return (
    <div className="mt-3 ml-[5%] md:ml-5 md:mt-5 h-[90%] w-[90%] lg:w-[25%] sm:w-[90%]  p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30">
      <div className="rounded-full bg-[url('/avatar.jpg')] mx-auto  md:h-[10em] md:w-[10em] h-[5em] w-[5em] bg-cover"></div>
      <h2 className="text-white mt-4 font-mono font-semibold text-xl text-center">
        Nguyen Thanh Phat
      </h2>
      <h4 className="text-gray-200 mt-1 font-mono font-thin text-center">
        (phatjk)
      </h4>
      <button
        onClick={() => window.open(information.facebook, "_blank").focus()}
        className="mt-2 p-1 w-full text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20"
      >
        <FontAwesomeIcon className="mr-2" icon={faFacebookSquare} />
        Facebook
      </button>
      <button
      onClick={() => window.open(information.linkedin, "_blank").focus()}
       className="mt-2 p-1 w-full text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20">
        <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
        LinkedIn
      </button>
      <button
      onClick={() => window.open(information.youtube, "_blank").focus()} className="mt-2 p-1 w-full text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20">
        <FontAwesomeIcon className="mr-2" icon={faYoutube} />
        Youtube
      </button>
      <button
      onClick={() => window.open(information.github, "_blank").focus()}
       className="mt-2 p-1 w-full text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 border-opacity-30 hover:bg-opacity-20">
        <FontAwesomeIcon className="mr-2" icon={faGithub} />
        Github
      </button>
    </div>
  );
}
export default ProfileUI;
