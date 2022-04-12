// Variables

const nav = document.getElementById('nav');
const menu = document.getElementById('head-links');
const open = document.getElementById('open');
const buttons = document.getElementsByClassName('btn-header');
const closed = true;

const menus = () =>{
    let current_ofsset = window.pageYOffset;

    if(current_ofsset <= 500){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        open.style.color = 'rgb(111, 0, 255)';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        open.style.color = '#000';
    }
}

const opening = () =>{
    if(closed){
        menu.style.width = '70vw';
        closed = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        closed = true;
    }
}

// window.addEventListener('load', () => {
//     $('#onload').fadeOut();
//     $('body').removeClass('hidden');
//     menus();
// });

window.addEventListener('click', (e) => {
    console.log(e.target);
    if(closed==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== open){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            closed = true;
        }
    }
});

window.addEventListener('scroll', () => {
    console.log(`Page Offset: ${window.pageYOffset}`);
    menus();
});

window.addEventListener('resize', () => {
    if(screen.width>= 700){
        closed = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

open.addEventListener('click', () => {
    opening();
});