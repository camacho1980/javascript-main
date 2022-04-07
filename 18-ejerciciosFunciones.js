// Crear una función llamada “countCharacters” que reciba por parámetro un arreglo de nombres y devuelva un objeto cuyas propiedades sean los nombres y sus valores la cantidad de letras que tiene ese nombre.
// characters(["Victoria", "Juan", "Maria"])


function countCharacters(array){
    const object = {}
    for(let i = 0; i<array.length; i++){
        object[array[i]] = array[i].length 
    }
    // array.forEach(nombre => {
    //     object[nombre] = nombre.length 
    // })
    return object
}

countCharacters(["Victoria", "Juan", "Maria"])

//Crear una función llamada “filterProducts” que reciba por parámetro un arreglo de objetos y una propiedad y devuelva un arreglo con los valores de esa propiedad:

const products = [
    {
        nombre: "galletitas",
        precio: 200,
        hayStock: true
    },
    {
        nombre: "coca-cola",
        precio: 300,
        hayStock: true
    },

    {
        nombre: "caramelos",
        precio: 50,
        hayStock: false
    }
]

function filterProducts(array, property){
    const newArray = array.map(product => {
        return product[property]
    })
    return newArray
}

filterProducts(products, "nombre")

// HACE LO MISMO MAS RESUMIDO - VER NO FUNCIONA CORRECTAMENTE!!

// function filterProductsReturn(array, property){
//     return array.map(product => {
//         return product[property]
//     })
// }

// const filterProductsArrow = (array, property) => array.map(product => product[property])
