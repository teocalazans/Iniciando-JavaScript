function comparaNumeros(num1, num2) {
   /* const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if(saoIguais) { (FORMA1)
        return "São Iguais"
    } else {
        return "Não são Iguais"
    } 
 
    return saoIguais ? "São Iguais" : "Não são iguais"; */
    
    const primeiraFrase = criaPrimeiraFrase (num1, num2);
    const segundaFrase = criaSegundaFrase (num1, num2);
    if(!num1 || !num2) {
        return "Defina 2 números, por favor!"
    }
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = "";
    if(num1 !== num2) {
        saoIguais = "não" 
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = "maior";
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = "maior"
    }

    if(compara20) {
        resultado20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(5,2));