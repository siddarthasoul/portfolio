"use client";

import { useEffect, useState } from "react";
import ResumeModal from "../ui/ResumeModal";

const navigation = [
  { label: "About", href: "#mepage" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/siddarthasoul/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddartha-mishra-9336a5384",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/siddarthamishra__",
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="relative px-5 pb-6 pt-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Top divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Main footer */}
          <div className="grid gap-14 py-14 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:gap-20">
            {/* Brand */}
            <div>
              <a
                href="#mepage"
                aria-label="Go to top"
                className="group inline-flex items-center gap-3"
              >
                <span
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-cyan-300/20
                    bg-cyan-300/[0.06]
                    text-sm font-bold text-cyan-300
                    transition
                    group-hover:border-cyan-300/40
                    group-hover:bg-cyan-300/[0.10]
                  "
                >
                  SM
                </span>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Siddartha Mishra
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    AI + Full-Stack Developer
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                Building intelligent systems, scalable backends,
                and practical AI applications while exploring
                how technology works under the hood.
              </p>

              {/* Socials */}
              <div className="mt-7 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-lg
                      border border-white/[0.07]
                      bg-white/[0.025]
                      px-3 py-2
                      text-xs text-gray-500
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-cyan-300/25
                      hover:bg-cyan-300/[0.05]
                      hover:text-cyan-300
                    "
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3
                className="
                  text-[11px] font-semibold uppercase
                  tracking-[0.22em] text-gray-400
                "
              >
                Navigate
              </h3>

              <nav className="mt-6 flex flex-col gap-3.5">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      group flex w-fit items-center gap-2
                      text-sm text-gray-500
                      transition-colors duration-200
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px w-0
                        bg-cyan-300
                        transition-all duration-300
                        group-hover:w-3
                      "
                    />

                    {item.label}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="
                    group flex w-fit items-center gap-2
                    border-0 bg-transparent p-0
                    text-sm text-gray-500
                    transition-colors duration-200
                    hover:bg-transparent
                    hover:text-white
                    focus:outline-none
                  "
                >
                  <span
                    className="
                      h-px w-0
                      bg-cyan-300
                      transition-all duration-300
                      group-hover:w-3
                    "
                  />

                  Resume
                </button>
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h3
                className="
                  text-[11px] font-semibold uppercase
                  tracking-[0.22em] text-gray-400
                "
              >
                Connect
              </h3>

              <div className="mt-6 flex flex-col gap-3.5">
                <a
                  href="mailto:Siddartha.soul@gmail.com"
                  className="
                    w-fit break-all text-sm text-gray-500
                    transition-colors
                    hover:text-cyan-300
                  "
                >
                  Siddartha.soul@gmail.com
                </a>

                <a
                  href="tel:9149324704"
                  className="
                    w-fit text-sm text-gray-500
                    transition-colors
                    hover:text-cyan-300
                  "
                >
                  +91 91493 24704
                </a>

                <a
                  href="https://wa.me/919149324704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-fit text-sm text-gray-500
                    transition-colors
                    hover:text-green-300
                  "
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="
              flex flex-col gap-4
              border-t border-white/[0.07]
              py-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-center text-xs text-gray-600 sm:text-left">
              © {new Date().getFullYear()} Siddartha Mishra.
              All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-4 sm:justify-end">
              <span className="text-xs text-gray-600">
                Built with curiosity.
              </span>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  border border-white/[0.08]
                  bg-white/[0.025]
                  text-sm text-gray-400
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-cyan-300/30
                  hover:bg-cyan-300/[0.05]
                  hover:text-cyan-300
                  ${
                    showTop
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }
                `}
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}