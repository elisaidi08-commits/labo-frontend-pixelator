document.querySelector("#pixel1").onclick = peindre;
document.querySelector("#pixel2").onclick = peindre;
document.querySelector("#pixel3").onclick = peindre;
document.querySelector("#pixel4").onclick = peindre;

function peindre(event) {
  if (event.target.style.backgroundColor === "") {
    event.target.style.backgroundColor = "#800080";
  }
  else {
    event.target.style.backgroundColor = "";
  }
}
