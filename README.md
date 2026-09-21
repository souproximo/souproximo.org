# souproximo.org

Site do **Sou Próximo** — um projeto que faz ferramentas e serviços para quem
precisa de ajuda, sem vender nada, sem anúncio e sem guardar dado de ninguém.

No ar em <https://souproximo.org>.

Este repositório é público por causa da **regra 03** do projeto: *“não guardamos
seus dados” é só uma promessa; com o código aberto, quem entende do assunto pode
conferir se é verdade, por conta própria, sem pedir licença.*

---

## O que tem aqui

Um site estático. Sem framework, sem build, sem dependência para rodar.

```
index.html              a página inteira, com o CSS dentro
404.html                página de endereço não encontrado
_headers                cabeçalhos HTTP do Cloudflare Pages (CSP, HSTS, cache)
robots.txt
sitemap.xml
favicon.svg             dois círculos próximos, com tema escuro embutido
apple-touch-icon.png    180×180, gerado
og-image.png            1200×630, gerado
fonts/                  10 arquivos .woff2 + as duas licenças SIL OFL
ferramentas/            gerador das duas imagens (não faz parte do site)
```

## Como ver na sua máquina

Abrir o `index.html` direto no navegador já funciona, mas os caminhos das
fontes começam com `/`, então é melhor subir um servidor na raiz:

```sh
python3 -m http.server 8000
# depois abrir http://localhost:8000
```

Qualquer servidor estático serve. Não há nada para compilar.

## As regras que este site precisa cumprir

O projeto tem sete regras públicas, listadas na própria página. Três delas
afetam diretamente o código:

**Regra 02 — pedir o mínimo de informação.** A página faz **zero requisição a
terceiros**. Sem Google Fonts, sem CDN, sem script, sem cookie, sem qualquer
tipo de medição de audiência. As fontes Archivo e Spectral são servidas por
este mesmo domínio, de propósito: pedir a fonte ao Google entregaria o endereço
de rede de cada visitante a uma empresa que não tem nada a ver com isso.

O `_headers` traz uma política de segurança (`Content-Security-Policy`) que
começa em `default-src 'none'`. Na prática, o navegador bloqueia qualquer
requisição externa **mesmo que alguém adicione uma sem querer no futuro**.

Se um dia fizer falta saber quantas pessoas visitaram, o único caminho que não
quebra a regra 02 é o **Cloudflare Web Analytics** (sem cookie e sem script no
HTML, medido na borda). Google Analytics está fora.

**Regra 03 — código aberto.** Este repositório.

**Regra 05 — dizer quando a informação foi conferida.** A data de verificação
aparece em **quatro lugares** e os quatro precisam ser mudados juntos a cada
revisão de conteúdo:

1. `index.html` — o selo no cabeçalho (`<span class="selo">`)
2. `index.html` — a nota do rodapé (“Página conferida em …”)
3. `sitemap.xml` — o `<lastmod>`
4. `ferramentas/og-image.html` — o selo, seguido de `node ferramentas/gerar-imagens.mjs`

## Gerar de novo as imagens

`og-image.png` e `apple-touch-icon.png` são desenhados em HTML (na pasta
`ferramentas/`) e fotografados por um navegador. Só precisa rodar isso quando
mudar a chamada da página ou a data de verificação.

```sh
npm install playwright
npx playwright install chromium
node ferramentas/gerar-imagens.mjs
```

O gerador usa as fontes que já estão no repositório, então as imagens saem com
a mesma tipografia da página. Nada disso vai para o ar — o site não depende do
Node para nada.

## Publicação

O site é servido pelo **Cloudflare Pages**, ligado direto a este repositório.

| Campo | Valor |
|---|---|
| Framework preset | None |
| Build command | *(vazio)* |
| Build output directory | `/` |
| Domínio | `souproximo.org` (e `www`) |

O DNS fica na Cloudflare e **não deve ser entregue a provedor de hospedagem
nem a agência** — é o que permite trocar site, e-mail e provedor de forma
independente.

Os domínios `souproximo.social` e `souproximo.com.br` redirecionam para cá por
uma Redirect Rule no painel da Cloudflare. Isso não é configurado neste
repositório.

## Como contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Em resumo: toda mudança precisa
continuar cumprindo as sete regras, e a linguagem da página precisa ser
entendida de primeira por quem está com o problema.

## Licença

- **Código** (HTML, CSS, scripts): [MIT](LICENSE).
- **Texto da página**: [CC BY 4.0](LICENSE).
- **Fontes**: Archivo e Spectral, licença SIL Open Font 1.1 — os arquivos de
  licença estão em `fonts/`.
- **O nome “Sou Próximo” e a marca gráfica não estão licenciados.** O código
  pode ser reusado por qualquer pessoa; o nome, não — para que ninguém apareça
  por aí dizendo ser este projeto.
