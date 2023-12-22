var saldo = 2500000;
var costoAlmojabana = 15000;
var costoSubway = 23000;

function diasSemana() {
    let dia = document.getElementById("dias").value;
    if (dia === "viernes") {
        alert("Puedes continuar");
    } else {
        alert("Hildebrandon, maneja la ansiedad el viaje solo es el viernes");
    }
}

function dineroGanado() {
    var salarioInput = document.getElementById("dinero").value;
    var saldo = parseFloat(salarioInput);
    var resultado = document.getElementById("resultado");

    if (isNaN(saldo)) {
        resultado.innerHTML = '<p>Por favor, ingresa un salario válido.</p>';
    } else {
        resultado.innerHTML = '<p>Salario verificado. Ahora elige tu opción de comida:</p>';
    }
}

function mostrarMenu() {
    var seleccion = document.getElementById("opciones");
    var opcionSeleccionada = seleccion.value;
    var textoSeleccionado = seleccion.options[seleccion.selectedIndex].text;
    var imagenResultado = document.getElementById("imagenResultado");

    switch (opcionSeleccionada) {
        case "almohabana":
            imagenResultado.src = "https://previews.123rf.com/images/nomadsoul1/nomadsoul11503/nomadsoul1150300229/38337818-hombre-comiendo-pan-en-la-panader%C3%ADa.jpg";
            saldo -= costoAlmojabana; 
            break;
        case "subway":
            imagenResultado.src = "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/comer_despacio.jpg";
            saldo -= costoSubway;
            break;
        case "nada":
            alert("Debes esperar a la escala para comer");
            break;
        default:
            alert("Opción no reconocida");
            break;
    }

    // Actualizar el saldo en pantalla
    document.getElementById("saldoNumero").innerText = saldo;

    document.getElementById("resultado2").innerHTML = "Has elegido: " + textoSeleccionado + " (" + opcionSeleccionada + ")";
    mostrarImagen();
}

function mostrarImagen() {
    var seleccion = document.getElementById("opciones");
    var opcionSeleccionada = seleccion.value;
    var textoSeleccionado = seleccion.options[seleccion.selectedIndex].text;
    var imagenResultado = document.getElementById("imagenResultado");

    switch (opcionSeleccionada) {
        case "almohabana":
            imagenResultado.src = "https://previews.123rf.com/images/nomadsoul1/nomadsoul11503/nomadsoul1150300229/38337818-hombre-comiendo-pan-en-la-panader%C3%ADa.jpg";
            break;
        case "subway":
            imagenResultado.src = "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/noticias/comer_despacio.jpg";
            break;
        case "nada":
            break;

    }
}
function ajustarMaleta() {
    var maletaAlto = parseFloat(prompt("Ingresa la altura de tu maleta en centímetros:"));
    var maletaLargo = parseFloat(prompt("Ingresa el largo de tu maleta en centímetros:"));
    var maletaAncho = parseFloat(prompt("Ingresa el ancho de tu maleta en centímetros:"));

    var limiteAlto = 55;
    var limiteLargo = 40;
    var limiteAncho = 20;

    // Calcula la reduccion
    var factorReduccionAlto = limiteAlto / maletaAlto;
    var factorReduccionLargo = limiteLargo / maletaLargo;
    var factorReduccionAncho = limiteAncho / maletaAncho;

    var factorReduccionMinimo = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

    // Aplicar el factor de reducción a cada dimensión
    var nuevoAlto = maletaAlto * factorReduccionMinimo;
    var nuevoLargo = maletaLargo * factorReduccionMinimo;
    var nuevoAncho = maletaAncho * factorReduccionMinimo;

    document.getElementById("resultado3").innerHTML = "Para cumplir con los límites de la aerolínea, las nuevas medidas de tu maleta son: ";
    document.getElementById("resultado3").innerHTML += "Alto: " + nuevoAlto.toFixed(2) + " cm, ";
    document.getElementById("resultado3").innerHTML += "Largo: " + nuevoLargo.toFixed(2) + " cm, ";
    document.getElementById("resultado3").innerHTML += "Ancho: " + nuevoAncho.toFixed(2) + " cm.";
}
function obtenerContrasenaWiFi() {
    
    var cadenaBinaria = "01110010_01101001_01110111_01101001";

    // Dividir la cadena en segmentos binarios
    var segmentosBinarios = cadenaBinaria.split('_');

    // ESto convierte cada segmento binario a caracter
    var contrasenaWiFi = "";
    for (var i = 0; i < segmentosBinarios.length; i++) {
        var caracter = String.fromCharCode(parseInt(segmentosBinarios[i], 2));
        contrasenaWiFi += caracter;
    }
    saldo -= 50000

    document.getElementById("resultado4").innerHTML = "Contraseña WiFi: " + contrasenaWiFi + " --Tu saldo actual es: " + saldo + "--";

    alert("Excelente la haz decifrado solo con un clilc, eres un crack!");
    
}
function obtenerIdioma(){
    let vocales = ["a","e","o","u"]
    let text = "Taxi me puede llevar al hotel mariposas amarillas"

    vocales.forEach(function(vocal){
        text = text.replaceAll(vocal,"i");
    })

    alert(text);
}
function juego(){
    let option = ["papel", "piedra", "tijera"];
    let eleccionTaxi = option[Math.floor(Math.random()*3)];
    let eleccionUsuario = prompt("Elije piedra, papel o tijera:").toLocaleLowerCase();

    alert(`Taxista eligió: ${eleccionTaxi}`);
    alert(`TU elegiste: ${eleccionUsuario}`);

    if (eleccionUsuario === eleccionTaxi){
        alert("Empate, no pasa nada"); 
    } else if(
    (eleccionUsuario === "papel" && eleccionTaxi === "piedra" ) || (eleccionUsuario === "piedra" && eleccionTaxi === "tijera")||(eleccionUsuario === "tijera" && eleccionTaxi === "papel")
    ){
        alert("¡Ganaste! No pagas el viaje");
    }
    else{    
        alert("Perdiste 300 mil pesos valecita mia jaja")
        saldo -= 300000;
        document.getElementById("resultado5").innerHTML = "Tu saldo actual es de: " + saldo;
    }
}
var diasEstancia = 4;
var diaActual = 1;
var gastoTotal = 0;
var sigueVivo = true;

