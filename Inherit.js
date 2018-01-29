function Animal(type, age) {
    var that = {};
    that.type = type;
    that.age = age;

    that.getType = function () {
        console.log('Animal type:' + that.type);
        return that.type;
    }
    that.getAge = function () {
        return console.log('Animal age:' + that.age);
    }
    that.getInfo = function () {
        return that.getType() + ' ' + that.getAge();
    }
    return that;
}


function Cat(type, age, color) {
    var that = Animal(type, age);
    that.color = color;
    var getInfo = that.getInfo;
    that.getColor = function () {
        return console.log('Animal color:' + that.color);
    }
    that.getInfo=function(){
        return getInfo.call(that)+' '+that.getColor();
    }
    return that;
}

var cat1 = Cat('Cat', 2, 'black');
cat1.getType();





/*function Animal(type, age) {
	var that = {};
    that.type = type;
    that.age = age;
    that.getType = function () {
        console.log('Animal type:' + that.type);
      	return that.type;
    }
    that.getAge = function () {
      console.log('Animal age:' + that.age);
      return that.age;
    }

    that.getInfo = function () {
        return that.getType() + ' ' + that.getAge();

    }
	return that;
}

function Cat(type, age, color) {
	var that = Animal(type,age);
    that.color = color;
    that.getColor = function () {
        console.log('Cat color:' + that.color);
      	return that.color;
    }
    
    var getInfo = that.getInfo;
  
  	that.getInfo = function () {
        return  getInfo.call(that) +' '+that.getColor()

    }
    
    return that;
}

var cat1 = Cat('cat', 2, 'black');

cat1.getInfo();*/