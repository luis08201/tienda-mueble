let burger = document.getElementById("burgerBtn");
let bars = document.querySelectorAll(".header__top--bar");

burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    let nav = document.getElementById("nav");
    nav.classList.toggle("show");

    bars.forEach(barra => {
        if(burger.classList.contains("active")){
            barra.classList.add("active");
        }else{
            barra.classList.remove("active");
        }
    })
})