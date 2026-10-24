import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  Shield,
  Terminal,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-[#06090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>04 // ARCHITECTURAL SHOWCASES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Infrastructure & DevSecOps Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Production-oriented architectures showcasing multi-tier AWS deployments, automated DevSecOps pipelines, and enterprise Linux telemetry.
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400/90 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            <Sparkles className="h-3 w-3" />
            <span>Showcase Notice: Projects marked as architecture until verified with live production repositories.</span>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="cyber-card rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                  <span className="text-[11px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {/* DEMO SPEC */}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-xs sm:text-xs text-slate-400 font-mono leading-relaxed">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Security Highlights preview */}
                <div className="mt-5 p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 font-semibold">
                    <Shield className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Security & Reliability Focus:</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {project.securityHighlights[0]}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold group-hover:underline"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>Inspect Blueprint</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blueprint Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
