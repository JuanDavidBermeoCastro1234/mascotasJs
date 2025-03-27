let mascotas = [{
    id:1,
    Nombre : prompt('Nombre de la mascota'),
    especie:prompt('Perro', 'Gato', 'Conejo'), // Lista de especies posibles
    Edad : prompt ("Edad de la mascota"), 
    Peso: prompt ("Peso de la mascota"), 
    EstadoDeSalud : prompt ("Estado de salud de la mascota (Sano, Enfermo, En tratamiento)"),
}];


const datos = mascotas.filter(()=> true )

console.log(datos)

export {mascotas,datos};