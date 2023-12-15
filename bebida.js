let iconClicked = false;

function showIcon() {
  document.getElementById("myIcon").style.display = "inline";
}

function hideIcon() {
  if (!iconClicked) {
    document.getElementById("myIcon").style.display = "none";
  }
}

function changeIconColor() {
  let icon = document.getElementById("myIcon");
  icon.style.color = iconClicked ? "Black" : "red";
  iconClicked = !iconClicked;
}

// JavaScript para mostrar los iconos al hacer clic en la tarjeta

// Seleccionar todas las tarjetas
const cards = document.querySelectorAll('.card');

// Iterar sobre cada tarjeta y mostrar las estrellas
cards.forEach(card => {
  const icons = card.querySelector('.estrellas');
  icons.style.display = 'flex'; // Mostrar los iconos de las estrellas
});




