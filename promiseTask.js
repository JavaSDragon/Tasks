/*let dalay=(ms)=> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    }).then(()=>{return 100})
};
dalay(3000).then((value) => (console.log(`Done with` + ' ' + value)));   */
function addReq(){
    return new Promise(function(resolve,reject){
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://www.json-generator.com/api/json/get/cfQCylRjuG', true);
     xhr.onload=function() {
        var json = JSON.parse(this.response);
        if(json.getUsersData){
            resolve()
        }
   }
  xhr.send();
});
}
addReq().then(function(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://www.json-generator.com/api/json/get/cfVGucaXPC', true);
     xhr.onload=function() {
        var json = JSON.parse(this.responseText);
        console.log(json);
        }
        xhr.send();
    });

