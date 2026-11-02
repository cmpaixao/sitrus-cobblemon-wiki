**Cobblemon 1.8.0** **Novidade Oficial**

# 🔴 **Pokémon Alpha & Sistema de Escalas**

{% hint style="warning" %}
**Cuidado, Treinador!** Introduzidos na atualização **1.8.0 ("Make Your Move")**, os **Pokémon Alpha** são versões colossais, ferozes e altamente perigosas dos Pokémon comuns. Eles possuem olhos vermelhos brilhantes, estatísticas elevadas e comportamento extremamente agressivo no mundo aberto.
{% endhint %}

## O que são os Pokémon Alpha?

Inspirados nas lendas de Hisui (*Pokémon Legends: Arceus*), os Pokémon Alpha representam líderes territoriais da natureza. Ao encontrar um Alpha na natureza do Cobblemon, você notará imediatamente suas características distintas:

-   **Porte Colossal:** São visivelmente maiores do que qualquer exemplar comum da mesma espécie.
-   **Olhos Vermelhos Brilhantes:** Emitem uma luz avermelhada e uma aura intimidadora mesmo à distância ou no escuro.
-   **Agressividade Territorial:** Ao contrário de muitos Pokémon pacíficos que fogem, os Alphas perseguem ativamente o jogador para iniciar batalha.
-   **Golpe de TM Garantido:** Todo Pokémon Alpha selvagem sempre nasce conhecendo pelo menos um golpe exclusivo de TM (Technical Machine).
-   **Adaptação Dinâmica de Nível:** Alphas possuem um sistema de nivelamento adaptativo, ajustando sua força para ser superior ao nível médio do seu time atual.
-   **Líderes de Manada (*Herd Spawns*):** Os Alphas sempre surgem liderando rebanhos e manadas de Pokémon menores da sua espécie.

{% hint style="info" %}
💡 **Dica de Combate:** Devido à agressividade e aos golpes de TM de alto dano, evite desafiar um Alpha despreparado. Tenha sempre Pokémon com golpes de status (Sono ou Paralisia) e Pokébolas pesadas!
{% endhint %}

## Atração com Iscas: Fruta Hopo (Hopo Berry)

Na versão 1.8.0, as **Frutas Hopo (Hopo Berries)** receberam uma função especial no sistema de iscas (*Baits*):

-   Ao colocar ou arremessar Hopo Berries como isca no solo, você ativa o **efeito de atração de Pokémon Alpha**.
-   Isso aumenta significativamente a probabilidade de um Pokémon da manada local surgir como Alpha ou de atrair Alphas que estejam nas redondezas.
-   Excelente para caçadores que buscam Pokémon com IVs altos e golpes de TM prontos para o competitivo.

## Sistema de Escalas Corporais (Intrinsic Scaling)

Além dos Alphas, o Cobblemon 1.8.0 reformulou completamente o sistema de dimensões visuais de todos os Pokémon:

| Tipo de Escala | Variação / Regra | Comportamento no Jogo |
| --- | --- | --- |
| **Escala Intrínseca Natural** | \-5% a +5% | Cada Pokémon gerado no mundo tem uma leve variação única de altura e largura, tornando o mundo mais orgânico. |
| **Pokémon Bebês (Baby Scaling)** | 10% menor no Lv 1 → Tamanho normal no Lv 10 | Filhotes recém-nascidos do pasto/breeding ou em níveis baixos são visivelmente menores e crescem ao subir de nível. |
| **Pokémon Alpha** | +30% a +60% de escala | Tamanho monumental, hitboxes ampliadas e presença dominante no cenário. |
| **Ombro (Shoulder Mount)** | Escala fixa / não escalável | Quando apoiados no ombro do treinador, modelos utilizam a proporção ergonômica padrão. |

## Montarias Alpha & Assentos Condicionais

Com o suporte estendido ao sistema **Molang** no 1.8.0:

-   Montarias que são Alpha agora suportam *conditional seats* através da tag `is_alpha`.
-   Isso garante que, ao montar em um Pokémon Alpha (como um enorme Goodra, Milotic ou Crobat), a posição do jogador seja proporcional à altura do modelo, sem sobreposições estranhas.

## Captura, Conquistas & Estatísticas

Capturar um Alpha é um marco na carreira de qualquer treinador no Cobblemon:

-   **Gatilho de Conquista:** `cobblemon:catch_alpha_pokemon` é disparado no momento em que você consegue prender um Alpha na Pokébola.
-   **Contador de Estatísticas:** Seus dados de jogador agora gravam a métrica `totalAlphaCaptureCount`, permitindo que servidores criem ranks e recompensas para caçadores de Alphas.
-   **Estatísticas após a Captura:** Ao ser capturado, o Pokémon mantém seu tamanho Alpha colossal, sua aura especial, seus golpes aprendidos e pelo menos 3 IVs perfeitos (31).

* * *

## Estratégia Recomendada para Batalhas contra Alphas

1.  **Distância Segura:** Use terreno elevado ou montarias voadoras para inspecionar a manada e identificar o Alpha antes de se aproximar.
2.  **Isca Prévia:** Jogue bagas para distrair os Pokémon menores da manada e isolar o confronto contra o líder.
3.  **Condições de Status:** Golpes como *Spore* (Cogumelo), *Sleep Powder* ou *Thunder Wave* reduzem a agressão e triplicam as chances de sucesso das Pokébolas.
4.  **Pokébolas Ideais:** Devido ao peso e tamanho aumentados dos Alphas, **Heavy Balls** e **Lead Balls** (bolas pesadas) ganham bônus de captura massivos.
