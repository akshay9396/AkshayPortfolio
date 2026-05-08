'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Github,
  GraduationCap,
  IdCard,
  Languages,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';

import { resume } from '@/data/resume';
import GradientText from '@/components/ui/GradientText';
import SectionReveal from '@/components/ui/SectionReveal';
import JDAnalyzer from '@/components/sections/JDAnalyzer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const downloadFilename = `${resume.name.replace(/\s+/g, '_')}_Resume.pdf`;

function SkillGroup({ title, items }: { title: string; items: readonly string[] }) {
  if (!items.length) return null;

  return (
    <div className="portfolio-panel rounded-2xl p-5">
      <h4 className="text-sm uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--text-secondary)' }}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-primary)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioCanvas() {
  const reduced = useReducedMotion();
  const totalExperienceBullets = resume.experience.reduce((count, exp) => count + exp.bullets.length, 0);
  const totalProjectBullets = resume.projects.reduce((count, project) => count + project.bullets.length, 0);

  const profileLinks = [
    { label: 'LinkedIn', href: resume.contact.linkedin, icon: ExternalLink },
    { label: 'GitHub', href: 'https://github.com/akshay9396', icon: Github },
  ];

  const skillGroups = Object.entries(resume.skills).filter(
    ([group, items]) => group !== 'languages' && items.length > 0
  );

  return (
    <main className="portfolio-root relative overflow-hidden">
      <div className="ambient-orb w-96 h-96 -top-20 -left-20" style={{ background: 'rgba(245,158,11,0.2)' }} />
      <div className="ambient-orb w-[30rem] h-[30rem] top-[16rem] -right-28" style={{ background: 'rgba(14,165,166,0.22)' }} />

      <section id="hero" className="pt-28 pb-14 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <SectionReveal className="lg:col-span-7">
            <div className="portfolio-panel rounded-3xl p-7 sm:p-10 h-full">
              <p
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
                style={{
                  border: '1px solid var(--border-glass)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Sparkles size={14} />
                Open to AI / Software Roles
              </p>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mt-5 leading-[0.9] tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {resume.name}
              </h1>

              <p className="text-lg sm:text-2xl mt-5 font-semibold max-w-3xl">
                <GradientText>{resume.experience[0]?.role ?? 'AI / ML Engineer'}</GradientText>
              </p>

              <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Software Developer and AI/ML Engineer with hands-on experience at OneVision Software AG, AVL, and Accenture. Built production computer-vision pipelines, optimized edge inference with TensorRT/ONNX, and delivered ML workflows with CI/CD and cloud tooling.
              </p>

              <p className="mt-3 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Targeting Software Developer, AI/ML Engineer, Data Engineer, and Computer Vision Engineer roles. Also open to MLOps, DevOps, Data Analytics, and ADAS-focused positions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 max-w-3xl">
                {['Software Developer', 'AI/ML Engineer', 'Data Engineer', 'Computer Vision'].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ border: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.04)', color: 'var(--text-primary)' }}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    color: '#04111e',
                    background: 'linear-gradient(120deg, #f59e0b, #0ea5a6)',
                  }}
                >
                  View Experience
                </button>

                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    border: '1px solid var(--border-glass)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Skip to Projects
                </button>

                <a
                  href="/resume.pdf"
                  download={downloadFilename}
                  className="px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    border: '1px solid var(--border-glass)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-5" delay={0.08}>
            <div className="portfolio-panel rounded-3xl p-6 h-full flex flex-col gap-6">
              {/* Recruiter Snapshot */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em]" style={{ color: 'var(--text-secondary)' }}>
                  Recruiter Snapshot
                </h3>

                <div className="mt-5 space-y-4 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <p className="flex items-center gap-2"><MapPin size={16} /> {resume.experience[0]?.location ?? 'Germany'}</p>
                  <p className="flex items-center gap-2"><Mail size={16} /> {resume.contact.email}</p>
                  <p className="flex items-center gap-2"><Phone size={16} /> {resume.contact.phone}</p>
                </div>

                <div className="mt-6 space-y-3">
                  {profileLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      Open {label} <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: 'var(--border-glass)' }} />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)' }}>
                  <p className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--text-secondary)' }}>Experience</p>
                  <p className="text-2xl font-black mt-1" style={{ color: 'var(--text-primary)' }}>{resume.experience.length}</p>
                </div>
                <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)' }}>
                  <p className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--text-secondary)' }}>Projects</p>
                  <p className="text-2xl font-black mt-1" style={{ color: 'var(--text-primary)' }}>{resume.projects.length}</p>
                </div>
                <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)' }}>
                  <p className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--text-secondary)' }}>Delivery Wins</p>
                  <p className="text-2xl font-black mt-1" style={{ color: 'var(--text-primary)' }}>{totalExperienceBullets}</p>
                </div>
                <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)' }}>
                  <p className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--text-secondary)' }}>Project Highlights</p>
                  <p className="text-2xl font-black mt-1" style={{ color: 'var(--text-primary)' }}>{totalProjectBullets}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: 'var(--border-glass)' }} />

              {/* Core Stack Heatmap */}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--text-secondary)' }}>
                  Core Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Python',      heat: 5 },
                    { label: 'PyTorch',     heat: 5 },
                    { label: 'TensorRT',    heat: 4 },
                    { label: 'YOLO',        heat: 4 },
                    { label: 'OpenCV',      heat: 5 },
                    { label: 'Docker',      heat: 4 },
                    { label: 'MLflow',      heat: 4 },
                    { label: 'FastAPI',     heat: 3 },
                    { label: 'RAG',         heat: 4 },
                    { label: 'AWS',         heat: 3 },
                    { label: 'LangChain',   heat: 3 },
                    { label: 'CI/CD',       heat: 4 },
                  ].map(({ label, heat }) => {
                    const opacity = 0.06 + (heat / 5) * 0.22;
                    const textOpacity = 0.55 + (heat / 5) * 0.45;
                    return (
                      <span
                        key={label}
                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{
                          background: `rgba(245,158,11,${opacity})`,
                          color: `rgba(245,158,11,${textOpacity})`,
                          border: `1px solid rgba(245,158,11,${opacity * 1.4})`,
                        }}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="experience" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="portfolio-heading">Experience Timeline</h2>
          </SectionReveal>

          <div className="mt-7 space-y-4">
            {resume.experience.map((exp, index) => (
              <SectionReveal key={`${exp.company}-${exp.period}`} delay={Math.min(index * 0.06, 0.24)}>
                <article className="portfolio-panel rounded-3xl p-6 sm:p-7 grid lg:grid-cols-4 gap-5">
                  <div className="lg:col-span-1">
                    <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                      <CalendarDays size={14} className="inline mr-2" />
                      {exp.period}
                    </p>
                    <p className="mt-3 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {exp.company}
                    </p>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {exp.location}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((point) => (
                        <li key={point} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: '#0ea5a6' }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="portfolio-heading">Project Blocks</h2>
          </SectionReveal>

          <div className="mt-7 grid md:grid-cols-2 gap-4">
            {resume.projects.map((project, index) => (
              <SectionReveal key={project.title} delay={Math.min(index * 0.08, 0.24)}>
                <article className={`portfolio-panel rounded-3xl p-6 h-full ${index === 0 ? 'md:col-span-2' : ''}`}>
                  <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl font-black mt-2" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((point) => (
                      <li key={point} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                        <ArrowUpRight size={15} className="mt-1 shrink-0" style={{ color: '#f59e0b' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="portfolio-heading">Technical Stack</h2>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="mt-7 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {([
                {
                  key: 'programmingLanguages',
                  label: 'Programming Languages',
                  color: '#10b981',
                  bg: 'rgba(16,185,129,0.10)',
                  border: 'rgba(16,185,129,0.22)',
                  items: resume.skills.programmingLanguages,
                },
                {
                  key: 'mlFrameworks',
                  label: 'ML Frameworks',
                  color: '#10b981',
                  bg: 'rgba(16,185,129,0.10)',
                  border: 'rgba(16,185,129,0.22)',
                  items: resume.skills.mlFrameworks,
                },
                {
                  key: 'computerVision',
                  label: 'Computer Vision',
                  color: '#06b6d4',
                  bg: 'rgba(6,182,212,0.10)',
                  border: 'rgba(6,182,212,0.22)',
                  items: resume.skills.computerVision,
                },
                {
                  key: 'ml',
                  label: 'ML Concepts & Edge AI',
                  color: '#06b6d4',
                  bg: 'rgba(6,182,212,0.10)',
                  border: 'rgba(6,182,212,0.22)',
                  items: resume.skills.ml,
                },
                {
                  key: 'genai',
                  label: 'Generative AI & LLMs',
                  color: '#8b5cf6',
                  bg: 'rgba(139,92,246,0.10)',
                  border: 'rgba(139,92,246,0.22)',
                  items: resume.skills.genai,
                },
                {
                  key: 'agentic',
                  label: 'Agentic AI',
                  color: '#f59e0b',
                  bg: 'rgba(245,158,11,0.10)',
                  border: 'rgba(245,158,11,0.22)',
                  items: resume.skills.agentic,
                },
                {
                  key: 'cloud',
                  label: 'Cloud Platforms',
                  color: '#7c3aed',
                  bg: 'rgba(124,58,237,0.10)',
                  border: 'rgba(124,58,237,0.22)',
                  items: resume.skills.cloud,
                },
                {
                  key: 'devops',
                  label: 'CI/CD & DevOps',
                  color: '#ef4444',
                  bg: 'rgba(239,68,68,0.10)',
                  border: 'rgba(239,68,68,0.22)',
                  items: resume.skills.devops,
                },
                {
                  key: 'databases',
                  label: 'Databases & Storage',
                  color: '#06b6d4',
                  bg: 'rgba(6,182,212,0.10)',
                  border: 'rgba(6,182,212,0.22)',
                  items: resume.skills.databases,
                },
              ] as const).map(({ key, label, color, bg, border, items }) => (
                <motion.div
                  key={key}
                  className="portfolio-panel rounded-3xl p-5 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: color, boxShadow: `0 0 6px ${color}` }}
                    />
                    <h4
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color }}
                    >
                      {label}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: bg, color, border: `1px solid ${border}` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="education" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="portfolio-heading">Education</h2>
          </SectionReveal>

          <div className="mt-7 grid md:grid-cols-2 gap-4">
            {resume.education.map((item, index) => (
              <SectionReveal key={`${item.institution}-${item.period}`} delay={Math.min(index * 0.08, 0.16)}>
                <article className="portfolio-panel rounded-3xl p-6 h-full">
                  <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                    <GraduationCap size={14} className="inline mr-2" />
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.institution}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="portfolio-heading">Certifications</h2>
          </SectionReveal>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {resume.certifications.map((cert, index) => (
              <SectionReveal key={cert.title} delay={Math.min(index * 0.06, 0.24)}>
                <article className="portfolio-panel rounded-3xl p-6 h-full">
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    <Briefcase size={14} className="inline mr-2" />
                    {cert.title}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="publication" className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="portfolio-heading">Publication & License</h2>
          </SectionReveal>

          <div className="mt-7 grid md:grid-cols-2 gap-4">
            <SectionReveal>
              <article className="portfolio-panel rounded-3xl p-6 h-full">
                <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                  Publication
                </p>
                <h3 className="mt-3 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                  {resume.publication.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {resume.publication.journal} · {resume.publication.volume} · {resume.publication.date}
                </p>
                <a href={resume.publication.link} target="_blank" rel="noopener noreferrer" className="portfolio-link mt-4">
                  View Publication <ExternalLink size={16} />
                </a>
              </article>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <article className="portfolio-panel rounded-3xl p-6 h-full">
                <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-secondary)' }}>
                  Additional Credentials
                </p>
                <div className="mt-4 space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <p className="flex items-center gap-2"><IdCard size={16} /> Driving License: {resume.drivingLicense}</p>
                  <p className="flex items-center gap-2"><Languages size={16} /> Languages: {resume.skills.languages.join(', ')}</p>
                </div>
              </article>
            </SectionReveal>
          </div>
        </div>
      </section>

      <JDAnalyzer />

      <section id="contact" className="px-6 py-14 pb-24">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="portfolio-panel rounded-3xl p-7 sm:p-10 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
                  Let&apos;s Connect
                </h2>
                <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Thanks for stopping by. If something here caught your eye — or you just want to connect — I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-3">
                <a href={`mailto:${resume.contact.email}`} className="portfolio-link">
                  Email Me <Mail size={16} />
                </a>
                <a href={`tel:${resume.contact.phone}`} className="portfolio-link">
                  Call Me <Phone size={16} />
                </a>
                <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  LinkedIn <ExternalLink size={16} />
                </a>
                <a href="https://github.com/akshay9396" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  GitHub <Github size={16} />
                </a>
              </div>
            </div>
          </SectionReveal>

          {!reduced && (
            <motion.div
              className="mt-8 text-xs tracking-[0.14em] uppercase"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Profile Engineered for clarity, credibility, and technical depth.
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
