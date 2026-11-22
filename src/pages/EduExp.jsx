import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

const EduExp = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <MyCard />

        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl font-bold mb-8">
            Education & <span className="text-[#ff5e14]">Experience</span>
          </h1>

          <div className="space-y-6 pl-4">
            <div>
              <p className="text-[#ff5e14] text-sm mb-1">2022 - Present</p>
              <h3 className="font-bold text-base">UI/UX Designer</h3>
              <p className="text-gray-400 text-sm pl-2 mb-2">Freelance</p>
              <h3 className="font-bold text-base">Fullstack Web Developer</h3>
              <p className="text-gray-400 text-sm pl-2">Freelance</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">2022- 2025</p>
              <h3 className="font-bold text-base">
                Bachelor Degree in Technology Digital and Innovation
              </h3>
              <p className="text-gray-400 text-sm">Southeast Asia University</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">2016- 2021</p>
              <h3 className="font-bold text-base">High school</h3>
              <p className="text-gray-400 text-sm">Wat Nuannoradit School School</p>
            </div>
          </div>
        </div>

        <SideMenu />
      </div>
    </div>
  );
};

export default EduExp;