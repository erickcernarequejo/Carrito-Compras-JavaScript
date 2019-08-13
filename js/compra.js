const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');

cargarEventListeners();

function cargarEventListeners() {

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Cuando se elimina curso carrito
    carrito.addEventListener('click', (e)=>{compra.eliminarCurso(e)});

    carrito.addEventListener('change', (e)=>{compra.obtenerEvento(e)});

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', (e)=>{compra.procesarCompra(e)});

}

