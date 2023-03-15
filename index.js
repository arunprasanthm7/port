const mode=document.getElementById('mode')
const body=document.getElementsByTagName('BODY')[0]
const r=document.querySelector(':root');
const modeName=document.getElementById('modeName')
const onOffBtn=document.getElementById('onOffBtn')
mode.addEventListener('click',()=>{
    
    if(modeName.innerText=='Day')
    {
        modeName.innerText='';
        onOffBtn.style.width='60px';
        r.style.setProperty('--white','rgb(35, 33, 33)')
        r.style.setProperty('--black','white')
        r.style.setProperty('--gridBoxShd',' 1px 1px 8px 8px  rgb(120, 120, 120)')
        r.style.setProperty('--borderBot',' 1px solid  rgb(0, 0, 0)')
        r.style.setProperty('--bg','rgb(19, 17, 17)')
        onOffBtn.innerText='Night';       
    }
    else
    {
        onOffBtn.innerText='';
        onOffBtn.style.width='24px';
        modeName.innerText='Day';
        r.style.setProperty('--white','white')
        r.style.setProperty('--gridBoxShd','1px 1px 8px 8px rgb(215, 213, 213)')
        r.style.setProperty('--borderBot',' 1px solid  rgb(218, 217, 217)')
        r.style.setProperty('--lightGrey','rgb(185, 185, 185)')
        r.style.setProperty('--black','rgb(19, 17, 17)')
        r.style.setProperty('--bg','rgb(231, 231, 231)')
    }
    

})