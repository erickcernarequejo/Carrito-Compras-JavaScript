//VARIABLES
const carro = new Carrito();
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-productos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');


//LISTENERS
cargarEventListeners();

function cargarEventListeners() {
    //Dispara cuando se presiona agregar carrito
    cursos.addEventListener('click', (e)=>{carro.comprarCurso(e)});

    //Cuando se elimina curso carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarCurso(e)});
    // //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
    // //Al cargar el documento, mostrar el LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
    // //Enviar a otra pagina
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
    
}