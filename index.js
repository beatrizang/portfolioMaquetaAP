const navBtn = document.querySelector("a-link");
const navBar = document.querySelector("link");

navBtn.addEventListener("click",() => {
    navBar.classList.toggle("nav-bar-visible");
    
    if(navBar.classList.contains("nav-bar-visible")){
        navBtn.setAttribute("aria-label","Cerrar menú");
    }else {
        navBtn.setAttribute("aria-label","Abrir Menú")
    }

});