// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = '';
let nombreValidado = false;
let listadoAmigos = [];

function agregarAmigo() {

    //Rescatar el nombre de la caja de texto
    nombreAmigo = document.getElementById('amigo').value;
    //Validar si se ingresó un nombre vacío o no
    nombreValidado = validarNombres(nombreAmigo);

    console.log(nombreAmigo);
    console.log(nombreValidado);


    if (nombreValidado == true) {

        //Agrega nombre al Array
        listadoAmigos.push(nombreAmigo);

        //Limpiar texto de error cuando no han ingresado amigos antes de sortear y cuando se presiona "añadir" un nuevo amigo
        insertarNombreLista([''], 'resultado');

        //Imprimir en pantalla el listado de amigos
        insertarNombreLista(listadoAmigos, "listaAmigos");

        //Limpiar la caja de texto para que se ingrese un nuevo nombre
        limpiarCaja();

        //Activar botón de Sortear Amigo
        // document.getElementById('botonSortearAmigo').removeAttribute('disabled');
        // Para habilitar el botón
        document.getElementById('botonSortearAmigo').disabled = false;



    } else {

        alert("Por favor, inserte un nombre.");

    }


}

function validarNombres(nombre) {

    if (nombre === '') {
        return false;
    } else {
        return true;
    }

}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


function insertarNombreLista(nombre, elemento) {

    let listaNombre = document.getElementById(elemento);
    listaNombre.innerHTML = "";


    for (i = 0; i < nombre.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = nombre[i];

        // Agregar el <li> al <ul>
        listaNombre.appendChild(elementoLista);
    }

}

function sortearAmigo() {
    console.log("EMPIEZA EL SORTEO");
    errorSorteo = ['Por favor, ingrese amigos antes de sortear'];

    if (listadoAmigos.length > 0) {

        //comenzar el sorteo
        let numeroAmigoGenerado = Math.floor(Math.random() * listadoAmigos.length) + 1;

        //lleno el elemento Resultado con el amigo secreto sorteado
        insertarNombreLista(['El amigo secreto sorteado es: ' + listadoAmigos[numeroAmigoGenerado - 1]], "resultado");

        //Limpio el listado de amigos
        insertarNombreLista([''], "listaAmigos");



    } else {
        // alert("Lista de amigos vacía.");
        insertarNombreLista(errorSorteo, "resultado");
        // document.getElementById('botonSortearAmigo').setAttribute('disabled', 'true');
        // Para deshabilitar el botón
        document.getElementById('botonSortearAmigo').disabled = true;
    }
}