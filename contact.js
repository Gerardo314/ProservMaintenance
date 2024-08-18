window.onload=function(){
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("nav__links");

    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
    }
}