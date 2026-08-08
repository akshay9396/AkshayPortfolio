'use client';

import { motion } from 'framer-motion';
import { resume } from '@/data/resume';
import SectionReveal from '@/components/ui/SectionReveal';

const CATEGORY_STYLES: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  languages: {
    label: 'Languages',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.12)',
  },
  databases: {
    label: 'Databases & Storage',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
  },
  programmingLanguages: {
    label: 'Programming Languages',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
  },
  mlFrameworks: {
    label: 'ML Frameworks',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
  },
  computerVision: {
    label: 'Computer Vision',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
  },
  ml: {
    label: 'ML Concepts & Edge AI',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
  },
  genai: {
    label: 'Generative AI & LLMs',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.12)',
  },
  agentic: {
    label: 'Agentic AI',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
  },
  cloud: {
    label: 'Cloud Platforms',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.12)',
  },
  devops: {
    label: 'CI/CD & DevOps',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
  },
  web: {
    label: 'Web Development',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
  },
  optimization: {
    label: 'Model Optimization & Edge Deployment',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.12)',
  },
  dataEngineering: {
    label: 'Data Engineering & Analytics',
    color: '#14b8a6',
    bg: 'rgba(20,184,166,0.12)',
  },
  autonomousSystems: {
    label: 'Autonomous Systems & ADAS',
    color: '#e11d48',
    bg: 'rgba(225,29,72,0.12)',
  },
  annotation: {
    label: 'Data Annotation',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
  },
  visualization: {
    label: 'Data Visualization & BI',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.12)',
  },
  aiAssistedDevelopment: {
    label: 'AI-Assisted Development',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
  },
};

const FALLBACK_STYLE = {
  label: 'Skills',
  color: '#64748b',
  bg: 'rgba(100,116,139,0.12)',
};

export default function Skills() {
  const entries = Object.entries(resume.skills) as [
    keyof typeof resume.skills,
    readonly string[]
  ][];

  return (
    <section>
      <h2
        className="text-3xl sm:text-4xl font-black mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Skills
      </h2>

      <div
        className="h-1 w-16 rounded-full mb-12"
        style={{
          background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {entries.map(([key, items], gi) => {
          const style = CATEGORY_STYLES[String(key)] ?? FALLBACK_STYLE;

          return (
            <SectionReveal key={key} delay={gi * 0.05}>
              <div className="glass rounded-2xl p-5 h-full">
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: style.color }}
                >
                  {style.label}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full font-medium"
                      style={{
                        background: style.bg,
                        color: style.color,
                      }}
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: si * 0.04,
                        duration: 0.2,
                        ease: 'backOut',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}