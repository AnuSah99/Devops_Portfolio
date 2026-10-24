import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Clock,
  Terminal,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link as fallback or direct action
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Infrastructure Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `From: ${name} (${senderEmail})\n\nMessage:\n${message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.open(mailtoUrl, '_blank');
      // Reset after feedback
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070b12]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="h-3.5 w-3.5" />
            <span>07 // SECURE COMMUNICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact & Discussion
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in discussing cloud architecture, DevOps automation, or infrastructure reliability? Reach out via direct email, LinkedIn, or the dispatch terminal below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl cyber-card border border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                    Direct Email Endpoint
                  </h3>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition-colors flex items-center space-x-1"
                >
                  <span>Mailto</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                    LinkedIn
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Connect professionally & view network recommendations
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Github className="h-4 w-4" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">
                    GitHub
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Inspect code commits, Terraform configurations & scripts
                  </p>
                </div>
              </a>
            </div>

            {/* Quick Context Card */}
            <div className="p-4 rounded-xl bg-[#090d15] border border-slate-800 font-mono text-xs space-y-2 text-slate-400">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Location: India (Open to Remote / Hybrid Roles)</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-purple-400" />
                <span>Direct Verification: code.anukrsah@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-xs text-white font-bold tracking-wider">
                    DISPATCH_MESSAGE // PROTOCOL_READY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">ENCRYPTION: SSL/TLS</span>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Mail Client Dispatched Successfully!</span>
                  </div>
                  <p className="text-slate-300">
                    Your default email client has been opened with your pre-filled inquiry. You can also directly write to <strong>code.anukrsah@gmail.com</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Name / Organization *
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anu Sah (Infra Engineer)"
                      className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Contact Email *
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. jdoe@company.com"
                      className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-subject"
                    className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="inquiry-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Infrastructure Role / Cloud Architecture Consultation"
                    className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5"
                  >
                    Message Payload *
                  </label>
                  <textarea
                    id="inquiry-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share role details, infrastructure challenges, or meeting requests..."
                    className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Direct routing to code.anukrsah@gmail.com
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
