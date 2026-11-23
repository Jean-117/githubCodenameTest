function changeImage() {
  var image = document.getElementById('bola');
  document.body.classList.toggle('dark-mode');

  if (image.src.match("sol")) {
    image.src = "movies/luna.png";
    localStorage.setItem("tema", "oscuro");
  } else {
    image.src = "movies/sol.png";
    localStorage.setItem("tema", "claro");
  }
}

window.onload = function() {
  var image = document.getElementById('bola');
  var tema = localStorage.getItem("tema");

  if (tema == "claro") {
    document.body.classList.add('dark-mode');
    image.src = "movies/sol.png";
  } else {
    document.body.classList.remove('dark-mode');
    image.src = "movies/luna.png";
  }
};