import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const rawDir = path.join(root, "raw-pages");
const pagesDir = path.join(root, "pages");
const assetsRoot = path.join(root, ".gitbook", "assets");

const PAGE_FILES = [
  "instalacao",
  "comandos",
  "faq",
  "pokemon-spawns",
  "lendarios",
  "breeding-reproducao",
  "montarias",
  "fosseis",
  "aprijuice-culinaria",
  "pokebolas-crafting",
  "maquinas-blocos",
  "raids",
  "missoes",
  "guiadepoknavepokefinder",
  "guiadeclaim",
  "moedaseconomia",
  "ev-iv-naturezas",
  "evolucoes-itens",
  "tms-maquinas",
  "tabela-tipos",
  "alpha-pokemon",
  "formas-regionais",
  "ranqueadasitruscobblemon",
  "cobblesafari",
];

function rewriteHref(href, fromPages) {
  if (!href) return href;
  const map = {
    "/": fromPages ? "../README.md" : "README.md",
    "/index.html": fromPages ? "../README.md" : "README.md",
  };
  if (map[href]) return map[href];
  const pageMatch = href.match(/^\/pages\/([a-z0-9-]+)\.html(.*)$/i);
  if (pageMatch) {
    const slug = pageMatch[1];
    const hash = pageMatch[2] || "";
    return fromPages ? `${slug}.md${hash}` : `pages/${slug}.md${hash}`;
  }
  return href;
}

function hintStyle(node) {
  if (node.classList.contains("hint-success")) return "success";
  if (node.classList.contains("hint-warning")) return "warning";
  if (node.classList.contains("hint-danger")) return "danger";
  return "info";
}

function extFromMime(mime) {
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("webp")) return "webp";
  if (mime.includes("gif")) return "gif";
  if (mime.includes("svg")) return "svg";
  return "png";
}

function extractImages(document, article, slug) {
  const imgDir = path.join(assetsRoot, slug);
  let index = 1;
  for (const img of article.querySelectorAll("img")) {
    const src = img.getAttribute("src") || "";
    const match = src.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/s);
    if (!match) continue;
    fs.mkdirSync(imgDir, { recursive: true });
    const ext = extFromMime(match[1]);
    const filename = `${String(index).padStart(2, "0")}.${ext}`;
    fs.writeFileSync(path.join(imgDir, filename), Buffer.from(match[2], "base64"));
    img.setAttribute("src", `../.gitbook/assets/${slug}/${filename}`);
    img.removeAttribute("srcset");
    index += 1;
  }
}

function replaceWithToken(el, markdown, tokens) {
  const id = tokens.size + 1;
  const token = `GITBOOKTOKEN${id}END`;
  tokens.set(token, markdown.trim());
  const marker = el.ownerDocument.createElement("p");
  marker.textContent = token;
  el.replaceWith(marker);
}

function preprocessGitbookBlocks(article, td, tokens) {
  for (const stepper of [...article.querySelectorAll(".gitbook-stepper")]) {
    let out = "{% stepper %}\n";
    for (const step of stepper.querySelectorAll(".gitbook-step")) {
      const inner = step.querySelector(".gitbook-step-content") || step;
      const body = td.turndown(inner.innerHTML).trim();
      out += `{% step %}\n${body}\n{% endstep %}\n`;
    }
    out += "{% endstepper %}";
    replaceWithToken(stepper, out, tokens);
  }

  for (const tabs of [...article.querySelectorAll(".gitbook-tabs")]) {
    const titles = [...tabs.querySelectorAll(".gitbook-tab")].map((el) =>
      el.textContent.replace(/\s+/g, " ").trim()
    );
    const panels = [...tabs.querySelectorAll(".gitbook-tab-panel")];
    let out = "{% tabs %}\n";
    titles.forEach((title, i) => {
      const body = td.turndown(panels[i] ? panels[i].innerHTML : "").trim();
      out += `{% tab title="${title.replace(/"/g, '\\"')}" %}\n${body}\n{% endtab %}\n`;
    });
    out += "{% endtabs %}";
    replaceWithToken(tabs, out, tokens);
  }
}

