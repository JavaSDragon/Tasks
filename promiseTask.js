let addReq=(url)=> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true);
        xhr.onload = function () {
            let json = JSON.parse(this.responseText);
            resolve(json);
        }
        xhr.send();
    });
}

Promise.all([addReq('http://www.json-generator.com/api/json/get/cevhxOsZnS'),
addReq('http://www.json-generator.com/api/json/get/cguaPsRxAi'),
addReq('http://www.json-generator.com/api/json/get/cfDZdmxnDm'),
addReq('http://www.json-generator.com/api/json/get/cfkrfOjrfS'),
addReq('http://www.json-generator.com/api/json/get/ceQMMKpidK')]).then(result=>console.log(result)); 
let newArr=[];
let addArr=(url)=> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true);
        xhr.onload = function () {
            let json = JSON.parse(this.responseText);
            newArr.push(json);
            resolve(newArr);
        }
        xhr.send();
    });
}

(addArr('http://www.json-generator.com/api/json/get/cevhxOsZnS'))
  .then(addArr('http://www.json-generator.com/api/json/get/cguaPsRxAi'))
  .then(addArr('http://www.json-generator.com/api/json/get/cfDZdmxnDm'))
  .then(addArr('http://www.json-generator.com/api/json/get/cfkrfOjrfS'))
  .then(addArr('http://www.json-generator.com/api/json/get/ceQMMKpidK'))
  .then(result=>console.log(result));




    



