# Gleica — Portfolio

Site pessoal — consultoria e treinamentos em IA.

**Live:** [gleica.com.br](https://gleica.com.br)

## Stack

Estático puro — zero dependências, zero build step.

- `index.html` — single-page portfolio
- `styles.css` — todos os tokens e componentes
- `script.js` — menu mobile e handler de formulário
- `assets/` — foto e logo

## Rodar localmente

Qualquer servidor HTTP estático serve. Duas opções:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Abra `http://localhost:8080`.

## Publicar no GitHub Pages

1. Crie o repositório (`portfolio` ou o nome que preferir) e faça push.
2. No GitHub: **Settings → Pages → Source: Deploy from branch → main / root**.
3. O arquivo `CNAME` já aponta para `gleica.com.br` — no seu provedor de DNS, configure:
   - Registro `A` apontando para os IPs do GitHub Pages (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - Ou `CNAME` `www` → `gleica.github.io`
4. Aguarde a propagação (10min–1h) e habilite "Enforce HTTPS" nas configurações do Pages.

## Editar

Tudo é HTML/CSS puro — abra `index.html` e edite direto. Tokens estão no topo de `styles.css` (`:root { --bg: ... }`).

### Formulário de contato

O `<form>` hoje é stub. Pra receber mensagens de verdade, aponte o `action` pra um serviço como:
- [Formspree](https://formspree.io) — `action="https://formspree.io/f/SEU_ID" method="POST"`
- [Basin](https://usebasin.com)
- [Netlify Forms](https://www.netlify.com/platform/core/forms/) (se mover pra Netlify)

E remova o `e.preventDefault()` do `script.js`.

## Paleta

| Token        | Hex       | Uso                       |
|--------------|-----------|---------------------------|
| `--blue`     | `#2F6FE8` | CTAs, marca               |
| `--cyan`     | `#22D3EE` | Link, highlight           |
| `--magenta`  | `#E879F9` | Acento, gradiente         |
| `--orange`   | `#FB923C` | Tags, metadata            |
| `--bg`       | `#07090D` | Background                |
| `--text`     | `#E6EDF7` | Texto primário            |

## Tipografia

- **Chakra Petch** — títulos e display
- **Inter** — corpo e UI
- **JetBrains Mono** — metadata e labels técnicas

Todas via Google Fonts.

## Licença

© 2026 Gleica. Conteúdo e identidade visual — todos os direitos reservados.
Código do site (HTML/CSS/JS) livre pra referência.
