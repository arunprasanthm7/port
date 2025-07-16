import { useState, useEffect, useRef } from "react";
import "./App.css";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [loading, setLoading] = useState(true);

  // Section refs
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
        <About onContactClick={() => scrollTo(contactRef)} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
