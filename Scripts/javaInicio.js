function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  var slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
  }
  	slides[slideIndex-1].style.display = "block";
}

function readTextFile(file)
{
    var x=document.getElementById("descarga");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                x.innerHTML=allText;
            }
        }
    }
    rawFile.send(null);
}
function limpiar(){
	document.getElementById("descarga").innerHTML="";
}
function Titulo(t){
	document.getElementById("title").innerHTML=t;
}
