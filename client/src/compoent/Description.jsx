import React from "react";
import star from "../assets/5img.webp";

export default function Description() {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-5 whitespace-nowrap text-center">
        Create AI Image
      </h1>

      <p className="text-gray-500 text-center mb-6">
        Turn your imagination into visuals
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={star}
          className="w-80 xl:w-96 rounded-lg"
          alt="AI Generated"
        />
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Introducing AI-powered Image Generation
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Imagine a peaceful lake surrounded by golden autumn trees, their
            reflections shimmering on the calm water as the sun sets in a blaze
            of pink, orange, and lavender hues, casting a soft glow over the
            tranquil scene.
          </p>
        </div>
      </div>
    </div>
  );
}
