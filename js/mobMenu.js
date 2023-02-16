const body = document.querySelector('body');
const menu = document.querySelector('.menu').cloneNode(1);
const mobMenu = document.querySelector('.mob__menu');
const mobMenuList = document.querySelector('.mob__menu-list');
const mobMenuWindow = document.querySelector('.mob-menu__window');
const mobMenuWindowMenu = document.querySelector('.mob-menu__window.menu');

const changeIcons = () => {
    const menuWand = Array.from(document.querySelectorAll('.menu__wand'));
    menuWand.forEach((item, index) => {
        item.classList.toggle(`menu__wand_active-${index + 1}`);
    })
}

mobMenu.addEventListener('click', e => {
    changeIcons();
    menu.classList.toggle('menu_active');
    mobMenuWindow.classList.toggle('mob-menu__window_active');
    mobMenuWindow.appendChild(menu);
    body.classList.toggle('remove-scroll');
})

 menu.addEventListener('click', e => {
    if(e.target) {
        changeIcons();
        mobMenuWindow.classList.toggle('mob-menu__window_active');
        body.classList.toggle('remove-scroll');
    }
})