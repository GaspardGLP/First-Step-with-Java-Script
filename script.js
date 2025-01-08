// Fonction pour rediriger vers Google
function goToGoogle() {
    window.location.href = "https://www.google.com";
}

// Fonction pour déplacer le bouton de manière aléatoire
function moveButton() {
    const button = document.getElementById("magicButton");

    // Générer des positions aléatoires dans la fenêtre
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

    // Appliquer les nouvelles positions
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Ajouter un événement pour déplacer le bouton au survol
const button = document.getElementById("magicButton");
button.addEventListener("mouseover", moveButton);
