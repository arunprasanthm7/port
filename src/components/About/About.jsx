import { GoDotFill } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import CV from "../../assets/CV-thumbnail.webp";
import file from "../../assets/Arun_Prasanth_M_Resume.pdf";
import heroImage from "../../assets/heroImage.webp";
import batman from "../../assets/batman.webp";
import batmanBlack from "../../assets/batman-logo.webp";
import batmanWhite from "../../assets/batman-logo (2).webp";
import flying from "../../assets/flying.webp";
import { FaJs } from "react-icons/fa";
import { IoLogoBitbucket, IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { SiPostman, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypeorm } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

const About = ({ onContactClick, dark }) => {
  const wrkExp = [
    {
      role: "Full Stack Developer",
      start: "Sep 2025",
      end: "Present",
      company: "Tata Consultancy Services via (SGS), Bangalore, India.",
    },
    {
      role: "Full Stack Developer",
      start: "Nov 2023",
      end: "Apr 2025",
      company: "SaveData Infotech Solutions, Coimbatore, India.",
    },
    {
      role: "Financial Processor",
      start: "Jun 2019",
      end: "Jun 2022",
      company: "Deccan i Services Pvt Lmtd, Coimbatore, India.",
    },
  ];
  const techStack = [
    {
      icon: IoLogoHtml5,
      name: "HTML5",
      theme:
        "text-slate sm:text-orange-500 sm:dark:sm:text-orange-500 hover:text-orange-500 dark:hover:text-orange-500",
    },
    {
      icon: IoLogoCss3,
      name: "CSS3",
      theme:
        "text-slate sm:text-blue-500 sm:dark:sm:text-blue-500 hover:text-blue-500 dark:hover:text-blue-500",
    },
    {
      icon: BsFiletypeScss,
      name: "SCSS",
      theme:
        "text-slate sm:text-orange-500 sm:dark:sm:text-orange-500 hover:text-orange-500 dark:hover:text-blue-300",
    },
    {
      icon: FaJs,
      name: "JavaScript",
      theme:
        "text-slate sm:text-yellow-400 sm:dark:sm:text-yellow-400 hover:text-yellow-400 dark:hover:text-yellow-400",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      theme:
        "text-slate sm:text-blue-400 sm:dark:sm:text-blue-400 hover:text-blue-400 dark:hover:text-blue-400",
    },
    {
      icon: FaReact,
      name: "React",
      theme:
        "text-slate sm:text-[#087ea4] sm:dark:sm:text-[#087ea4] hover:text-[#087ea4] dark:hover:text-[#087ea4]",
    },
    {
      icon: SiRedux,
      name: "Redux",
      theme:
        "text-slate sm:text-purple-500 sm:dark:sm:text-purple-500 hover:text-purple-500 dark:hover:text-purple-500",
    },
    {
      icon: SiTailwindcss,
      name: "TailwindCSS",
      theme:
        "text-slate sm:text-blue-500 sm:dark:sm:text-blue-500 hover:text-blue-500 dark:hover:text-blue-500",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      theme:
        "text-slate sm:text-blue-500 sm:dark:sm:text-blue-500 hover:text-green-500 dark:hover:text-green-500",
    },
    {
      icon: SiExpress,
      name: "Express",
      theme:
        "text-slate sm:text-black sm:dark:sm:text-black hover:text-black dark:hover:text-black",
    },
    {
      icon: DiMsqlServer,
      name: "MS SQL Server",
      theme:
        "text-slate sm:text-red-500 sm:dark:sm:text-red-500 hover:text-red-500 dark:hover:text-red-500",
    },
    {
      icon: SiTypeorm,
      name: "TypeORM",
      theme:
        "text-slate sm:text-[#f73] sm:dark:sm:text-[#f73] hover:text-[#f73] dark:hover:text-[#f73]",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      theme:
        "text-slate sm:text-green-500 sm:dark:sm:text-green-500 hover:text-green-500 dark:hover:text-green-500",
    },
    {
      icon: SiPostman,
      name: "Postman",
      theme:
        "text-slate sm:text-orange-500 sm:dark:sm:text-orange-600 hover:text-orange-600 dark:hover:text-orange-600",
    },
    {
      icon: FaGitAlt,
      name: "Git",
      theme:
        "text-slate sm:text-orange-500 sm:dark:sm:text-orange-500 hover:text-orange-500 dark:hover:text-orange-500",
    },
    {
      icon: SiGithub,
      name: "GitHub",
      theme:
        "text-slate sm:text-black sm:dark:sm:text-black hover:text-black dark:hover:text-black",
    },
    {
      icon: IoLogoBitbucket,
      name: "Bitbucket",
      theme:
        "text-slate sm:text-black sm:dark:sm:text-blue-500 hover:text-blue-500 dark:hover:text-blue-500",
    },
    {
      icon: IoLogoVercel,
      name: "Vercel",
      theme:
        "text-slate sm:text-black sm:dark:sm:text-black hover:text-black dark:hover:text-black",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      theme:
        "text-slate sm:text-[#32e6e2] sm:dark:sm:text-[#32e6e2] hover:text-[#32e6e2] dark:hover:text-[#32e6e2]",
    },
  ];

  const getExperience = (start, end) => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? new Date() : new Date(end);

    const totalMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) +
      1;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const yr = years ? `${years} yr${years > 1 ? "s" : ""}` : "";
    const mo = months ? `${months} mo${months > 1 ? "s" : ""}` : "";

    return `${yr} ${mo}`.trim();
  };

  return (
    <>
      {/* hero-section */}
      <div className="flex flex-col justify-self-center w-[900px] md:w-[calc(100%-20px)] border py-10 relative overflow-hidden dark:border-blue-950 dark:bg-neutral-900">
        <div className="flex justify-center md:px-5">
          <div className="flex flex-col gap-2 xm:gap-3">
            <img
              src={heroImage}
              alt="hero-image"
              title="hero-image"
              className="w-20 h-24 rounded border-2 -rotate-6 object-cover shadow-2xl shadow-stone-600 dark:shadow-violet-500 hover:scale-110 transition-all"
            />
            <div className="flex flex-col text-4xl sm:text-2xl font-bold dark:text-white">
              <h1 className="flex items-end">
                Hey, I’m
                <span className="pl-3 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                  Arun Prasanth
                </span>
                <img src={batman} className="h-10 w-10 -translate-x-1" />
              </h1>
              <h2>Full Stack Developer</h2>
            </div>
            <div className="text-gray-500 dark:text-gray-100">
              Design-driven creator with a passion for building things that
              matter.
            </div>
            <div className="flex gap-2 xm:gap-5 xm:flex-col xm:items-center">
              <div className="flex w-fit gap-3 items-center py-2 px-4 rounded-xl bg-green-100 font-semibold text-green-700">
                <span className="relative h-3 w-3">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-300"></span>
                  <GoDotFill
                    className="absolute h-full w-full rounded-full text-green-700"
                    size={14}
                  />
                </span>
                <span className="w-0 flex items-end whitespace-nowrap overflow-hidden border-r-2 border-green-700 animate-typing animation-blink">
                  Available for new project
                  <img className="h-5 w-5" src={flying} />
                </span>
              </div>
              <div onClick={onContactClick} className="relative group">
                <img
                  src={dark ? batmanWhite : batmanBlack}
                  className="absolute h-7 w-7 right-1  sm:-top-4  z-0 transition-all translate-y-0 
                group-hover:animate-dropInAndWobble sm:group-hover:animate-none sm:animate-wobble"
                />
                <div className="flex py-2 px-4 relative rounded-xl bg-gray-100 font-semibold text-gray-700 hover:bg-gray-300 transition-all cursor-pointer z-10">
                  Say Hi
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-32 w-32 rounded-full absolute right-0 sm:top-0 bottom-0 animate-spin blur-3xl" />
      </div>
      {/* About-section */}
      <div className="flex justify-self-center w-[900px] md:flex-col md:w-[calc(100%-20px)] dark:text-white dark:bg-neutral-900 dark:border-blue-950 border-l border-r">
        <div className="flex flex-col gap-5 w-1/2 md:w-full p-5 dark:border-blue-950 border-r md:border-r-0">
          <h2 className="font-semibold">About</h2>
          <div className="flex flex-col gap-4 ">
            <p className="text-2xl font-bold">
              From MVPs to polished products, I’ve helped startups bring their
              ideas to life through design.
            </p>
            <p>
              With 2+ years of hands-on experience in Full Stack Development and
              over 5+ years of professional experience overall, I specialize in
              building responsive, accessible, and visually consistent web
              applications. My work spans a wide range of technologies including
              React, JavaScript, TypeScript, TailwindCSS, NodeJs, ExpressJS,
              TypeORM & MS-SQL — enabling me to deliver interfaces that are not
              only functional but crafted with attention to detail.
            </p>
            <p>
              This journey has equipped me with a strong balance between UI
              design and product development. I approach challenges through a
              design-thinking mindset, ensuring each solution aligns with user
              needs and business goals.
            </p>

            <p>
              Currently based in Bangalore, India, I’m looking for a full-time
              full stack/product development role where I can collaborate
              globally and solve real-world problems through meaningful,
              scalable user experiences.
            </p>
          </div>
          {/* horizontal-line */}
          <div className="m-auto w-4/5 h-[1px] bg-gray-200 dark:bg-slate-800" />
          <h3 className="font-semibold">Work Experience</h3>
          {wrkExp.map((item, index) => (
            <div
              key={`wrkExp-${index}`}
              className="flex sm:flex-col sm:gap-3 items-center md:justify-center"
            >
              <div className="w-52 flex flex-col opacity-50 md:items-center sm:flex-row sm:gap-1 sm:w-fit">
                <div className="font-semibold">
                  {item.start} - {item.end}
                </div>
                <div className="flex items-center">
                  {`( ${getExperience(item.start, item.end)} )`}
                </div>
              </div>
              <div className="flex flex-col gap-1 w-52 items-center sm:w-fit">
                <div className="font-semibold opacity-80">{item.role} at</div>
                <div className="p-1 w-fit border text-sm text-center text-slate-500 border-slate-200 bg-slate-100 dark:bg-slate-700 dark:text-white dark:border-slate-500 rounded">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
          {/* horizontal-line */}
          <div className="m-auto w-4/5 h-[1px] bg-gray-200 dark:bg-slate-800" />
          <h3 className="font-semibold">Tech Stack</h3>
          <div className="grid grid-cols-5 self-center w-fit gap-5 group">
            {techStack.map((item, index) => (
              <div key={index} title={item.name}>
                <item.icon
                  size={50}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                  className={`${item.theme} rounded text-slate-800 dark:text-white border dark:border-blue-950 px-2 hover:scale-125 hover:shadow-2xl sm:shadow-2xl cursor-pointer transition-all duration-300 animate-pulseScale`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 w-1/2 md:w-full">
          <div className="flex flex-col mx-auto gap-5 w-fit sticky top-14">
            <h3 className="font-semibold md:text-center">CV</h3>
            <img
              alt="CV-thumbnail"
              title="CV-thumbnail"
              className="h-96 w-80 rounded border blur-sm"
              src={CV}
            />
            <a
              href={file}
              target="_blank"
              className="group mx-auto flex justify-center items-center gap-2 px-4 py-1 w-fit bg-black dark:bg-slate-700 dark:hover:bg-slate-800 text-white rounded border border-transparent transition-colors hover:bg-gray-700"
            >
              <span className="flex items-center gap-2">
                Take a look <GoDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
