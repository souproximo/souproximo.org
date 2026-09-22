# Instruções para o Claude Code

Leia antes de propor qualquer mudança. O [CONTRIBUTING.md](CONTRIBUTING.md)
tem a versão longa; isto aqui é o que não pode passar batido.

## O que é este repositório

O site do **Sou Próximo**, um projeto que faz ferramentas e serviços para quem
precisa de ajuda, sem vender nada e sem guardar dado de ninguém.

Uma página estática. Sem framework, sem build, sem dependência para rodar. O
CSS mora dentro do `index.html`. Isso não é provisório nem falta de estrutura:
é a decisão que mantém a peça barata de manter e auditável por qualquer um.

## O que derruba uma mudança, por melhor que esteja o código

1. **Qualquer URL que aponte para fora deste domínio.** Sem Google Fonts, sem
   CDN, sem script de terceiro, sem medição de audiência. As fontes estão em
   `fonts/` de propósito: pedir a fonte ao Google entregaria o endereço de
   rede de cada visitante a uma empresa que não tem nada a ver com isso.
2. **Qualquer dependência em tempo de execução.** Framework, pacote, bundler,
   passo de build. O que está no repositório é o que vai para o ar.
3. **Qualquer coisa que gere receita** — afiliado, patrocínio, "parceiro em
   destaque".

Se a sua mudança adiciona uma URL que não começa com `/`, ela precisa de uma
justificativa muito boa — e provavelmente não tem.

## Antes de mexer em texto

O teste é um só: **a pessoa que está com o problema entende a frase de
primeira?** Se precisa reler, reescreve.

Palavras que não entram: *beneficiário, público-alvo, vulnerabilidade social,
plataforma, ecossistema, solução digital, empoderamento, stakeholder*. Quem
recebe ajuda é "a pessoa". O que o projeto faz tem nome comum.

Vale também para como o projeto fala de si: frase curta, verbo direto, sem
jargão de ONG nem de startup, sem inflar número, sem exibir sofisticação
técnica.

## Data de verificação (obrigatório)

Mudou conteúdo que envelhece? A data precisa mudar em **quatro lugares**, e os
quatro juntos:

1. `index.html` — o selo do cabeçalho (`<span class="selo">`)
2. `index.html` — a nota do rodapé ("Página conferida em …")
3. `sitemap.xml` — o `<lastmod>`
4. `ferramentas/og-image.html` — o selo, seguido de
   `node ferramentas/gerar-imagens.mjs`

## Como conferir antes de entregar

```sh
python3 -m http.server 8000     # abrir index.html direto não resolve os caminhos
```

- Log de rede do navegador: **nenhuma requisição sai do domínio**.
- Tema claro e tema escuro.
- Largura de celular (360px).
- Se mexeu em `_headers`, a CSP precisa continuar começando em
  `default-src 'none'`.

## Publicação — não existe homologação

`git push` na `main` publica em **souproximo.org** em menos de um minuto, por
um Worker da Cloudflare. Não há ambiente de teste, não há revisão no meio.
Commite pensando nisso.

O domínio é ligado pelo painel da Cloudflare, nunca pelo `wrangler.jsonc`.
Não proponha mexer em DNS por código.

O `.assetsignore` decide o que vai para o ar: **arquivo novo é publicado por
padrão**. Se você criar algo que não é parte do site, liste lá.

## Estilo

- Indentação de 2 espaços, aspas duplas no HTML.
- **Nomes em português** para classes e variáveis. Quem vai manter isto depois
  pensa em português.
- Comentário explica **o porquê**, e aqui o porquê costuma ser uma das sete
  regras do projeto — cite o número dela.
- Acessibilidade não é opcional: contraste nos dois temas, navegação por
  teclado, `lang` correto, rótulo em todo campo.

## O que não está neste repositório

As decisões de posicionamento, linguagem e estratégia do projeto vivem fora
daqui, num espaço de documentos que você não enxerga. Se a mudança pedida
mexe em **o que** o projeto diz de si, em quais canais oficiais são citados,
ou em prometer alguma coisa nova — isso é decisão do Leandro, não sua.
Implemente o que foi pedido e pergunte antes de ampliar.

A calculadora de dívidas, servida em `souproximo.org/dividas`, é
[outro repositório](https://github.com/souproximo/calculadora-dividas).
