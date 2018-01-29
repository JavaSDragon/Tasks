function Animal(type, age) {
    this.type = type;
    this.age = age;

    this.getType = function () {
        return console.log('Animal type:' + this.type);
    }
    this.getAge = function () {
        return console.log('Animal age:' + this.age);
    }
    this.getInfo = function () {
        return this.getType() + ' ' + this.getAge();
    }
}
function Cat(type, age, color) {
    this.color = color;
    Animal.apply(this, arguments);
    this.getColor = function () {
        return console.log('Animal color:' + this.color);
    }
    //Animal.call(this);
    //this.getInfo=function(){
    //return this.getType()+' '+this.getAge()+' '+this.getColor();
}
//inherits(Animal,Cat)
// Cat.prototype.getInfo=function(){
//return this.getType()+' '+this.getAge()+' '+this.getColor();
var cat1 = new Cat('cat', 2, 'black');
cat1.getInfo();