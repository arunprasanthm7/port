import { useEffect, useState, useRef } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import api from "../../api/api";

const Projects = () => {
  const [projects, setProjects] = useState();
  const cardRefs = useRef([]); // store each card's DOM reference
  const [visibleCards, setVisibleCards] = useState([]);
  useEffect(() => {
    api
      .get("projects.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const updated = [...visibleCards];
      entries.forEach((entry) => {
        const index = +entry.target.getAttribute("data-index");

        // Mark as visible or not
        updated[index] = true
      });
      setVisibleCards(updated);
    },
    { threshold: [0.7] }
  );

  cardRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => observer.disconnect();
}, [projects]);

  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-self-center w-[900px] md:w-[calc(100%-20px)] border dark:border-blue-950 dark:bg-black px-5 pt-7 pb-20">
        <h4 className="text-2xl font-bold dark:text-white">Projects</h4>
        {projects?.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`flex flex-col gap-3 w-[500px] sm:w-full p-5 border dark:border-blue-950 dark:bg-slate-950 dark:text-white rounded-2xl transition-all group/card
              ${
                visibleCards[index]
                  ? "opacity-100 scale-105 shadow-xl border-slate-300 duration-400"
                  : "opacity-50 scale-90 duration-400"
              }
              `}
          >
            <img
              src={item.image}
              loading="lazy"
              alt={`${item.title}-thumbnail`}
              title={`${item.title}-thumbnail`}
              className={`border dark:border-blue-950 filter transition rounded-2xl bg-white w-full h-72 sm:h-60
                 ${
                visibleCards[index]
                  ? "grayscale-0"
                  : "grayscale"
              }
                `}
            />
            <div className="font-semibold text-2xl">{item.title}</div>
            <p className="text-[#676767] dark:text-slate-400">
              {item.description}
            </p>
            <div className="flex items-center sm:justify-center flex-wrap gap-2">
              {item.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 border border-slate-300 rounded-lg dark:border-blue-950"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex xm:flex-col xm:gap-3 xm:items-center justify-center gap-2">
              <a
                href={item.demoLink}
                target="_blank"
                className="relative w-fit overflow-hidden py-2 px-6 flex justify-center items-center hover:bg-[#e2e2e2] transition-all duration-200 rounded bg-[#f4f4f4] dark:bg-blue-900 group/button"
              >
                <span className="relative group-hover/button:-translate-x-3 transition-all duration-200">
                  View Project
                </span>
                <RiArrowRightSLine className="absolute -right-5 group-hover/button:right-2 transition-all duration-200" />
              </a>
              <a
                href={item.githubLink}
                target="_blank"
                className="relative w-fit overflow-hidden py-2 px-6 flex justify-center items-center hover:bg-[#e2e2e2] transition-all duration-200 rounded bg-[#f4f4f4] dark:bg-blue-900 group/button"
              >
                <span className="relative group-hover/button:-translate-x-3 transition-all duration-200">
                  Github Repo
                </span>
                <RiArrowRightSLine className="absolute -right-5 group-hover/button:right-2 transition-all duration-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
