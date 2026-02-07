function calcularSoma(...numeros) {
    let soma = 0;
    for(let numero of numeros){
        soma+=numero;
    }
    console.log(soma);
}
calcularSoma(2,30,45,67,89,900);
