import sharp from 'sharp';
import { existsSync } from 'fs';

const BASE = '/Users/bekarysshaimardan/Desktop/SilkRoadLandingPage/assets';

const jobs = [
  // index.html (already done, keeping for reference)
  { input: `${BASE}/noise_image.png`,       output: `${BASE}/noise_image.webp`,       quality: 20, resize: 600 },
  { input: `${BASE}/bg_noise.png`,          output: `${BASE}/bg_noise.webp`,          quality: 20, resize: 400 },
  { input: `${BASE}/hero_image.jpg`,        output: `${BASE}/hero_image.webp`,        quality: 75 },
  { input: `${BASE}/dark_card.png`,         output: `${BASE}/dark_card.webp`,         quality: 80 },
  { input: `${BASE}/how_texture.png`,       output: `${BASE}/how_texture.webp`,       quality: 80 },
  { input: `${BASE}/how_card_photo.jpg`,    output: `${BASE}/how_card_photo.webp`,    quality: 75 },
  { input: `${BASE}/partner_awara.png`,     output: `${BASE}/partner_awara.webp`,     quality: 85 },
  { input: `${BASE}/partner_sprite.png`,    output: `${BASE}/partner_sprite.webp`,    quality: 85 },
  { input: `${BASE}/partner_smartlab.png`,  output: `${BASE}/partner_smartlab.webp`,  quality: 85 },

  // about.html / academy.html
  { input: `${BASE}/about_noise.png`,       output: `${BASE}/about_noise.webp`,       quality: 20, resize: 600 },
  { input: `${BASE}/about_hero.jpeg`,       output: `${BASE}/about_hero.webp`,        quality: 75 },
  { input: `${BASE}/advisory_1.png`,        output: `${BASE}/advisory_1.webp`,        quality: 80 },
  { input: `${BASE}/advisory_2.png`,        output: `${BASE}/advisory_2.webp`,        quality: 80 },
  { input: `${BASE}/advisory_3.png`,        output: `${BASE}/advisory_3.webp`,        quality: 80 },
  { input: `${BASE}/advisory_4.png`,        output: `${BASE}/advisory_4.webp`,        quality: 80 },
  { input: `${BASE}/advisory_5.png`,        output: `${BASE}/advisory_5.webp`,        quality: 80 },
  { input: `${BASE}/advisory_6.png`,        output: `${BASE}/advisory_6.webp`,        quality: 80 },
  { input: `${BASE}/advisory_7.png`,        output: `${BASE}/advisory_7.webp`,        quality: 80 },
  { input: `${BASE}/advisory_8.png`,        output: `${BASE}/advisory_8.webp`,        quality: 80 },
  { input: `${BASE}/team_1.png`,            output: `${BASE}/team_1.webp`,            quality: 80 },
  { input: `${BASE}/team_2.png`,            output: `${BASE}/team_2.webp`,            quality: 80 },
  { input: `${BASE}/team_3.png`,            output: `${BASE}/team_3.webp`,            quality: 80 },
  { input: `${BASE}/team_4.png`,            output: `${BASE}/team_4.webp`,            quality: 80 },

  // cases.html
  { input: `${BASE}/cases/aiva.png`,        output: `${BASE}/cases/aiva.webp`,        quality: 80 },
  { input: `${BASE}/cases/petromindai.png`, output: `${BASE}/cases/petromindai.webp`, quality: 80 },
  { input: `${BASE}/cases/ast.png`,         output: `${BASE}/cases/ast.webp`,         quality: 80 },
  { input: `${BASE}/cases/kzprovider.png`,  output: `${BASE}/cases/kzprovider.webp`,  quality: 80 },
  { input: `${BASE}/cases/orkenlink.png`,   output: `${BASE}/cases/orkenlink.webp`,   quality: 80 },
  { input: `${BASE}/cases/smartlab.png`,    output: `${BASE}/cases/smartlab.webp`,    quality: 80 },
  { input: `${BASE}/cases/nak.png`,         output: `${BASE}/cases/nak.webp`,         quality: 80 },
];

for (const { input, output, quality, resize } of jobs) {
  if (!existsSync(input)) { console.log(`SKIP (not found): ${input}`); continue; }
  if (existsSync(output)) { console.log(`SKIP (exists):    ${output.split('/').pop()}`); continue; }
  try {
    let pipeline = sharp(input);
    if (resize) pipeline = pipeline.resize(resize);
    const info = await pipeline.webp({ quality }).toFile(output);
    console.log(`OK  ${output.split('/').pop().padEnd(30)} ${(info.size / 1024).toFixed(0)} KB`);
  } catch (e) {
    console.error(`ERR ${input}: ${e.message}`);
  }
}
