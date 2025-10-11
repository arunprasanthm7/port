const NavBar = ({ onAboutClick, onProjectsClick, onContactClick }) => {
  return (
    <div className="flex justify-between justify-self-center w-[900px] md:w-full px-4 py-4 sticky top-0 dark:bg-neutral-900/90 bg-white/70 backdrop-blur-sm z-50">
      <a
        href="/"
        title="Arun Prasanth🚀"
        className="font-medium bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
      >
        AP
      </a>
      <ul className="flex space-x-10 text-slate-700 dark:text-white">
        <li>
          <div
            onClick={onAboutClick}
            className=" flex flex-col h-6 overflow-hidden group transition-all duration-300 cursor-pointer"
          >
            <span className="group-hover:-translate-y-6 transition-all duration-300">
              About
            </span>
            <span
              title="Who am I? 🤔"
              className="group-hover:-translate-y-6 transition-all duration-300 text-gray-400 dark:text-white/70"
            >
              About
            </span>
          </div>
        </li>
        <li>
          <div
            onClick={onProjectsClick}
            className=" flex flex-col h-6 overflow-hidden group transition-all duration-300 cursor-pointer"
          >
            <span className="group-hover:-translate-y-6 transition-all duration-300">
              Projects
            </span>
            <span
              title="Explore my work 🚀"
              className="group-hover:-translate-y-6 transition-all duration-300 text-gray-400 dark:text-white/70"
            >
              Projects
            </span>
          </div>
        </li>
        <li>
          <div
            onClick={onContactClick}
            className=" flex flex-col h-6 overflow-hidden group transition-all duration-300 cursor-pointer"
          >
            <span className="group-hover:-translate-y-6 transition-all duration-300">
              Contact
            </span>
            <span
              title="Let’s connect! 📬"
              className="group-hover:-translate-y-6 transition-all duration-300 text-gray-400 dark:text-white/70"
            >
              Contact
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
