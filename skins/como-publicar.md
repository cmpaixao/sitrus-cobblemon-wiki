# 📤 Como publicar skins

{% hint style="warning" %}
Página de staff. Jogadores só precisam da [Galeria de Skins](README.md).
{% endhint %}

Há dois caminhos: **GitBook** (esta wiki que você vai publicar) e o **portal admin** do site atual.

## 1. Publicar no GitBook (recomendado)

1. Coloque o arquivo da skin em `.gitbook/assets/skins/` com um nome simples, por exemplo `charizard-neon.png`.
2. Abra `skins/README.md`.
3. Troque um card **Em breve** pelo nome da skin.
4. Cole uma **Ficha da skin** usando o modelo da galeria, apontando a imagem:

```markdown
<figure><img src="../.gitbook/assets/skins/charizard-neon.png" alt="Charizard Neon"><figcaption>Charizard Neon</figcaption></figure>
```

5. Atualize a tabela **Catálogo** com autor, data e como obter.
6. Sincronize o espaço GitBook (Git Sync ou upload da pasta).

Formatos aceitos: `.png`, `.jpg`, `.webp`. Prefira PNG com fundo transparente.

## 2. Portal admin do site atual

O painel da staff do site HTML continua em [https://wiki-sitruscobblemon.com.br/admin/](https://wiki-sitruscobblemon.com.br/admin/).

Use o admin para identidade da wiki, sidebar, editor de páginas, anúncios e backup do site em produção.

Esta pasta GitBook **não troca senha nem configurações** daquele painel. Depois de autenticar no admin:

1. Abra **📝 Editor de Páginas**.
2. Crie ou edite a página de skins (mesmo conteúdo da galeria).
3. Inclua a página na **🧭 Sidebar**.
4. Salve as alterações.

## Checklist rápido

- [ ] Imagem em `.gitbook/assets/skins/`
- [ ] Card da galeria atualizado
- [ ] Ficha com autor e como obter
- [ ] Linha no catálogo
- [ ] GitBook sincronizado (e, se ainda usar o site antigo, página salva no admin)
