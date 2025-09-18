# Regras de IA do Basic-Template

---

## 1. Instruções Gerais

- **Comunicação:** Seja direto, claro e conciso.
- **Limitações:** Se não souber de algo ou não entender, diga diretamente e peça por mais informações.
- **Detalhes:** Forneça explicações detalhadas apenas se solicitado.
- **Foco:** Responda com o mínimo necessário para o entendimento e execução.
- **Conteúdo:** Nunca invente informações ou estruturas inexistentes.
- **Encerramento:** Não use frases de encerramento.

## 2. Instruções para Código

- **Comentários:** Não inclua comentários.
- **Idioma:** Variáveis, funções, classes e outros elementos de código devem ser em inglês.
- **Modificações:** Não altere trechos de código ou arquivos que não foram explicitamente solicitados para modificação.
- **Exemplos:** Sempre que possível, forneça exemplos prontos para uso.

---

## 3. Regras Específicas do Projeto

### Estrutura de Pastas

- `src/`: Todo o código fonte.
- `src/pages/`: Páginas do Next.js.
- `src/components/`: Componentes reutilizáveis.
- `src/styles/`: Estilos globais e SCSS.
- `src/services/`: Serviços de API.
- `src/utils/`: Funções utilitárias.
- `src/types/`: Tipos TypeScript globais.
- `public/`: Arquivos estáticos.

### Padrão de Código

- Use **TypeScript** para arquivos `.ts` e `.tsx`.
- Componentes devem ser **function components** com **arrow functions**.
- Nomes de arquivos de componentes em **PascalCase**.
- Nomes de arquivos utilitários em **camelCase**.
- Sempre tipar props e funções.
- Use **React Hooks** para lógica de estado.

### Estilização

- Use **SCSS** (`.module.scss`).
- Siga o padrão **BEM** para nomear classes CSS.
- Estilos globais em `src/styles/globals.scss`.
- Não use styled-components ou outras libs de CSS-in-JS.

### Lint e Formatação

- Use **ESLint** (Airbnb + Prettier) e **Prettier**.
- Não faça commit com erros de lint.
- Use o script `lint` antes de subir código.

### Commits e Versionamento

- Siga o padrão de commits semânticos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Use **husky** para hooks de pré-commit.

### Testes

- Use **Jest** e **@testing-library/react**.
- Testes em `*.test.tsx` ou `*.spec.tsx` dentro da pasta do componente ou em `__tests__`.

### Gerenciamento de Estado

- Use a **Context API** do React para estado global.
- Crie contextos em `src/contexts`.
- Evite prop-drilling excessivo.

### Acessibilidade (a11y)

- Utilize HTML semântico.
- Elementos interativos devem ser acessíveis via teclado.
- Imagens devem ter o atributo `alt` (preenchido ou vazio se decorativo).
- Use atributos ARIA quando necessário.
