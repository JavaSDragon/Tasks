class Animal {
  constructor(type,age=2){
  this.type=type;
  this.age=age;
}
getType(){
  return `Animal type:${this.type}`;
}
getAge(){
  return `Animal age:${this.age}`;
}
getInfo(){
 return this.getType()+ ', ' +this.getAge();
}
}
class Cat extends Animal{
  constructor(type,age,color='black'){
    super(type,age);
    this.color=color;
  }
  getColor(){
    return `Cat color:${this.color}`;  
  }
  getInfo(){
    return super.getInfo()+ ', ' +this.getColor();
   }
   getNameAsync(name){
     return new Promise(function(resolve,reject){
       setTimeout(function(){
         resolve(name);
       },5000);
     });
   }
}
task=new Animal('Cat',3);
task1=new Cat('Mike',undefined,'red');
console.log(task.getInfo());
console.log(task1.getInfo());
task1.getNameAsync('Vasya').then(function(name){console.log(name)});