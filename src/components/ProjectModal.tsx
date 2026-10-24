import React, { useEffect } from 'react';
import { X, Github, Shield, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090d15] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
      >
        {/* Header bar */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                {project.isDemo ? 'ARCHITECTURE SPEC' : 'VERIFIED PROJECT'}
              </span>
              <span className="text-xs font-mono text-cyan-400">{project.category}</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white mt-1 font-mono">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tagline & Description */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-emerald-400">{project.tagline}</p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.description}</p>
        </div>

        {/* ASCII Architecture Blueprint Diagram */}
        {project.architectureDiagram && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span>Architectural Blueprint Flow:</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#05070c] border border-slate-800 font-mono text-[11px] sm:text-xs text-emerald-300 overflow-x-auto leading-relaxed scanline-overlay">
              {project.architectureDiagram.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Highlights */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span>DevSecOps & Guardrail Highlights:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.securityHighlights.map((sec, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start space-x-2"
              >
                <span className="text-cyan-400 font-bold shrink-0">🛡</span>
                <span>{sec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-purple-400" />
            <span>Implementation Details:</span>
          </h4>
          <ul className="space-y-1.5">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <span className="text-[11px] font-mono text-slate-500">
            {project.metricsPlaceholder}
          </span>
          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Profile</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
