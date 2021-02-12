export {}

let nomes = ['Maria', 'Joao', 'Anabela']

function comparacaoPorTamanhoCrescente (s1 : string, s2: string) : number{
    return s1.length - s2.length;
}

function comparacaoPorTamanhoDecrescente (s1 : string, s2: string) : number{
    return s2.length - s1.length;
}

nomes.sort(comparacaoPorTamanhoCrescente);
console.log(nomes);

nomes.sort(comparacaoPorTamanhoDecrescente);
console.log(nomes);

nomes.sort();
console.log("ORDEM ALFABETICA")
console.log(nomes);

nomes.sort( (x,y) => x.length - y.length);
console.log(nomes);