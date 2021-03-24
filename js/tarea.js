//Switch
alert("Desafío: Crear un algoritmo utilizando un ciclo");

let datosCiclo = prompt("Elegir Ciclo de JS (FOR o WHILE) SWITCH para terminar");

while ( datosCiclo != "SWITCH") {

    switch (datosCiclo) {
        
        case "FOR":
            
            let miContador = parseInt(prompt("Contar hasta el numero"))
            for (let index = 0; index <= miContador; index++) {
                console.log("Estamos contando, el numero es: " + index);
            }
            alert("Contamos hasta el numero " + miContador);
        break;
        
        case "WHILE":
            
            let numero = 0;
            do{
                numero = prompt("Ingrese numero (0 finaliza)");
                console.log(numero);
                alert("El numero ingresado es " + numero);
            } while (parseInt(numero));            
        break;
        
        default:
            console.log("Ingresar un ciclo de JS en mayuscúlas")
            alert("Ingresar un ciclo de JS mayuscúlas")
            break;
    }

    datosCiclo = prompt("Elegir Ciclo de JS (FOR o WHILE) SWITCH para terminar")
    
}
alert("Gracias!")