// Crear una función llamada “saludar” que reciba dos parámetros, un nombre y un género:
// Si el género especificado es F que devuelva un alert que diga “Bienvenida [nombre] a nuestra página.”
// Si el género especificado es M que devuelva un alert que diga “Bienvenido [nombre] a nuestra página.”
// Si el género no es F o M que devuelva un alert que diga “Bienvenidx [nombre] a nuestra página.”

function saludar(nombre, genero){  
    if(genero.toUpperCase() === "F"){
        alert(`Bienvenida ${nombre} a nuestra página.`)
    }else if(genero.toUpperCase() === "M"){
        alert(`Bienvenido ${nombre} a nuestra página.`)
    }else{
        alert(`Bienvenide ${nombre} a nuestra página.`)
    } 
}

function saludarTernario(nombre, genero){
    //const ultimaLetra = (genero.toUpperCase() === "F")? "a": "o" //Solo para "M" o "F"
    const ultimaLetra = (genero.toUpperCase() === "F")? "a": ((genero.toUpperCase() === "M")? "o": "e")
    alert(`Bienvenid${ultimaLetra} ${nombre} a nuestra página.`)
}

const nombreUser = prompt("Cual es tu nombre?")
const generoUser = prompt("Cual es tu genero?")

saludar(nombreUser, generoUser)