'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronDown, Github } from 'lucide-react';
import GradientText from '@/components/ui/GradientText';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { resume } from '@/data/resume';

const [firstName, ...lastParts] = resume.name.split(' ');
const nameParts = [firstName, lastParts.join(' ')];
const downloadFilename = `${resume.name.replace(/\s+/g, '_')}_Resume.pdf`;

export default function Hero() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const gridY = useTransform(scrollY, [0, 500], [0, reduced ? 0 : -120]);
  const ringRotate = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 24]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 bg-grid-mesh" style={{ y: gridY }} />
      <div className="ambient-orb w-80 h-80 -top-14 -left-10" style={{ background: 'rgba(14,165,166,0.24)' }} />
      <div className="ambient-orb w-72 h-72 top-24 -right-10" style={{ background: 'rgba(245,158,11,0.18)' }} />

      <motion.div
        className="absolute w-[640px] h-[640px] rounded-full border border-white/10"
        style={{
          rotate: ringRotate,
          background: 'conic-gradient(from 160deg, rgba(14,165,166,0.10), rgba(245,158,11,0.08), rgba(14,165,166,0.10))',
          maskImage: 'radial-gradient(circle at center, transparent 53%, black 54%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs tracking-[0.18em] uppercase signature-glow"
          style={{
            background: 'rgba(6,11,20,0.5)',
            border: '1px solid var(--border-glass)',
            color: 'var(--text-secondary)',
          }}
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduced ? 0 : 0.08 }}
        >
          Applied AI · Computer Vision · ML Engineering
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-[0.95] tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {nameParts.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: reduced ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : i * 0.15, ease: 'easeOut' }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-xl sm:text-2xl font-semibold mb-7"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.58 }}
        >
          <GradientText>{resume.experience[0]?.role ?? 'AI / ML Engineer'}</GradientText>
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-base sm:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.72 }}
        >
          Building agentic AI systems, real-time ML pipelines, and production-grade computer vision solutions.
          M.Eng. graduate from {resume.education[0].institution} · Open to AI/ML, CV, and Software Engineer roles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.86 }}
        >
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-105 active:scale-95 signature-glow"
            style={{
              background: 'linear-gradient(135deg, #0ea5a6, #f59e0b)',
            }}
          >
            View Experience
          </button>
          <a
            href="/resume.pdf"
            download={downloadFilename}
            className="px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            style={{
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.22), 0 1px 2px rgba(255,255,255,0.04) inset',
            }}
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="https://github.com/akshay9396/twin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            style={{
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.22), 0 1px 2px rgba(255,255,255,0.04) inset',
            }}
          >
            <Github size={16} />
            Source Code
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ color: 'var(--text-secondary)' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
}
