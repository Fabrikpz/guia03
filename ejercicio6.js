let abc = "abcdefghijklmnñopqrstuvwxyz";
let str1 = "bcbc";
let str2 = "cdcd";

let str1arr = str1.split("");
let str2arr = str2.split("");

let aux = "";
let aux2 = "";

/*let resul = str1arr.map(letra => (letra[0] && letra[1] === letra[2] && letra [3])?aux.push(letra): letra);
let resul2 = str2arr.map(letra => (letra[0] && letra[1] === letra[2] && letra [3])?aux.push(letra): letra);*/

let resul = str1arr.map((letra) => (letra.length === abc[letra]))

console.log(resul, resul2);
