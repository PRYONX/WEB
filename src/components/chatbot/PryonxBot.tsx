import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Mail, ArrowLeft, Bot } from 'lucide-react';
import { siteData } from '../../data/site-data';
import { botGreeting, botName, botTopics, BotTopic, BotAnswer } from '../../data/chatbot';

type CtaKind = 'form' | 'email';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  topicChips?: boolean;
  questionChips?: BotTopic;
  cta?: CtaKind;
}

const REDUCED_MOTION =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const LAUNCHER_HINT_DURATION_MS = 6000;

export function PryonxBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const typingTimer = useRef<ReturnType<typeof setTimeout>>();

  const ctaHref = useMemo(
    () => ({
      form: siteData.googleFormUrl,
      email: `mailto:${siteData.contact.email}`,
    }),
    []
  );

  const pushMessage = (msg: Omit<Message, 'id'>) => {
    setMessages((prev) => [...prev, { ...msg, id: nextId.current++ }]);
  };

  // Open: fresh greeting every time (session lives only in memory)
  const handleOpen = () => {
    setOpen(true);
    setMessages([
      { id: nextId.current++, from: 'bot', text: botGreeting, topicChips: true },
    ]);
    setTyping(false);
    setShowHint(false);
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    if (typingTimer.current) clearTimeout(typingTimer.current);
  };

  // One-time pulse hint on the launcher
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), LAUNCHER_HINT_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  // Escape closes the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Auto-scroll to newest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing]);

  const handleTopicClick = (topic: BotTopic) => {
    pushMessage({ from: 'user', text: topic.label });
    const reply = (extra: string) =>
      pushMessage({ from: 'bot', text: extra, questionChips: topic });
    if (REDUCED_MOTION) {
      reply(`Pick a question about ${topic.label.replace(/^\S+\s/, '')}:`);
      return;
    }
    setTyping(true);
    typingTimer.current = setTimeout(() => {
      setTyping(false);
      reply(`Pick a question about ${topic.label.replace(/^\S+\s/, '')}:`);
    }, 500);
  };

  const handleQuestionClick = (qa: BotAnswer) => {
    pushMessage({ from: 'user', text: qa.question });
    const deliver = () =>
      pushMessage({
        from: 'bot',
        text: qa.answer,
        cta: qa.ctaHref,
        topicChips: false,
      });
    if (REDUCED_MOTION) {
      deliver();
      return;
    }
    setTyping(true);
    const delay = 600 + Math.random() * 300;
    typingTimer.current = setTimeout(() => {
      setTyping(false);
      deliver();
    }, delay);
  };

  const backToTopics = () => {
    pushMessage({ from: 'user', text: 'Back to topics' });
    pushMessage({ from: 'bot', text: 'Sure — what else would you like to know?', topicChips: true });
  };

  return (
    <>
      {/* ── Chat panel ─────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-label={`${botName} chat`}
            initial={REDUCED_MOTION ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={REDUCED_MOTION ? undefined : { opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed z-[60] outline-none
              inset-x-0 bottom-0 sm:inset-x-auto sm:right-5 sm:bottom-5
              w-full sm:w-[380px] h-[70vh] sm:h-[560px] sm:max-h-[calc(100vh-7rem)]
              bg-pryonx-surface border-t sm:border border-gray-700/70
              sm:rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-pryonx-dark-bg border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-pryonx-red flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-space-grotesk leading-tight">
                    {botName}
                  </p>
                  <p className="text-pryonx-cyan text-[10px] font-mono uppercase tracking-wider">
                    Offline · runs in your browser
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              aria-live="polite"
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <p
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-pryonx-cyan/15 border border-pryonx-cyan/30 text-cyan-100 rounded-br-sm'
                          : 'bg-pryonx-dark-bg border border-gray-700/60 text-gray-200 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </p>
                  </div>

                  {/* Topic chips */}
                  {msg.topicChips && (
                    <div className="flex flex-wrap gap-2 mt-2.5 pl-1">
                      {botTopics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => handleTopicClick(topic)}
                          className="px-3 py-1.5 text-xs rounded-full bg-pryonx-dark-bg border border-pryonx-cyan/40 text-pryonx-cyan hover:bg-pryonx-cyan hover:text-white transition-colors"
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Question chips */}
                  {msg.questionChips && (
                    <div className="flex flex-col gap-2 mt-2.5 pl-1 items-start">
                      {msg.questionChips.questions.map((qa) => (
                        <button
                          key={qa.id}
                          onClick={() => handleQuestionClick(qa)}
                          className="px-3 py-1.5 text-xs rounded-full bg-pryonx-dark-bg border border-pryonx-cyan/40 text-pryonx-cyan hover:bg-pryonx-cyan hover:text-white transition-colors text-left max-w-full"
                        >
                          {qa.question}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Quick actions after an answer */}
                  {msg.from === 'bot' && !msg.topicChips && !msg.questionChips && (
                    <div className="flex flex-wrap gap-2 mt-2.5 pl-1">
                      <button
                        onClick={backToTopics}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs rounded-full bg-pryonx-dark-bg border border-gray-700 text-gray-300 hover:border-pryonx-cyan hover:text-pryonx-cyan transition-colors"
                      >
                        <ArrowLeft size={12} />
                        <span>Back to topics</span>
                      </button>
                      {msg.cta && (
                        <a
                          href={ctaHref[msg.cta]}
                          target={msg.cta === 'form' ? '_blank' : undefined}
                          rel={msg.cta === 'form' ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs rounded-full bg-pryonx-red text-white hover:bg-red-500 transition-colors"
                        >
                          {msg.cta === 'email' ? <Mail size={12} /> : <Send size={12} />}
                          <span>{msg.cta === 'email' ? 'Email us' : 'Start a project'}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-pryonx-dark-bg border border-gray-700/60 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center space-x-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-pryonx-cyan"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer note */}
            <div className="px-4 py-2 border-t border-gray-800 bg-pryonx-dark-bg">
              <p className="text-[10px] text-gray-500 text-center font-mono">
                Scripted FAQ bot · no data leaves this page · resets on refresh
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Launcher button ────────────────────────────────────── */}
      {!open && (
        <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end space-y-2">
          <AnimatePresence>
            {showHint && !REDUCED_MOTION && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="px-3 py-1.5 rounded-full bg-pryonx-surface border border-pryonx-cyan/40 text-pryonx-cyan text-xs font-mono shadow-lg"
              >
                Questions? Ask {botName} →
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={handleOpen}
            aria-label={`Open ${botName} chat`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="relative w-14 h-14 rounded-full bg-pryonx-red text-white shadow-lg shadow-pryonx-red/40 flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            {!showHint || REDUCED_MOTION ? null : (
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-pryonx-red"
                animate={{ scale: [1, 1.45], opacity: [0.8, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                aria-hidden="true"
              />
            )}
            <MessageCircle size={24} />
          </motion.button>
        </div>
      )}
    </>
  );
}

export default PryonxBot;
