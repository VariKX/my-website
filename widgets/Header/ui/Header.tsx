import { ThemeToggleButton } from "@/sh/ui/ThemeToggleButton";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 max-w-[1440px] mx-auto">
      <div className="border border-foreground/20 px-2 py-1 rounded text-xs font-medium tracking-widest cursor-default select-none">
        SM
      </div>
      <nav>
        <ul className="flex gap-4">
          <li><a className="text-xl" href="/">Главная</a></li>
          <li><a className="text-xl" href="/about">Обо мне</a></li>
          <li><a className="text-xl" href="/projects">Проекты</a></li>
          <li><a className="text-xl" href="/contact">Контакты</a></li>  
        </ul>
      </nav>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;