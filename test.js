let scores = [[2, 7], 
            [13, 47], 
            [55, 77]];
let scores1 = scores.map((subarray) => subarray.map((number) => number * 3));
console.log(scores1);
console.log(scores.map((subarray) => subarray[1]));