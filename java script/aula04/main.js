let nome = 'Betina Martins de Carvalho'
let curso = 'Instituto Percorre'
let meuNome = 'Remérson'
const pi = 3.141592

console.log(pi.toFixed(2));
console.log(curso.charAt(7));
console.log(nome.length); 
// console.log(meuNome.length);
// console.log(nome.length);
// length para mostrar a quantidade de caracteres

// let joao = 8.0

// console.log(joao + 1);
// console.log(typeof joao)
// typeof para mostrar o tipo da variável, no caso number
// typeof para mostrar o tipo da variável, no caso string

// charAt para mostrar o caractere na posição indicada pode ser parenteses ou colchetes, 
// ambos funcionam, mas o charAt é mais recomendado.
// usado para mostrar o primeiro caractere do curso, que é o "I" começa a conta a partir do zero.
// fixed para fixar o número de casas decimais

console.log(curso.toLowerCase());//minúsculas
console.log(curso.toUpperCase());//maiusculas
console.log(curso.substring(9));
console.log(nome.substring(6, 14));
// substring para mostrar a partir do caractere indicado, no caso a partir do "P" do Instituto Percorre
// substring para mostrar a partir do caractere indicado, no caso a partir do 
// "B" do nome até o caractere indicado

let sobrenome = nome.split()
console.log(nome);
console.log(sobrenome);
console.log(typeof nome);
console.log(typeof sobrenome);
//split para separar o nome em partes

let betina_martins_de_carvalho = 'Betina Martins de Carvalho'
// let Abraham = ""
let casado = betina_martins_de_carvalho.replace('Carvalho', 'Silva')
console.log(betina_martins_de_carvalho);
console.log(casado);