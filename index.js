

mode.addEventListener("click", () => {
  const mode = document.getElementById("mode");
  const body = document.getElementsByTagName("BODY")[0];
  const r = document.querySelector(":root");
  const modeName = document.getElementById("modeName");
  const onOffBtn = document.getElementById("onOffBtn");
  if (modeName.innerText == "Day") {
    modeName.innerText = "";
    onOffBtn.style.width = "60px";
    r.style.setProperty("--white", "rgb(35, 33, 33)");
    r.style.setProperty("--black", "white");
    r.style.setProperty("--gridBoxShd", " 1px 1px 8px 8px  rgb(120, 120, 120)");
    r.style.setProperty("--borderBot", " 1px solid  rgb(0, 0, 0)");
    r.style.setProperty("--bg", "rgb(19, 17, 17)");
    onOffBtn.innerText = "Night";
  } else {
    onOffBtn.innerText = "";
    onOffBtn.style.width = "24px";
    modeName.innerText = "Day";
    r.style.setProperty("--white", "white");
    r.style.setProperty("--gridBoxShd", "1px 1px 8px 8px rgb(215, 213, 213)");
    r.style.setProperty("--borderBot", " 1px solid  rgb(218, 217, 217)");
    r.style.setProperty("--lightGrey", "rgb(185, 185, 185)");
    r.style.setProperty("--black", "rgb(19, 17, 17)");
    r.style.setProperty("--bg", "rgb(231, 231, 231)");
  }
});
let showSlides=(n)=>{
 
  let slides=document.getElementsByClassName('image');
  let dots=document.getElementsByClassName('dot');
if(n>slides.length)
{slideIndex=1}
if(n<1)
{slideIndex=slides.length}
for(let i=0;i<slides.length;i++)
{
  slides[i].style.visibility='hidden'
}
for(let j=0;j<dots.length;j++)
{
 dots[j].className = dots[j].className.replace(" active"," ");
}
slides[slideIndex-1].style.visibility='visible';
dots[slideIndex-1].className +=" active";
}
let slideIndex = 1;  
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}                   


  



