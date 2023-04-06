const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
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
  //navElements
  let about=document.getElementById('about');
  let home=document.getElementById('home');
  let projects=document.getElementById('projects');
  let media=document.getElementById('media');
  //cardElements
  let bio=document.getElementById('bio')
  let slider=document.getElementById('slider');
  let skill= document.getElementById('skill');
  let tool= document.getElementById('tool');
  let techtips= document.getElementById('techtips');
  let githubView= document.getElementById('githubView');
  let interaction= document.getElementById('interaction');
  let project1= document.getElementById('project1');
  let project2= document.getElementById('project2');
  let instagram= document.getElementById('instagram');
  let twitter= document.getElementById('twitter');
  let gitHub= document.getElementById('gitHub');
  let linkedIn=document.getElementById('linkedIn');
  about.addEventListener("click",()=>{
    about.classList.add('nav-active');
    home.classList.remove('nav-active');
    projects.classList.remove('nav-active');
    bio.style.gridArea='1/1/1/3';
    slider.style.gridArea='1/3/1/3';
    skill.style.gridArea='4/4/4/4';
    linkedIn.style.gridArea='1/4/1/4';
    tool.style.gridArea='3/4/3/4';
    techtips.style.gridArea='5/4/5/4';
    githubView.style.gridArea='5/2/5/4';
    interaction.style.gridArea='3/1/5/1';
    instagram.style.gridArea='2/4/2/4';
    twitter.style.gridArea='2/3/2/3';
    gitHub.style.gridArea='2/1/2/3';
    project1.style.gridArea='3/2/5/2';
    project2.style.gridArea='3/3/5/3';
    interaction.style.opacity='0.1';
    project1.style.opacity='0.1';
    project2.style.opacity='0.1';
    githubView.style.opacity='0.1';
    techtips.style.opacity='0.1';
    tool.style.opacity='0.1';
    skill.style.opacity='0.1';
    linkedIn.style.opacity='1';
    instagram.style.opacity='1';
    slider.style.opacity='1';
  })

  projects.addEventListener('click',()=>{
    about.classList.remove('nav-active');
    home.classList.remove('nav-active');
    media.classList.remove('nav-active');
    projects.classList.add('nav-active');
    bio.style.gridArea='1/3/1/5';
    slider.style.gridArea='4/2/4/2';
    skill.style.gridArea='2/3/2/3';
    tool.style.gridArea='2/4/2/4';
    techtips.style.gridArea='4/4/4/4';
    githubView.style.gridArea='5/2/5/4';
    interaction.style.gridArea='4/1/6/1';
    project1.style.gridArea='1/1/3/1';
    project2.style.gridArea='1/2/3/2';
    instagram.style.gridArea='5/4/5/4';
    twitter.style.gridArea='3/3/3/5';
    linkedIn.style.gridArea='4/3/4/3';
    gitHub.style.gridArea='3/1/3/3';
    interaction.style.opacity='0.1';
    slider.style.opacity='0.1';
    githubView.style.opacity='0.1';
    techtips.style.opacity='0.1';
    linkedIn.style.opacity='0.1';
    instagram.style.opacity='0.1';
    tool.style.opacity='1';
    skill.style.opacity='1';
    project1.style.opacity='1';
    project2.style.opacity='1';
    bio.style.opacity='1';
  })
  media.addEventListener('click',()=>{
    about.classList.remove('nav-active');
    home.classList.remove('nav-active');
    projects.classList.remove('nav-active');
    media.classList.add('nav-active');
    bio.style.gridArea='4/3/4/5';
    slider.style.gridArea='1/3/1/3';
    skill.style.gridArea='3/3/3/3';
    tool.style.gridArea='5/4/5/4';
    techtips.style.gridArea='5/3/5/3';
    githubView.style.gridArea='5/1/5/3';
    interaction.style.gridArea='2/4/4/4';
    project1.style.gridArea='3/1/5/1';
    project2.style.gridArea='3/2/5/2';
    instagram.style.gridArea='2/1/2/1';
    twitter.style.gridArea='1/1/1/3';
    linkedIn.style.gridArea='1/4/1/4';
    gitHub.style.gridArea='2/2/2/4'; 
    techtips.style.opacity='0.1';
    githubView.style.opacity='0.1';
    interaction.style.opacity='0.1';
    project1.style.opacity='0.1';
    project2.style.opacity='0.1';
    skill.style.opacity='0.1';
    tool.style.opacity='0.1';
    bio.style.opacity='0.1';
    instagram.style.opacity='1';
    slider.style.opacity='1';
    linkedIn.style.opacity='1';
  })