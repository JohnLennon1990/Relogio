const horaPonteiro = document.querySelector('.hora');
const minutoPonteiro = document.querySelector('.minuto');
const segundoPonteiro = document.querySelector('.segundo');
const numeros = document.querySelectorAll('.numero');

function atualizarRelogio() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    const segundo = agora.getSeconds();

    const horaRotacao = (hora / 12) * 360 + (minuto / 60) * 30;
    const minutoRotacao = (minuto / 60) * 360 + (segundo / 60) * 6;
    const segundoRotacao = (segundo / 60) * 360;

    horaPonteiro.style.transform = `rotate(${horaRotacao}deg)`;
    minutoPonteiro.style.transform = `rotate(${minutoRotacao}deg)`;
    segundoPonteiro.style.transform = `rotate(${segundoRotacao}deg)`;
}

numeros.forEach(numero => {
    const angulo = (numero.dataset.numero / 12) * 360;
    const raio = 120; // Ajuste este valor para controlar a distância dos números do centro
    const x = Math.sin(angulo * Math.PI / 180) * raio;
    const y = -Math.cos(angulo * Math.PI / 180) * raio;

    numero.style.left = `${135 + x}px`;
    numero.style.top = `${135 + y}px`;
});

setInterval(atualizarRelogio, 1000);
