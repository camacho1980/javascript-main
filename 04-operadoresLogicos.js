const nombre = "victoria"
const edad = 25
const viveEnEuropa = false
const expresionFalsa = 5 > 7
const expresionVerdadera =  3 < 7

// DATOS FALSEY

const stringVacio = ""
Boolean(stringVacio)

const cero = 0
Boolean(cero)

const undef = undefined
Boolean(undef)

const nullVariable = null
Boolean(nullVariable)

const booleanFalse = false
Boolean(booleanFalse)

//OR 

nombre || edad || viveEnEuropa
//1) Empieza por el primer valor y lo evalua
Boolean(nombre)
//2) Como devuelve verdadero, me lo devuelve y deja de leer

cero || edad || viveEnEuropa
//1) Empieza por el primer valor y lo evalua
Boolean(cero)
//2) Como devuelve false, va a evaluar el SEGUNDO valor
Boolean(edad)
//3) Como encontro un true, devuelve el valor de edad.

cero || viveEnEuropa || stringVacio
//1) Evalua el primero
Boolean(cero)
//2) Como es falso pasa al siguiente
Boolean(viveEnEuropa)
//3) Como es falso pasa al siguiente
Boolean(stringVacio)
//4) Como es falso pero no hay mas valores, lo devuelve

// AND
nombre && edad && viveEnEuropa
nombre && edad && cero

//1) Evalua nombre
Boolean(nombre)
//2) Como es verdadero pasa al siguiente y lo evalua
Boolean(edad)
//3) Como edad es verdadero, pasa al siguiente y lo evalua
Boolean(viveEnEuropa)
//4) Como es falso lo devuelve

nombre && expresionVerdadera && edad

//1) Evalua nombre
Boolean(nombre)
//2) Como es verdadero pasa al siguiente y lo evalua
Boolean(expresionVerdadera)
//3) Como es verdadero pasa al siguiente y lo evalua
Boolean(edad)
//4) Como es verdadero pero no hay mas terminos lo devuelve

// NEGACION
!edad //devuelve false
!cero // devuelve true