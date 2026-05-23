// WhatsApp
  document
    .getElementById("WhatsAppKlik")
    .addEventListener("click", function () {
      window.open("https://wa.me/6289509513656", "_blank");
    });

  // Email
  document
    .getElementById("EmailKlik")
    .addEventListener("click", function () {
      window.location.href = "mailto:willyschool748@gmail.com";
    });

  // Instagram
  document
    .getElementById("InstagKlik")
    .addEventListener("click", function () {
      window.open("https://instagram.com/wil.ly0716", "_blank");
    });




const slider = document.getElementById("booksScroll");

/* clone awal */
const cards = [...slider.children];

for(let i = 0; i < 10; i++) {
  cards.forEach(card => {
    slider.appendChild(card.cloneNode(true));
  });
}

/* tambah lagi saat hampir ujung */
slider.addEventListener("scroll", () => {

  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - 1000
  ) {

    cards.forEach(card => {
      slider.appendChild(card.cloneNode(true));
    });

  }

});