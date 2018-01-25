class Animal {
  constructor(type,age){
  this.type=type;
  this.age=age;
}
getType(){
  return `Animal type: ${this.type}`;
}
getAge(){
  return `Animal age: ${this.age}`;
}
getInfo(){
  getType();
}
}
task=new Animal('Test');
console.log(task.getInfo());