//Code met hulp van de uitleg uit de les//


// Zoek de knop in de header die het menu opent
var openButton = document.querySelector("header > button");

// Voeg een klik-event toe aan de knop
openButton.onclick = openMenu;

// Functie die wordt uitgevoerd wanneer de open-knop wordt geklikt
function openMenu() {  
    // Zoek het nav-element in de header
    var deNav = document.querySelector("header nav");
    
    // Voeg de class "toonMenu" toe aan het nav-element
    // Dit kan worden gebruikt om het menu zichtbaar te maken
    deNav.classList.add("toonMenu");
} 

// Zoek de knop in de nav die het menu sluit
var sluitButton = document.querySelector("nav button");

// Voeg een klik-event toe aan de sluit-knop
sluitButton.onclick = sluitMenu;

// Functie die wordt uitgevoerd wanneer de sluit-knop wordt geklikt
function sluitMenu() {
    // Zoek het nav-element in de header
    var deNav = document.querySelector("header nav");
    
    // Verwijder de class "toonMenu" van het nav-element
    // Dit kan worden gebruikt om het menu weer te verbergen
    deNav.classList.remove("toonMenu");
}
