import { useEffect } from "react";
import { useState } from "react";
import { BsCloudSunFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsCloudMoonFill } from "react-icons/bs";

const NavBar = ({ onAboutClick, onProjectsClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const hour = new Date().getHours();
  const isDayTime = hour >= 6 && hour < 18;
  const [dark, setDark] = useState(!isDayTime);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dark]);

  const darkmode = () => {
    setDark((condition) => !condition);
    console.log("dark :", dark);
  };

  return (
    <>
      <div className="flex justify-between justify-self-center w-[900px] md:w-full px-4 py-4 sticky top-0 dark:bg-neutral-900/90 bg-white/70 backdrop-blur-sm z-50">
        <a
          href="/"
          title="Arun Prasanth🚀"
          className="font-medium dark:text-white"
        >
          AP
        </a>
        <ul className="flex space-x-10 text-slate-700 dark:text-white">
          <li>
            <div
              onClick={onAboutClick}
              className=" flex flex-col h-6 overflow-hidden group transition-all cursor-pointer"
            >
              <span className="group-hover:-translate-y-6 transition-all">
                About
              </span>
              <span
                title="Who am I? 🤔"
                className="group-hover:-translate-y-6 transition-all text-gray-400 dark:text-white/70"
              >
                About
              </span>
            </div>
          </li>
          <li>
            <div
              onClick={onProjectsClick}
              className=" flex flex-col h-6 overflow-hidden group transition-all cursor-pointer"
            >
              <span className="group-hover:-translate-y-6 transition-all">
                Projects
              </span>
              <span
                title="Explore my work 🚀"
                className="group-hover:-translate-y-6 transition-all text-gray-400 dark:text-white/70"
              >
                Projects
              </span>
            </div>
          </li>
          <li>
            <div
              onClick={onContactClick}
              className=" flex flex-col h-6 overflow-hidden group transition-all cursor-pointer"
            >
              <span className="group-hover:-translate-y-6 transition-all">
                Contact
              </span>
              <span
                title="Let’s connect! 📬"
                className="group-hover:-translate-y-6 transition-all text-gray-400 dark:text-white/70"
              >
                Contact
              </span>
            </div>
          </li>
        </ul>
      </div>
          <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient
                  id="Gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
            </svg>
      <div className="h-12 w-fit px-2.5 flex justify-between items-center z-50 fixed left-1/2 right-1/2 -translate-x-1/2 bottom-3 rounded-3xl bg-blue-950 border-blue-700 shadow-xl shadow-blue-950 dark:shadow-orange-300 transition-all">
        <div
          title={`${dark == false ? "Dark" : "Light"}`}
          onClick={() => darkmode()}
          className={`cursor-pointer ${scrolled?"mx-2":"mx-0"}`}
        >
          {dark ? (
            <BsCloudSunFill className="text-white hover:fill-[url(#Gradient)] sm:fill-[url(#Gradient)] " size={30} />
          ) : (
            <BsCloudMoonFill className="text-white hover:fill-[url(#Gradient)] sm:fill-[url(#Gradient)] " size={30} />
          )}
        </div>
        <div className={`h-5 mx-2 w-[1px] bg-slate-500 ${ scrolled ?"block":"hidden"}`}></div>
        <IoIosArrowRoundUp
          title="Scroll-to-top"
          onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          className={`transition-all ${
            scrolled
              ? "h-8 w-8 text-white animate-pulse cursor-pointer hover:scale-125 hover:fill-[url(#Gradient)] sm:fill-[url(#Gradient)] "
              : "h-0 w-0"
          }`}
        />
      </div>
    </>
  );
};

export default NavBar;
