"use client";

import { useEffect, type ReactNode } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ContactModal({
  open,
  onClose,
  children,
}: ContactModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Send a message"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close contact modal"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        className="
          relative
          w-full
          max-w-lg
          overflow-hidden
          rounded-3xl
          border
          border-white/[0.10]
          bg-[#0c0f18]/95
          shadow-[0_25px_100px_rgba(0,0,0,0.55)]
          backdrop-blur-2xl
          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-purple-500/10 blur-[90px]"
        />

        {/* Header */}
        <div className="relative flex items-start justify-between border-b border-white/[0.07] px-6 py-5 sm:px-7">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </span>
            </div>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Send a message
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Tell me what you're building.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.035]
              text-lg
              text-gray-400
              transition
              hover:border-white/[0.15]
              hover:bg-white/[0.07]
              hover:text-white
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-300
            "
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="relative px-6 py-6 sm:px-7 sm:py-7">
          {children}
        </div>
      </div>
    </div>
  );
}