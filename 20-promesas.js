// const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(response)
// EL RESULTADO DEL FETCH DEVUELVE UNA PROMESA

fetch('https://jsonplaceholder.typicode.com/todos/1')
// CAPTURAN EL VALOR DEVUELTO CUANDO LA OP. FUE UN EXITO (PROMESA CUMPLIDA)
.then(function(result){
    //parcea la respuesta en js. 
    return result.json()
// PUEDO ENCADENAR VARIAS ACCIONES .THEN
}).then(function(result){
    console.log(result)
// CAPTURAN EL ERROR CUANDO HUBO UN FALLO (PROMESA RECHAZADA)
}).catch(function(error){
    console.log("Error hubo un error ")
})

//https://swapi.dev/people/id
// Utilizando la API de Starwars: https://swapi.dev/ crear la función getCharacter que reciba como argumento el numero de id de un personaje y que loguee en consola la siguiente frase:
// “El nombre del personaje seleccionado es [name]”
// Hacer la función utilizando .then() y luego utilizando async await

// va a recibir como argumento id del personaje
function getCharacter(id){
    // para guardarlo en una variable e igualarlo lineas: 34 y 43.
    let characterName = ""
    let planetName = ""
    // al id convertirlo en una variable ${id}
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => {
       return response.json()
    }).then(character => {
        console.log(`El nombre del personaje seleccionado es ${character.name}`)
        characterName = character.name
        return character
        // puedo hacer otro fetch para saber el planeta homeworld
    }).then(character => {
        return fetch(character.homeworld)
    }).then(responsePlanet => {
        return responsePlanet.json()
    }).then(planet => {
        console.log(`Y es del planeta ${planet.name}`)
        planetName = planet.name
    }).catch(error =>{
        console.log("Hubo un error", error)
    })
}
// ASYNC AWAIT otra forma para escribir Promesas:
// funcion asincronica implicitamente devuelve una promesa.
async function getCharacterAsync(id){
    // en el try (probá) ponemos todas las funciones:
    try{
        // await: (espera) que termine esto y guardalo
        const characterResponse = await fetch(`https://swapi.dev/api/people/${id}`)
        const character = await characterResponse.json()
        const planetResponse = await fetch(character.homeworld)
        const planet = await planetResponse.json()
        console.log(`El personaje seleccionado es ${character.name} y es del planeta ${planet.name}`)
        
        return {
            character: character.name,
            planet: planet.name
        }
    }catch(error){
        console.log("Hubo un error: ", error)
    }
}

// Utilizando Promise Chaining y la API de starwars https://swapi.dev/ hacer una función que reciba como argumento el id de un personaje y que haga las siguientes acciones
// Que haga un pedido a la API para obtener el personaje
// Que loguee el nombre del personaje
// Que haga un nuevo pedido pero la url del planeta del que es nativo el personaje
// Que loguee el nombre del planeta
// Bonus: Utilizando Promise.all() loguear los nombres de todos los residentes de ese planeta. Documetación Promise all: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

