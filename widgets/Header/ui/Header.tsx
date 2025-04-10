import { Logo } from "@/shared/ui/Logo";
import { ThemeToggleButton } from "@/shared/ui/ThemeToggleButton";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between py-4">
        <Logo /> 
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm sm:text-base">
            <li><a href="#hero" className="hover:underline">Главная</a></li>
            <li><a href="#about" className="hover:underline">Обо мне</a></li>
            <li><a href="#projects" className="hover:underline">Проекты</a></li>
            <li><a href="#contact" className="hover:underline">Контакты</a></li>
          </ul>
        </nav>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
