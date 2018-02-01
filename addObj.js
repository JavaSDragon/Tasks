let addObj = (str) => {
    let newStr = str.split('.');
    for (let i = newStr.length - 1; i >= 0; i--) {
        if (newStr[i] == "") {
            newStr.length--;
        }
    }
    let newSum = {};
    newStr.reduce((sum, i) => {
        for (let i = 1; i < newStr.length; i++) {
            newSum[newStr[0]] = {}
            if (!(i + 1 === (newStr.length))) {
                newSum[newStr[i]] = {};
            }
            else {
                newSum[newStr[i]] = null;
            }
        }
    })
    console.log(newSum);
}
addObj("a.s.f.d....");