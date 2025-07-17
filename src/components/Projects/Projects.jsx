import { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import api from "../../api/api";

const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    api
      .get("projects.json")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  console.log("projects", projects);
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-self-center w-[900px] md:w-[calc(100%-20px)] border dark:border-blue-950 dark:bg-black px-5 pt-7 pb-20">
        <h4 className="text-2xl font-bold dark:text-white">Projects</h4>
        {projects?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 w-[500px] sm:w-full p-5 border dark:border-blue-950 dark:bg-slate-950 dark:text-white hover:border-slate-300 hover:shadow-xl rounded-2xl hover:scale-105 transition-all duration-300 group/card"
          >
            <div className="p-5 bg-gradient-to-b from-[#909090] to-[#b1b1b1] rounded-2xl bg-[#909090]">
              <img
                src={item.image}
                alt={`${item.title}-thumbnail`} title={`${item.title}-thumbnail`}
                className="border-[6px] border-[#b7b7b7] filter grayscale group-hover/card:grayscale-0 transition rounded-2xl bg-white w-full h-72 sm:h-60"
              />
            </div>
            <div className="font-semibold text-2xl">{item.title}</div>
            <p className="text-[#676767] dark:text-slate-400">{item.description}</p>
            <div className="flex justify-center gap-2">
              <a
                href={item.demoLink}
                target="_blank"
                className="w-fit p-2 hover:bg-[#e2e2e2] hover:pr-6 transition-all duration-300 flex gap-2 items-center rounded bg-[#f4f4f4] dark:bg-blue-900 group/button"
              >
                <span>View Project</span>
                <RiArrowRightSLine className="group-hover/button:translate-x-4 transition-transform" />
              </a>
              <a
                href={item.githubLink}
                target="_blank"
                className="w-fit p-2 hover:bg-[#e2e2e2] hover:pr-6 transition-all duration-300 flex gap-2 items-center rounded bg-[#f4f4f4] dark:bg-blue-900 group/button"
              >
                <span>Github Repo</span>
                <RiArrowRightSLine className="group-hover/button:translate-x-4 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
