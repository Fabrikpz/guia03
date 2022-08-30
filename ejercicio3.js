let abc = "abcdefghijklmnñopqrstuvwxyz";
let string = "casa";
let num = -102;

/*let letra1 = string[0];
let letra2 = string[1];
let letra3 = string[2];
let letra4 = string[3];*/

//let resul = [];
let resul2 = "";

let arrstr = string.split("");

/*for(i=0;i<abc.length;i++){ 
    if(letra1 === abc[i]){
    resul.push(abc[i+(num)%27]);
    }else if(letra2 === abc[i]){
    resul.push(abc[i+(num)%27]);
    
    }else if(letra3 === abc[i]){
    resul.push(abc[i+(num)%27]);
    
    }else if(letra4 === abc[i]){
    resul.push(abc[i+(num)%27]);
    
    }
}*/

//PARA QUE EL ABC SEA CIRCULAR
for(num; num<=0; num+=27){
}

console.log(num%27);

let resuldefinitivo = arrstr.map(
    (letra) => (resul2 += abc[(abc.indexOf(letra) + num) % 27])
);

console.log(resuldefinitivo);
