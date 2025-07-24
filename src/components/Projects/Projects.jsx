import { useEffect, useState, useRef } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { PiStarFourDuotone } from "react-icons/pi";
import api from "../../api/api";

const Projects = () => {
  const headings = [
    "LAUNCHES",
    "BUILDS",
    "DEV JOURNAL",
    "PROJECTS",
    "DEPLOYMENTS",
    "SAMPLES",
    "OUTPUT",
    "CONTRIBUTIONS",
  ];
  const [projects, setProjects] = useState();
  useEffect(() => {
    api
      .get("projects.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-self-center w-[900px] md:w-[calc(100%-20px)] border dark:border-blue-950 dark:bg-black px-5 pt-10 pb-20">
        {/* <h4 className="text-2xl font-bold dark:text-white">Projects</h4> */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r dark:from-black from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l dark:from-black from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap gap-3 animate-marquee w-[200%]">
            {[...headings, ...headings]?.map((heading, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-nowrap px-2 dark:text-white font-bold text-3xl sm:text-2xl">
                    {heading}
                  </div>
                  <PiStarFourDuotone size={24} className="dark:text-white" />
                </div>
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex whitespace-nowrap gap-3 animate-marqueeReverse w-[200%] opacity-10"
          >
            {[...headings, ...headings]?.map((heading, index) => (
              <div key={`Ghost-${index}`}>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-nowrap px-2 dark:text-white font-bold text-3xl sm:text-2xl">
                    {heading}
                  </div>
                  <PiStarFourDuotone size={24} className="dark:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {projects?.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden flex flex-col justify-center gap-5 w-[350px] h-[280px] xm:w-full xm:h-fit p-5 border border-gray-300 dark:border-blue-950 dark:bg-slate-950 dark:text-white rounded-2xl transition-all duration-300 group/card
           hover:shadow-lg hover:scale-105
              `}
            >
              <img
                src={item.image}
                loading="lazy"
                alt={`${item.title}-thumbnail`}
                title={`${item.title}-thumbnail`}
                className="absolute -right-14 -top-14 group-hover/card:-right-0.5 group-hover/card:-top-0.5 border dark:border-blue-950 filter transition-all duration-300 ease-in-out rounded-md bg-white w-32 h-28"
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
                  <span className=" relative group-hover/button:-translate-x-3 transition-all duration-200">
                    View Project
                  </span>
                  <RiArrowRightSLine className="absolute -right-5 group-hover/button:right-2 transition-all duration-200" />
                </a>
                <a
                  href={item.githubLink}
                  target="_blank"
                  className="relative w-fit overflow-hidden py-2 px-6 flex justify-center items-center hover:bg-[#e2e2e2] transition-all duration-200 rounded bg-[#f4f4f4] dark:bg-blue-900 group/button"
                >
                  <span className=" relative group-hover/button:-translate-x-3 transition-all duration-200">
                    Github Repo
                  </span>
                  <RiArrowRightSLine className="absolute -right-5 group-hover/button:right-2 transition-all duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
