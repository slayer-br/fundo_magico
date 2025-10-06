document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-group");
  const textArea = document.getElementById("description");
  const htmlCode = document.getElementById("html-code");
  const cssCode = document.getElementById("css-code");
  const preview = document.getElementById("preview-section");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const description = textArea.value.trim();

    if (!description) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://slayer-br.app.n8n.cloud/webhook/gerador-background", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      const data = await response.json();
      htmlCode.textContent = data.code || "";
      cssCode.textContent = data.style || "";

      preview.style.display = "block";
      preview.innerHTML = data.code || "";

      let styleTag = document.getElementById("dynamic-style");

      if (styleTag) styleTag.remove();

      if (data.style) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-style";

        styleTag.textContent = data.style;
        document.head.appendChild(styleTag);
      }
    } catch (error) {
      console.error("Erro ao gerar o background.", error);
      htmlCode.textContent = "Código HTML não gerado. Tente novamente.";
      cssCode.textContent = "Código CSS não gerado. Tente novamente.";
      preview.innerHTML = "";
    } finally {
      setLoading(false);
    }
  });
});

function setLoading(isLoading) {
  const button = document.getElementById("generate-btn");
  button.disabled = isLoading;
  button.textContent = isLoading ? "Gerando Background..." : "Gerar Background Mágico";
}
