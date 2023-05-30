//Slideshow

var slideIndex = 0; // Opretter en variabel med navnet "slideIndex" med værdien 0.
visSlides(); // Kalder funktionen "visSlides()".

function visSlides() { // Definerer funktionen "visSlides()".
  var i; // Opretter en variabel med navnet "i".
  var slides = document.getElementsByClassName("slideBilleder"); // Henter alle "slideBilleder" og gemmer dem i variablen "slides".
  var dots = document.getElementsByClassName("dot"); // Henter alle "dot" og gemmer dem i variablen "dots".

// Skjul slides ved at ændre deres display="none"
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Flyt til næste slide
slideIndex++;

// Slideshow nulstilles ved slutningen
if (slideIndex > slides.length) {
  slideIndex = 1;
}

// Fjern class "active" fra alle dots ved at erstatte "active" med en tom string
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}


  // Viser den nuværende slide og den tilhørende dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Skifter automatisk til næste slide efter 4 sekunder
  setTimeout(visSlides, 4000);
}

function plusSlides(n) {// Skifter til det næste slide.
  visSlide(slideIndex + n);// 'n' angiver antallet af slides, der skal skiftes. 
}

function currentSlide(n) { // Skifter direkte til et specifikt slide.
  visSlide(n); // 'n' angiver det ønskede slide-nummer.
}
function visSlide(n) { // Funktionen visSlide bruges til at vise slidet 'n'.

  var slides = document.getElementsByClassName("slideBilleder"); // Henter alle slideBilleder
  var dots = document.getElementsByClassName("dot"); // Henter alle dots

if (n < 1) {// Hvis slideindekset er mindre end 1, sættes det til det sidste slide
  slideIndex = slides.length;
} else if (n > slides.length) {// Hvis slideindekset er større end antallet af slides, sættes det til det første slide
  slideIndex = 1;
} else {// Ellers forbliver slideindekset uændret
  slideIndex = n;
}

  // Skjul alle slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Fjern class "active" fra alle dots
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Viser aktuelle slide og tilføjer "active" klassen til den tilhørende dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function skjulHeader() { // Fjerner header, når man trykker på menuknappen
  var header = document.querySelector('header');
  header.style.display = 'none';
}

var myImg1 = document.getElementById('myImg1'); // Hent elementet med id 'myImg1'
myImg1.addEventListener('click', skjulHeader); // Tilføjer click-event til myImg1







/******************Modal Menu**************************/
// Modal menu
var modal = document.getElementById("myModal"); //Får fat på HTML-elementet med id=myModal
var img = document.getElementById("myImg1"); // Henter HTML-elementet med id'et "myImg" og gemmer det i variablen "img"
var modalImg = document.getElementById("img01"); // Henter HTML-elementet med id'et "img01" og gemmer det i variablen "modalImg"

img.onclick = function(){ // Når der klikkes på "img" elementet, udføres følgende kode
  modal.style.display = "block"; // Ændrer CSS-egenskaben "display" for "modal" elementet til "block", hvilket gør det synligt på siden
  modalImg.src = "images/menukort.png"; // Indsætter kilden/src til "menu.png", der ændrer billedet fra hjemmesiden til menukort
}

var div = document.getElementsByClassName("close")[0]; // <div> elementet oprettes til at lukke modal
div.onclick = function() { //<div> elementet får funktion, når den klikkes på
  modal.style.display = "none"; //<div> Skjuler modal med display="none".
}

// Modal drinks
var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = "images/drinkkort.jpeg";
}

var div2 = document.getElementsByClassName("close2")[0];
div2.onclick = function() {
  modal2.style.display = "none";
}

function skjulHeader() { // Fjerner header, når man trykker på menuknappen
  var header = document.querySelector('header');
  header.style.display = 'none';
}

var myImg1 = document.getElementById('myImg1'); // Hent elementet med id 'myImg1'
myImg1.addEventListener('click', skjulHeader); // Tilføjer click-event til myImg1

var myImg2 = document.getElementById('myImg2');
myImg2.addEventListener('click', skjulHeader);



//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //vælger alle ahref links for at udføre funktion på hver
  anchor.addEventListener("click", function(e){// Hvert link er klikbart ved at anvende addEventListener-metoden. Når linkene klikkes, udføres den angivne funktion.
    e.preventDefault(); //Forhindrer standarden for klikfunktionen, som normalt ville føre til at navigere til sektionen.
    document.querySelector(this.getAttribute("href")).scrollIntoView({ //Finder sektionen på siden, som har ID'et og scroller derhen.
      behavior : "smooth" //Smooooooth scroolll ja tak
    })
  })
})
