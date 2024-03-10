import React from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { experienceData } from "../data/experienceData";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work Experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experince
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experienceData.map((experience, index) => (
            <li
              className="mb-12"
              key={experience.id}
              aria-label={experience.company}
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {experience.timeline}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <Link
                        href={experience.companyLink}
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300  group/link text-base"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.role} ·{" "}
                          <span className="inline-block">
                            {experience.company}
                            <ArrowOutwardIcon
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-[#94A3B8]">
                    {experience.responsibility}
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                    {experience.technologies.map((skill, index) => (
                      <li className="mr-1.5 mt-2" key={index}>
                        <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Link
            href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:ac109bc3-951b-4ec2-a855-fcd5387aea7a"
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 font-semibold text-slate-200 group/link text-base duration-200 ease-in-out"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Check Full CV (Opens in new Tab)"
          >
            <span>
              Check Full{" "}
              <span className="inline-block">
                Resume
                <ArrowOutwardIcon
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
