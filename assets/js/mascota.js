// OBJETOS
const mascota = {
    nombre: "Cucha I",
    tipo: "gatita",
    energia: 10,
    saciedad: 10,
    estaVivo: true,
    aliases: ["Meri", "Guli"],
    outfit: {
        accesorio: "Sombrero de paja",
        cuerpo: "kimono rosado",
        pies: "zapatos nike"
    },
    comer: function () {

        if (!this.estaVivo) {
            console.log(`Oye oye... ${this.nombre} ya está muerto... no le puedes dar comida.`)
            return
        }

        this.energia += 60
        this.saciedad += 20

        if (this.energia > 100) {
            this.energia = 100
        }

        if (this.saciedad > 100) {
            // límite
            this.saciedad = 100
            console.log(`${this.nombre} ya no puede comer más... se puso a llorar :(`)
            return
        }

        this.estado()

    },
    jugar: function () {
        this.energia -= 30
        this.saciedad -= 20

        if (!this.estaVivo) {
            this.saciedad = 0
            this.energia = 0
            console.log(`${this.nombre} no puede jugar... está muerto. POR TU CULPA!`)
            return // early return
        }

        if (this.saciedad < 0) {
            this.saciedad = 0
            this.morir()
            return
        }

        if (this.energia < 0) {
            this.energia = 0
            console.log(`${this.nombre} no tiene energía suficiente :c`)
        }

        this.estado()
    },
    morir: function () {
        this.estaVivo = false
        console.log(`${this.nombre}, acaba de morir... a llorar :c`)
    },
    estado: function () {
        console.log(`${this.nombre} tiene ahora ${this.saciedad} puntos de saciedad y ${this.energia} puntos de energia`)
    }
}

const comidas = [
    {
        nombre: "Pollo",
        stock: 2,
        recupera: {
            saciedad: 20,
            energia: 10
        }
    },
    {
        nombre: "Queque mágico",
        stock: 1,
        recupera: {
            saciedad: 80,
            energia: 80
        }
    }
]

// UI - User Interface _ UX User Experience
function actualizarUI() {
    const mascotaNombre = document.getElementById('mascota-nombre')
    const mascotaTipo = document.getElementById('mascota-tipo')
    const mascotaEnergia = document.getElementById('mascota-energia')
    const mascotaSaciedad = document.getElementById('mascota-saciedad')

    mascotaNombre.textContent = mascota.nombre
    mascotaTipo.textContent = mascota.tipo
    mascotaEnergia.style.width = `${mascota.energia}%`
    mascotaEnergia.textContent = `Energía: ${mascota.energia}%`
    mascotaSaciedad.style.width = `${mascota.saciedad}%`
    mascotaSaciedad.textContent = `Saciedad: ${mascota.saciedad}%`

    setTimeout(() => {
        const mascotaImg = document.getElementById('mascota-img')
        mascotaImg.src = "./assets/img/pet-standby.png"
    }, 1000)
}

const btnComer = document.getElementById('btn-comer')
const btnJugar = document.getElementById('btn-jugar')

btnComer.addEventListener('click', () => {
    const mascotaImg = document.getElementById('mascota-img')
    mascota.comer()
    mascotaImg.src = "./assets/img/pet-eating.png"
    actualizarUI()
})

btnJugar.addEventListener('click', () => {
    const mascotaImg = document.getElementById('mascota-img')
    mascota.jugar()
    mascotaImg.src = "./assets/img/pet-play.png"
    actualizarUI()
})

const mascotaImg = document.getElementById('mascota-img')
mascotaImg.src = "./assets/img/pet-standby.png"

actualizarUI()