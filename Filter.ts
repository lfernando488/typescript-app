export {}

/* RETORNA UMA NOVA COLEÇÃO CONTENDO APENAS 
AQUELES ELEMENTOS DA COLEÇÃO ORIGINAL QUE SATISFAÇAM 
DETERMINADA CONDIÇÃO */

let list1 = [1,2,3,4]

function par (x : number): boolean{
    return x % 2 == 0;
}

let f1 = list1.filter(par)
let f2 = list1.filter( x => x > 2)

console.log(par(5));
console.log(par(6));
console.log(f1);
console.log(f2);