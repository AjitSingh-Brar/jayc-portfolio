import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
const NavButton = ({ active, selectLink, link, children }: any) => {
  const buttonClasses = active
    ? "text-[#E2E8F0] duration-200 ease-in-out"
    : "text-[#ADB7BE] duration-200 ease-in-out";
  return (
    <li>
      <a
        href={`${link}`}
        onClick={selectLink}
        className={`flex items-center pt-3 hover:text-[#E2E8F0] ${buttonClasses}`}
      >
        <span className="text-xs font-bold tracking-widest">{children}</span>
      </a>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-[#E2E8F0] mb-2 mt-0.5"
      ></motion.div>
    </li>
  );
};

export default NavButton;
