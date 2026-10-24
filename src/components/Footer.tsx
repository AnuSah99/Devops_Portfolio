import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-slate-800 text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-sm font-bold text-white flex items-center gap-1">
                <span className="text-emerald-400">anu</span>
                <span className="text-slate-500">@</span>
                <span className="text-cyan-400">infra</span>
                <span className="text-slate-500">:~$</span>
              </span>
              <p className="text-xs text-slate-400">
                {PERSONAL_INFO.name} — Infrastructure Engineer (4+ Years Exp)
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1 font-mono text-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & System Telemetry */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">INFRA_STATUS: 100% OPERATIONAL // NO DRIFT DETECTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
