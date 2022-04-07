const alumnos = ["Leticia", "Ramiro", "Eugenia", "Gabriel", "Gustavo"]

//Accedemos a los valores
alumnos[0]
alumnos[1]
alumnos[2]

//Puedo modificar alguno de los valores
alumnos[0] = "Maria"
 
//Puedo acceder al largo del arreglo
alumnos.length
const cantidadAlumnos = alumnos.length
console.log(cantidadAlumnos)

//Strings tienen algunas propiedades de los arreglos

//Puedo acceder a alguna letra en particular
const miNombre = "Juanito"
console.log("La primera letra es: ",miNombre[0])
console.log("La ultima letra es: ",miNombre[miNombre.length-1])

//AGREGAR ELEMENTOS AL FINAL
alumnos.push("Juana")

//ELIMINAR ELEMENTOS DEL FINAL 
alumnos.pop()
const valorEliminado = alumnos.pop() //puedo guardar el valor eliminado en una variable

//AREGAR ELEMENTOS AL PRINCIPIO
alumnos.unshift("Victoria")

//ELIMINA EL PRIMER ELEMENTO
alumnos.shift()
