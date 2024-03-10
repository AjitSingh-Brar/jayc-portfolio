import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const FooterSection = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p className="flex flex-row items-center">
        <span>
          <CopyrightIcon />
        </span>{" "}
        2024 | Jerry
      </p>
    </footer>
  );
};

export default FooterSection;
