import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

const SocialMedia = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 shrink-0">
        <Link
          href="https://github.com/AjitSingh-Brar"
          className="text-[#94A3B8] hover:text-slate-200 block duration-200 ease-in-out"
          target="_blank"
          aria-label="GitHub (opens in a new tab)"
          rel="noreferrer noopener"
        >
          <GitHubIcon className="text-3xl"/>
        </Link>
      </li>
      <li className="mr-5 text-lg shrink-0">
        <Link
          href="https://www.linkedin.com/in/jerry-brar/"
          className="text-[#94A3B8] hover:text-slate-200 block duration-200 ease-in-out"
          target="_blank"
          aria-label="LinkedIn (opens in a new tab)"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="text-3xl" />
        </Link>
      </li>
      <li className="mr-5 text-lg shrink-0">
        <Link
          href="mailto:jerry.brar@outlook.com"
          className="text-[#94A3B8] hover:text-slate-200 block duration-200 ease-in-out"
          target="_blank"
          aria-label="Email"
          rel="noreferrer noopener"
        >
          <EmailIcon className="text-3xl" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
