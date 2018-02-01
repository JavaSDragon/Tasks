function sum() {
    let result = arguments[0];
 
    function summa() {
        if (arguments.length === 0) {
            return result;
        }
        else {
            result += arguments[0];
            return summa;
        }
    }
    summa.toString = () => result;
 
    return summa;
}

console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)+1); // 11
console.log(sum(1)(2)(3)(4)(5)+1); // 16
