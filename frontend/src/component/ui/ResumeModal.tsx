"use client";

import { useEffect } from "react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

const resumeUrl =
  `${process.env.NEXT_PUBLIC_API_URL}/files/resume/use.PDF`;

const resumeDownlode = `${process.env.NEXT_PUBLIC_API_URL}/files/resume/download`
export default function ResumeModal({
  open,
  onClose,
}: ResumeModalProps) {
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
      aria-label="Resume"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close resume"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        className="
          relative flex w-full max-w-5xl flex-col
          overflow-hidden rounded-3xl
          border border-white/[0.10]
          bg-[#0c0f18]/95
          shadow-[0_25px_100px_rgba(0,0,0,0.65)]
          backdrop-blur-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                Resume
              </span>
            </div>

            <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
              Siddartha Mishra
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-xl border border-white/[0.08]
              bg-white/[0.035]
              text-lg text-gray-400
              transition
              hover:border-white/[0.15]
              hover:bg-white/[0.07]
              hover:text-white
            "
          >
            ×
          </button>
        </div>

        {/* Resume preview */}
        <div className="h-[60vh] min-h-[400px] bg-black/20 sm:h-[65vh]">
          <iframe
            src={resumeUrl}
            title="Siddartha Mishra Resume"
            className="h-full w-full border-0"
          />
        </div>

        {/* Footer actions */}
        <div
          className="
            flex flex-col gap-3
            border-t border-white/[0.07]
            p-5
            sm:flex-row sm:items-center sm:justify-between sm:px-7
          "
        >
          <p className="text-xs text-gray-500">
            View or download my latest resume.
          </p>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-xl border border-white/[0.10]
                bg-white/[0.04]
                px-5 py-3
                text-sm font-medium text-gray-300
                transition
                hover:border-cyan-300/20
                hover:bg-cyan-300/[0.05]
                hover:text-white
              "
            >
              View Resume
            </a>

            <a
              href={resumeDownlode}
              download
              className="
                inline-flex items-center justify-center
                rounded-xl
                bg-gradient-to-r from-cyan-400 to-blue-500
                px-5 py-3
                text-sm font-semibold text-[#061018]
                shadow-lg shadow-cyan-500/10
                transition
                hover:-translate-y-0.5
                hover:shadow-cyan-400/20
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}