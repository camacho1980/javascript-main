const alumnos = ["Leticia", "Ramiro", "Juana", "Ivo", "Gustavo"]

alumnos[0]

// FOR LOOPS
// for(let i = 0; i<alumnos.length; i++){
//     console.log(alumnos[i])
// }

// for(let i = 0; i<alumnos.length; i++){
//     console.log(alumnos[i].length)
// }

//Combinamos condicionales, arreglos y loops
//Loggear solo los nombres que terminan con la letra "a"

for(let i = 0; i<alumnos.length; i++){
    const currElement = alumnos[i]
    const lastLetter = currElement[currElement.length-1] 
    if(lastLetter === "a") console.log(currElement)
}

