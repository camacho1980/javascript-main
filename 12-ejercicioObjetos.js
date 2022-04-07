// En un script, declarar un objeto con las siguientes propiedades: 
// nombre (string)
// edad(number)
// ciudad(string)
// bandasFavoritas(array) 
// Loggear en consola una frase utilizando los valores de todas las propiedades, combinando dot notation y bracket notation.

const objeto = {
    nombre: "Ramiro",
    edad: 39,
    ciudad: "Funes",
    bandasFavoritas: ["Foo Fighters", "Queen", "The Strokes", "Pearl Jam"]
}


let bandasConcat = objeto.bandasFavoritas[0]

for(let i = 1; i < objeto.bandasFavoritas.length; i++){
    if(i < objeto.bandasFavoritas.length-1){
        bandasConcat = bandasConcat + ", " + objeto.bandasFavoritas[i]
    }else{
        bandasConcat = bandasConcat + " y " + objeto.bandasFavoritas[i]
    }
}

//MISMO RESULT CON REDUCE
// const bandasConcatenadas = objeto.bandasFavoritas.reduce((accumulator, currentBand,index)=>{
//     if(index < objeto.bandasFavoritas.length - 1){
//         return `${accumulator}, ${currentBand}`
//     }else{
//          return `${accumulator} y ${currentBand}`
//     }
//  })


//console.log(`Mi nombre es ${objeto.nombre} y tengo ${objeto["edad"]} años. Vivo en ${objeto.ciudad} y mis bandas favoritas son ${objeto.bandasFavoritas[0]} y ${objeto["bandasFavoritas"][1]}`)
console.log(`Mi nombre es ${objeto.nombre} y tengo ${objeto["edad"]} años. Vivo en ${objeto.ciudad} y mis bandas favoritas son ${bandasConcat}.`)

//BRACKET NOTATION ME PERMITE USAR VARIABLES, DOT NOTATION BUSCA ESA PALABRA EXACTA
const propiedad = "nombre"

console.log(objeto[propiedad]) //me trae "Ramiro"
console.log(objeto.propiedad) //me trae undefined