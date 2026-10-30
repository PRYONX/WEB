import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PhoneCall, PhoneOff, Calendar, UserCheck, Activity, Volume2, VolumeX, Send, Users, ArrowLeft } from 'lucide-react';
import { speakLine, stopSpeaking, isTTSSupported } from '../../utils/voice';

// Stable module-level script (never recreated on render — keeps the speak effect firing once per line)
const DIALOGUE = [
  { speaker: 'Caller', text: 'Hi, I need help answering incoming customer calls and booking appointments after hours.', delay: 1000 },
  { speaker: 'PRYONX AI', text: 'Hello! I am the PRYONX AI Voice Agent demo. A deployed agent is designed to answer calls around the clock, reply to service questions, and qualify leads for your business.', delay: 2500 },
  { speaker: 'Caller', text: 'Great. Can you book an appointment for me right now?', delay: 4500 },
  { speaker: 'PRYONX AI', text: 'I cannot book anything here — this is a browser demo with no backend. For anything real, the PRYONX team handles it personally. Use the button below to open the contact page, and the founder will get back to you.', delay: 6500 },
  { speaker: 'Caller', text: 'So what happens once a solution like this is set up for my business?', delay: 8500 },
  { speaker: 'PRYONX AI', text: 'It is custom-built around your workflow — phone line, calendars, and CRM included, if you need them. Head over to the contact page and tell us your business problem. That is how a founding client setup starts.', delay: 10500 },
];

// Click-to-hear Q&A — same rule as PRYONX Bot: bot speaks, CTAs navigate in-app
const VOICE_QUESTIONS: { id: string; question: string; answer: string; cta: 'contact' | 'team' }[] = [
  {
    id: 'what-can-you-do',
    question: 'What can you do on a call?',
    answer:
      'This demo only shows what a voice agent sounds like — it cannot take real calls or book anything. A deployed agent is designed to answer customer calls, reply to service questions, and qualify leads. To discuss a real setup, visit the contact page.',
    cta: 'contact',
  },
  {
    id: 'can-you-book',
    question: 'Can you book an appointment for me?',
    answer:
      'No — I am a browser demo, so I cannot book, assist, or record anything. Everything real goes through the PRYONX team. Open the contact page and send your details, and the founder will personally take it forward.',
    cta: 'contact',
  },
  {
    id: 'after-hours',
    question: 'Do you work after hours?',
    answer:
      'A voice agent, once deployed, is designed to keep answering after your team signs off — nights, weekends, and holidays. This demo itself runs only while your browser tab is open.',
    cta: 'contact',
  },
  {
    id: 'integrations',
    question: 'Is this connected to my calendar or CRM?',
    answer:
      'No. Nothing here connects to your systems — it is a spoken demo with no backend. If a real solution is built for you, integrations like calendars and CRMs are designed in around your existing stack. The contact page is where that conversation starts.',
    cta: 'contact',
  },
  {
    id: 'languages',
    question: 'Which languages can you speak?',
    answer:
      'This demo speaks with whatever voice your own browser provides. A custom-built agent can be shaped for your customers — English and Hindi to begin with, and more languages as needed.',
    cta: 'contact',
  },
  {
    id: 'human-handoff',
    question: 'I want to talk to a human.',
    answer:
      'Of course — you should always be able to reach a person. The PRYONX team is one click away: open the team page to see who you would be working with, or use the contact page directly.',
    cta: 'team',
  },
];

