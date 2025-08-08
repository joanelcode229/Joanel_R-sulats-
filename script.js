// script.js
const candidats = {
  "2025A001": { nom: "Derick K.", examen: "BEPC", moyenne: 12.5, mention: "Admis" },
  "2025A002": { nom: "Fatou S.", examen: "BEPC", moyenne: 9.75, mention: "Ajourné" }
};

function getMentionClass(mention) {
  if (mention === "Admis") return "admis";
  if (mention === "Ajourné") return "ajourne";
  return "inconnu";
}

function searchResult() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("resultDisplay");
  resultDiv.innerHTML = "";

  const data = candidats[input];

  if (data) {
    const mentionClass = getMentionClass(data.mention);
    resultDiv.innerHTML = `
      <div class="result-card">
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Examen :</strong> ${data.examen}</p>
        <p><strong>Moyenne :</strong> ${data.moyenne}</p>
        <p class="mention ${mentionClass}">Mention : ${data.mention}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="result-card">
        <p class="mention inconnu">⚠️ Numéro non trouvé</p>
      </div>
    `;
  }
}
