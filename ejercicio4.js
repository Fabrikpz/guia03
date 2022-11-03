/*let arr = [[2, 7, 6],
           [9, 5, 1],
           [4, 3, 8]];*/

let arr = [[3, 1, 5],
          [4, 7, 2],
          [9, 8, 6]];

let col1 = arr.map((y)=> y[0]).reduce((a,b)=> a + b);
let col2 = arr.map((y)=> y[1]).reduce((a,b)=> a + b);
let col3 = arr.map((y)=> y[2]).reduce((a,b)=> a + b);

console.log(arr.map((subarr)=> subarr[0]).map((subarr2) => subarr2*3));
//.map((subarr2)=>subarr2[1]*3));

