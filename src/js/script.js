const cidade = document.querySelector("#cidade");
const temperatura = document.querySelector("#temperatura");

const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
const UNITS = 'metric';

navigator.geolocation.getCurrentPosition(loadUrl);

function loadUrl(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
    fetchApi(url);
}

async function fetchApi(url) {
    let response = await fetch(url);
    let {main, name} = await response.json();
    let temperature = (main.temp).toFixed(1);
    cidade.innerText = `${name}`;
    temperatura.innerText = `${temperature} ºC`;
}

function atualizandoTempo() {
    const date = document.querySelector("#data");

    var hoje = new Date();

    var data = corrigindoData(hoje.getDate()) + '/' + corrigindoData((hoje.getMonth()) + 1) + '/' + corrigindoData(hoje.getFullYear());

    date.textContent = data;
}

function corrigindoData(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero
}

atualizandoTempo();