"use client"
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FooterSection = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }
  return (
    <footer className="max-w-full pb-16 text-sm text-slate-500 sm:pb-0 flex justify-between">
      <p className="flex flex-row items-center">
        <span>
          <CopyrightIcon />
        </span>{" "}
        2024 | Jerry Brar
      </p>
      <button className="animate-bounce p-3 border-[2px] border-slate-500 rounded-full cursor-pointer" onClick={handleScrollToTop}>
          <ArrowUpwardIcon className="text-2xl" />
      </button>
    </footer>
  );
};

export default FooterSection;
