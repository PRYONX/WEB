const sharp = require('sharp');

const SRC = 'src/assets/team/debadattaa-jena.jpg';
const OUT = 'src/assets/team/debadattaa-jena-fixed.jpg';

(async () => {
  const { width: W, height: H } = await sharp(SRC).metadata();

  // Tight box around the Gemini sparkle (bottom-right, ~84% x / ~87% y of frame)
  const rw = 190, rh = 190;
  const rx = Math.min(W - rw - 4, Math.round(W * 0.775));
  const ry = Math.min(H - rh - 4, Math.round(H * 0.795));
  const sy = ry - rh; // clone source band directly above (same x range)

  const patchRaw = await sharp(SRC)
    .extract({ left: rx, top: sy, width: rw, height: rh })
    .blur(1)
    .raw()
    .toBuffer();

  // Build RGBA with feathered alpha so the patch melts into surrounding suit
  const feather = 40;
  const rgba = Buffer.alloc(rw * rh * 4);
  for (let y = 0; y < rh; y++) {
    for (let x = 0; x < rw; x++) {
      const d = Math.min(x, y, rw - 1 - x, rh - 1 - y);
      let t = Math.max(0, Math.min(1, d / feather));
      t = t * t * (3 - 2 * t); // smoothstep
      const i = y * rw + x;
      rgba[i * 4] = patchRaw[i * 3];
      rgba[i * 4 + 1] = patchRaw[i * 3 + 1];
      rgba[i * 4 + 2] = patchRaw[i * 3 + 2];
      rgba[i * 4 + 3] = Math.round(255 * t);
    }
  }

  const patchPng = await sharp(rgba, { raw: { width: rw, height: rh, channels: 4 } })
    .png()
    .toBuffer();

  await sharp(SRC)
    .composite([{ input: patchPng, left: rx, top: ry }])
    .jpeg({ quality: 92 })
    .toFile(OUT);

  console.log(`Feathered patch at x=${rx} y=${ry} size=${rw}x${rh} -> ${OUT}`);
})().catch((e) => { console.error(e.message); process.exit(1); });
