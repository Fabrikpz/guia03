const inv = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ]
    
console.log(inv.filter(element => element.value).reduce((el2,el3) => el2 += el3));