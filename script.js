const resultats = [
  {
    numero_table: "2025BJ00123",
    nom: "Derick K.",
    examen: "BAC",
    moyenne: 14.25,
    mention: "Bien"
  },
  {
    numero_table: "2025BJ00124",
    nom: "Aminata S.",
    examen: "BEPC",
    moyenne: 12.00,
    mention: "Assez bien"
  }
];

document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const numero = document.getElementById("numeroTable").value.trim();
  const resultat = resultats.find(r => r.numero_table === numero);

  const div = document.getElementById("resultat");
  if (resultat) {
    div.innerHTML = `
      <h2>Résultat trouvé 🎉</h2>
      <p><strong>Nom :</strong> ${resultat.nom}</p>
      <p><strong>Examen :</strong> ${resultat.examen}</p>
      <p><strong>Moyenne :</strong> ${resultat.moyenne}</p>
      <p><strong>Mention :</strong> ${resultat.mention}</p>
    `;
  } else {
    div.innerHTML = `<p style="color:red;">Aucun résultat trouvé pour ce numéro.</p>`;
  }
});
