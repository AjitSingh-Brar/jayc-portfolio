"use client";
import React, { useEffect, useState, useTransition } from "react";
import NavButton from "./NavButton";
import SocialMedia from "./SocialMedia";

const HeroPage = () => {
  const [link, setLink] = useState("#about");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY + 200; // Adjust based on your layout and design

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setLink(id);
    });
  };
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl sm:text-5xl text-slate-200 font-bold tracking-tight">
          Ajit Singh
        </h1>
        <h2 className="text-lg sm:text-xl mt-3 font-medium tracking-tight text-slate-200">
          Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-[#94A3B8]">
          I build high-quality web applications that meet and exceed client
          expectations.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page links">
          <ul className="mt-16 w-24 font-['Inter']">
            <NavButton
              active={link === "#about"}
              selectLink={() => handleTabChange("#about")}
              link={"#about"}
            >
              {" "}
              ABOUT{" "}
            </NavButton>
            <NavButton
              active={link === "#experience"}
              selectLink={() => handleTabChange("#experience")}
              link={"#experience"}
            >
              {" "}
              EXPERIENCE{" "}
            </NavButton>
            <NavButton
              active={link === "#projects"}
              selectLink={() => handleTabChange("#projects")}
              link={"#projects"}
            >
              {" "}
              PROJECTS{" "}
            </NavButton>
          </ul>
        </nav>
      </div>
      <SocialMedia />
    </header>
  );
};

export default HeroPage;
