"use client";

import { useEffect, useState } from "react";
import ResumeModal from "../ui/ResumeModal";

const navigation = [
  { label: "About", href: "#mepage" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          px-4 py-4
          transition-all duration-300
          sm:px-6
          lg:px-8
          ${scrolled
            ? "pt-3"
            : "pt-5"
          }
        `}
      >
        <nav
          className={`
            mx-auto flex max-w-6xl items-center justify-between
            rounded-2xl border
            px-4 py-3
            transition-all duration-300
            sm:px-5
            ${scrolled
              ? `
                  border-white/[0.10]
                  bg-[#080b12]/75
                  shadow-[0_8px_40px_rgba(0,0,0,0.25)]
                  backdrop-blur-xl
                `
              : `
                  border-transparent
                  bg-transparent
                `
            }
          `}
        >
          {/* Logo */}
          <a
            href="#mepage"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-3"
          >
            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                border border-cyan-300/20
                bg-cyan-300/[0.06]
                text-xs font-bold text-cyan-300
                transition
                group-hover:border-cyan-300/40
                group-hover:bg-cyan-300/[0.10]
              "
            >
              SM
            </span>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">
                Siddartha Mishra
              </p>

              <p className="text-[10px] text-gray-500">
                AI + Full-Stack Developer
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-sm text-gray-400
                  transition-colors duration-200
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}

          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-white/[0.08]
              bg-white/[0.03]
              text-gray-400
              transition
              hover:border-cyan-300/20
              hover:text-white
              md:hidden
            "
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </nav>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div
            className="
              mx-auto mt-2 max-w-6xl
              rounded-2xl
              border border-white/[0.10]
              bg-[#080b12]/95
              p-4
              shadow-[0_15px_50px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              md:hidden
            "
          >
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    rounded-xl px-3 py-3
                    text-sm text-gray-400
                    transition
                    hover:bg-white/[0.04]
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}