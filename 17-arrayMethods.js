const numbers = [1,4,6,25,14,11]
const names = ["Virginia", "Leandro", "Jorge", "Leticia", "Marcos", "Leticia"]

//FOR EACH
const resultForEach = numbers.forEach(function(number){
    console.log(number*3)
})

names.forEach(name => console.log(name.length))

//MAP
const resultsMap = numbers.map(function(number){
    return number*3
})

const resultsMapNames = names.map(name => name.length)

//FILTER
const evenNumbers = numbers.filter(function(number, index){
    return number%2 === 0
})

const evenNumbersV2 = numbers.filter(function(number){
    return !(number%2)
})
const oddNumbers = numbers.filter(function(number){
    return number%2
})

const namesEndWithA = names.filter(name => name[name.length - 1] === "a")

//REDUCE
// const numbers = [1,4,6,25,14,11]

const sumatoria = numbers.reduce((accumulator, currentNum,index)=>{
    console.log(`El indice es ${index} El acumulador vale ${accumulator} y el current number vale ${currentNum} y la suma de los dos es ${accumulator + currentNum}`)
    return accumulator + currentNum
})

const bandasFav = ["Foo Fighters", "Queen", "The Strokes", "Pearl Jam", "Metallica"]

const bandasConcatenadas = bandasFav.reduce((accumulator, currentBand,index)=>{
   if(index < bandasFav.length - 1){
       return `${accumulator}, ${currentBand}`
   }else{
        return `${accumulator} y ${currentBand}`
   }
})

const arregloObjetos = [{name: "Victoria"}, {surname: "Di Lisicia"}, {age: 25}, {nationality: "argentina"}]

const resultObj = arregloObjetos.reduce((accumulator, currObj)=>{
    return {...accumulator, ...currObj} // ... se llama SPREAD OPERATOR
})

//SLICE
//const names = ["Virginia", "Leandro", "Jorge", "Leticia"]

const copiaNames = names.slice() //ME DEVUELVE UNA COPIA DE TODO EL ARREGLO
const copiaNamesRecortada = names.slice(1,4) 


//INCLUDES

const incluyeLeticia = names.includes("Leticia")
const incluyeVictoria = names.includes("Victoria")

//INDEX OF
const indexOfLeticia = names.indexOf("Leticia")
const indexOfLeticiaUltimo = names.lastIndexOf("Leticia")
const indexOfVictoria = names.indexOf("Victoria") //ME DEVUELVE -1 PORQUE NO LO ENCONTRO

const cuantasLeticias = names.filter(name => name=== "Leticia").length

//SPLIT Y JOIN

const nombreCompleto = "Jorge Arguello"
const nombreYApellido = nombreCompleto.split(" ")

const joinNames = names.join(" - ")