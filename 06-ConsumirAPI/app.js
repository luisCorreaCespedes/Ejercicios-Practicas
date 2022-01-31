document.addEventListener('DOMContentLoaded', () => {
    fecthData();
});

const cards = document.getElementById('card-dinamicas');
const templateCard = document.getElementById('template-card').content;

const fecthData = async (url='https://rickandmortyapi.com/api/character') => {
    try {
        loadingData(true);
        const res = await fetch(url);
        const data = await res.json();
        pintarCard(data);
    } catch (error) {
        
    } finally {
        loadingData(false);
    }
};

const pintarCard = data => {
    const fragment = document.createDocumentFragment();
    cards.textContent = '';
    data.results.forEach(item => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('.card-img-top').setAttribute('src', item.image);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
    pintarPaginacion(data.info);
};

const pintarPaginacion = data => {
    const paginacion = document.getElementById('paginacion');
    paginacion.textContent = '';
    const templatePaginacion = document.getElementById('template-paginacion').content;
    const clone = templatePaginacion.cloneNode(true);

    if (data.prev) {
        clone.querySelector('.btn-outline-secondary').disabled = false;
    } else {
        clone.querySelector('.btn-outline-secondary').disabled = true;
    }

    if (data.next) {
        clone.querySelector('.btn-outline-primary').disabled = false;
    } else {
        clone.querySelector('.btn-outline-primary').disabled = true;
    }

    paginacion.appendChild(clone);
    
    //REVISAR ESTA DELEGACION
    paginacion.addEventListener('click', e => {
        if (e.target.matches('.btn-outline-primary')) {
            if (data.next) {
                if (data.prev) {
                    fecthData(data.next);
                }
            }
        }
        if (e.target.matches('.btn-outline-secondary')) {
            fecthData(data.prev);
        }
    });

};

const loadingData = estado => {
    const loading = document.getElementById('loading');
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
};