const formulario = document.querySelector('#formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const alertSuccess = document.getElementById('alertSuccess');
const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'Mensaje enviado con éxito';
};

const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.mensaje;
    })
};


formulario.addEventListener('submit', e => {
    e.preventDefault();
    alertSuccess.classList.add('d-none');

    const errores = [];

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add('is-invalid');
        errores.push({
            tipo: alertName,
            mensaje: 'Formato no válido, debe ingresar solo letras.'
        });
    } else {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        alertName.classList.add('d-none');
    }

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add('is-invalid');
        errores.push({
            tipo: alertEmail,
            mensaje: 'Escriba un correo válido.'
        });
    } else {
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
        alertEmail.classList.add('d-none');
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    pintarMensajeExito();
});