function createTurndown(fromPages) {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });
  td.use(gfm);
  td.keep(["iframe"]);

  td.addRule("hint", {
    filter: (node) =>
      node.nodeName === "DIV" && node.classList && node.classList.contains("hint"),
    replacement: (content, node) => {
      const style = hintStyle(node);
      return `\n{% hint style="${style}" %}\n${content.trim()}\n{% endhint %}\n\n`;
    },
  });

  td.addRule("cards", {
    filter: (node) =>
      node.nodeName === "DIV" && node.classList && node.classList.contains("card-grid"),
    replacement: (_content, node) => {
      const cards = [...node.querySelectorAll("a.card-item")];
      let out = "\n<table data-card-size=\"large\" data-view=\"cards\"><thead><tr><th></th><th data-hidden data-card-target data-type=\"content-ref\"></th></tr></thead><tbody>\n";
      for (const card of cards) {
        const href = rewriteHref(card.getAttribute("href") || "", fromPages);
        const title = card.querySelector(".card-title")?.textContent.trim() || card.textContent.trim();
        const icon = card.querySelector(".card-icon")?.textContent.trim() || "";
        const desc = card.querySelector(".card-description")?.textContent.trim() || "";
        out += `<tr><td>${icon} <strong>${title}</strong><p>${desc}</p></td><td><a href="${href}">${title}</a></td></tr>\n`;
      }
      out += "</tbody></table>\n\n";
      return out;
    },
  });

  td.addRule("figure", {
    filter: "figure",
    replacement: (_content, node) => {
      const img = node.querySelector("img");
      if (!img) return _content;
      const src = img.getAttribute("src") || "";
      const alt = (img.getAttribute("alt") || node.querySelector("figcaption")?.textContent || "").trim();
      return `\n<figure><img src="${src}" alt="${alt}"><figcaption>${alt}</figcaption></figure>\n\n`;
    },
  });

  td.addRule("badges", {
    filter: (node) => {
      if (node.nodeName !== "SPAN" || !node.classList) return false;
      return Array.from(node.classList).some(
        (c) => c.startsWith("badge-") && c !== "badge-copy-tooltip"
      );
    },
    replacement: (content) => `**${content.trim()}**`,
  });

  td.addRule("pills", {
    filter: (node) =>
      node.nodeName === "SPAN" && node.classList && node.classList.contains("gen-pill"),
    replacement: (content) => `\`${content.trim()}\``,
  });

  td.addRule("links", {
    filter: "a",
    replacement: (content, node) => {
      const href = rewriteHref(node.getAttribute("href") || "", fromPages);
      if (!href) return content;
      return `[${content}](${href})`;
    },
  });

  return td;
}

function cleanArticle(article) {
  article.querySelectorAll("nav.page-pagination, footer.article-meta, svg").forEach((el) => el.remove());
  article.querySelectorAll("[style]").forEach((el) => el.removeAttribute("style"));
}

function convertFile(htmlPath, outPath, slug, fromPages) {
  const html = fs.readFileSync(htmlPath, "utf8");
  const dom = new JSDOM(html);
  const article = dom.window.document.querySelector("article");
  if (!article) throw new Error(`No article in ${htmlPath}`);
  cleanArticle(article);
  extractImages(dom.window.document, article, slug);
  const td = createTurndown(fromPages);
  const tokens = new Map();
  preprocessGitbookBlocks(article, td, tokens);
  let md = td.turndown(article.innerHTML);
  let previous;
  do {
    previous = md;
    for (const [token, value] of tokens) {
      md = md.split(token).join(`\n${value}\n`);
    }
  } while (md !== previous);
  md = md
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\/assets\/install\/sitrus-controles-mobile\.zip/g, "../.gitbook/assets/instalacao/sitrus-controles-mobile.zip")
    .trim();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, md + "\n", "utf8");
  console.log("wrote", path.relative(root, outPath));
}

fs.mkdirSync(pagesDir, { recursive: true });
fs.mkdirSync(assetsRoot, { recursive: true });

convertFile(path.join(root, "wiki-home.html"), path.join(root, "README.md"), "home", false);

for (const slug of PAGE_FILES) {
  convertFile(path.join(rawDir, `${slug}.html`), path.join(pagesDir, `${slug}.md`), slug, true);
}
