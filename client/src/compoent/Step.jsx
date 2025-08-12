import React from 'react';
import { steps } from '../assets/stepdata';

export default function Step() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it Works</h1>
      <p className="text-lg text-gray-600 mb-8">Transform the text into images</p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {steps.map((item, index) => (
          <div
            key={index}
            className="p-5 px-8 bg-white/20 shadow-md hover:scale-105 transition-all duration-300 rounded-lg"
          >
            {/* Image and Title in a row */}
            <div className="flex items-center gap-4 mb-2">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-xl font-medium">{item.title}</h2>
            </div>
            {/* Description below */}
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
