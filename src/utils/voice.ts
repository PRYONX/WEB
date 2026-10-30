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

/**
 * Make text TTS-friendly before speaking:
 * - strip emoji/pictograms so the voice reads words only
 * - respell the brand for the voice so it says "PRY-onks" (2 syllables, clear "ks" tail).
 *   Measured in-browser: "PRYONX" adds a wrong "Onyx" tail, hyphen-free forms reduce
 *   the vowel, and spaced/hyphenated-X variants get letter-spelled ("Pry On eks").
 *   "Pry-onks" was the most stable (1691ms ±2ms). On-screen text is left untouched.
 */
const emojiStrip = (s: string) =>
  s
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2190}-\u{21FF}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

export function toSpeakableText(text: string): string {
  return emojiStrip(text).replace(/PRYONX/gi, 'Pry-onks');
}

/** Speak a line. Cancels anything currently speaking. Safe no-op if unsupported. */
export function speakLine(text: string, opts?: { rate?: number; pitch?: number }): void {
  if (!isTTSSupported()) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(toSpeakableText(text));
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
