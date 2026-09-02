const header = document.getElementById("header");

function handleScroll() {
  if (window.scrollY > 24) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
handleScroll();
window.addEventListener("scroll", handleScroll, { passive: true });


function abrirCard(){
  alert("Teste Botão")
}