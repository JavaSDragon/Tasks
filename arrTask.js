let union = (a, b) => {
    var setA = new Set(a);
    var setB = new Set(b);
    var newArr = new Set([...setA, ...setB]);
    return [...newArr];
}

console.log(union([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9]));

let intersection = (a, b) => {
    var setA = new Set(a);
    var setB = new Set(b);
    var newArr = ([...setA].filter(x => setB.has(x)));
    return [...newArr];
}

console.log(intersection([0, 1, 6, 2, 4, 3], [5, 4, 3, 2, 1, 7, 0]));

let difference = (a, b) => {
    var setA = new Set(a);
    var setB = new Set(b);
    var newArr = ([...setA].filter(x => !(setB.has(x))));
    return [...newArr];
}

console.log(difference([1, 2, 3, 7, 9], [4, 5, 7, 2, 1, 5]))