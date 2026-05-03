'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw, Send, Linkedin, Github, Mail } from 'lucide-react';
import { resume } from '@/data/resume';

const nameParts = resume.name.split(' ');
const displayName = `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
const firstName = nameParts[0];
const role = resume.experience[0]?.role ?? 'AI / ML Engineer';

interface Message {
  role: 'user' | 'model';
  text: string;
  streaming?: boolean;
}

export default function TwinFloatingButton() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<'card' | 'chat'>('card');
  const [nudge, setNudge] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const show = setTimeout(() => setNudge(true), 1500);
    const hide = setTimeout(() => setNudge(false), 5000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function close() {
    setOpen(false);
    setView('card');
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput('');
    setLoading(true);

    const newMessages: Message[] = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);

    // Add streaming placeholder
    setMessages(prev => [...prev, { role: 'model', text: '', streaming: true }]);

    try {
      const history = newMessages.slice(0, -1).map(m => ({ role: m.role, text: m.text }));
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history }),
      });

      if (!res.body) throw new Error('No response body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: full, streaming: true };
          return updated;
        });
      }

      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'model', text: full, streaming: false };
        return updated;
      });
    } catch {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'model', text: 'Sorry, something went wrong. Please try again.', streaming: false };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Card / Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 12, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.93 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="glass rounded-2xl flex flex-col overflow-hidden"
            style={{
              width: 'min(340px, calc(100vw - 32px))',
              height: view === 'chat' ? 'min(480px, calc(100dvh - 120px))' : 'auto',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              border: '1px solid rgba(124,58,237,0.25)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ borderBottom: '1px solid var(--border-glass)', background: 'rgba(124,58,237,0.1)' }}
            >
              <div className="flex items-center gap-2">
                <img src="/avatar.png" alt={firstName} className="w-7 h-7 rounded-full object-cover" style={{ border: '1px solid rgba(124,58,237,0.5)' }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{displayName}</p>
                  <p className="text-[10px]" style={{ color: '#7c3aed' }}>{role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {view === 'chat' && (
                  <button
                    onClick={() => { setMessages([]); }}
                    className="p-1.5 rounded-lg"
                    style={{ color: 'var(--text-secondary)' }}
                    title="Clear chat"
                  >
                    <RotateCcw size={13} />
                  </button>
                )}
                <button onClick={close} className="p-1.5 rounded-lg" style={{ color: 'var(--text-secondary)' }}>
                  <X size={14} />
                </button>
              </div>
            </div>

            {view === 'card' ? (
              /* Business card view */
              <div className="p-4 flex flex-col gap-3">
                {/* Social links */}
                <div className="flex items-center justify-around">
                  <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.12)' }}>
                      <Linkedin size={16} style={{ color: '#7c3aed' }} />
                    </div>
                    <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>LinkedIn</span>
                  </a>
                  <a href="https://github.com/akshay9396" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.12)' }}>
                      <Github size={16} style={{ color: '#7c3aed' }} />
                    </div>
                    <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>GitHub</span>
                  </a>
                  <a href={`mailto:${resume.contact.email}`} className="flex flex-col items-center gap-1">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.12)' }}>
                      <Mail size={16} style={{ color: '#7c3aed' }} />
                    </div>
                    <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>Email</span>
                  </a>
                </div>

                {/* Chat button */}
                <button
                  onClick={() => setView('chat')}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                >
                  💬 Ask me anything (AI)
                </button>
              </div>
            ) : (
              /* Chat view */
              <>
                <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
                  {messages.length === 0 && (
                    <div className="text-center py-6">
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        Ask me about my skills, experience, or projects ✦
                      </p>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className="px-3 py-2 rounded-xl text-xs max-w-[85%]"
                        style={{
                          background: m.role === 'user'
                            ? 'linear-gradient(135deg, #7c3aed, #06b6d4)'
                            : 'rgba(255,255,255,0.06)',
                          color: 'var(--text-primary)',
                          border: m.role === 'model' ? '1px solid var(--border-glass)' : 'none',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {m.text}{m.streaming && <span style={{ color: '#7c3aed' }}>▋</span>}
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="flex-shrink-0 p-3 flex gap-2" style={{ borderTop: '1px solid var(--border-glass)' }}>
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                    placeholder="Ask something..."
                    className="flex-1 rounded-lg px-3 py-2 text-xs outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-primary)',
                    }}
                    disabled={loading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 disabled:opacity-40"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  >
                    <Send size={13} className="text-white" />
                  </button>
                </div>
              </>
            )}
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
          <span className="absolute inset-0 rounded-full animate-fab-pulse" style={{ background: 'rgba(124,58,237,0.4)' }} />
          <img src="/avatar.png" alt={firstName} className="absolute inset-0 w-full h-full object-cover rounded-full" />
        </motion.button>
      </div>
    </div>
  );
}

