**Cobblemon 1.8.0** **Sistema de TMs**

# 💿 **TMs, Gemas Elementais & Máquinas**

{% hint style="info" %}
O grande destaque da atualização **1.8.0 ("Make Your Move")** é o sistema oficial e imersivo de **TMs (Technical Machines)**. Agora você pode produzir seus próprios TMs através da **Máquina de TMs**, cultivar **Gemas Elementais** em cavernas e resgatar TMs lendários em ruínas e naufrágios!
{% endhint %}

## O que são os TMs no Cobblemon?

Os TMs são discos tecnológicos que contêm dados de treinamento para ensinar golpes específicos a Pokémon compatíveis. Diferente de mods legados, o Cobblemon integra o sistema de TMs diretamente com os recursos do Minecraft (minérios, exploração de masmorras e agricultura de gemas).

## A Máquina de TMs (TM Machine)

A **Máquina de TMs** é o bloco central onde você projeta e grava novos discos.

-   **Mecânica de Desbloqueio Orgânico:** As receitas de TMs não vêm todas desbloqueadas por padrão. Para desbloquear a receita de um TM na máquina, você precisa ter em seu time um Pokémon que **já conheça aquele golpe naturalmente**!
-   **Gravação de Discos:** Para criar o TM, insira um disco em branco e as **Gemas Elementais** do tipo correspondente na Máquina de TMs.
-   **Uso Infinito ou Consumível:** A configuração do servidor dita se o TM é consumido após o uso ou se pode ser utilizado infinitas vezes.

## Gemas Elementais (Type Gems) & Cultivo

As **Type Gems** são os catalisadores de energia elemental indispensáveis para a confecção de TMs:

-   **18 Variantes:** Existe uma gema para cada tipo Pokémon (Fogo, Água, Grama, Elétrico, Dragão, etc.).
-   **Cultivo de Cristais:** Você pode encontrar **Núcleos de Cristal de Ardósia Profunda (Deepslate Crystal Core)** e **Aglomerados de Cristais (Crystal Clusters)** nas profundezas do mundo para cultivar e colher novas gemas elementais ao longo do tempo.
-   **Integração com Mods:** No Create, os aglomerados de gemas podem ser triturados nos *Crushing Wheels* para automação industrial de gemas elementais!

{% hint style="success" %}
💎 **Nova Receita de Item:** O item competitivo **Bico Afiado (Sharp Beak)** agora pode ser fabricado usando ossos e **Gemas Voadoras (Flying Gems)**!
{% endhint %}

## Onde Encontrar TMs Raros na Exploração

Você não precisa depender apenas de fabricação. O mundo do Cobblemon 1.8.0 agora esconde TMs poderosos em estruturas misteriosas:

| Estrutura | Tipo de Baú | TM Garantido / Recompensa |
| --- | --- | --- |
| **Ruínas (Ruins & Arches)** | Baú Dourado (Gilded Chest) | Garante um TM exclusivo que **nenhum Pokémon aprende por nível** na natureza. |
| **Magma Shipwreck Cove** | Baú Principal de Tesouro | **TM Blast Burn** (Incêndio Fatal - Golpe Supremo de Fogo). |
| **Lush Shipwreck Cove** | Baú Principal de Tesouro | **TM Frenzy Plant** (Planta Frenética - Golpe Supremo de Grama). |
| **Submerged Shipwreck Cove** | Baú Principal de Tesouro | **TM Hydro Cannon** (Hidro Canhão - Golpe Supremo de Água). |

## Invocação de Porygon no Data Monitor

O **Monitor de Dados (Data Monitor)** recebeu uma fantástica atualização de gameplay:

-   Ao interagir com o Data Monitor segurando um item **Upgrade** ou **Dubious Disc** (Disco Duvidoso), o monitor processará os dados e materializará o Pokémon virtual **Porygon** no mundo!
-   Você também pode inserir discos de música ou TMs no Data Monitor para alterar o visual da tela com animações e dados customizados.

## Novos Blocos do 1.8.0

-   **Estante de Discos (Disk Rack):** Bloco decorativo funcional que armazena até 8 discos (TMs e músicas). Funciona também como um sequenciador de áudio para Blocos Musicais (Noteblocks).
-   **Bloco de Habitat (Habitat Block):** Bloco especial projetado para administradores de servidores e criadores de mapas de aventura para controlar o spawn de Pokémon em áreas demarcadas sem necessidade de datapacks complexos.

## Comandos e Conquistas de TMs

-   `/givetm <jogador> <golpe> [quantidade]`: Concede discos de TM diretamente para o inventário do jogador especificado.
-   **Conquista `cobblemon:has_learn_specific_tm`:** Disparada ao ensinar um TM específico.
-   **Conquista `cobblemon:has_learn_all_tm`:** Disparada ao ensinar todos os TMs disponíveis.
-   **Métrica `totalTMLearnedCount`:** Registra no perfil do jogador a quantidade total de TMs aprendidos por seus Pokémon.
