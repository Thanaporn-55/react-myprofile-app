import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

// import รูปตรงตามชื่อไฟล์จริงในโฟลเดอร์ assets ของคุณ
import reactImg from '../assets/React_(web_framework)-Logo 2.png';
import figmaImg from '../assets/gg_figma.png';
import htmlcssImg from '../assets/nonicons_css-16.png';
import nextjsImg from '../assets/nextjs-original.png';
import jsImg from '../assets/uil_java-script.png';
import githubImg from '../assets/github-original.png';

const Skill = () => {
  const skills = [
    { name: 'React', percent: '60%', image: reactImg, active: true },
    { name: 'Figma', percent: '85%', image: figmaImg, active: false },
    { name: 'HTML/CSS', percent: '80%', image: htmlcssImg, active: false },
    { name: 'Next.js', percent: '80%', image: nextjsImg, active: false },
    { name: 'Java Script', percent: '60%', image: jsImg, active: false },
    { name: 'GitHub', percent: '90%', image: githubImg, active: false },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <MyCard />

        <div className="flex-1 max-w-xl w-full">
          <h1 className="text-4xl font-bold mb-8">
            My <span className="text-[#ff5e14]">Skills</span>
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-28 h-36 rounded-full border flex flex-col items-center justify-center gap-3 mb-2 ${
                    skill.active ? 'border-[#ff5e14]' : 'border-gray-600'
                  }`}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-[#ff5e14] text-sm">{skill.percent}</span>
                </div>
                <span className="text-xs text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <SideMenu />
      </div>
    </div>
  );
};

export default Skill;