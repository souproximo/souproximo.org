// Gera og-image.png (1200x630) e apple-touch-icon.png (180x180) a partir
// dos modelos HTML desta pasta, usando as fontes que já estão no repositório.
//
// O site não depende disto para funcionar — é só o gerador das duas imagens.
// Rode quando mudar a chamada da página ou a data de verificação:
//
//     npm install playwright
//     npx playwright install chromium
//     node ferramentas/gerar-imagens.mjs
//
// Lembre de atualizar a data no modelo og-image.html antes de gerar.

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const aqui = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.resolve(aqui, '..');

const alvos = [
  { modelo: 'og-image.html', saida: 'og-image.png', largura: 1200, altura: 630 },
  { modelo: 'icone.html', saida: 'apple-touch-icon.png', largura: 180, altura: 180 },
];

// CHROMIUM=/caminho/do/chrome serve para usar um Chromium já instalado
// na máquina, em vez do que o Playwright baixa.
const navegador = await chromium.launch(
  process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {}
);

for (const { modelo, saida, largura, altura } of alvos) {
  const pagina = await navegador.newPage({
    viewport: { width: largura, height: altura },
    deviceScaleFactor: 1,
  });
  await pagina.goto('file://' + path.join(aqui, modelo));
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.screenshot({ path: path.join(raiz, saida) });
  await pagina.close();
  console.log(`gerado: ${saida} (${largura}x${altura})`);
}

await navegador.close();
