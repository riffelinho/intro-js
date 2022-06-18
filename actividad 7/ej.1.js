
var valorbuscado = ["hola", "mundo"]

function palabradada (oracion, palabra){
    for(var i = 0; i < oracion.length; i++){
        if (oracion.includes(palabra)){
        console.log(true)
         break
        } 
    }
}

palabradada(valorbuscado, "mundo")