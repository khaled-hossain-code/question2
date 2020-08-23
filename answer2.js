let arr = [1, 2, 2, 3, 4, 4, 5]

const uniqArr2 = arr.filter((item, index) => arr.indexOf(item) === index)

console.log(uniqArr2) // [ 1, 2, 3, 4, 5 ]
