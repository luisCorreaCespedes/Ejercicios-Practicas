const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('templateFooter');
const fragment = document.createDocumentFragment();
let carritoObjeto = [];

// Selección de botones
document.addEventListener('click', e => {
    if (e.target.matches('.btn-outline-primary')) agregarCarrito(e);
    if (e.target.matches('#carrito .list-group-item .btn-success')) btnAumentar(e);
    if (e.target.matches('#carrito .list-group-item .btn-danger')) btnDisminuir(e);
});

// Agregar productos al carrito
const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    };
    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
    if (indice === -1) carritoObjeto.push(producto);
    else carritoObjeto[indice].cantidad++;
    pintarCarrito();
};

// Mostrar carrito en pantalla
const pintarCarrito = () => {
    carrito.textContent = '';
    carritoObjeto.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('li .lead span').textContent = item.precio * item.cantidad;
        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    pintarFooter();
};

// Aumentar producto por ID
const btnAumentar = (e) => {
    carritoObjeto = carritoObjeto.map(item => {
        if (item.id === e.target.dataset.id) item.cantidad++;
        return item;
    });
    pintarCarrito();
};

// Disminuir producto por ID (y elimina de la lista si < 0)
const btnDisminuir = (e) => {
    carritoObjeto = carritoObjeto.filter(item => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) item.cantidad--;
            if (item.cantidad === 0) return;
            return item;
        } else return item;
    });
    pintarCarrito();
};

// Total de productos
const pintarFooter = () => {
    footer.textContent = '';
    const total = carritoObjeto.reduce((acc, current) => acc + current.cantidad * current.precio, 0);
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total;
    footer.appendChild(clone);
};