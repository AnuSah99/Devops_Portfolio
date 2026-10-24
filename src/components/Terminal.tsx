import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  Trash2,
  CornerDownLeft,
  Copy,
  Check,
} from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  content: string;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'Antigravity Infrastructure Secure Shell v2.4.0 (x86_64-pc-linux-gnu)',
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'Zero-Trust Authentication: GRANTED // User: evaluator@authbridge-session',
    },
    {
      id: 'init-3',
      type: 'system',
      content: 'Type `help` to inspect available commands or click quick-run chips below.',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [isCopied, setIsCopied] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add input line
    const userLine: TerminalLine = {
      id: `in-${Date.now()}-${Math.random()}`,
      type: 'input',
      content: trimmed,
    };

    // Update command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    if (mainCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (mainCmd === 'matrix') {
      setMatrixMode((prev) => !prev);
      const outputLines: TerminalLine[] = [
        userLine,
        {
          id: `out-${Date.now()}`,
          type: 'system',
          content: `Matrix stream mode ${!matrixMode ? 'ACTIVATED' : 'DEACTIVATED'}.`,
        },
      ];
      setHistory((prev) => [...prev, ...outputLines]);
      setInputVal('');
      return;
    }

    if (mainCmd === 'echo') {
      const outputLines: TerminalLine[] = [
        userLine,
        {
          id: `out-${Date.now()}`,
          type: 'output',
          content: args || '',
        },
      ];
      setHistory((prev) => [...prev, ...outputLines]);
      setInputVal('');
      return;
    }

    if (mainCmd === 'date') {
      const outputLines: TerminalLine[] = [
        userLine,
        {
          id: `out-${Date.now()}`,
          type: 'output',
          content: new Date().toUTCString(),
        },
      ];
      setHistory((prev) => [...prev, ...outputLines]);
      setInputVal('');
      return;
    }

    const commandResult = TERMINAL_COMMANDS[mainCmd];

    if (commandResult) {
      const outputLines: TerminalLine[] = [
        userLine,
        ...commandResult.map((text, idx) => ({
          id: `out-${Date.now()}-${idx}`,
          type: 'output' as const,
          content: text,
        })),
      ];
      setHistory((prev) => [...prev, ...outputLines]);
    } else {
      const errorLines: TerminalLine[] = [
        userLine,
        {
          id: `err-${Date.now()}`,
          type: 'error',
          content: `bash: ${mainCmd}: command not recognized. Type 'help' to view valid commands.`,
        },
      ];
      setHistory((prev) => [...prev, ...errorLines]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextPointer =
          historyPointer === -1
            ? commandHistory.length - 1
            : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer !== -1) {
        const nextPointer = historyPointer + 1;
        if (nextPointer < commandHistory.length) {
          setHistoryPointer(nextPointer);
          setInputVal(commandHistory[nextPointer]);
        } else {
          setHistoryPointer(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickCommands = [
    'help',
    'about',
    'skills',
    'experience',
    'projects',
    'pipeline',
    'status',
    'contact',
    'clear',
  ];

  const handleCopyTranscript = () => {
    const text = history.map((h) => (h.type === 'input' ? `$ ${h.content}` : h.content)).join('\n');
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 relative bg-[#06090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <TerminalIcon className="h-3.5 w-3.5" />
            <span>06 // INTERACTIVE CLI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Interactive Portfolio Terminal
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Execute direct shell commands to query Anu's infrastructure background, technical competencies, and DevSecOps pipelines.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div
          className={`rounded-2xl border ${
            matrixMode ? 'border-emerald-400 shadow-emerald-500/30' : 'border-slate-800 shadow-2xl'
          } bg-[#070b12]/95 backdrop-blur-xl overflow-hidden scanline-overlay transition-all`}
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="ml-3 text-xs font-mono text-slate-300 font-medium">
                anu@authbridge-infra:~ (bash / tty1)
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleCopyTranscript}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                title="Copy terminal session"
              >
                {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setHistory([])}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
                title="Clear screen"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen & Logs */}
          <div
            className="p-4 sm:p-6 font-mono text-xs sm:text-xs leading-relaxed h-[380px] sm:h-[420px] overflow-y-auto space-y-2 select-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line) => {
              if (line.type === 'input') {
                return (
                  <div key={line.id} className="flex items-start space-x-2 text-white">
                    <span className="text-emerald-400 select-none">anu@infra:~$</span>
                    <span className="font-semibold">{line.content}</span>
                  </div>
                );
              }
              if (line.type === 'error') {
                return (
                  <div key={line.id} className="text-rose-400 pl-4 py-0.5">
                    {line.content}
                  </div>
                );
              }
              if (line.type === 'system') {
                return (
                  <div key={line.id} className="text-cyan-400/90 pl-1 py-0.5 text-[11px]">
                    {line.content}
                  </div>
                );
              }
              return (
                <div
                  key={line.id}
                  className={`pl-1 py-0.5 whitespace-pre-wrap ${
                    line.content.startsWith('•') || line.content.startsWith('[')
                      ? 'text-emerald-300'
                      : line.content.includes('===') || line.content.includes('---')
                      ? 'text-cyan-400 font-bold'
                      : line.content.includes('ERROR')
                      ? 'text-rose-400'
                      : 'text-slate-300'
                  }`}
                >
                  {line.content}
                </div>
              );
            })}

            {/* Active Input Line */}
            <div className="flex items-center space-x-2 text-slate-100 pt-2">
              <span className="text-emerald-400 select-none font-bold">anu@infra:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-xs text-cyan-200 placeholder-slate-600 focus:ring-0 p-0"
                placeholder="type 'help' or command..."
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal input prompt"
              />
              <button
                type="button"
                onClick={() => handleCommand(inputVal)}
                className="text-slate-500 hover:text-emerald-400 sm:hidden"
                aria-label="Send Command"
              >
                <CornerDownLeft className="h-3.5 w-3.5" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Quick-Command Buttons Footer */}
          <div className="p-3 bg-[#0a0f1c] border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 mr-1 hidden sm:inline">
              QUICK_CMDS:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-300 text-xs font-mono transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
