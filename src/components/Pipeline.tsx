import React, { useState, useEffect } from 'react';
import {
  GitBranch,
  Shield,
  Box,
  Search,
  Layers,
  Cloud,
  Activity,
  CheckCircle2,
  Lock,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { PIPELINE_STAGES } from '../data/portfolioData';
import { PipelineStage } from '../types/portfolio';

export const Pipeline: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage>(PIPELINE_STAGES[1]);
  const [activePulseIndex, setActivePulseIndex] = useState(0);

  // Auto-pulse through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePulseIndex((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stageIcons: Record<number, React.ElementType> = {
    1: GitBranch,
    2: Shield,
    3: Box,
    4: Search,
    5: Layers,
    6: Cloud,
    7: Activity,
  };

  return (
    <section id="pipeline" className="py-20 relative bg-[#070b12]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Shield className="h-3.5 w-3.5" />
            <span>05 // SHIFT-LEFT DEFENSE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Automated DevSecOps Pipeline Architecture
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Continuous integration and continuous delivery workflow with integrated security gates, automated vulnerability scans, and declarative infrastructure provisioning.
          </p>
        </div>

        {/* Interactive Pipeline Diagram Bar */}
        <div className="relative mb-12">
          {/* Connecting Data Bus Line */}
          <div className="hidden xl:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-emerald-500/40 -translate-y-1/2 z-0" />

          {/* Stages Grid / Horizontal Rail */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {PIPELINE_STAGES.map((stage, idx) => {
              const IconComp = stageIcons[stage.stepNumber] || Terminal;
              const isSelected = selectedStage.id === stage.id;
              const isPulsing = activePulseIndex === idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStage(stage)}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/10 -translate-y-1'
                      : isPulsing
                      ? 'bg-slate-900/90 border-cyan-400/80'
                      : 'bg-[#090e17]/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Step Number & Status Indicator */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-[10px] font-mono text-slate-400 font-bold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                      STAGE 0{stage.stepNumber}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        stage.status === 'passed'
                          ? 'bg-emerald-400'
                          : stage.status === 'running'
                          ? 'bg-cyan-400 animate-ping'
                          : 'bg-purple-400'
                      }`}
                      title={`Status: ${stage.status.toUpperCase()}`}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    <IconComp className="h-4 w-4" />
                  </div>

                  {/* Stage Name */}
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono leading-tight">
                      {stage.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                      {stage.shortDesc}
                    </p>
                  </div>

                  {/* Active Indicator bar */}
                  {isSelected && (
                    <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Deep-Dive Card */}
        <div className="rounded-2xl border border-slate-750 bg-[#090e17]/95 shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Detail (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                  STAGE 0{selectedStage.stepNumber} DEEP-DIVE
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  STATUS: {selectedStage.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-mono flex items-center gap-2">
                <span>{selectedStage.name}</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedStage.shortDesc}
              </p>

              {/* Security Gate Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-1.5">
                <div className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Enforced Security Gate Requirement:</span>
                </div>
                <div className="text-xs text-slate-200 font-mono">
                  {selectedStage.securityGate}
                </div>
              </div>

              {/* Engineering Checkpoints */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Automated Verification Criteria:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedStage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <span className="text-emerald-400 font-mono text-xs">✔</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Stage Tools & Terminal Spec (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl bg-[#05070c] border border-slate-800 p-4 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>PIPELINE_EXEC // STEP_{selectedStage.stepNumber}</span>
                  </span>
                  <span className="text-slate-500">CI_ID #8942</span>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="text-slate-400">$ ci-runner --stage="{selectedStage.name}"</div>
                  <div className="text-emerald-400">» Loaded security policies (OWASP & CIS)</div>
                  <div className="text-cyan-300">» Validating stage gates...</div>
                  <div className="text-emerald-300 font-bold">» GATE RESULT: 100% COMPLIANT</div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block mb-2">
                    Integrated Tooling Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedStage.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation buttons to cycle */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const prevIdx =
                      (selectedStage.stepNumber - 2 + PIPELINE_STAGES.length) %
                      PIPELINE_STAGES.length;
                    setSelectedStage(PIPELINE_STAGES[prevIdx]);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const nextIdx = selectedStage.stepNumber % PIPELINE_STAGES.length;
                    setSelectedStage(PIPELINE_STAGES[nextIdx]);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
