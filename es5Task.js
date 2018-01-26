function Animal(type,age){
    this.type=type;
    this.age=age;
}
Animal.prototype.getType=function(){
     console.log('Animal type:'+this.type);
}
Animal.prototype.getAge=function(){
    console.log('Animal age:'+this.age);
}
Animal.prototype.getInfo=function(){
    return this.getType()+' '+this.getAge();
}
var dog=new Animal('dog',7);
dog.getInfo();
function Cat(type,age,color) {
    Animal.apply(this, arguments);
    this.color=color;
  }
  
Cat.prototype=polyfil(dog);//Применяем наш  полифил на Object.create
Cat.prototype.getColor=function(){
    console.log('Animal color:'+this.color);
}
Cat.prototype.getInfo=function(){
    return this.getType()+' '+this.getAge()+' '+this.getColor();
}
var vasya=new Cat('cat',2,'black');
    vasya.getInfo();

    
var myReduce = function(arr, func, value) {
    var i,
    result = value;
    for (i = 0; i < arr.length; i++) {
      result = func.call(null, result, arr[i], i, arr);
    }
    return result;
  };
   var c=[1,2,3,4,5]
  console.log(myReduce(c,function(a,b){return a+b},0));

  
  function polyfil(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
};
  