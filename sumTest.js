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


const sum1 = function(prop) {
  let result = prop;
  const summa = prop => {
      if(prop===undefined){
          prop=0
        }
        result+=prop;
        return summa}; 
  summa.toString = () => result;            
  return summa;
};

console.log(sum1(1)(2)(3)()); // 6
console.log(sum1(1)(2)(3)(4)+1); // 11
console.log(sum1(1)(2)(3)(4)(5)+1); // 16
