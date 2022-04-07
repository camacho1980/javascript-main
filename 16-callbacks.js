function saludar(nombre){
    alert("Hola "+ nombre)
}
function despedir(nombre){
    alert("Chau "+ nombre)
}
function preguntarEntrada(nombre){
    return prompt(nombre + ", queres entrar?")
}

function procesarEntradaUsuario(callback){
    const nombre = prompt("Como te llamas?")
    callback(nombre)
}

procesarEntradaUsuario(saludar)
procesarEntradaUsuario(despedir)
procesarEntradaUsuario(preguntarEntrada)
