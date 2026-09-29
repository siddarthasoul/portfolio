"use client";

import { useState } from "react";

import ProjectCard from "../ui/card";
import { useProject } from "../../hooks/useProject";
import { type Project} from "../../types/project"

export default function Projects() {
  const { project, loading, error } = useProject();

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  if (loading) {
    return (
      <section
        id="projects"
        className="relative z-10 px-5 py-24 sm:px-8 md:px-12 lg:px-20"
      >
        <div className="mx-auto flex max-w-6xl justify-center">
          <p className="text-sm tracking-widest text-white/40">
            LOADING PROJECTS...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="relative z-10 px-5 py-24 sm:px-8 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative z-10 px-5 py-24 sm:px-8 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-white/50">
            A collection of AI systems, backend infrastructure, and
            experiments I’ve built.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {project?.map((item) => (
            <ProjectCard
              key={item.id}
              project={item}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition hover:bg-white/[0.08] hover:text-white"
              aria-label="Close project details"
            >
              ×
            </button>

            {/* Header */}
            <div className="pr-12">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/70">
                {selectedProject.featured
                  ? "Featured Project"
                  : "Project"}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-white/60">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <div className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Branches */}
            {selectedProject.branches &&
              selectedProject.branches.length > 0 && (
                <div className="mt-7">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
                    Branches
                  </p>

                  <div className="space-y-2">
                    {selectedProject.branches.map((branch) => (
                      <a
                        key={branch.name}
                        href={branch.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition hover:border-cyan-400/20 hover:bg-white/[0.05]"
                      >
                        <div>
                          <p className="text-sm font-medium text-white/80">
                            {branch.label}
                          </p>

                          <p className="mt-1 text-xs text-white/40">
                            {branch.description}
                          </p>
                        </div>

                        <span className="text-white/30">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-md text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.2)]"
              >
                GitHub ↗
              </a>

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70 transition hover:bg-white/[0.08]"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

