const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  let miniLiveBtnIcon1=document.getElementById('mini-live-btn-icon1');
  let miniLiveBtnIcon2=document.getElementById('mini-live-btn-icon2');
  let miniLiveBtnIcon3=document.getElementById('mini-live-btn-icon3');
  let miniLiveBtnIcon4=document.getElementById('mini-live-btn-icon4');
  let miniLiveBtnIcon5=document.getElementById('mini-live-btn-icon5');
  let miniSourceBtnIcon1=document.getElementById('mini-source-btn-icon1');
  let miniSourceBtnIcon2=document.getElementById('mini-source-btn-icon2');
  let miniSourceBtnIcon3=document.getElementById('mini-source-btn-icon3');
  let miniSourceBtnIcon4=document.getElementById('mini-source-btn-icon4');
  let miniSourceBtnIcon5=document.getElementById('mini-source-btn-icon5');
  let mode = document.getElementById('mode');
  document.body.classList.toggle('dark-theme')
if(document.body.classList.contains('dark-theme')){
     mode.src = 'assets/icons8-moon-symbol-64.png';
     miniLiveBtnIcon1.src='assets/icons8-white-eye-24.png';
     miniLiveBtnIcon2.src='assets/icons8-white-eye-24.png';
     miniLiveBtnIcon3.src='assets/icons8-white-eye-24.png';
     miniLiveBtnIcon4.src='assets/icons8-white-eye-24.png';
     miniLiveBtnIcon5.src='assets/icons8-white-eye-24.png';
     miniSourceBtnIcon1.src='assets/icons8-white-github-24.png';  
     miniSourceBtnIcon2.src='assets/icons8-white-github-24.png'; 
     miniSourceBtnIcon3.src='assets/icons8-white-github-24.png'; 
     miniSourceBtnIcon4.src='assets/icons8-white-github-24.png'; 
     miniSourceBtnIcon5.src='assets/icons8-white-github-24.png'; 
}
 else{
  mode.src = 'assets/icons8-sun.svg';
  miniLiveBtnIcon1.src='assets/icons8-eye-24.png';
  miniLiveBtnIcon2.src='assets/icons8-eye-24.png';
  miniLiveBtnIcon3.src='assets/icons8-eye-24.png';
  miniLiveBtnIcon4.src='assets/icons8-eye-24.png';
  miniLiveBtnIcon5.src='assets/icons8-eye-24.png';
  miniSourceBtnIcon1.src='assets/icons8-githubView.png';  
  miniSourceBtnIcon2.src='assets/icons8-githubView.png'; 
  miniSourceBtnIcon3.src='assets/icons8-githubView.png'; 
  miniSourceBtnIcon4.src='assets/icons8-githubView.png'; 
  miniSourceBtnIcon5.src='assets/icons8-githubView.png'; 
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
  let resume=document.getElementById('resume')
  let interaction= document.getElementById('interaction');
  let project= document.getElementById('project');
  let miniProject1= document.getElementById("miniProject1");
  let miniProject2= document.getElementById("miniProject2");
  let miniProject3= document.getElementById("miniProject3");
  let miniProject4= document.getElementById("miniProject4");
  let miniProject5= document.getElementById("miniProject5");
  let instagram= document.getElementById('instagram');
  let twitter= document.getElementById('twitter');
  let gitHub= document.getElementById('gitHub');
  let linkedIn=document.getElementById('linkedIn');
  home.addEventListener("click",()=>{
   about.style.color='rgba(0,0,0,0.5)';
   media.style.color='rgba(0,0,0,0.5)';
   projects.style.color='rgba(0,0,0,0.5)';
   
  })
  about.addEventListener("click",()=>{
    about.classList.add('nav-active');
    home.classList.remove('nav-active');
    projects.classList.remove('nav-active');
    // home.style.color='var(--darkNavColor)';
    // media.style.color='var(--darkNavColor)';
    // projects.style.color='var(--darkNavColor)';
    bio.style.gridArea='1/1/1/3';
    slider.style.gridArea='1/3/1/3';
    resume.style.gridArea='1/4/1/4'
    skill.style.gridArea='5/1/5/1';
    linkedIn.style.gridArea='2/4/2/4';
    tool.style.gridArea='5/2/5/2';
    techtips.style.gridArea='5/3/5/3';
    interaction.style.gridArea='3/1/5/1';
    instagram.style.gridArea='2/3/2/3';
    twitter.style.gridArea='2/1/2/1';
    gitHub.style.gridArea='2/2/2/2';
    miniProject1.style.gridArea='3/2/3/2';
    miniProject2.style.gridArea='3/3/3/3';
    miniProject3.style.gridArea='3/4/3/4';
    miniProject4.style.gridArea='4/2/4/2';
    miniProject5.style.gridArea='4/3/4/3';
    project.style.gridArea='4/4/4/4';
    interaction.style.opacity='0.1';
    project.style.opacity='0.1';
    miniProject1.style.opacity='0.1';
    miniProject2.style.opacity='0.1';
    miniProject3.style.opacity='0.1';
    miniProject4.style.opacity='0.1';
    miniProject5.style.opacity='0.1';
    techtips.style.opacity='0.1';
    tool.style.opacity='0.1';
    skill.style.opacity='0.1';
    linkedIn.style.opacity='1';
    instagram.style.opacity='1';
    slider.style.opacity='1';
    resume.style.opacity='1';
  })
  projects.addEventListener('click',()=>{
    about.classList.remove('nav-active');
    home.classList.remove('nav-active');
    media.classList.remove('nav-active');
    projects.classList.add('nav-active');
    // home.style.color='rgba(0,0,0,0.5)';
    // media.style.color='rgba(0,0,0,0.5)';
    // about.style.color='rgba(0,0,0,0.5)';
    bio.style.gridArea='1/3/1/5';
    slider.style.gridArea='5/2/5/2';
    skill.style.gridArea='3/3/3/3';
    tool.style.gridArea='3/4/3/4';
    techtips.style.gridArea='5/1/5/1';
    interaction.style.gridArea='4/4/6/4';
    miniProject1.style.gridArea='1/1/1/1';
    miniProject2.style.gridArea='1/2/1/2';
    miniProject3.style.gridArea='2/1/2/1';
    miniProject4.style.gridArea='2/2/2/2';
    miniProject5.style.gridArea='2/3/2/3';
    project.style.gridArea='2/4/2/4';
    instagram.style.gridArea='4/2/4/4';
    twitter.style.gridArea='3/2/3/2';
    linkedIn.style.gridArea='4/1/4/1';
    gitHub.style.gridArea='3/1/3/1';
    resume.style.gridArea='5/3/5/3';
    interaction.style.opacity='0.1';
    slider.style.opacity='0.1';
    resume.style.opacity='0.1';
    techtips.style.opacity='0.1';
    linkedIn.style.opacity='0.1';
    instagram.style.opacity='0.1';
    bio.style.opacity='1';
    tool.style.opacity='1';
    skill.style.opacity='1';
    project.style.opacity='1';
    miniProject1.style.opacity='1';
    miniProject2.style.opacity='1';
    miniProject3.style.opacity='1';
    miniProject4.style.opacity='1';
    miniProject5.style.opacity='1';
    
  })
  media.addEventListener('click',()=>{
    about.classList.remove('nav-active');
    home.classList.remove('nav-active');
    projects.classList.remove('nav-active');
    media.classList.add('nav-active');
    // home.style.color='rgba(0,0,0,0.5)';
    // project.style.color='rgba(0,0,0,0.5)';
    // about.style.color='rgba(0,0,0,0.5)';
    bio.style.gridArea='5/2/5/4';
    slider.style.gridArea='1/3/1/3';
    skill.style.gridArea='4/4/4/4';
    tool.style.gridArea='4/3/4/3';
    techtips.style.gridArea='5/1/5/1';
    resume.style.gridArea='5/4/5/4';
    interaction.style.gridArea='3/1/5/1';
    miniProject1.style.gridArea='4/2/4/2';
    miniProject2.style.gridArea='2/4/2/4';
    miniProject3.style.gridArea='3/2/3/2';
    miniProject4.style.gridArea='3/3/3/3';
    miniProject5.style.gridArea='3/4/3/4';
    instagram.style.gridArea='2/1/2/1';
    twitter.style.gridArea='1/1/1/3';
    linkedIn.style.gridArea='1/4/1/4';
    gitHub.style.gridArea='2/2/2/4'; 
    techtips.style.opacity='0.1';
    resume.style.opacity='0.1';
    interaction.style.opacity='0.1';
    skill.style.opacity='0.1';
    tool.style.opacity='0.1';
    bio.style.opacity='0.1';
    project.style.opacity='0';
    miniProject1.style.opacity='0.1';
    miniProject2.style.opacity='0.1';
    miniProject3.style.opacity='0.1';
    miniProject4.style.opacity='0.1';
    miniProject5.style.opacity='0.1';
    instagram.style.opacity='1';
    slider.style.opacity='1';
    linkedIn.style.opacity='1';
  })