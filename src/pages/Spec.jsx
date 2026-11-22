import React from 'react';
import { Code2, Globe, PenTool } from 'lucide-react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

const Spec = () => {
  const specializations = [
    {
      title: 'Front end-developer',
      desc: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
      icon: Code2,
    },
    {
      title: 'UI/UX Designer',
      desc: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
      icon: Globe,
    },
    {
      title: 'Graphic designer',
      desc: 'As a graphic designer, I transform ideas into visually striking and impactful designs.',
      icon: PenTool,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <MyCard />

        <div className="flex-1 max-w-xl w-full">
          <h1 className="text-4xl font-bold mb-6">
            My <span className="text-[#ff5e14]">Specializations</span>
          </h1>

          <div className="space-y-4">
            {specializations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-[#ff5e14]/60 bg-[#1a1a1a] relative"
                >
                  <IconComponent
                    size={20}
                    className="text-[#ff5e14] absolute top-6 right-6"
                  />
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed pr-8">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <SideMenu />
      </div>
    </div>
  );
};

export default Spec;