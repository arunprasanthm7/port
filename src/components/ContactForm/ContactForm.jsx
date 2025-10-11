import { GoDotFill } from "react-icons/go";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const words = ["Hey", "Hello", "Hi"];
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    emailjs
      .send(
        "service_yxy4mkl",
        "template_0pwinlk",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "7JGUOVvRVvEp5MYW8"
      )
      .then((response) => {
        alert("Message sent successfully!");
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        alert("Failed to send message.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col gap-10 justify-self-center w-[900px] md:w-[calc(100%-20px)] dark:border-blue-950 dark:bg-black dark:text-white border-l border-r">
      <div className="flex flex-col gap-2 w-[60%] sm:w-[calc(100%-20px)] mx-auto">
        <h4 className="text-2xl font-bold my-8">
          Contact
         
        </h4>
        <p className="text-2xl font-semibold text-[#6d6d6d] dark:text-slate-600-500">
          Say{" "}
          <span
            className={`inline-block text-black dark:text-slate-100 transition-all duration-300
              ${animate ? "opacity-100" : "opacity-10"} `}
          >
            {words[index]}.
          </span>
        </p>
        <p className="text-xl font-medium text-[#6d6d6d] dark:text-slate-600-500">
          Looking to start a project and need that magical touch? Reach out.
        </p>
        <div className="flex gap-3 items-center">
          <span className="relative h-3 w-3">
            <span className="animate-ping absolute h-full w-full rounded-full bg-green-300"></span>
            <GoDotFill
              className="absolute h-full w-full rounded-full text-green-700"
              size={14}
            />
          </span>
          <span>Open for new opportunities</span>
        </div>
        {/* horizontal-line */}
        <div className="m-auto w-full h-[1px] my-8 bg-gray-200 dark:bg-gray-900"></div>
        {/* form */}
        <form
          className="grid grid-cols-2 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <input
            className={`h-10 p-2 rounded border dark:bg-slate-950 dark:text-slate-300 ${
              errors.name
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-slate-800"
            } focus:outline-none text-black`}
            placeholder="Name"
            type="text"
            {...register("name", { required: "true" })}
          />

          {/* Email */}
          <input
            className={`h-10 p-2 rounded border dark:bg-slate-950 dark:text-slate-300  ${
              errors.email
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-slate-800"
            } focus:outline-none text-black`}
            placeholder="Email"
            type="email"
            {...register("email", { required: "true" })}
          />

          {/* Message */}
          <textarea
            className={`col-span-2 h-28 p-2 rounded border dark:bg-slate-950 dark:text-slate-300 ${
              errors.message
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-slate-800"
            } focus:outline-none text-black`}
            placeholder="Message"
            {...register("message", { required: "true" })}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`cursor-pointer col-span-2 text-center rounded p-2 hover:bg-opacity-80 transition-opacity duration-300 font-medium text-white ${
              submitted
                ? "bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                : "bg-black dark:bg-blue-950"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2 justify-center">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : submitted ? (
              "Thank You!"
            ) : (
              "Send"
            )}
          </button>
        </form>
        <div className="flex items-center gap-2 font-medium group w-fit dark:text-slate-300">
          <IoTimeOutline className="animate-spin" />
          Expect a response within{" "}
          <span className="text-[#989898]">half a day!</span>
        </div>
      </div>
      <div className="flex gap-3 justify-center justify-self-center">
        <a
          href="https://www.linkedin.com/in/arunprasanthm/"
          target="_blank"
          alt="linkedin-icon"
          title="linkedin"
          className="p-2 border border-gray-300 rounded hover:bg-gray-400 group transition-all duration-300"
        >
          <FaLinkedin
            size={32}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </a>
        <a
          href="https://github.com/arunprasanthm7"
          target="_blank"
          alt="github-icon"
          title="github"
          className="p-2 border border-gray-300 rounded hover:bg-gray-400 group transition-all duration-300"
        >
          <FaGithub
            size={32}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </a>
        <a
          href="https://x.com/arunprasanthm7"
          target="_blank"
          alt="twitter-icon"
          title="twitter"
          className="p-2 border border-gray-300 rounded hover:bg-gray-400 group transition-all duration-300"
        >
          <FaXTwitter
            size={32}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </a>
      </div>
      <div className="flex gap-3 justify-between justify-self-center dark:text-[#989898] p-5 sm:flex-col sm:items-center sm:pb-16 xm:p-1">
        <div className="font-medium flex items-center gap-2">
          <span>From India with</span>
          <div className="relative w-5 h-5">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient
                  id="heartGradient"
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
            <FaHeart className="w-full h-full animate-bounce fill-[url(#heartGradient)]" />
          </div>
        </div>
        <div>
          ©2025 <span className="font-medium">Arun Prasanth</span>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
