import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="text-[#94A3B8]">
        <p className="mb-4">
          Back in 2020, I began my career as a UX/UI Designer, designing
          world-class interaction designs for web applications. The role at
          Communitech allowed me to support over 50 local businesses such as a{" "}
          <span className="text-[#E2E8F0] hover:text-sky-400 duration-200 ease-in-out">
            <Link
              href="https://yourh2r.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              human resource agency
            </Link>
          </span>
          {", "} a{" "}
          <span className="text-[#E2E8F0] hover:text-sky-400 duration-200 ease-in-out">
            <Link
              href="https://cobrie.ca/"
              target="_blank"
              rel="noreferrer noopener"
            >
              restaurant
            </Link>
          </span>
          {", "} a{" "}
          <span className="text-[#E2E8F0] hover:text-sky-400 duration-200 ease-in-out">
            <Link
              href="https://limitlessmartialarts.ca/"
              target="_blank"
              rel="noreferrer noopener"
            >
              martial arts school
            </Link>
          </span>{" "}
          and many more across Southern Ontario, enhancing the UI designs of
          their applications for better user experience, resulting in 35%
          increase in customer base and user retention.
        </p>
        <p>
          Fast forward to today, My main focus has shifted towards building
          products, performing major features development and leading projects
          at{" "}
          <span className="text-[#E2E8F0] hover:text-sky-400 duration-200 ease-in-out">
            <Link href="https://www.telus.com/en" className="">
              TELUS
            </Link>
          </span>
          {". "}I specialize in optimizing user interfaces, backend systems and
          developing responsive applications in adherence to WCAG acessbility
          guidelines and industry best practices.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
