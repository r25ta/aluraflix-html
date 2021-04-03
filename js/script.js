var trailerFilmes = [
  "https://www.youtube.com/embed/vayksn4Y93A",
  "https://www.youtube.com/embed/QNd2ug4gvzM",
  "https://www.youtube.com/embed/s7EdQ4FqbhY",
  "https://www.youtube.com/embed/G7HkBDNZV7s",
  "https://www.youtube.com/embed/7kSuas6mRpk",
  "https://www.youtube.com/embed/q2h6EFk36kI",
  "https://www.youtube.com/embed/m5VmaMY7T70",
  "https://www.youtube.com/embed/KnrRy6kSFF0",
  "https://www.youtube.com/embed/0fUCuvNlOCg",
  "https://www.youtube.com/embed/nIOmotayDMY",
  "https://www.youtube.com/embed/ELeMaP8EPAA"
];

var cartazFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/e/e1/Reservoir_Dogs_1992.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDc3Y2YwMjUtYzlkMi00MTljLTg1ZGMtYzUwODljZTI1OTZjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Pulp_Fiction_cover.jpg/230px-Pulp_Fiction_cover.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/2/2b/Jackie_Brown_1997.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/6/6d/Kill_Bill_poster.jpg/220px-Kill_Bill_poster.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYTdmZmY3Y2QtNjU5NC00OGUxLTg3MWQtMmE2ODM5Mzg3MzcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c2/Inglourious_basterds_ver9.jpg/235px-Inglourious_basterds_ver9.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Django_Unchained_Poster.jpg/250px-Django_Unchained_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Hateful_eight_ver2.jpg/230px-Hateful_eight_ver2.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png"
];
let nomeFilmes = [
  "Reservoir Dogs",
  "Four Rooms",
  "Pulp Fiction",
  "Jackie Brown",
  "Kill Bill Vol. 1",
  "Kill Bill Vol. 2",
  "Death Proof",
  "Inglourious Basterds",
  "Django Unchained",
  "Hateful Eight",
  "Once Upon a Time in Hollywood"
];

function limparFrameYT(){
  var elemento = document.querySelector("#frameYT");
  elemento.parentNode.removeChild(elemento);
}

function exibirTrailer(idFilme) {
  var elementoTrailer = document.querySelector("#divTrailer");
  limparFrameYT();
  
  
  var trailer = "<iframe id='frameYT' width='350' height='250' src='" + trailerFilmes[idFilme] + "?autoplay=1&mute=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";  
    elementoTrailer.innerHTML = elementoTrailer.innerHTML + trailer;
 
};

function preencherVitrine() {
  var totaAcervo = nomeFilmes.length;

  for (var i = 0; i < totaAcervo; i++) {
    exibirVitrine(nomeFilmes[i], cartazFilmes[i], i);
  };
};

function exibirVitrine(nome, cartaz, id) {
  var elementoVitrine = document.querySelector("#teste");
  var imprimir =
    "<div class='divNomeFilme'>" +
    nome +
    "<img class='imgCartaz' src=" +
    cartaz +
    " onclick='exibirTrailer(filme" +
    id +
    ".value)'/> <input type='hidden'id='filme" +
    id +
    "' value='" +
    id +
    "'/></div>";
  elementoVitrine.innerHTML = elementoVitrine.innerHTML + imprimir;
  console.log(elementoVitrine);
};