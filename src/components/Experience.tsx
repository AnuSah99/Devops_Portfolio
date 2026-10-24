import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {

  return (
    <section id="experience" className="py-20 relative bg-[#06090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="h-3.5 w-3.5" />
            <span>02 // CAREER TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Operational Impact
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on track record in high-stakes infrastructure, cloud provisioning, enterprise systems administration, and production reliability.
          </p>
          <div className="mt-2 inline-block text-[11px] font-mono text-slate-500 bg-slate-900/60 px-3 py-1 rounded border border-slate-800">
            Note: Tenures & dates are presented as editable placeholders to update with exact employment records.
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical central guide line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Marker */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#06090e] border-2 border-emerald-400 items-center justify-center z-10 glow-neon">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden lg:block w-1/2" />

                  {/* Card Container */}
                  <div className="w-full lg:w-1/2 lg:px-8">
                    <div className="cyber-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700 relative overflow-hidden group">
                      {/* Top Ribbon */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                              {exp.company}
                            </span>
                            {exp.isCurrent && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                                CURRENT ROLE
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                            {exp.role}
                          </div>
                        </div>

                        <div className="text-right text-xs font-mono space-y-1">
                          <div className="flex items-center space-x-1.5 text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                            <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center justify-end space-x-1 text-slate-500 text-[11px]">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-5 space-y-2.5">
                        <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Core Engineering Responsibilities:</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-xs text-slate-300 leading-relaxed">
                              <span className="text-emerald-400 mt-1 shrink-0 font-mono text-[10px]">
                                ❯
                              </span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements (Realistic / Verifiable) */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-slate-800/80">
                          <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                            <span>Notable Contributions:</span>
                          </h4>
                          <div className="space-y-1.5">
                            {exp.achievements.map((ach, i) => (
                              <div
                                key={i}
                                className="text-xs text-slate-300 flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/60"
                              >
                                <span className="text-amber-400 font-bold">✓</span>
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="mt-5 pt-4 border-t border-slate-800/80">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
