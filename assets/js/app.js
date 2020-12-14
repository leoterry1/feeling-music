//DESPLAZAMIENTO
let boton = document.querySelector(".fa-arrow-circle-down")


boton.addEventListener("click", () => {
    window.scrollTo({ left: 0, top: 600, behavior: "smooth" })
})


//BARRA
let btnUp = document.querySelector(".fa-arrow-circle-up")
let prevScroll = window.pageYOffset;

window.onscroll = () => {
    let actualScroll = window.pageYOffset;
    if (prevScroll >= actualScroll) {
        document.querySelector(".navbar").style.top = "0px";
        document.querySelector(".navbar").style.position = "sticky";
        btnUp.style.right = "-60px"
        


    } else {
        document.querySelector(".navbar").style.top = "-200px";
        
        btnUp.style.display = "inline-block"
        btnUp.style.right = "30px";
        

    }
    prevScroll = actualScroll
}

//SUBIR


btnUp.addEventListener("click", () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
})


//Menu

let menu = document.querySelector(".mobile")
let btnMenu = document.querySelector(".fa-bars")
let show = true
btnMenu.addEventListener("click", ()=>{
    if (show){
        menu.style.transform = "translate(5%, 0)";
        show = false
    }else{
        menu.style.transform = "translate(100%, 0%)";
        show = true
    }
})