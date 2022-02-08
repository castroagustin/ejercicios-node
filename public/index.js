const socket = io();

// socket.on('mensaje', data => alert(data))

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    socket.emit('mensajeCliente', input.value);
})

socket.on('mensajeServidor', data => {
    const mensajesHTML = data
        .map(msj => `${msj.socketid}: ${msj.message}`)
        .join('<br></br>');
    document.querySelector('p').innerHTML = mensajesHTML;
});