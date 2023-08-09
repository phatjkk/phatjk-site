
import Tippy from "@tippyjs/react";
import "slick-carousel/slick/slick.css";

import "tippy.js/dist/tippy.css"; // optional
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faAssistiveListeningSystems,
  faStore,
  faFilm,
  faCartPlus,
  faComments
  
} from "@fortawesome/free-solid-svg-icons";
import {
  faSearchengin,
  faGalacticRepublic
} from "@fortawesome/free-brands-svg-icons";
const projectsJson = [
  {
    name: "DragonTranslate",
    icon: faLanguage,
    link: "https://github.com/phatjkk/DragonTranslator",
    detail: "Translate application on Windows built with C# WPF",
  },
  {
    name: "DragonSpeak",
    icon: faAssistiveListeningSystems,
    link: "https://github.com/phatjkk/SpeakIt_Vietnamese_TTS",
    detail:
      "Vietnamese Text-to-Speech application on Windows built with C# WPF",
  },
  {
    name: "CozaStore",
    icon: faStore,
    link: "https://github.com/phatjkk/coza-store-e-commerce",
    detail: "An e-commerce website built with Microsoft ASP.NET MVC (Momo Payment)",
  },
  {
    name: "MoviesSite",
    icon: faFilm,
    link: "https://github.com/phatjkk/torrent-stream-site",
    detail:
      "A ReactJS website to Watch Torrent Movies directly on your browser",
  },
  {
    name: "DragonOCR",
    icon: faSearchengin,
    link: "https://github.com/phatjkk/DragonOCR",
    detail:
      "An Windows application to convert Image-to-Text using OCR",
  },
  {
    name: "TarotGame",
    icon: faGalacticRepublic,
    link: "https://github.com/phatjkk/tarot-vietnamese-project",
    detail:
      "Website bói bài Tarot (Việt Hoá)",
  },
  {
    name: "ErialShop",
    icon: faCartPlus,
    link: "https://erialshop.com/",
    detail:
      "Website bán hàng trang sức thủ công (Wordpress)",
  }
  ,
  {
    name: "LoraChatbot",
    icon: faComments,
    link: "https://github.com/protonx-tf-06-projects/lora-experiment-1",
    detail:
      "Finetuning LLM for Question-Answering tasks (Vietnamese-English)",
  }
];
function Project() {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 mt-12">
        {projectsJson.map((project, i) => (
          <Tippy
            content={project.detail}
            placement="bottom"
            interactive={true}
            animation="fade"
            interactiveBorder={20}
            inertia={true}
            delay={50}
          >
            <button
              key={i}
              onClick={() => window.open(project.link, "_blank").focus()}
              className=" relative p-1 shadow-lg md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw] rounded-xl bg-indigo-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 hover:bg-opacity-10 border border-gray-100 border-opacity-30 hover:border-opacity-60"
            >
              <FontAwesomeIcon className="text-5xl" icon={project.icon} />
              <h3 className="mt-2 text-sm font-semibold">{project.name}</h3>
            </button>
          </Tippy>
        ))}
      </div>
    </div>
  );
}
export default Project;
