import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <MyCard />

        <div className="flex-1 max-w-xl">
          <p className="text-2xl mb-4">
            About <span className="text-[#ff5e14]">Me</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            I find fulfillment in blending visual design with the power of
            coding to create meaningful experiences.
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto
            earum voluptates obcaecati corrupti voluptatem . Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iusto maxime tempora at neque a
            adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates
            obcaecati corrupti voluptatem .
          </p>
        </div>

        <SideMenu />
      </div>
    </div>
  );
};

export default AboutMe;