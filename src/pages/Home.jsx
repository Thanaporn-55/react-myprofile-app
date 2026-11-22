import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <MyCard />

        <div className="flex-1 max-w-xl">
          <p className="text-2xl mb-3">
            Lets Work <span className="text-[#ff5e14]">Together !</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi From <span className="text-[#ff5e14]">Thanaporn</span> ,<br />
            Interactive Designer & Fullstack Web Developer
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto
            earum voluptates obcaecati corrupti voluptatem .
          </p>

          <div className="flex gap-14">
            <div>
              <p className="text-4xl text-[#ff5e14] font-light mb-1">3 +</p>
              <p className="text-xs text-gray-400">
                Years of<br />Experience
              </p>
            </div>
            <div>
              <p className="text-4xl text-[#ff5e14] font-light mb-1">10 +</p>
              <p className="text-xs text-gray-400">
                Projects<br />Completed
              </p>
            </div>
          </div>
        </div>

        <SideMenu />
      </div>
    </div>
  );
};

export default Home;