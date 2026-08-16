const campoInput = document.getElementById("conteudo-mensagem");
const enviar = document.getElementById("enviar");
const campoMensagem = document.querySelector("main > section");

function enviarMensagem(){

    const mensagem = campoInput.value.trim();

    if(mensagem == "")
        return;

    const novaMensagem = document.createElement("article");
    novaMensagem.classList.add('mensagem');

    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const horarioFormatado = `${horas}:${minutos}`;

    novaMensagem.innerHTML = `
        <p>${mensagem}</p>
        <time class="hora" datetime="${horarioFormatado}">${horarioFormatado}</time>
    `;

    campoMensagem.appendChild(novaMensagem);

    campoInput.value = '';

    campoMensagem.scrollTop = campoMensagem.scrollHeight;

}

enviar.addEventListener('click', enviarMensagem);

campoInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        enviarMensagem();
    }
});