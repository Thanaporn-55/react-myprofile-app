import React from 'react';
import MyCard from '../components/MyCard';
import SideMenu from '../components/SideMenu';

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* 1. การ์ดด้านซ้าย */}
        <MyCard />

        {/* 2. ฟอร์ม Contact Me ตรงกลาง */}
        <div className="flex-1 max-w-xl w-full">
          <h1 className="text-4xl font-bold mb-2">
            Contact <span className="text-[#ff5e14]">Me</span>
          </h1>
          <p className="text-gray-300 mb-8">Let’s get in touch!</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-[#ff5e14] mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#ff5e14]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#ff5e14] mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#ff5e14]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#ff5e14] mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#ff5e14]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#ff5e14] mb-1">Adress</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#ff5e14]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#ff5e14] mb-1">Content</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-[#ff5e14] resize-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                className="appearance-none w-4 h-4 rounded border border-stone-300 bg-transparent checked:bg-[#ff5e14] checked:border-[#ff5e14] cursor-pointer transition"
              />
              <label htmlFor="newsletter" className="text-xs text-gray-300 cursor-pointer">
                I would like to receive the newsletter.
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#ff5e14] hover:bg-orange-600 text-white font-medium py-2.5 px-16 rounded-lg transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* 3. เมนูด้านขวา */}
        <SideMenu />

      </div>
    </div>
  );
};

export default ContactMe;