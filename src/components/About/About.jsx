import { GoDotFill } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import CV from "../../assets/CV-thumbnail.jpg";
import file from "../../assets/Arun_Prasanth_M_Front-end.pdf";
import heroImage from "../../assets/heroImage.webp";

const About = ({ onContactClick }) => {
  return (
    <>
      {/* hero-section */}
      <div className="flex flex-col justify-self-center w-[900px] md:w-[calc(100%-20px)] border py-10 relative overflow-hidden dark:border-blue-950 dark:bg-neutral-900">
        <div className="flex justify-center md:px-5">
          <div className="flex flex-col gap-2">
            <img
              src={heroImage}
              alt="hero-image" title="hero-image"
              className="w-20 h-24 rounded border-2  border-white -rotate-6 object-cover shadow-2xl hover:scale-110 transition-all"
            />
            <div className="flex flex-col text-4xl sm:text-2xl font-bold dark:text-white">
              <h1>Hey, I’m Arun Prasanth.</h1>
              <h2>Front End Developer</h2>
            </div>
            <div className="text-gray-500 dark:text-gray-100">
              Design-driven creator with a passion for building things that
              matter.
            </div>
            <div className="flex gap-2 xm:flex-col">
              <div className="flex w-fit gap-3 items-center py-2 px-4 rounded-xl bg-green-100 font-semibold text-green-700">
                <span className="relative h-3 w-3">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-300"></span>
                  <GoDotFill
                    className="absolute h-full w-full rounded-full text-green-700"
                    size={14}
                  />
                </span>
                <span>Available for new project</span>
              </div>
              <div
                onClick={onContactClick}
                className="flex w-fit py-2 px-4 rounded-xl bg-gray-100 font-semibold text-gray-700 hover:bg-gray-300 transition-colors duration-300 cursor-pointer group"
              >
                Say Hi
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
              With 1.6 years of hands-on experience in front-end development and
              over 4.6 years of professional experience overall, I specialize in
              building responsive, accessible, and visually consistent web
              applications. My work spans a wide range of technologies including
              React, Angular, TypeScript, and TailwindCSS — enabling me to
              deliver interfaces that are not only functional but crafted with
              attention to detail.
            </p>
            <p>
              This journey has equipped me with a strong balance between UI
              design and product development. I approach challenges through a
              design-thinking mindset, ensuring each solution aligns with user
              needs and business goals.
            </p>

            <p>
              Currently based in Bangalore, India, I’m looking for a full-time
              front-end/product development role where I can collaborate
              globally and solve real-world problems through meaningful,
              scalable user experiences.
            </p>
          </div>
          {/* horizontal-line */}
          <div className="m-auto w-4/5 h-[1px] bg-gray-200 dark:bg-slate-800"></div>
          <h3 className="font-semibold">Work Experience</h3>
          <div className="flex gap-16 xm:flex-col xm:gap-3 items-center">
            <div className="opacity-50 font-semibold">2023 - 2025</div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold opacity-80">
                Full Stack Developer at
              </div>
              <div className="p-1 border text-sm text-slate-500 border-slate-200 bg-slate-100 dark:bg-slate-700 dark:text-white dark:border-slate-500 rounded">
                SaveData Infotech Solutions
              </div>
            </div>
          </div>
          <div className="flex gap-16 xm:flex-col xm:gap-3 items-center">
            <div className="opacity-50 font-semibold">2019 - 2022</div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold opacity-80">
                Financial Processor at
              </div>
              <div className="p-1 border text-sm text-slate-500 border-slate-200 bg-slate-100 dark:bg-slate-700 dark:text-white dark:border-slate-500 rounded">
                Deccan i Services Pvt Lmtd
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 w-1/2 md:w-full">
          <div className="flex flex-col mx-auto gap-5 w-fit sticky top-14">
            <h3 className="font-semibold md:text-center">CV</h3>
            <img alt="CV-thumbnail" title="CV-thumbnail" className="h-96 w-80 rounded border blur-sm" src={CV} />
            <a
              href={file}
              target="_blank"
              className="group mx-auto flex justify-center items-center gap-2 px-4 py-1 w-fit bg-black dark:bg-slate-700 dark:hover:bg-slate-800 text-white rounded border border-transparent transition-colors hover:bg-gray-700"
            >
              <span className="flex items-center gap-2">
                Take a look{" "}
                <GoArrowDown className="group-hover:rotate-0 -rotate-90 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
