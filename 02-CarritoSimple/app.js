const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll('.card .btn');

const carritoObjeto = [];

// Agregar productos al carrito
const agregarCarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

    if (indice === -1) carritoObjeto.push(producto);
    else carritoObjeto[indice].cantidad++;

    pintarCarrito(carritoObjeto);

};

// Mostrar carrito en pantalla
const pintarCarrito = (array) => {

    carrito.textContent = '';

    array.forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);

};

// Evento para agregar productos
botones.forEach(btn => btn.addEventListener('click', agregarCarrito));