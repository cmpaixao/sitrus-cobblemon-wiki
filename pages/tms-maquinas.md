**Cobblemon 1.8.0** **Sistema de TMs**

# 💿 **TMs, Gemas Elementais & Máquinas**

{% hint style="info" %}
No Cobblemon **1.8.0 (“Make Your Move”)** os TMs são oficiais: você fabrica na **Máquina de TMs** com **Gemas Elementais**, desbloqueia receitas com Pokémon que já saibam o golpe e acha TMs exclusivos em **ruínas** e **coves de naufrágio**.
{% endhint %}

## O que é um TM

Disco que ensina um golpe a um Pokémon compatível. No Cobblemon isso usa minério, exploração e gemas — não é o sistema antigo de mods Pixelmon.

Por padrão o TM é **consumido** ao usar. Uso infinito só existe se a staff ligar isso na config do servidor.

## Máquina de TMs

- A receita de um TM **não vem toda liberada**. Ela destrava quando você tem no time (ou na box, conforme o jogo reconhecer) um Pokémon que **já conheça aquele golpe**.
- Para gravar: disco em branco + **gemas do tipo** do golpe na Máquina de TMs.
- Há dezenas de TMs na máquina; uma parte já aparece, o resto destrava jogando.

## Gemas Elementais

- Uma gema por tipo (os 18 tipos).
- No mundo: blocos de gema, **aglomerados de cristal** e **Deepslate Crystal Core** para cultivar/colher.
- Se o pack tiver **Create**, aglomerados de gema e tumblestone podem ir nas *Crushing Wheels* (retorno baixo, mas automatiza). Isso é integração oficial do Cobblemon 1.8 com Create, não invenção da wiki.

{% hint style="success" %}
O **Bico Afiado (Sharp Beak)** no 1.8.0 crafta com ossos + **Flying Gems**.
{% endhint %}

## TMs no mundo (não só craft)

Isso está no changelog 1.8.0 do Cobblemon:

| Onde | O que vem |
| --- | --- |
| **Ruínas** — baú dourado (Gilded Chest) | TM que **nenhum** Pokémon aprende por nível. Cada ruína tem o seu. |
| **Magma Shipwreck Cove** — baú principal | **TM Blast Burn** |
| **Lush Shipwreck Cove** — baú principal | **TM Frenzy Plant** |
| **Submerged Shipwreck Cove** — baú principal | **TM Hydro Cannon** |

## Data Monitor e Porygon

Segurar **Upgrade** ou **Dubious Disc** e usar no **Data Monitor** materializa um **Porygon**. Discos de música/TM no monitor só mudam o visual da tela.

## Blocos do 1.8 ligados a isso

- **Disk Rack:** guarda até 8 discos (TM e música) e pode sequenciar Note Block.
- **Habitat Block:** spawner de área para staff/mapas — **não** é item de progressão normal do jogador.

## Comandos (staff)

`/givetm` existe no Cobblemon 1.8 e **não** é comando de jogador. Conquistas `has_learn_specific_tm` / `has_learn_all_tm` e o contador `totalTMLearnedCount` são do próprio mod.
