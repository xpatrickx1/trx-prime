// src/components/Header/Header.jsx
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import LightningIcon from '../assets/images/logoLightning.svg?react';

export const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const toggleLang = () => setLangOpen(!langOpen);

  const selectLang = (lang) => {
    setCurrentLang(lang);
    setLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0b] w-full px-4 py-0">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4">
        <div className="flex items-center relative">
          <img src={logo} alt="TRX PRIME" className="h-auto max-h-[40px]" />
          <LightningIcon className="left-[39px] top-[2px] absolute text-theme-primary" />
        </div>
  
        <div className="relative text-white">
          <button
            className="flex items-center gap-1 focus:outline-none"
            onClick={toggleLang}
          >
            <span className="uppercase">{currentLang}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
  
          {langOpen && (
            <ul className="absolute right-0 mt-2 bg-[#1c1c1c] rounded shadow-lg text-sm">
              {["en", "ua", "ru"].map((lang) => (
                <li
                  key={lang}
                  className={`px-3 py-2 hover:bg-[#333] cursor-pointer ${
                    lang === currentLang ? "text-[#ff6b00]" : ""
                  }`}
                  onClick={() => selectLang(lang)}
                >
                  {lang.toUpperCase()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
  
};
