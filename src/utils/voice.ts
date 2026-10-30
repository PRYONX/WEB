/**
 * Browser-native text-to-speech helper (SpeechSynthesis).
 * Runs 100% locally on the visitor's device — no network, no backend.
 */

let cachedVoice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  // Prefer a female voice: Indian English female first, then any female English,
  // then any Indian English, then any English (higher pitch in speakLine adds a softer tone)
  const FEMALE = /female|woman|zira|susan|samantha|victoria|karen|tessa|heera|kalpana|neel|aditi|raveena|aria|jenny|sonia|libby|ava/i;
  cachedVoice =
    voices.find((v) => v.lang.startsWith('en-IN') && FEMALE.test(v.name)) ||
    voices.find((v) => v.lang.startsWith('en') && FEMALE.test(v.name)) ||
    voices.find((v) => v.lang.startsWith('en-IN')) ||
    voices.find((v) => v.lang.startsWith('en-GB')) ||
    voices.find((v) => v.lang.startsWith('en')) ||
    voices[0];
  return cachedVoice;
}

/** True if this browser supports speech synthesis at all. */
export function isTTSSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Speak a line. Cancels anything currently speaking. Safe no-op if unsupported. */
export function speakLine(text: string, opts?: { rate?: number; pitch?: number }): void {
  if (!isTTSSupported()) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || 'en-IN';
  utterance.rate = opts?.rate ?? 1.02;   // slightly brisk, agent-like
  utterance.pitch = opts?.pitch ?? 1.15; // a touch higher for a warmer, feminine tone

  synth.speak(utterance);
}

/** Stop any ongoing speech immediately. */
export function stopSpeaking(): void {
  if (!isTTSSupported()) return;
  window.speechSynthesis.cancel();
}

// Chrome bug: getVoices() can be empty until this fires.
if (typeof window !== 'undefined' && isTTSSupported()) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
    pickVoice();
  };
}
