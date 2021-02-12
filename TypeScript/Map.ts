export {}

let list1 = [1,2,3,4]
let list2 = []
let nomes = ['Maria', 'Joao', 'Anabela']

nomes.map( x => {console.log('NOME:' + x)})

function dobro (x :number) : number {
    return x * 2;
}


let m1 = list1.map(dobro);
console.log(m1);

// OU

let m2 = list1.map( x => x * 2)
console.log(m2);