// Récupère l'URL actuelle
const url = new URL(window.location.href);
const path = url.pathname.slice(1); // Supprime le "/" initial

// Vérifie le chemin et affiche une réponse personnalisée
if (path === "") {
    document.body.innerHTML += "<p>Bienvenue à la racine de l'API.</p>";
} else if (path === "voici-ma-phrase") {
    document.body.innerHTML += "<p>Réponse : Hello !</p>";
} else {
    document.body.innerHTML += `<p>Vous avez saisi : ${path}</p>`;
}
