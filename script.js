// Données simulées
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
    mention: "Passable"
  },
  {
    numero_table: "2025BJ00125",
    nom: "Candidat C",
    examen: "BAC",
    moyenne: 8.75,
    mention: "Ajourné"
  }
];

// Fonction de recherche
function rechercherResultat() {
  const numeroSaisi = document.getElementById("numeroTable").value.trim();
  const resultat = resultats.find(r => r.numero_table === numeroSaisi);

  const zoneAffichage = document.getElementById("resultat");

  if (resultat) {
    let message = "";

    if (resultat.moyenne < 10) {
      message = `
        <p><strong>${resultat.nom}</strong> — ${resultat.examen}</p>
        <p>Moyenne : ${resultat.moyenne}/20</p>
        <p style="color: red;">Mention : ${resultat.mention} ❌</p>
        <p>Désolé, vous n'avez pas été admis.</p>
      `;
    } else {
      message = `
        <p><strong>${resultat.nom}</strong> — ${resultat.examen}</p>
        <p>Moyenne : ${resultat.moyenne}/20</p>
        <p style="color: green;">Mention : ${resultat.mention} ✅</p>
        <p>Félicitations, vous êtes admis !</p>
      `;
    }

    zoneAffichage.innerHTML = message;
  } else {
    zoneAffichage.innerHTML = `<p style="color: orange;">Aucun résultat trouvé pour ce numéro de table.</p>`;
  }
}
