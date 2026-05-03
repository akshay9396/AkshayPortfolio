'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { resume } from '@/data/resume';

const nameParts = resume.name.split(' ');
const displayName = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
const firstName = nameParts[0];
const role = resume.experience[0]?.role ?? 'AI / ML Engineer';

export default function TwinFloatingButton() {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setNudge(true), 1500);
    const hide = setTimeout(() => setNudge(false), 5000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Business card pop-up */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 12, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.93 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="glass rounded-2xl p-4 flex flex-col gap-3"
            style={{
              width: 220,
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              border: '1px solid rgba(124,58,237,0.25)',
            }}
          >
            {/* Avatar + name */}
            <div className="flex items-center gap-3">
              <img
                src="/avatar.png"
                alt={firstName}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                style={{ border: '2px solid rgba(124,58,237,0.5)' }}
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                  {displayName}
                </p>
                <p className="text-xs truncate" style={{ color: '#7c3aed' }}>
                  {role}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'var(--border-glass)' }} />

            {/* Social links */}
            <div className="flex items-center justify-around">
              <a
                href={resume.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group"
                aria-label="LinkedIn"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(124,58,237,0.12)' }}
                >
                  <Linkedin size={16} style={{ color: '#7c3aed' }} />
                </div>
                <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>LinkedIn</span>
              </a>

              <a
                href="https://github.com/akshay9396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
                aria-label="GitHub"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(124,58,237,0.12)' }}
                >
                  <Github size={16} style={{ color: '#7c3aed' }} />
                </div>
                <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>GitHub</span>
              </a>

              <a
                href={`mailto:${resume.contact.email}`}
                className="flex flex-col items-center gap-1"
                aria-label="Email"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(124,58,237,0.12)' }}
                >
                  <Mail size={16} style={{ color: '#7c3aed' }} />
                </div>
                <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nudge tooltip */}
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!open && nudge && (
            <motion.div
              key="nudge"
              initial={{ opacity: 0, x: 12, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="glass rounded-xl px-3 py-2 select-none whitespace-nowrap"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <span style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 600 }}>
                {firstName} · {role}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Avatar FAB */}
        <motion.button
          onClick={() => setOpen(prev => !prev)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0"
          style={{ border: '2px solid rgba(124,58,237,0.5)' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open contact card"
        >
          <span
            className="absolute inset-0 rounded-full animate-fab-pulse"
            style={{ background: 'rgba(124,58,237,0.4)' }}
          />
          <img
            src="/avatar.png"
            alt={firstName}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        </motion.button>
      </div>
    </div>
  );
}

