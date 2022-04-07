const title = document.querySelector("h1")
const paragraphs = document.querySelectorAll("p")
const firstPara = document.getElementById("primer-parrafo")
const listEl = document.getElementsByClassName("list-element")

console.log(title)
console.log(paragraphs)
console.log(firstPara)
console.log(listEl)

// document.getElementById("primer-parrafo").style.color = "red"
document.querySelector("h1").style.backgroundColor = "aquamarine"
document.querySelector("h1").style.fontFamily = "Arial"

// CAPTAR UN EVENTO FUNCIONES:

// CUANDO CLICLEO SOBRE EL ELEMENTO CAMBIE DE COLOR
// ESTO VA A PISAR EL STYLE CSS

firstPara.addEventListener("mouseover", function(event){
    if(event.target.style.color === "blue"){
        event.target.style.color = "black"
    }else{
        event.target.style.color = "blue"
    }
})
// CAMBIOS SOBRE MUCHOS ELEMENTOS - CUANDO EL USUARIO CLICLEE 
// LE PONGA O SAQUE LA PROP. CHECKED. QUE NO CAMBIE LA ANTERIOR:
for(let i = 0; i<listEl.length; i++){
    listEl[i].addEventListener("click", function(event){
        event.target.classList.toggle("checked")
    })
}
// CUANDO EL USUARIO INGRESE DATOS ENVIAR ALERTA 
// saludo
// usamos el ID del boton
// ACCEDO Y GUARDO LOS ELEMENTOS DEL DOM
const boton = document.getElementById("main-button")
const inputName = document.getElementById("main-input")
const inputGender = document.getElementById("gender-input")

//CREO VARIABLES VACIAS
let username = ""
let usergender = ""

//AGREGO LOS EVENT LISTENERS PARA GUARDAR NOMBRE Y GENERO EL INPUT DEL USUARIO
inputName.addEventListener("change", function(event){
    username = event.target.value
})
inputGender.addEventListener("change", function(event){
    usergender = event.target.value
})

//AGREEGO EL EVENT LISTENER PARA EL BOTON
boton.addEventListener("click", function(event){
    saludar(username, usergender)
})

//FUNCION AUXILIAR SALUDAR CON ALERTAS
function saludar(nombre, genero){  
    if(genero.toUpperCase() === "F"){
        alert(`Bienvenida ${nombre} a nuestra página.`)
    }else if(genero.toUpperCase() === "M"){
        alert(`Bienvenido ${nombre} a nuestra página.`)
    }else{
        alert(`Bienvenide ${nombre} a nuestra página.`)
    } 
}