import React, { useState, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  Shield,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Simulated live typing terminal scripts
  const terminalScenarios = [
    {
      cmd: 'terraform plan -out=tfplan.binary',
      output: [
        'Refreshing Terraform state in AWS ap-south-1...',
        '  + module.vpc.aws_subnet.private_subnets[0..2] will be created',
        '  + module.security_groups.aws_security_group.app_sg will be created',
        '  + module.database.aws_db_instance.postgres_multi_az will be created',
        'Plan: 14 to add, 0 to change, 0 to destroy.',
        'State locked in DynamoDB table: tf-state-locks. Status: APPROVED.',
      ],
      tag: 'IaC Provisioning',
      tagColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    },
    {
      cmd: 'trivy image --severity HIGH,CRITICAL authbridge/microservice:v2.4',
      output: [
        '2026-10-24T15:30:00Z INFO Need to update DB',
        '2026-10-24T15:30:01Z INFO Vulnerability DB updated successfully',
        'Detecting vulnerabilities for authbridge/microservice:v2.4...',
        'Total: 0 (HIGH: 0, CRITICAL: 0)',
        'DevSecOps Gate Check: [PASSED] Zero critical CVEs found in base image.',
      ],
      tag: 'DevSecOps Scan',
      tagColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      cmd: 'kubectl get nodes -o wide --namespace=production',
      output: [
        'NAME                         STATUS   ROLES    AGE   VERSION   INTERNAL-IP',
        'ip-10-0-1-42.ap-south-1.ec2  Ready    worker   48d   v1.30.2   10.0.1.42',
        'ip-10-0-2-89.ap-south-1.ec2  Ready    worker   48d   v1.30.2   10.0.2.89',
        'ip-10-0-3-11.ap-south-1.ec2  Ready    worker   48d   v1.30.2   10.0.3.11',
        'Cluster Health: 100% HEALTHY // Auto-Scaling Target Tracking: BALANCED',
      ],
      tag: 'Cluster Telemetry',
      tagColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    },
    {
      cmd: 'aws sts get-caller-identity && cis-benchmark --check',
      output: [
        'UserId: AROA45EXAMPLE99INFRA:anu.sah',
        'Account: 123456789012 (AuthBridge Infrastructure Core)',
        'Arn: arn:aws:iam::123456789012:assumed-role/InfraEngineer-Prod/anu.sah',
        'CIS Linux Benchmark v2.0: 100% compliant [Enforced via Bash & Auditd]',
        'Session valid. Zero-Trust Access Token active.',
      ],
      tag: 'IAM & Compliance',
      tagColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    },
  ];

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const currentScenario = terminalScenarios[activeScenarioIdx];
    let charIndex = 0;
    setDisplayedText('');
    setShowOutput(false);
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (charIndex <= currentScenario.cmd.length) {
        setDisplayedText(currentScenario.cmd.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setShowOutput(true);

        // Wait before transitioning to next scenario
        const timeout = setTimeout(() => {
          setActiveScenarioIdx((prev) => (prev + 1) % terminalScenarios.length);
        }, 5000);

        return () => clearTimeout(timeout);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, [activeScenarioIdx]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Security clearance badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.name}</span>
                <span className="mx-2 text-slate-600">|</span>
                <span className="text-cyan-400 font-medium">{PERSONAL_INFO.experienceYears} Experience</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engineering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Secure, Scalable
              </span>{' '}
              & Automated Infrastructure
            </h1>

            {/* Sub-headline / Spec breakdown */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs sm:text-sm">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-emerald-300">
                Infrastructure Engineer @ {PERSONAL_INFO.currentCompany}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-cyan-300">
                Ex-{PERSONAL_INFO.previousCompany}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-purple-300">
                AWS Cloud
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-amber-300">
                DevSecOps
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Architecting resilient cloud ecosystems, declarative Terraform automation, and shift-left DevSecOps security pipelines. Dedicated to zero-downtime operations, Linux performance tuning, and least-privilege cloud governance.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-emerald-300 font-mono text-sm tracking-wide transition-all duration-200"
              >
                <TerminalIcon className="h-4 w-4 text-emerald-400" />
                <span>Launch CLI Shell</span>
              </a>

              <a
                href="#pipeline"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 text-cyan-300 font-mono text-sm tracking-wide transition-all"
              >
                <Shield className="h-4 w-4 text-cyan-400" />
                <span>DevSecOps Flow</span>
              </a>
            </div>

            {/* Direct Email & Channels strip */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-md">
                <span className="text-slate-500">Contact:</span>
                <span className="text-slate-200">{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-1 p-1 hover:text-emerald-400 transition-colors"
                  aria-label="Copy Email"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center space-x-3 text-slate-400">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors underline decoration-slate-700 underline-offset-4"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors underline decoration-slate-700 underline-offset-4"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated DevOps Terminal Window */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-750 bg-[#090d14]/95 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden scanline-overlay">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d131f] border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 font-medium">
                    infra-session: active [bash]
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded border ${terminalScenarios[activeScenarioIdx].tagColor}`}
                  >
                    {terminalScenarios[activeScenarioIdx].tag}
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-xs leading-relaxed min-h-[300px] max-h-[360px] overflow-y-auto flex flex-col justify-between">
                <div>
                  {/* System Header */}
                  <div className="text-slate-500 text-[11px] mb-3 pb-2 border-b border-slate-800/80 flex items-center justify-between">
                    <span>HOST: aws-ap-south-1 // PROD BASTION</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      ENCRYPTED SSH
                    </span>
                  </div>

                  {/* Prompt & Current Command */}
                  <div className="flex items-start space-x-2 text-slate-100">
                    <span className="text-emerald-400 select-none">anu@infra:~$</span>
                    <span className="text-cyan-300 font-semibold break-all">
                      {displayedText}
                      {isTyping && (
                        <span className="inline-block w-2 h-4 ml-0.5 bg-emerald-400 align-middle animate-pulse"></span>
                      )}
                    </span>
                  </div>

                  {/* Command Output */}
                  {showOutput && (
                    <div className="mt-3 space-y-1.5 text-slate-300 transition-opacity duration-300">
                      {terminalScenarios[activeScenarioIdx].output.map((line, index) => (
                        <div
                          key={index}
                          className={`text-[11px] ${
                            line.includes('Plan:') || line.includes('PASSED') || line.includes('compliant')
                              ? 'text-emerald-300 font-semibold bg-emerald-950/20 px-1.5 py-0.5 rounded border border-emerald-900/40'
                              : line.includes('Total: 0')
                              ? 'text-cyan-300 font-semibold'
                              : line.includes('Refreshing') || line.includes('Detecting')
                              ? 'text-slate-400 italic'
                              : 'text-slate-300'
                          }`}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Scenario Navigation dots */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>SCENARIOS: [4/4 AUTOMATED]</span>
                  <div className="flex space-x-1.5">
                    {terminalScenarios.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveScenarioIdx(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === activeScenarioIdx
                            ? 'bg-emerald-400 scale-125 glow-neon'
                            : 'bg-slate-700 hover:bg-slate-500'
                        }`}
                        aria-label={`Jump to scenario ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick System Metric Badges */}
            <div className="grid grid-cols-3 gap-2.5 mt-4">
              <div className="bg-[#0b111a]/80 border border-slate-800/80 rounded-lg p-2.5 text-center">
                <div className="text-xs font-mono text-emerald-400 font-bold">4+ YEARS</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Hands-on Exp</div>
              </div>
              <div className="bg-[#0b111a]/80 border border-slate-800/80 rounded-lg p-2.5 text-center">
                <div className="text-xs font-mono text-cyan-400 font-bold">TERRAFORM</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">IaC Standard</div>
              </div>
              <div className="bg-[#0b111a]/80 border border-slate-800/80 rounded-lg p-2.5 text-center">
                <div className="text-xs font-mono text-purple-400 font-bold">DEVSECOPS</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Shift-Left Gate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
