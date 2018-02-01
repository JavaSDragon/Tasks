const sum1 = function (prop) {
    let result = prop;
    const summa = prop => {
        if (prop === undefined) {
            prop = 0
        }
        result += prop;
        return summa
    };
    summa.toString = () => result;
    return summa;
};

console.log(sum1(1)(2)(3)()); // 6
console.log(sum1(1)(2)(3)(4) + 1); // 11
console.log(sum1(1)(2)(3)(4)(5) + 1); // 16
