let mascotas = []

function registrar(){
    let nuevaMascota = {
    id: mascotas.length+1,
    Nombre : prompt('Nombre de la mascota'),
    especie:prompt('escribe la especie'),
    Edad : prompt ("Edad de la mascota"), 
    Peso: prompt ("Peso de la mascota"), 
    EstadoDeSalud : prompt ("Estado de salud de la mascota (Sano, Enfermo, En tratamiento)"),

    }

    mascotas.push(nuevaMascota)
    console.log(nuevaMascota)
};


export {mascotas, registrar};