const textoUsuario = document.getElementById("itemEntrada");
const btnAgregar = document.getElementById("btnAgregar");
const listaContenedor = document.getElementById("listaCompras");

function agregarProducto() {

    const texto = textoUsuario.value;

    if (texto === "") {
        alert("Escribe un producto");
        return;
    }

    const nuevoItem = document.createElement("li");

    nuevoItem.textContent = texto;

    listaContenedor.appendChild(nuevoItem);

    textoUsuario.value = "";
}

btnAgregar.addEventListener("click", agregarProducto);