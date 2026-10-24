import React from 'react';
import {
  ShieldCheck,
  Cloud,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Infrastructure as Code (IaC)',
      description:
        'Eliminating manual console drift by modeling cloud topology through modular, auditable Terraform configurations with remote state locking.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      icon: ShieldCheck,
      title: 'Shift-Left DevSecOps',
      description:
        'Embedding automated security gates directly into CI/CD pipelines—integrating container vulnerability scans (Trivy), secrets scanning, and least-privilege IAM.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud High Availability',
      description:
        'Architecting resilient AWS multi-tier environments across multiple Availability Zones, automated scaling groups, and resilient RDS backends.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Activity,
      title: 'Telemetry & Observability',
      description:
        'Deploying proactive metric collection, CloudWatch composite alarms, centralized log aggregations, and rapid incident response procedures.',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-[#070b12]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="h-3.5 w-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Engineering Resilient Systems with Security by Design
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive look at my background, operating philosophy, and infrastructure approach.
          </p>
        </div>

        {/* Narrative & Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Narrative (8 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-xl cyber-card space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2 font-mono">
                <span className="text-emerald-400">&gt;</span>
                <span>The Engineering Philosophy</span>
              </h3>
              <p>
                With <strong className="text-white font-semibold">4+ years of hands-on infrastructure experience</strong>,
                my career spans from foundational enterprise systems administration at{' '}
                <span className="text-cyan-300 font-mono">Microland</span> to architecting modern cloud-native,
                security-hardened environments at{' '}
                <span className="text-emerald-300 font-mono">AuthBridge</span>.
              </p>
              <p>
                I view infrastructure as code, not servers to manually maintain. By codifying topology in{' '}
                <span className="text-slate-100 font-medium">Terraform</span> and baking automated validation into{' '}
                <span className="text-slate-100 font-medium">CI/CD pipelines</span>, I eliminate operational drift,
                minimize human error, and enable rapid, repeatable provisioning.
              </p>
              <p>
                In the DevSecOps realm, my focus is practical: shifting security checks left to catch CVEs in containers
                (using scanners like <span className="text-slate-100 font-medium">Trivy</span>), maintaining strict{' '}
                <span className="text-slate-100 font-medium">IAM least-privilege</span> boundaries, and hardening Linux
                operating systems against modern threat vectors.
              </p>
            </div>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Declarative & Modular</h4>
                  <p className="text-xs text-slate-400 mt-1">Reusable Terraform modules with clean inputs, outputs, and remote state locks.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Linux Deep Tuning</h4>
                  <p className="text-xs text-slate-400 mt-1">Kernel optimizations, network socket configuration, systemd services, and Bash scripts.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero-Trust Cloud IAM</h4>
                  <p className="text-xs text-slate-400 mt-1">Short-lived credentials, role-based access, and isolated network perimeters.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Operational Reliability</h4>
                  <p className="text-xs text-slate-400 mt-1">Actionable alerts that wake engineers only for genuine degradation, avoiding alert fatigue.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specs / Data Sheet (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-[#090d15] p-5 shadow-xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="h-4 w-4" />
                  <span>SYSTEM_SPEC // ANU_KUMAR_SAH</span>
                </span>
                <span className="text-[10px] text-slate-500">v4.0.0</span>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">ENGINEER_NAME:</span>
                  <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">CURRENT_ROLE:</span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.currentRole}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">CURRENT_ORG:</span>
                  <span className="text-white">{PERSONAL_INFO.currentCompany}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">PREVIOUS_ORG:</span>
                  <span className="text-slate-300">{PERSONAL_INFO.previousCompany} (System Eng.)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">EXPERIENCE:</span>
                  <span className="text-cyan-400 font-bold">{PERSONAL_INFO.experienceYears}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">CLOUD_PLATFORM:</span>
                  <span className="text-white">Amazon Web Services (AWS)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">IAC_TOOL:</span>
                  <span className="text-white">Terraform (HCL)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">DISPATCH_EMAIL:</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-emerald-400 hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">AVAILABILITY:</span>
                  <span className="text-emerald-300 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Open to Discussions
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500">
                <span>SECURITY LEVEL: ZERO-TRUST</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center ${pillar.color} mb-3.5 group-hover:scale-105 transition-transform`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-mono">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
