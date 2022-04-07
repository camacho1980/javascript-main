// En un script, declarar un arreglo con mis tres películas favoritas en orden, y luego hacer las siguientes acciones:
// 1) Agregar una película al final del arreglo
// 2) Loguear en consola el largo del arreglo
// 3) Utilizando un for loop, loguear en consola la siguiente frase para cada película:
// *Nombre de película* está *ranking* en mi lista de películas favoritas.
// Ej: “El padrino está 1° en mi lista de películas favoritas”

const peliculasFav = ["Dune", "Coda", "El poder del perro"]

console.log("Largo antes del push: ", peliculasFav.length)

peliculasFav.push("King Richard")

console.log("Largo despues del push: ", peliculasFav.length)

for(let i = 0; i<peliculasFav.length; i++){
    let nombre = peliculasFav[i]
    let ranking = i+1
    //console.log(nombre + " está " + ranking + "° en mi lista de películas favoritas.")
    console.log(`"${nombre}" está ${ranking}° en mi lista de películas favoritas.`)
} 
//backtip o string template