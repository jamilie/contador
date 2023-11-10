const valor = document.getElementById('valor');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const reset = document.getElementById('reset');

const updateValue = () => {
    valor.innerHTML = contador;
};

let contador = 0;
let intervalId = 0;

mais.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        contador += 1;
        updateValue();
    }, 100);
});

menos.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        contador -= 1;
        updateValue();
    }, 100);
});


reset.addEventListener('click', () => {
contador = 0;
updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));