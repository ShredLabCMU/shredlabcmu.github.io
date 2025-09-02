#!/usr/bin/env node
/**
 * Build responsive hero images from originals placed in assets/img/hero/src/
 * Outputs optimized .avif, .webp, and .jpg variants into assets/img/hero/
 * without overwriting existing newer files unless source is newer.
 */
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectRoot = path.resolve(process.cwd());
const srcDir = path.join(projectRoot, 'assets', 'img', 'hero', 'src');
const outDir = path.join(projectRoot, 'assets', 'img', 'hero');

const widths = [960, 1440, 1920, 2880];
const quality = {
  jpeg: 78,
  webp: 70,
  avif: 48
};

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

function baseNameNoExt(filename) {
  return filename.replace(/\.[^.]+$/, '');
}

async function listSourceImages() {
  try {
    const files = await fs.readdir(srcDir);
    return files.filter(f => /\.(jpe?g|png)$/i.test(f));
  } catch (e) {
    console.error('No source directory or unable to read', srcDir, e.message);
    return [];
  }
}

async function shouldBuild(srcFile, outFile) {
  try {
    const [s, o] = await Promise.all([fs.stat(srcFile), fs.stat(outFile)]);
    return s.mtimeMs > o.mtimeMs; // rebuild if source newer
  } catch {
    return true; // output missing
  }
}

async function buildOneVariant(srcPath, base, width) {
  const image = sharp(srcPath).resize({ width, withoutEnlargement: true });
  const targets = [
    { ext: 'avif', opts: { quality: quality.avif } },
    { ext: 'webp', opts: { quality: quality.webp } },
    { ext: 'jpg', opts: { quality: quality.jpeg, progressive: true } }
  ];
  for (const t of targets) {
    const outFile = path.join(outDir, `${base}-${width}.${t.ext}`);
    if (!(await shouldBuild(srcPath, outFile))) continue;
    try {
      let pipeline = image.clone();
      if (t.ext === 'avif') pipeline = pipeline.avif(t.opts);
      else if (t.ext === 'webp') pipeline = pipeline.webp(t.opts);
      else pipeline = pipeline.jpeg(t.opts);
      await pipeline.toFile(outFile);
      console.log('Wrote', path.relative(projectRoot, outFile));
    } catch (e) {
      console.error('Failed to write', outFile, e.message);
    }
  }
}

async function run() {
  await ensureDir(outDir);
  const sources = await listSourceImages();
  if (!sources.length) {
    console.warn('No source images found in', srcDir);
    return;
  }
  for (const file of sources) {
    const base = baseNameNoExt(file);
    const full = path.join(srcDir, file);
    for (const w of widths) {
      await buildOneVariant(full, base, w);
    }
  }
  console.log('Hero image build complete.');
}

run().catch(e => { console.error(e); process.exit(1); });
