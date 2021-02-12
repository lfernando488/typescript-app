export {}

/*APLICA CUMULATIVAMENTE UMA FUNÇÃO AOS ELEMENTOS DE UMA COLEÇÃO 
RETORNANDO O VALOR TOTAL*/

let list1 = [1,2,3,4]

function soma ( x : number, y : number) : number {
    return x + y;
}

function produto ( x : number, y : number) : number {
    return x * y;
}

let r1 = list1.reduce(soma);
let r2 = list1.reduce(produto);

console.log(r1)
console.log(r2)