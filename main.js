import { registrar, mascotas } from "./registrar.js";

alert("Hola, por favor selecciona una de las opciones para continuar");

let opciones; // Declarar opciones antes del while

while (opciones !== 6) { // Mientras no elija salir
    opciones = parseInt(prompt(`
        1. Registrar una nueva mascota.
        2. Listar todas las mascotas registradas.
        3. Buscar una mascota por nombre. 
        4. Actualizar el estado de salud de una mascota.
        5. Eliminar una mascota por nombre.
        6. Salir del programa.`));

    if (isNaN(opciones) || opciones < 1 || opciones > 6) {
        alert("Opción inválida. Por favor, ingresa un número entre 1 y 6.");
        continue; // Salta al siguiente ciclo si la entrada es inválida
    }

    switch (opciones) {
        case 1:
            alert("Seleccionaste registrar mascota");
            registrar();
            break;

        case 2:
            alert("Seleccionaste listar");
            console.log(mascotas);
            break;

        case 3:
            alert("Seleccionaste buscar");
            let nombreBuscado = prompt("Ingrese el nombre de la mascota a buscar:");
            let mascotaEncontrada = mascotas.find(m => m.Nombre.toLowerCase() === nombreBuscado.toLowerCase());
            if (mascotaEncontrada) {
                console.log("Mascota encontrada:", mascotaEncontrada);
            } else {
                alert("No se encontró una mascota con ese nombre.");
            }
            break;

        case 4:
            alert("Actualizar estado de salud");
            let nombreActualizar = prompt("Ingrese el nombre de la mascota a actualizar:");
            let mascotaActualizar = mascotas.find(m => m.Nombre.toLowerCase() === nombreActualizar.toLowerCase());
            if (mascotaActualizar) {
                mascotaActualizar.EstadoDeSalud = prompt("Nuevo estado de salud:");
                alert("Estado de salud actualizado.");
            } else {
                alert("No se encontró una mascota con ese nombre.");
            }
            break;

        case 5:
            alert("Eliminar una mascota");
            let nombreEliminar = prompt("Ingrese el nombre de la mascota a eliminar:");
            let index = mascotas.findIndex(m => m.Nombre.toLowerCase() === nombreEliminar.toLowerCase());
            if (index !== -1) {
                mascotas.splice(index, 1);
                alert("Mascota eliminada correctamente.");
            } else {
                alert("No se encontró una mascota con ese nombre.");
            }
            break;

        case 6:
            alert("Saliendo del programa...");
            break;
    }
}

alert("Programa finalizado.");
