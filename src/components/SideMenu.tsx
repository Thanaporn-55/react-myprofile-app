import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  UserCheck,
  BookOpen,
  List,
  Briefcase,
  TerminalSquare,
  MessageSquare
} from 'lucide-react';

const SideMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: UserCheck, label: 'About Me' },
    { path: '/eduexp', icon: BookOpen, label: 'Education & Experience' },
    { path: '/spec', icon: List, label: 'Specializations' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
    { path: '/skills', icon: TerminalSquare, label: 'Skills' },
    { path: '/contactme', icon: MessageSquare, label: 'Contact Me' },
  ];

  return (
    <div className="flex lg:flex-col items-center justify-center gap-6 py-6 px-3 rounded-full border border-gray-700 bg-[#1a1a1a]">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            title={item.label}
            className={`transition-colors duration-200 ${
              isActive ? 'text-[#ff5e14]' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <IconComponent size={22} />
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;