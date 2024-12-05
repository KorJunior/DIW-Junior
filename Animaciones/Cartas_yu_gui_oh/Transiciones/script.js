let pulsaciones = 0;
let carta1 = '';
let carta2 = '';
let carta1Element = null;
let carta2Element = null;
let puntuacion = 0;

let cartas = document.querySelectorAll('.carta');
const scoreDisplay = document.getElementById('score');

function actualizarPuntuacion() {
    scoreDisplay.textContent = puntuacion;
}

cartas.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains('emparejada') || element.classList.contains('seleccionada')) {
            return;
        }

        element.classList.add('seleccionada');
        pulsaciones++;

        if (pulsaciones === 1) {
            carta1 = window.getComputedStyle(element.querySelector('.anverso')).backgroundImage;
            carta1Element = element;
        } else if (pulsaciones === 2) {
            carta2 = window.getComputedStyle(element.querySelector('.anverso')).backgroundImage;
            carta2Element = element;

            if (carta1 === carta2) {
                carta1Element.classList.add('emparejada');
                carta2Element.classList.add('emparejada');
                puntuacion++;
                actualizarPuntuacion();
            } else {
                const tempCarta1 = carta1Element;
                const tempCarta2 = carta2Element;

                setTimeout(() => {
                    tempCarta1.classList.remove('seleccionada');
                    tempCarta2.classList.remove('seleccionada');
                }, 1000);

                puntuacion--;
                actualizarPuntuacion();
            }

            pulsaciones = 0;
            carta1 = '';
            carta2 = '';
            carta1Element = null;
            carta2Element = null;
        }
    });
});
