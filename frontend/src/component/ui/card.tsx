
"use client";

import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-300 group-hover:bg-cyan-500/20" />

      <div className="relative">
        {/* Project type */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/70">
          {project.featured ? "Featured Project" : "Project"}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/50">
          {project.description}
        </p>

        {/* Technologies preview */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/30">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View details */}
        <div className="mt-7 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-white/25">
            View details
          </span>

          <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
            →
          </span>
        </div>
      </div>
    </article>
  );
}
