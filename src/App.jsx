import { useState, useEffect, useRef } from "react";
import "./App.css";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function App() {
  const [loading, setLoading] = useState(true);

  // Section refs
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
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
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (ref) => {
    const offset = 56;
    const topPos = ref.current.offsetTop - offset;

    window.scrollTo({
      top: topPos,
      behavior: "smooth",
    });
  };

  return loading ? (
    <LoadingAnimation />
  ) : (
    <div className="dark:bg-black">
      <NavBar
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      <div ref={aboutRef}>
        <About dark={dark} onContactClick={() => scrollTo(contactRef)} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
      <div className="h-12 w-fit px-2.5 flex justify-between items-center z-50 fixed left-1/2 right-1/2 -translate-x-1/2 bottom-3 rounded-3xl bg-blue-950 border-blue-700 shadow-lg shadow-blue-950 dark:shadow-orange-300 transition-all">
        <div
          title={`${dark == false ? "Dark" : "Light"}`}
          onClick={() => darkmode()}
          className={`cursor-pointer ${scrolled ? "mx-2" : "mx-0"}`}
        >
          {dark ? (
            <IoSunny
              className="text-white hover:fill-[url(#Gradient)] transition-all duration-300 hover:scale-110 sm:fill-[url(#Gradient)] "
              size={30}
            />
          ) : (
            <IoMoon
              className="text-white hover:fill-[url(#Gradient)] transition-all duration-300 hover:scale-110 sm:fill-[url(#Gradient)] "
              size={30}
            />
          )}
        </div>
        <div
          className={`transition-all duration-300 ${
            scrolled ? "bg-slate-500 h-5 mx-2 w-[1px]" : "h-0 w-0 mx-0"
          }`}
        ></div>
        <RiExchangeFundsLine
          title="Version Toggle"
          onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          className={`transition-all duration-300 ${
            scrolled
              ? "h-8 w-8 text-white cursor-pointer hover:fill-[url(#Gradient)] duration-300 hover:scale-110 sm:fill-[url(#Gradient)] "
              : "h-0 w-0"
          }`}
        />
        <div
          className={`transition-all duration-300 ${
            scrolled ? "bg-slate-500 h-5 mx-2 w-[1px]" : "h-0 w-0 mx-0"
          }`}
        ></div>
        <MdOutlineKeyboardDoubleArrowUp
          title="Scroll-to-top"
          onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          className={`transition-all duration-300 ${
            scrolled
              ? "h-8 w-8 text-white animate-pulse cursor-pointer hover:fill-[url(#Gradient)] transition-transform duration-300 hover:scale-110 hover:-translate-y-1 sm:fill-[url(#Gradient)] "
              : "h-0 w-0"
          }`}
        />
      </div>
    </div>
  );
}

export default App;
