# Parallax no laimpro.com.br (anotações)

Medido em 1280px de largura, rolando a página em passos de 400px, em 2026-11-08.

## O que foi observado

- O site é feito no Framer. O efeito é um `transform` com `translateY` ligado à rolagem, aplicado em elementos específicos. Não é `background-attachment: fixed`.
- Só 5 elementos com `transform` têm movimento em relação à rolagem. O resto da página rola normalmente.
- Cada camada tem uma velocidade própria. Medido como deslocamento de `translateY` por pixel rolado:
  - foto do hero (408x545): 0,15
  - elemento pequeno no topo (97x130): -0,35 (anda no sentido oposto)
  - bloco no meio da página (404x392): 0,25
  - bloco no meio da página (404x418): 0,20
  - elemento da chamada final (277x225): perto de 0,2
- Cada camada para num limite: o `translateY` chega a um valor máximo (por exemplo 540px, 900px, 1260px) e fica parado a partir dali.
- O cabeçalho (`framer-tnxv5v-container`) tem `transform`, mas não se move com a rolagem.

## Como aplicar aqui

- Usar `translate` (propriedade CSS separada de `transform`). Assim o efeito não briga com rotações que já existem nas silhuetas.
- Fator de 0,08 a 0,3 por elemento, com limite de deslocamento (120px, e 80px na foto da chamada final, que tem `inset: -80px`).
- Calcular a partir da posição do elemento no documento, medida sem o `translate` ligado. Medir com o `translate` aplicado causa deriva.
- Implementação em `src/pages/Index.tsx`: atributos `data-parallax` e `data-parallax-max`, e um efeito que atualiza na rolagem e no redimensionamento.
