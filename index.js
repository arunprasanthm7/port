const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  // let body = document.getElementsByTagName("BODY")[0];
  let light = document.getElementById('light');
  let lightIcon = document.getElementById('lightIcon');
  document.body.classList.toggle('dark-theme')
if(document.body.classList.contains('dark-theme')){
     light.style.transform = 'translateX(36px)';
     lightIcon.src = 'assets/icons8-moon-symbol-64.png';
}
 else{
  light.style.transform = 'translateX(0px)';
  lightIcon.src = 'assets/icons8-sun.svg';
 }
});
let showSlides = (n) => {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
    slides[0].style.marginLeft = "0";
  }
  if (n < 1) {
    slideIndex = slides.length;
    slides[0].style.marginLeft = "-60%";
  }
  if (n == 1) {
    slides[0].style.marginLeft = "0";
  }
  if (n == 2) {
    slides[0].style.marginLeft = "-20%";
  }
  if (n == 3) {
    slides[0].style.marginLeft = "-40%";
  }
  if (n == 4) {
    slides[0].style.marginLeft = "-60%";
  }
  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", " ");
  }
  dots[slideIndex - 1].className += " active";
};
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
