var Singleton = (function() {
  var instance,
      size=100;

  // Приватные методы и свойства

  // Конструктор
  function Singleton() {
    if (instance) return instance;
    instance = this;
  }
   
  // Публичные методы

  return Singleton;
})();
const a = new Circle();
console.log(a.size);
