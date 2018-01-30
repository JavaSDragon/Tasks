let newArr = [];
let a = ['http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'];
let addArr = (arrUrl) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        a.reduce(() => {
            for (let i = 0; i < a.length; i++) {
                xhr.open('GET', arrUrl[i], true);
                xhr.onload = function () {
                    let json = JSON.parse(this.responseText);
                    newArr.push(json);
                    // resolve(newArr);
                }
                xhr.send()
            }
        });
        resolve(newArr);
    })
}

addArr(a)
    .then(result => console.log(result));