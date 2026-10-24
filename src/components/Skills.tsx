import React, { useState, useMemo } from 'react';
import {
  Cloud,
  Layers,
  Terminal,
  GitBranch,
  ShieldCheck,
  Activity,
  Search,
  Code2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    Cloud,
    Layers,
    Terminal,
    GitBranch,
    ShieldCheck,
    Activity,
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      const filteredSkills = cat.skills.filter((skill) => {
        const matchesCategory = activeCategory === 'all' || cat.id === activeCategory;
        const matchesSearch =
          searchQuery === '' ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          cat.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      });

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  const totalFilteredSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="py-20 relative bg-[#070b12]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="h-3.5 w-3.5" />
            <span>03 // TECHNICAL STACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Verified Technical Competencies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Confirmed skills across cloud architecture, declarative infrastructure, systems engineering, continuous delivery, and shift-left cybersecurity.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              ALL DOMAINS
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Terraform, IAM)..."
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-emerald-500/60 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skill Count Indicator */}
        <div className="text-xs font-mono text-slate-500 mb-6 flex items-center justify-between">
          <span>ACTIVE QUERY RESULTS: {totalFilteredSkills} SKILLS</span>
          <span className="text-emerald-400 font-semibold">STATUS: CONFIRMED PRODUCTION EXPERIENCE</span>
        </div>

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComp = iconMap[cat.iconName] || Terminal;
            return (
              <div
                key={cat.id}
                className="rounded-xl bg-[#090e17]/90 border border-slate-800/80 p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/80 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-mono">{cat.name}</h3>
                      <p className="text-[11px] text-slate-400 truncate max-w-[220px]">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List in Category */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-850 hover:border-emerald-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                              skill.level === 'Proficient'
                                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-slate-400 mt-1 pl-3 leading-snug">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>TAG: {cat.id.toUpperCase()}</span>
                  <span className="text-emerald-400">CONFIRMED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
