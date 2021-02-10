// CAMBIO DE IMAGEN CORDOBA CAMPEÓN
let miImagen1 = document.getElementById('equipoCordoba');
miImagen1.onclick = function(){
    let miScr1 = miImagen1.getAttribute('src');
    if(miScr1 === 'imagenes/Campeonato.jpg'){
        miImagen1.setAttribute('src','imagenes/Festejo1.jpg');
    }else{
        miImagen1.setAttribute('src','imagenes/Campeonato.jpg');
    }
}

// HORA
function mueveReloj() {
    momentoActual = new Date()
    dia = momentoActual.getDate()
    mes = momentoActual.getMonth()+1
    ano = momentoActual.getFullYear()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = `${dia}/ ${mes}/ ${ano} -- ${hora} : ${minuto} : ${segundo}`

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()", 1000)
    }
    