import { useEffect, useState } from "react";

const rawGreetings = [
  "Hello", // English
  "வணக்கம்", // Tamil
  "നമസ്കാരം", // Malayalam
  "నమస్కారం", // Telugu
  "ನಮಸ್ಕಾರ", // Kannada
  "नमस्ते", // Hindi
  "নমস্কার", // Bengali
  "નમસ્તે", // Gujarati
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "नमस्कार", // Marathi
  "السلام علیکم", // Urdu
];

const greetings = [...rawGreetings, rawGreetings[0]];

const LoadingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let delay = index === 0 ? 500 : 100;
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setTimeout(() => {
          setIndex((prev) => prev + 1);
          setAnimate(true);
        }, 100);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(endTimer);
    }
  }, [index]);

  if (!show) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        key={index}
        className={`text-white text-5xl font-bold transition-all ${
          animate
            ? "opacity-100 translate-y-0"
            : "opacity-10 -translate-y-[30px]"
        }`}
      >
        {greetings[index]}...
      </div>
    </div>
  );
};

export default LoadingAnimation;
