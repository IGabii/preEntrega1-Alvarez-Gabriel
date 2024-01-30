//============================================================================//

function mensajeBienvenida(){
    alert("Bienvenido!");
    alert("porfavor registrese para guardar sus datos, recuerda que para acceder debes ser mayor de edad");
}

//============================================================================//

function preguntarEdad(){
    const nombre = prompt("Ingrese su nombre: ");
    const edad = prompt("Ingrese su edad: ");
    while(true){
        if (edad >= 18 && edad < 100){
            alert("Hola! " + nombre + " Eres mayor de edad, puedes ingresar al Campus");
            return 2
        }
        else if (edad <18 && edad >=0){
            alert("Lo siento, no cumples con la edad necesaria para acceder al campus");
            const edad = prompt("Ingrese su edad: ");
        }
        else{
            alert("Edad no valida");
            const edad = prompt("Ingrese su edad: ");
        }
    }
}


//============================================================================//

function iniciarSesion (){
    const usuario = "coder123";
    const contrasena = "Javascript2024";

    while (true){
        let preguntarUsuario = prompt("Ingrese su nombre de Usuario:");
        let preguntarContrasena = prompt("Ingresa su contraseña:");
        if (preguntarUsuario === preguntarUsuario && preguntarContrasena === contrasena){
            alert("Inicio exitosamente");
            return 1;
        }
        else{
            alert("Usuario o contraseña incorrecto")
        }
    }
    
}

//============================================================================//


function notas(){
    let suma = 0;
    let contador = 0;
    let preguntar = 0;
    
        while (contador < 3){
            preguntar = parseInt(prompt("Ingrese sus 3 notas para sacar promedio: "));
            suma = suma + preguntar;
            contador ++;
        }
    let promedio = suma / contador;
    console.log("el promedio es de: " + promedio);
    if (promedio >=7 && promedio <=10){
        alert("Felicidades, promocionaste, tu promedio fue de: " + promedio)
    }

    else if( promedio < 8 && promedio >= 4){
        alert("felicidades, aprobaste con un promedio de: " + promedio)
    }

    else if( promedio < 4 && promedio >=0){
        alert("desaprobaste, tu promedio final fue de: " + promedio)
    }

    else{
        alert("numero no valido, las notas que se pueden ingresar son del 0 al 10")
    }
}

//============================================================================//

let bienvenida = mensajeBienvenida();
let edad = preguntarEdad();
let logueo = iniciarSesion();
let consultarNotas = notas();


console.log(mensajeBienvenida);
console.log(edad);
if (edad == 2){
    console.log(logueo)
}
if (logueo == 1){
    console.log(consultarNotas)
}

//============================================================================//