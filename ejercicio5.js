let num = [60];
let cont = 2;
let primefactors = [];

while(num[0] >= cont){
    num.map(num => {
        if(num % cont === 0){
        primefactors.push(cont);
        num /= cont;
        }
        else{
            cont+=1;
        }
    });
}
console.log(primefactors);
