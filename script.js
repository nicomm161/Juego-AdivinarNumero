let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')








function resultado() {
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Numero no valido, coloque un numero entre el 1-100'
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicitaciones, has acertado!'
        mensaje.style.color = 'blue'
        numeroEntrada.disabled = true
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = 'El numero es mayor al que dijiste'
        mensaje.style.color ='red'

    }else{
        mensaje.textContent = 'El numero es menor al que dijiste'
        mensaje.style.color ='red'
    }
}