'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import SectionReveal from '@/components/ui/SectionReveal';

interface AnalysisResult {
  score: number;
  summary: string;
  matched: string[];
  missing: string[];
  verdict: string;
}

function ScoreRing({ score }: { score: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dash = (score / 100) * circumference;
  const color = score >= 75 ? '#10b981' : score >= 50 ? '#7c3aed' : '#f59e0b';

  return (
    <div className="relative flex items-center justify-center w-28 h-28">
      <svg className="absolute inset-0 -rotate-90" width="112" height="112" viewBox="0 0 112 112">
        <circle cx="56" cy="56" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <motion.circle
          cx="56" cy="56" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - dash }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="text-center">
        <motion.p
          className="text-2xl font-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color }}
        >
          {score}%
        </motion.p>
        <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>match</p>
      </div>
    </div>
  );
}

export default function JDAnalyzer() {
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function analyze() {
    if (!jobDescription.trim() || loading) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      });

      if (!res.ok) throw new Error('Analysis failed');
      const data = await res.json();
      setResult(data);
    } catch {
      setError('Failed to analyze. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const verdictColor = result
    ? result.score >= 75 ? '#10b981'
      : result.score >= 50 ? '#7c3aed'
      : '#f59e0b'
    : '#7c3aed';

  return (
    <section id="jd-analyzer" className="px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles size={22} style={{ color: '#7c3aed' }} />
            <div>
              <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
                AI Job Match Analyzer
              </h2>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Paste any job description — AI will score how well my profile matches it
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input */}
            <div className="portfolio-panel rounded-2xl p-5 flex flex-col gap-4">
              <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--text-secondary)' }}>
                Job Description
              </label>
              <textarea
                value={jobDescription}
                onChange={e => setJobDescription(e.target.value)}
                placeholder="Paste a job description here..."
                rows={10}
                className="flex-1 rounded-xl p-3 text-sm resize-none outline-none"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-primary)',
                  minHeight: 200,
                }}
              />
              <button
                onClick={analyze}
                disabled={loading || !jobDescription.trim()}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white disabled:opacity-40 transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Analyze Match
                  </>
                )}
              </button>
              {error && <p className="text-xs text-red-400">{error}</p>}
            </div>

            {/* Results */}
            <div className="portfolio-panel rounded-2xl p-5 flex flex-col gap-5">
              <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--text-secondary)' }}>
                Match Analysis
              </label>

              <AnimatePresence mode="wait">
                {!result && !loading && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex items-center justify-center"
                    style={{ minHeight: 200 }}
                  >
                    <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
                      Results will appear here after analysis ✦
                    </p>
                  </motion.div>
                )}

                {loading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex items-center justify-center"
                    style={{ minHeight: 200 }}
                  >
                    <div className="text-center">
                      <Loader2 size={32} className="animate-spin mx-auto mb-3" style={{ color: '#7c3aed' }} />
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Analyzing with AI...</p>
                    </div>
                  </motion.div>
                )}

                {result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4"
                  >
                    {/* Score + verdict */}
                    <div className="flex items-center gap-5">
                      <ScoreRing score={result.score} />
                      <div>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                          style={{ background: `${verdictColor}22`, color: verdictColor, border: `1px solid ${verdictColor}44` }}
                        >
                          {result.verdict}
                        </span>
                        <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {result.summary}
                        </p>
                      </div>
                    </div>

                    {/* Matched skills */}
                    {result.matched.length > 0 && (
                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-semibold mb-2" style={{ color: '#10b981' }}>
                          <CheckCircle2 size={13} /> Matched Skills
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {result.matched.map(s => (
                            <span key={s} className="px-2 py-1 rounded-full text-xs" style={{ background: '#10b98122', color: '#10b981', border: '1px solid #10b98144' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Missing skills */}
                    {result.missing.length > 0 && (
                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-semibold mb-2" style={{ color: '#f59e0b' }}>
                          <XCircle size={13} /> Skills to Develop
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {result.missing.map(s => (
                            <span key={s} className="px-2 py-1 rounded-full text-xs" style={{ background: '#f59e0b22', color: '#f59e0b', border: '1px solid #f59e0b44' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
