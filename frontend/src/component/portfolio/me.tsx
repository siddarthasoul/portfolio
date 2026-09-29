"use client";

import { useMe } from "../../hooks/useMe";

export default function MePage() {
  const { user, loading, error } = useMe();

  if (loading) {
    return (
      
      <main className="flex min-h-screen items-center justify-center px-4 text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400" />

          <p className="text-sm tracking-widest text-white/50">
            LOADING
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 text-white">
        <p className="rounded-xl border border-red-500/20 bg-red-500/5 px-6 py-4 text-center text-red-400">
          {error}
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 text-white">
        <p className="text-white/50">No user data found.</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white">
      <section id="mepage" className="relative z-10 flex min-h-screen items-center px-5 py-20 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-4xl animate-[fadeUp_0.8s_ease-out]">
            {/* Small label */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                Building with AI
              </span>
            </div>

            {/* Greeting */}
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-white/40 sm:text-base">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {user.name}
            </h1>

            {/* Role */}
            <h2 className="mt-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              {user.role}
            </h2>

            {/* Summary */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              {user.summary}
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={user.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-md text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)]"
              >
                View GitHub

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                Explore my work
              </a>
            </div>
          </div>

          {/* Bottom hint */}
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 sm:flex">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>

            <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}