export function VoiceAgentSimulator() {
  const navigate = useNavigate();
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(!isTTSSupported());
  const [transcriptIndex, setTranscriptIndex] = useState(0);
  const [qaMessages, setQaMessages] = useState<{ id: number; speaker: 'You' | 'PRYONX AI'; text: string }[]>([]);
  const [questionChips, setQuestionChips] = useState(true);
  const [thinking, setThinking] = useState(false);
  const [lastCta, setLastCta] = useState<'contact' | 'team' | null>(null);
  const nextQaId = useRef(1);
  const qaTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastSpokenRef = useRef<number>(-1);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isCalling) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
      setTranscriptIndex(0);
      lastSpokenRef.current = -1;
    }
    return () => clearInterval(timer);
  }, [isCalling]);

  useEffect(() => {
    let scriptTimer: ReturnType<typeof setTimeout>;
    if (isCalling && transcriptIndex < DIALOGUE.length - 1) {
      scriptTimer = setTimeout(() => {
        setTranscriptIndex((prev) => prev + 1);
      }, 2500);
    }
    return () => clearTimeout(scriptTimer);
  }, [isCalling, transcriptIndex]);

  // Speak each PRYONX AI line exactly once as it appears (browser-local text-to-speech)
  useEffect(() => {
    if (!isCalling) return;
    const msg = DIALOGUE[transcriptIndex];
    if (msg && msg.speaker === 'PRYONX AI' && !isMuted && lastSpokenRef.current !== transcriptIndex) {
      lastSpokenRef.current = transcriptIndex;
      speakLine(msg.text);
    }
  }, [isCalling, transcriptIndex, isMuted]);

  // Keep Q&A transcript scrolled to the newest line
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [qaMessages, thinking]);

  const clearQaTimers = () => {
    qaTimers.current.forEach(clearTimeout);
    qaTimers.current = [];
  };

  const resetQa = () => {
    clearQaTimers();
    setQaMessages([]);
    setQuestionChips(true);
    setThinking(false);
    setLastCta(null);
  };

  const handleVoiceQuestion = (q: (typeof VOICE_QUESTIONS)[number]) => {
    clearQaTimers();
    setQuestionChips(false);
    setLastCta(null);
    setQaMessages((prev) => [...prev, { id: nextQaId.current++, speaker: 'You', text: q.question }]);
    setThinking(true);
    qaTimers.current.push(
      setTimeout(() => {
        setThinking(false);
        setQaMessages((prev) => [...prev, { id: nextQaId.current++, speaker: 'PRYONX AI', text: q.answer }]);
        setLastCta(q.cta);
        if (!isMuted) speakLine(q.answer);
      }, 700)
    );
  };

  const backToQuestions = () => {
    clearQaTimers();
    setLastCta(null);
    setQuestionChips(true);
  };

  // Same rule as PRYONX Bot: CTA chips navigate inside the site
  const handleQaCta = (kind: 'contact' | 'team') => {
    stopSpeaking();
    navigate(kind === 'contact' ? '/contact' : '/team');
  };

  const toggleCall = () => {
    stopSpeaking();
    if (isCalling) resetQa();
    setIsCalling(!isCalling);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-pryonx-surface/90 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50 backdrop-blur-xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pryonx-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pryonx-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap justify-between items-center pb-6 border-b border-gray-800 gap-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${isCalling ? 'bg-emerald-500 animate-ping' : 'bg-gray-500'}`} />
            <div className={`w-3 h-3 rounded-full absolute inset-0 ${isCalling ? 'bg-emerald-500' : 'bg-gray-500'}`} />
          </div>
          <div>
            <h3 className="text-white font-bold text-base md:text-lg flex items-center gap-2 font-space-grotesk">
              PRYONX AI Voice Simulator
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              {isCalling
                ? `LIVE DEMO CALL (${formatTime(callDuration)})${
                    !isMuted && transcriptIndex >= 1 ? ' · 🔊 SPEAKING' : ''
                  }`
                : questionChips || qaMessages.length > 0
                  ? 'VOICE Q&A · CLICK A QUESTION, I ANSWER ALOUD'
                  : 'READY — ASK A QUESTION OR HEAR A DEMO CALL'}
            </p>
          </div>
        </div>

        {/* Audio Spectrum Waves */}
        {isCalling && (
          <div className="flex items-center space-x-1.5 h-6">
            {[0.4, 0.8, 0.3, 1, 0.6, 0.9, 0.5, 0.7].map((heightScale, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-pryonx-cyan to-pryonx-red rounded-full"
                animate={{
                  height: ['20%', `${heightScale * 100}%`, '20%'],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Interactive Call Screen */}
      <div className="py-6 min-h-[220px] flex flex-col justify-between">
        {!isCalling ? (
          <div className="space-y-4">
            {/* Q&A transcript (mirrors the call transcript styling) */}
            <div ref={scrollRef} className="space-y-3 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
              {qaMessages.length === 0 ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-pryonx-red/10 border border-pryonx-red/30 rounded-full flex items-center justify-center mx-auto text-pryonx-red shadow-lg shadow-pryonx-red/20 animate-pulse">
                    <Volume2 size={32} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base">Ask the Voice Agent — Hear It Answer</p>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto mt-1">
                      Pick a question below and the agent answers out loud using your own
                      browser's voice — nothing is recorded or sent anywhere. Or press the red
                      button to hear a demo call. The agent cannot book or assist anything — it
                      refers real requests to our contact page, just like PRYONX Bot.
                    </p>
                  </div>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {qaMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`flex ${msg.speaker === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs md:text-sm font-medium ${
                          msg.speaker === 'You'
                            ? 'bg-gray-800 text-gray-200 rounded-br-none border border-gray-700'
                            : 'bg-gradient-to-r from-pryonx-cyan/20 to-pryonx-blue/30 text-white rounded-bl-none border border-pryonx-cyan/40 shadow-lg shadow-pryonx-cyan/10'
                        }`}
                      >
                        <span className="text-[10px] block font-mono text-gray-400 mb-0.5 uppercase tracking-wider">
                          {msg.speaker}
                        </span>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}

              {thinking && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/60 border border-gray-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-pryonx-cyan"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Question chips */}
            {questionChips && (
              <div className="flex flex-wrap gap-2 pt-1">
                {VOICE_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleVoiceQuestion(q)}
                    className="px-3 py-1.5 text-xs rounded-full bg-pryonx-dark-bg border border-pryonx-cyan/40 text-pryonx-cyan hover:bg-pryonx-cyan hover:text-white transition-colors text-left"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            )}

            {/* Quick actions after a spoken answer — same routing rule as PRYONX Bot */}
            {lastCta && (
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={backToQuestions}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs rounded-full bg-pryonx-dark-bg border border-gray-700 text-gray-300 hover:border-pryonx-cyan hover:text-pryonx-cyan transition-colors"
                >
                  <ArrowLeft size={12} />
                  <span>Next question</span>
                </button>
                <button
                  onClick={() => handleQaCta(lastCta)}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs rounded-full bg-pryonx-red text-white hover:bg-red-500 transition-colors"
                >
                  {lastCta === 'team' ? <Users size={12} /> : <Send size={12} />}
                  <span>{lastCta === 'team' ? 'Contact the team' : 'Start a project'}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Scrollable Dialogue Container */}
            <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence initial={false}>
                {DIALOGUE.slice(0, transcriptIndex + 1).map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex ${msg.speaker === 'Caller' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs md:text-sm font-medium ${
                        msg.speaker === 'Caller'
                          ? 'bg-gray-800 text-gray-200 rounded-br-none border border-gray-700'
                          : 'bg-gradient-to-r from-pryonx-cyan/20 to-pryonx-blue/30 text-white rounded-bl-none border border-pryonx-cyan/40 shadow-lg shadow-pryonx-cyan/10'
                      }`}
                    >
                      <span className="text-[10px] block font-mono text-gray-400 mb-0.5 uppercase tracking-wider">
                        {msg.speaker}
                      </span>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Real-time Qualification Output Badges */}
            {transcriptIndex >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-gray-800"
              >
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-lg p-2 flex items-center space-x-2 text-emerald-400 text-xs font-mono">
                  <UserCheck size={14} />
                  <span>Demo: Scripted</span>
                </div>
                <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-lg p-2 flex items-center space-x-2 text-cyan-400 text-xs font-mono">
                  <Calendar size={14} />
                  <span>No Data Collected</span>
                </div>
                <div className="bg-purple-950/40 border border-purple-500/40 rounded-lg p-2 flex items-center space-x-2 text-purple-400 text-xs font-mono col-span-2 sm:col-span-1">
                  <Activity size={14} />
                  <span>Voice: Browser Demo</span>
                </div>
              </motion.div>
            )}

            {/* Demo cannot book — refer real requests in-app, same rule as PRYONX Bot */}
            {transcriptIndex >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                <button
                  onClick={() => handleQaCta('contact')}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 text-xs rounded-full bg-pryonx-red text-white hover:bg-red-500 transition-colors"
                >
                  <Send size={12} />
                  <span>Start a project</span>
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (!isMuted) stopSpeaking();
            }}
            disabled={!isTTSSupported()}
            className={`p-3 rounded-full border transition-all ${
              isMuted
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                : 'bg-gray-800 border-gray-700 text-gray-300 hover:text-white'
            } ${!isTTSSupported() ? 'opacity-50 cursor-not-allowed' : ''}`}
            title={isMuted ? 'Unmute — agent speaks answers' : 'Mute agent voice'}
            aria-label={isMuted ? 'Unmute agent voice' : 'Mute agent voice'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        <button
          onClick={toggleCall}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-lg ${
            isCalling
              ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30'
              : 'bg-gradient-to-r from-pryonx-red to-red-500 hover:from-red-500 hover:to-pryonx-red text-white shadow-pryonx-red/30'
          }`}
        >
          {isCalling ? (
            <>
              <PhoneOff size={18} />
              <span>End Simulation</span>
            </>
          ) : (
            <>
              <PhoneCall size={18} />
              <span>Simulate Inbound Call</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
