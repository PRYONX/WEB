import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, PhoneOff, Calendar, UserCheck, Activity, Volume2, VolumeX } from 'lucide-react';
import { speakLine, stopSpeaking, isTTSSupported } from '../../utils/voice';

// Stable module-level script (never recreated on render — keeps the speak effect firing once per line)
const DIALOGUE = [
  { speaker: 'Caller', text: 'Hi, I need help answering incoming customer calls and booking appointments after hours.', delay: 1000 },
  { speaker: 'PRYONX AI', text: 'Hello! I am your PRYONX AI Voice Agent. I can answer calls 24/7, answer service questions, qualify leads, and sync directly with your calendar.', delay: 2500 },
  { speaker: 'Caller', text: 'That sounds ideal. Can you integrate with Google Calendar and HubSpot CRM?', delay: 4500 },
  { speaker: 'PRYONX AI', text: 'Absolutely! I integrate seamlessly with HubSpot, Salesforce, Google Calendar, and custom APIs. Shall I schedule your initial project consultation?', delay: 6500 },
  { speaker: 'Caller', text: 'Yes, please schedule it for tomorrow at 10 AM.', delay: 8500 },
  { speaker: 'PRYONX AI', text: 'Done! I have confirmed your appointment for tomorrow at 10:00 AM and logged all details into your CRM.', delay: 10500 },
];

export function VoiceAgentSimulator() {
  const [isCalling, setIsCalling] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(!isTTSSupported());
  const [transcriptIndex, setTranscriptIndex] = useState(0);
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


  const toggleCall = () => {
    if (isCalling) stopSpeaking();
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
              {isCalling ? `LIVE CALL ACTIVE (${formatTime(callDuration)})` : 'READY FOR SIMULATION'}
              {isCalling && !isMuted && ' · 🔊 SPEAKING'}
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
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-pryonx-red/10 border border-pryonx-red/30 rounded-full flex items-center justify-center mx-auto text-pryonx-red shadow-lg shadow-pryonx-red/20 animate-pulse">
              <Volume2 size={32} />
            </div>
            <div>
              <p className="text-white font-semibold text-base">Test the AI Voice Agent Experience</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto mt-1">
                Click below to simulate how PRYONX AI handles real customer phone calls in real
                time. The agent's replies are spoken aloud using your own browser's voice —
                nothing is recorded or sent anywhere.
              </p>
            </div>
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
                  <span>Lead: Qualified</span>
                </div>
                <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-lg p-2 flex items-center space-x-2 text-cyan-400 text-xs font-mono">
                  <Calendar size={14} />
                  <span>Booking: Synced</span>
                </div>
                <div className="bg-purple-950/40 border border-purple-500/40 rounded-lg p-2 flex items-center space-x-2 text-purple-400 text-xs font-mono col-span-2 sm:col-span-1">
                  <Activity size={14} />
                  <span>Latency: 160ms</span>
                </div>
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
            disabled={!isCalling || !isTTSSupported()}
            className={`p-3 rounded-full border transition-all ${
              isMuted
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                : 'bg-gray-800 border-gray-700 text-gray-300 hover:text-white'
            } ${!isCalling || !isTTSSupported() ? 'opacity-50 cursor-not-allowed' : ''}`}
            title={isMuted ? ' unmute — agent speaks answers' : 'Mute agent voice'}
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
