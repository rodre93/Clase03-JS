//For
alert("For");

//Contando hasta 10
for (let index = 0; index <= 10; index++) {
    console.log("Estamos contando, el numero es: " + index);
}

/*Incrementando de a 5
index++ es igual a index +1
*/
for (let index = 0; index < 10; index++) {
    console.log("Estamos contando, el numero es: " + index);
}

let miContador = parseInt(prompt("Contar hasta el numero"))
for (let index = 0; index <= miContador; index++) {
    console.log("Estamos contando, el numero es: " + index);
}
alert("Contamos hasta el numero " + miContador);

for (let index = 0; ; index++) {
    console.log("Estamos contando, el numero es " + index);
    if (index > 10) {
        break;
    }
}


//While
alert("While");

let datosEntrada = prompt("Ingrese datos(Si ingresas ESC, termina)");


// Repite lo que este dentro del corchete si es true
while ( datosEntrada != "ESC") {
    console.log("El usuario ingreso " + datosEntrada);
    datosEntrada = prompt("Reingrese datos (Si ingresas ESC, termina)");
}
alert("Exito!");

let numero = 0;

do{
    numero = prompt("Ingrese numero (0 finaliza)");
    console.log(numero);
    alert("El numero ingresado es " + numero);
} while (parseInt(numero));


//Switch
alert("Switch");

let datosSwitch = prompt("Ingrese datos (Si ingresas ESC, termina)");

while ( datosSwitch != "ESC") {

    switch (datosSwitch) {
        
        case "Nintendo":
            console.log("Hola Nintendo")
            alert("Hola Nintendo")            
        break;
        
        case "Play":
            console.log("Hola Play")
            alert("Hola Play")            
        break;
        
        default:
            console.log("No se quien sos")
            alert("No se quien sos")
            break;
    }

    datosSwitch = prompt("Reingrese datos (Si ingresa ESC, termina)")
    
}