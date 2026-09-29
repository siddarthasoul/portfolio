
"use client";

import { useState } from "react";
import { useContact } from "../../hooks/useContact";
import ContactLinks from "./ContactLinks";
import ContactModal from "./ContactModal";
import ContactForm from "./ContactForm";

export default function Contact() {
  const {
    contact,
    loading,
    error,
    sendMessage,
    sending,
    sendError,
  } = useContact();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 text-white sm:px-8 sm:py-32"
    >

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have an idea, a project, or an interesting problem?
            I'm open to discussing AI engineering, full-stack
            development, and practical technology.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          {/* Left side */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-9">
            <p className="text-sm font-medium text-cyan-300">
              GET IN TOUCH
            </p>

            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Find me around the web.
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-7 text-gray-400">
              Choose whichever channel works for you. You can
              reach me directly or send a message through the
              contact form.
            </p>

            <div className="mt-8">
              {loading ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="h-24 animate-pulse rounded-2xl border border-white/[0.06] bg-white/[0.03]"
                    />
                  ))}
                </div>
              ) : error ? (
                <p className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300">
                  Contact links could not be loaded. You can
                  still use the message form.
                </p>
              ) : contact ? (
                <ContactLinks contact={contact} />
              ) : null}
            </div>
          </div>

          {/* Right side */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-purple-500/[0.09] p-7 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-[80px] transition duration-700 group-hover:bg-purple-500/20"
            />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-2xl text-cyan-200">
                ↗
              </div>

              <h3 className="mt-7 text-2xl font-semibold sm:text-3xl">
                Have something in mind?
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Tell me what you're working on, what you want
                to build, or simply say hello. I'll get your
                message through the contact form.
              </p>
            </div>

            <div className="relative mt-10">
              <button
                type="button"
                onClick={openDrawer}
                className="group/button flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-semibold text-[#061018] shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070910]"
              >
                Send a message
                <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>
              </button>

              <p className="mt-4 text-center text-xs text-gray-500">
                Opens a private message form
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in drawer */}
      <ContactModal
        open={drawerOpen}
        onClose={closeDrawer}
      >
        <ContactForm
          sendMessage={sendMessage}
          sending={sending}
          sendError={sendError}
          onClose={closeDrawer}
        />
      </ContactModal>
    </section>
  );
}