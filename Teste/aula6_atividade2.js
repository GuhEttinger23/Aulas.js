function calcularDesconto(preco, desconto) {
    let valorFinal = preco * (1 - desconto / 100);

    console.log(`Preço original: R$${preco}`);
    console.log(`Desconto: ${desconto}%`);
    console.log(`Preço final: R$${valorFinal}`);
}
calcularDesconto(200, 20);
calcularDesconto(150, 10);
calcularDesconto(500, 30);

