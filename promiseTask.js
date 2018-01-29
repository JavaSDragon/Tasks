let addReq=(url)=> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true);
        xhr.onload = function () {
            let json = JSON.parse(this.responseText);
            //  if(json.getUsersData){
            resolve(json);

            // }
        }
        xhr.send();
    });
}

addReq('http://www.json-generator.com/api/json/get/cfQCylRjuG')
.then(()=>{return addReq('http://www.json-generator.com/api/json/get/cfVGucaXPC')})
.then(item => console.log(item));
