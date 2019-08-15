const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventListeners();

function cargarEventListeners() {

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Cuando se elimina curso carrito
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});

    carrito.addEventListener('change', (e)=>{compra.obtenerEvento(e)});

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesarCompra);

}

function procesarCompra(e){
    if(compra.obtenerProductosLocalStorage().length === 0){            
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, regresa a comprar',
            showConfirmButton: false,
            timer: 2000
        })
        setTimeout(() => {
            location.href="index.html";    
        }, 2000);        
    }
    else{
        // if (cliente.value !== '' && correo.value !== '') {
            
            const spinnerGif = document.querySelector('#spinner');
            spinnerGif.style.display = 'block';
  
            //Gif que envia email
            const enviado = document.createElement('img');
            enviado.src = 'img/mail.gif';
            enviado.style.display = 'block';
            enviado.width = "150";
  
            //Ocultar sppiner y mstrar gif enviado
            setTimeout(function () {
                 spinnerGif.style.display = 'none';
                 document.querySelector('#loaders').appendChild(enviado);
  
                 setTimeout(() => {
                      enviado.remove();    
                      compra.vaciarLocalStorage();
                      location.href = "index.html";
                 }, 4000);
            }, 3000);
            
            e.preventDefault();    
       }
    // }
}

