//DESPLAZAMIENTO
let boton = document.querySelector(".fa-arrow-circle-down")


boton.addEventListener("click",()=>{
    window.scrollTo({left:0,top:600,behavior:"smooth"})
})


//BARRA

let prevScroll = window.pageYOffset;

window.onscroll = ()=>{
    let actualScroll = window.pageYOffset;
    if (prevScroll >= actualScroll){
        document.querySelector(".navbar").style.top = "0px";
        document.querySelector(".navbar").style.position = "sticky";
        

    }else{
        document.querySelector(".navbar").style.top = "-200px";

    }
    prevScroll = actualScroll
}

//SUBIR
let btnUp = document.querySelector(".fa-arrow-circle-up")

window.onscroll = function() {
    let scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        btnUp.style.display= "inline-block"
        btnUp.style.right = "30px";
    }else{
        btnUp.style.right = "-60px"
    }
}
btnUp.addEventListener("click",()=>{
    window.scrollTo({left:0,top:0,behavior:"smooth"})
})

