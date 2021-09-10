const esMane = (nombre) => {
    switch(nombre) {
        case 'mane':
        case 'alejandra martinez':
        case 'maria alejandra martinez':
        case 'maria alejandra martinez peña':
        case 'alejandra martinez peña':
        case 'Mane':
        case 'Alejandra Martinez':
        case 'Maria Alejandra Martinez':
        case 'Maria Alejandra Martinez Peña':
        case 'Alejandra Martinez Peña':
            return true
        default:
            return false
    }
}

const esJujo = (nombre) => {
    switch(nombre){
        case 'jujo':
        case 'Jujo':
            return true
        default:
            return false
    }
}

const user = document.getElementById('usuario')
const boton = document.getElementById('boton')
const answer = document.getElementById('answer')

boton.onclick = () => {
    const userName = user.value
    if(esMane(userName)) {
        console.log('Es Mane')
        answer.innerHTML = 'Te amo'
    } else if (esJujo(userName)) {
        console.log('Es Jujo')
        answer.innerHTML = 'Harry chimba de fiesta aquella'
    } else {
        answer.innerHTML = 'Alejate perra'
    }
}

