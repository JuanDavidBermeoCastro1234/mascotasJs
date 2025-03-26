
alert ("hola por favor selecciona una de las opciones para continuar ")

let opciones = prompt (`
1. Registrar una nueva mascota.
2. Listar todas las mascotas registradas.
3. Buscar una mascota por nombre.
4. Actualizar el estado de salud de una mascota.
5. Eliminar una mascota por nombre.
6. Salir del programa.`);

let result = opciones.parseInt()

switch (result){
    case 1 : 
    alert("seleccionaste registrar mascota")
    break;
case 2:
    alert("selescionaste listar");
    break;
case 3: 
    alert("seleccionaste buscar")
    break;
case 4 :
    alert("")
    break;
case 5 : 
    alert ("")
    break; 
case 6 :
    alert("")
    break;
}