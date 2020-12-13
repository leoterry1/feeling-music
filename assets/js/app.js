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
        btnUp.style.display = "inline-block"
        btnUp.style.right = "30px";


    } else {
        document.querySelector(".navbar").style.top = "-200px";
        btnUp.style.right = "-60px"

    }
    prevScroll = actualScroll
}

//SUBIR


btnUp.addEventListener("click", () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
})
