const $$ = document.querySelectorAll.bind(document);
const hum = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-btn');
const menuMobile = document.querySelector('.main-menu-mobile');
const listMobile = $$('.main-menu-mobile > ul > .main-menu-list-mobile');

hum.addEventListener('click', function(){
    hum.style.display = 'none';
    closeButton.style.display = 'block';
    if(menuMobile.style.display = 'none')
    {
        menuMobile.style.display = 'flex';
    }
    else
    menuMobile.style.display = 'none';
})
closeButton.addEventListener('click', function(){
    hum.style.display = 'block';
    closeButton.style.display = 'none';
    if(menuMobile.style.display = 'block')
    menuMobile.style.display = 'none';
    else
    menuMobile.style.display = 'block'
})

listMobile.forEach((elementList, indexList) => { 
    elementList.addEventListener('click', (e)=> {
        const subMenus = elementList.querySelector('.sub-menu-mobile');
        const imageTransform = elementList.querySelector('.icon-arrow-mobile');
        subMenus.classList.toggle('show');
        imageTransform.classList.toggle('transform');
    })
})




