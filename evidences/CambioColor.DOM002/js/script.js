const btnColor = document.querySelector(".btmn");
const bodyColor = document.querySelector("body");

const colores = ["green", "blue", "red", "orange", "yellow", "violet"];

bodyColor.style.background = "pink";

btnColor.addEventListener("click", cambiarColor);

function cambiarColor(){

    console.log("si cambia de color");

    const color = parseInt(Math.random() * colores.length);

    bodyColor.style.background = colores[color];

}



const boton = document.querySelector(".btn");

const imagen = document.querySelector(".perro1");

boton.addEventListener("click", () => {

    if(imagen.src.includes("15147078.png")){

        imagen.src = "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp";

    } else {

        imagen.src = "https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png";

    }

});