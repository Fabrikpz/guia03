let abc = "abcdefghijklmnñopqrstuvwxyz";
let string = "casa";
let num = 1;

let resul2 = "";

let arrstr = string.split("");

//PARA QUE EL ABC SEA CIRCULAR
for(num; num<=0; num+=27){
}

console.log(num%27);

let resuldefinitivo = arrstr.map(
    (letra) => (resul2 += abc[(abc.indexOf(letra) + num) % 27])
);

console.log(resuldefinitivo);
