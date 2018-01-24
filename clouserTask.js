var Circle = (function() {
  var instance;
    size=100;     
  function Circle() {
    if (instance) return instance;
    instance = this;
  }
    
 
  Circle.prototype.getSize =function() {return size;};
  Circle.prototype.setSize =function(size) {  this.size=size;};

  return Circle;
})();
const a = new Circle();
const b = new Circle();
console.log(a==b);
a.setSize(200);
console.log(a.getSize());