function realizarSiguienteDia() {
    if (diaActual <= diasEstancia && sigueVivo) {
        var mensaje = `Día ${diaActual}: ¿Qué color de vestimenta eliges? (amarillo/verde/roja/azul)`;
        var color = prompt(mensaje).toLowerCase();
        realizarActividad(color);
    } else {
        mostrarResultadoFinal();
    }
}

function realizarActividad(color) {
    switch (color) {
        case "amarillo":
            var piscina = prompt("¿Quieres ir a la piscina? (si/no)").toLowerCase();
            
            if (piscina === "si") {
                alert("Al meterse en la piscina, Hildebrando se siente ahogado. Demasiado cloro. Ha muerto.");
                sigueVivo = false;
            } else {
                alert("Hildebrando elige no meterse en la piscina. Continúa su estancia sin problemas.");
            }
            break;

        case "verde":
            var caminata = prompt("¿Quieres hacer una caminata? (si/no)").toLowerCase();

            if (caminata === "si") {
                var fotosCascada = prompt("Hildebrando llega a una hermosa cascada. ¿Quieres tomar fotos? (si/no)").toLowerCase();

                if (fotosCascada === "si") {
                    alert("Hildebrando se divierte tomando fotos en la cascada.");
                } else {
                    alert("Hildebrando se devuelve solo y se pierde de noche.");
                }
            } else {
                alert("Hildebrando elige no hacer la caminata. Continúa su estancia sin problemas.");
            }
            break;

        case "roja":
            var actividadPlaya = prompt("¿Quieres realizar actividades en la playa? (si/no)").toLowerCase();

            if (actividadPlaya === "si") {
                var jugarVoleibol = prompt("¿Quieres jugar voleibol en la playa? (si/no)").toLowerCase();

                if (jugarVoleibol === "si") {
                    alert("Hildebrando juega voleibol y la pasa genial.");
                } else {
                    var nadarMar = prompt("¿Quieres nadar en el mar? (si/no)").toLowerCase();

                    if (nadarMar === "si") {
                        alert("Hildebrando nada en el mar y monta moto. Luego, toma cocteles y siente un fuerte dolor de cabeza. Chirrinchi adulterado. Debe regresar de emergencia.");
                        sigueVivo = false;
                    } else {
                        alert("Hildebrando elige no nadar en el mar. Luego, monta moto y toma cocteles sin problemas.");
                    }
                }
            } else {
                alert("Hildebrando elige no realizar actividades en la playa. Continúa su estancia sin problemas.");
            }
            break;

        case "azul":
            var actividadHotel = prompt("¿Quieres realizar actividades dentro del hotel? (si/no)").toLowerCase();

            if (actividadHotel === "si") {
                var jugarBingo = prompt("¿Quieres jugar al bingo? (si/no)").toLowerCase();

                if (jugarBingo === "si") {
                    alert("Hildebrando gana en el bingo y aumenta su dinero.");
                    saldo += 1000000;
                    gastoTotal -= 5000; // Hildebrando gana dinero en el bingo
                } else {
                    alert("Hildebrando elige no jugar al bingo.");
                }

                var bailar = prompt("¿Quieres bailar? (si/no)").toLowerCase();

                if (bailar === "si") {
                    alert("Hildebrando baila y la pasa muy bien.");
                } else {
                    alert("Hildebrando elige no bailar.");
                }

                var apostarCasino = prompt("¿Quieres ir al casino y apostar? (si/no)").toLowerCase();

                if (apostarCasino === "si") {
                    alert("Hildebrando apuesta en el casino y se queda solo con el pasaje de regreso. Terminan las vacaciones.");
                    saldo = 0;
                    sigueVivo = false;
                } else {
                    alert("Hildebrando elige no apostar en el casino.");
                }
            } else {
                alert("Hildebrando elige no realizar actividades dentro del hotel. Continúa su estancia sin problemas.");
            }
            break;

        default:
            alert("Color de vestimenta no reconocido. Por favor, elige entre amarillo, verde, roja o azul.");
    }

    gastoTotal += 50000; // Costo estimado por día en Macondo
    diaActual++;

    if (diaActual <= diasEstancia && sigueVivo) {
        // Si hay más días y sigue vivo, pregunta por el siguiente día
        realizarSiguienteDia();
    } else {
        // Si no hay más días o no sigue vivo, muestra el resultado final
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    if (sigueVivo) {
        alert(`Hildebrando estuvo en Macondo durante ${diasEstancia} días. Pudo regresar.`);
    } else {
        alert(`Hildebrando no pudo regresar. ¡Terminaron las vacaciones!`);
    }

    alert(`Hildebrando gastó un total de $${Math.abs(gastoTotal)}. Su saldo final es de $${saldo}.`);
}
