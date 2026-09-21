# Como contribuir

Obrigado por olhar. Este projeto aceita ajuda de qualquer pessoa, sem precisar
concordar com a motivação dele — só com as regras abaixo.

Contato: **contato@souproximo.org** · issues e pull requests também funcionam.

## As sete regras

O Sou Próximo tem sete regras públicas, listadas em <https://souproximo.org>.
Elas não são estilo de código: são o compromisso que dá sentido ao projeto.
Uma mudança que quebre qualquer uma delas não entra, mesmo que o código esteja
bom.

Na prática, para este repositório:

1. **Nada que gere receita.** Sem link de afiliado, sem patrocínio, sem
   “parceiro em destaque”.
2. **Pedir o mínimo de informação.** Zero requisição a terceiros, zero script
   de terceiros, zero cookie, zero medição de audiência dentro da página. Se a
   sua mudança adiciona uma URL que não começa com `/`, ela precisa de uma
   justificativa muito boa — e provavelmente não tem.
3. **Código aberto.** Nada de arquivo compilado sem a fonte junto.
4. **Mandar para o canal certo.** Procon, CRAS, Defensoria e SUS não têm
   substituto e o projeto nunca se apresenta como alternativa a eles.
5. **Data de verificação visível** em tudo que envelhece.
6. **Nada pedido em troca** — nem religião, nem voto, nem cadastro.
7. **Ninguém é mostrado no pior dia da vida.** Sem foto de sofrimento, sem
   história montada para comover.

## A linguagem

O teste é um só: **a pessoa que está com o problema entende a frase de
primeira?** Se precisa reler, reescreve.

Palavras que não entram no texto público: *beneficiário, público-alvo,
vulnerabilidade social, plataforma, ecossistema, solução digital,
empoderamento, stakeholder*. Quem recebe ajuda é “a pessoa”. O que o projeto
faz tem nome comum.

Vale também para como o projeto fala de si: frase curta, verbo direto, sem
jargão de ONG nem de startup, sem inflar número, sem exibir sofisticação
técnica.

## Estilo de código

Não há linter nem formatador obrigatório. O que se espera:

- **Sem dependência em tempo de execução.** O que vai para o ar é HTML, CSS e,
  quando necessário, JavaScript escrito à mão. Nada de framework, nada de
  pacote carregado de fora.
- **Indentação de 2 espaços**, aspas duplas no HTML.
- **Nomes em português** para classes, variáveis e funções. Quem provavelmente
  vai manter isso depois pensa em português.
- **Comentário explica o porquê**, não o quê. O “porquê” aqui costuma ser uma
  das sete regras — vale citar o número dela.
- **Acessibilidade não é opcional:** contraste suficiente nos dois temas,
  navegação por teclado funcionando, `lang` correto, rótulo em todo campo.
  A página precisa funcionar em celular antigo e tela pequena.

## Antes de abrir um pull request

- [ ] Abri a página num servidor local e ela funciona.
- [ ] Conferi no log de rede do navegador que **nenhuma requisição sai para
      fora do domínio**.
- [ ] Conferi no tema claro e no tema escuro.
- [ ] Conferi numa largura de celular (360px).
- [ ] Se mudei conteúdo que envelhece, atualizei a data de verificação em todos
      os lugares onde ela aparece (a lista está no README).
- [ ] O texto passa no teste de primeira leitura.

## O que não precisa de pull request

Erro de digitação, link quebrado, informação desatualizada: pode abrir uma
issue direto, ou mandar um e-mail. Não precisa mexer no código para ajudar.
