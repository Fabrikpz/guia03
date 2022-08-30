let arr = [];
([2,3,5,12,31].map(n => (n % 2 === 0)? arr.push(n) : n));

console.log(arr);