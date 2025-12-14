let burgerBtn = document.querySelector('.burger-menu-button');
let burgerMenu = document.querySelector('.burger-menu');
let burgerLinks = document.querySelectorAll('.burger-menu a');

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if(!isBurgerOpen){
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 5rem, center";
        isBurgerOpen = true;
    }
    else if(isBurgerOpen){
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 5rem";
        isBurgerOpen = false;
    }
}

// Close burger menu when clicking on navigation links
burgerLinks.forEach(link => {
    link.onclick = function() {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 5rem";
        isBurgerOpen = false;
    }
});