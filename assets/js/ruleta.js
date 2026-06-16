const participantes = [
    "Bastián Abarca",
    "Stefany Aguilera",
    "María Cárdenas",
    "Yerica Cortés",
    "Francisca Fernández",
    "Francisco Fuentealba",
    "Kamila González",
    "Vesna Guerra",
    "Williams Jacobs",
    "Daniela Martínez",
    "Ellymar Mendoza",
    "Sebastián Ortega",
    "Jesus Pereira",
    "Diego Pinilla",
    "Alan Rodríguez",
    "Brigitte Rudas",
    "Daniel Schnettler",
    "Nadia Sepúlveda",
    "Ronald Stark",
    "Rodolfo Moreno",
    "Cristóbal Estrada",
    "Kevin Reyes",
    "Babinsky Magloire",
    "Pablo Canto",
    "Damazo Sepúlveda"
];

const colores = [
    "azul",
    "rojo",
    "violeta",
    "morado"
]

const participantesBackUp = [

];

function lanzarRuleta(min, max) {
    const numeroAleatorio = Math.random() // entre 0 y <1

    const resultado = Math.floor(numeroAleatorio * (max - min + 1)) + min

    return resultado
}

function aleatorioDesdeArreglo(arreglo) {
    if (arreglo.length === 0) {

        return ("Ya Participaron Todos!!")

        setTimeout(() => window.location.reload(), 3000)

        return

    }

    const index = lanzarRuleta(0, arreglo.length - 1)
    const elementoArreglo = arreglo[index]

    participantes.splice(participantes.indexOf(elementoArreglo), 1)
    participantesBackUp.push(elementoArreglo)

    console.log("faltan " + participantes)
    console.log(participantesBackUp)

    return elementoArreglo
}

function renderizarResultado(idElement, texto) {
    const elementoARenderizar = document.getElementById(idElement)

    elementoARenderizar.textContent = texto
}

const getRandomButton = document.querySelector("#getRandom")

getRandomButton.addEventListener("click", () => {
    const resultado = aleatorioDesdeArreglo(participantes)
    renderizarResultado("resultado", resultado)
}
)

// participantes.splice(index)
// window.location.reload()