import React from "react";
import star from "../assets/star.png";
import star2 from "../assets/star2.webp";
import star3 from "../assets/5img.webp";
import { motion } from "motion/react";
import { Appcontext } from "../context/Appcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { user, setShowLogin } = useContext(Appcontext);
  const navigate = useNavigate();
  const onClickhandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      className="flex flex-col justify-center items-center my-20 "
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center
       gap-2 px-10 py-2 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>Best Text to image generator</p>
        <img src={star} className="w-10" alt="" />
      </motion.div>
      <motion.h1
        className="text-4xl max-w-[300px] sm:max-w-[590px] mx-auto
       mt-10 text-center leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>Turn text to </span>
        <span className="text-blue-600">image</span>
        <span className="block text-stone-500 text-3xl mt-1">in Second</span>
      </motion.h1>
      <p className="text-center max-w-xl mx-auto mt-6">
        Generate high-quality images from your imagination just by typing a few
        words. It's fast, easy, and free to use.
      </p>
      {/* generate image */}
      <button
        onClick={onClickhandler}
        className="mt-10 flex items-center gap-2 bg-blue-200 px-2 sm:px-6 lg:px-1.5 rounded-full hover:scale-105 transition-all duration-700"
      >
        Generate image
        <img className="w-10" src={star2} alt="" />
      </button>
      <div className="flex mt-15 gap-2 items-center rounded-full flex-wrap justify-center">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              key={index}
              src={star3}
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            />
          ))}
      </div>
      <p className="text-sm items-center p-1 mt-2">
        Generate images from imagify
      </p>
    </motion.div>
  );
}
