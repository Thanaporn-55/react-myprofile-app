import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';
import Image from '../assets/image 3.png'; // ใส่รูปผลงานของคุณ

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <MyCard />

        <div className="flex-1 max-w-xl w-full">
          <h1 className="text-4xl font-bold mb-4">
            Featured <span className="text-[#ff5e14]">Projects</span>
          </h1>

          <h2 className="text-base font-bold mb-2">
            Manage Task App - fullstack web development
          </h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Here's my latest project built with Next.js and Laravel, using TailwindCSS on the
            front-end. Watch the video to see the responsive landing page in action!
          </p>

          <div className="rounded-lg overflow-hidden border border-gray-700 bg-white">
            <img
              src={Image}
              alt="Featured Project"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <SideMenu />
      </div>
    </div>
  );
};

export default Projects;