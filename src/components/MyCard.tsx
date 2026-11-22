import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Profile from '../assets/profile.jpg';

export default function MyCard() {
  return (
    <div className="w-full lg:w-[300px] border border-neutral-700/80 rounded-3xl p-6 flex flex-col items-center bg-[#1e1e1e] shrink-0">
      {/* ชื่อด้านบน (ตัวแรกสีส้ม) */}
      <div className="w-full text-left mb-3">
        <span className="text-xl font-medium text-white tracking-wide">
          <span className="text-[#f95700]">T</span>hanaporn
        </span>
      </div>

      {/* รูปโปรไฟล์ (เปลี่ยนเป็นรูปตัวเองหรือรูปที่ Gen จาก AI) */}
      <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={Profile}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* รหัสนักศึกษา และ ตำแหน่ง */}
      <p className="text-white text-sm font-medium tracking-wider mb-1">
        STU ID: 6619410055
      </p>
      <p className="text-neutral-400 text-xs mb-6">
        Fullstack Web Developer
      </p>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-4 mb-6 text-white text-lg">
        <a href="#facebook" className="hover:text-[#f95700] transition-colors">
          <FaFacebookF />
        </a>
        <a href="#x" className="hover:text-[#f95700] transition-colors">
          <FaXTwitter />
        </a>
        <a href="#instagram" className="hover:text-[#f95700] transition-colors">
          <FaInstagram />
        </a>
        <a href="#linkedin" className="hover:text-[#f95700] transition-colors">
          <FaLinkedinIn />
        </a>
        <a href="#google" className="hover:text-[#f95700] transition-colors">
          <FaGoogle />
        </a>
      </div>

      {/* ปุ่ม HIRE ME ! */}
      <Link
        to="/contactme"
        className="w-full py-3 bg-[#f95700] hover:bg-[#e04e00] text-black font-semibold text-sm tracking-widest rounded-xl text-center transition-colors"
      >
        HIRE ME !
      </Link>
    </div>
  );
}