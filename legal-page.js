(() => {
  const type = document.body.dataset.legalType;
  const requested = new URLSearchParams(location.search).get("lang");
  const language = requested === "tr" || (!requested && navigator.language.toLowerCase().startsWith("tr")) ? "tr" : "en";
  const data = window.SecretBrushLegal?.get?.(type, language);
  const documentRoot = document.getElementById("document");

  document.documentElement.lang = language;
  document.getElementById(language === "tr" ? "turkishLink" : "englishLink")?.setAttribute("aria-current", "page");

  if (!data || !documentRoot) {
    if (documentRoot) documentRoot.textContent = "The requested legal document could not be loaded.";
    return;
  }

  document.title = `${data.title} - Secret Brush`;
  document.getElementById("pageTitle").textContent = data.title;
  document.getElementById("updated").textContent = data.updated;

  const appendParagraph = (parent, value) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    parent.appendChild(paragraph);
  };

  documentRoot.replaceChildren();
  const intro = document.createElement("div");
  intro.className = "intro";
  for (const paragraph of data.intro || []) appendParagraph(intro, paragraph);
  documentRoot.appendChild(intro);

  for (const entry of data.links || []) {
    const link = document.createElement("a");
    link.href = entry.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = entry.label;
    documentRoot.appendChild(link);
  }

  for (const item of data.sections || []) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = item.title;
    section.appendChild(heading);
    for (const paragraph of item.paragraphs || []) appendParagraph(section, paragraph);
    if (item.bullets?.length) {
      const list = document.createElement("ul");
      for (const value of item.bullets) {
        const listItem = document.createElement("li");
        listItem.textContent = value;
        list.appendChild(listItem);
      }
      section.appendChild(list);
    }
    documentRoot.appendChild(section);
  }
})();
