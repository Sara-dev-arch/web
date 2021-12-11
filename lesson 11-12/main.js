//Задание 1
console.log('-----Задание 1-------');
let city1 = {
    name: "ГородN",
    population: 10000000
};
console.log(city1)
//Задание 2
console.log('-----Задание 2-------');
let city2 = {
    name: "ГородM",
    population: 1e6
};
console.log(city2)
//Задание 3
console.log('-----Задание 3-------');
city1.getName = city2.getName = function() { return this.name; };
console.log(city1.getName())
console.log(city2.getName())
//Задание 4
console.log('-----Задание 4-------');
city1.exportStr = city2.exportStr = function() { 
    for (let property in this){
        if (!(typeof this[property] == 'function')){
            console.log(property, '=', this[property])
        }
    }
};
city1.exportStr()
city2.exportStr()
//Задание 5
console.log('-----Задание 5-------');
function getObj(){
    return this;
}
city1.getCity = city2.getCity = getObj;
console.log(city1.getCity());
//Задание 6
console.log('-----Задание 6-------');
let obj = {
    method1(){
        return this
    },
    method2(){
        return this
    },
    method3(){
        return 'метод3'
    }
}
console.log(obj.method1().method2().method3())
//Задание 7
console.log('-----Задание 7-------');
let d1 = [45,78,10,3]
d1[7] = 100
console.log(d1)
console.log(d1[6], d1[7])
//Задание 8
console.log('-----Задание 8-------');
let d2  = [45,78,10,3]
let sum = 0
for (index in d2){
    sum+=d2[index]
}
console.log(sum)
//Задание 9
console.log('-----Задание 9-------');
let d3 = [45,78,10,3]
d3[7] = 100
let sum3 = 0
for (index in d3){
    sum3+=d3[index]
}
console.log(sum3)
//Задание 10
console.log('-----Задание 10-------');
function my(a, b) { 
    return b - a 
};
let d4 = [45, 78, 10, 3];
console.log(d4.sort(my));
//Задание 11
console.log('-----Задание 11-------');
let d5 = []
for(i=0;i<3;i++){
    d5[i]=[]
    for(j=0;j<4;j++){
        d5[i][j] = 5
    }
}
console.log(d5)
//Задание 12
console.log('-----Задание 12-------');
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    let x = this.x + otherVector.x;
    let y = this.y + otherVector.y;
    return new Vector(x, y);
  };
Vector.prototype.minus = function minus(otherVector) {
    let x = this.x - otherVector.x;
    let y = this.y - otherVector.y;
    return new Vector(x, y);
};
Object.defineProperty(Vector.prototype, 'length', {
    get() {
      return ((this.x)**2 + (this.y)**2)**0.5;
    }
});
console.log(new Vector(3, 4).length);
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
//Задание 13
console.log('-----Задание 13-------');
function repeat(string, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += string;
    }
}
class TextCell {
    constructor(text) {
        this.text = text.split('\n');
    }

    minWidth() {
        return this.text.reduce((width, line) => Math.max(width, line.length), 0);
    }

    minHeight() {
        return this.text.length;
    }

    draw(width, height) {
        const result = [];
        for (let i = 0; i < height; i++) {
            const line = this.text[i] || '';
            result.push(repeat(' ', width - line.length) + line);
        }
        return result;
    }
}
const StretchCell = function(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
}
StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
}
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}
var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
//Задание 14
console.log('-----Задание 14-------');
function ArraySeq(data) {
    this.position = -1;
    this.data = data;
  }
  
  function logFive(seq) {
    for (var i = 0; i < 5; i++) {
      if (!seq.next()) {
        break;
      }
      console.log(seq.curr()); 
    }
  }
  
  ArraySeq.prototype.next = function () {
    if (this.position >= this.data.length - 1) {
      return false;
    }
    this.position++;
    return true;
  }
  
  ArraySeq.prototype.curr = function () {
    return this.data[this.position];
  } 
  
  function RangeSeq(from, to) {
    this.position = from - 1;
    this.to = to;
  }
  
  RangeSeq.prototype.next = function () {
    if (this.position >= this.to) {
      return false;
    }
    this.position++;
    return true;
  }
  
  RangeSeq.prototype.curr = function () {
    return this.position;
  } 
  
  logFive(new ArraySeq([1, 2])); 
  // → 1
  // → 2
  logFive(new RangeSeq(100, 1000));
//Задание 15
console.log('-----Задание 15-------');
class Card{
    constructor(from, to){
        this.from = from
        this.to = to
    }
    show(){
        return `from ${this.from} to ${this.to}`
    }
}
c1 = new Card('Екатеринбург', 'Москва')
console.log(c1.show())
//Задание 16
console.log('-----Задание 16-------');
class Human{
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
    }

    getInfo(){
        return `${this.name}, ${this.age}, ${this.height}`
    }

    get firstname(){
        return this.name;
    }

}
h1 = new Human("Коля", 23, 180)
h2 = new Human('Даша', 19, 170)
h3 = new Human('Ваня', 18, 192)
h4 = new Human('Петя', 45, 178)
h5 = new Human('Вася', 34, 197)
h6 = new Human('Джони', 40, 168)
h7 = new Human('Катя', 37, 160)
h8 = new Human('Петя', 29, 200)
h9 = new Human('Соня', 21, 172)
h10 = new Human('Женя', 25, 175)

console.log(h1.firstname)
//Задание 17
console.log('-----Задание 17-------');
function sortByName(array){
    return array.sort((prev, next) => {
        if ( prev.name < next.name ) return -1;
        if ( prev.name < next.name ) return 1;
    });
};

function sortByHeight(array){
    return array.sort((prev, next) => prev.height - next.height);
};

humans = [h1, h3, h2];
console.log(sortByName(humans));
console.log(sortByHeight(humans));
//Задание 18
console.log('-----Задание 18-------');
let dt1 = new Date(2045, 0, 1)
console.log(dt1)
//Задание 19
console.log('-----Задание 19-------');
let dt2 = +new Date() / 1000;
console.log(dt2);
//Задание 20
console.log('-----Задание 20-------');
function getDays(year, month){
    let dt = new Date(year, month, 0, 3, 0, 30)
    return dt.getDate()
}
console.log(getDays(2019, 5))
//Задание 21
console.log('-----Задание 21-------');
console.log('В отдельном файле')
//Задание 22
console.log('-----Задание 22-------');
Number.prototype.isOdd = function () {
    return this % 2 == 0 ? false : true
}
let odd_7 = Number('7');
let even_8 = Number('8');
console.log(odd_7.isOdd());
console.log(even_8.isOdd());
//Задание 23
console.log('-----Задание 23-------');
function Step() {
    this.distanceFromTheReferencePoint = 0;
    this.forward = function () {
        distanceFromTheReferencePoint++;
        return this;
    }
    this.back = function () {
        distanceFromTheReferencePoint--;
        return this;
    };
}
//Задание 24
console.log('-----Задание 24-------');
function Unit(x, y) {
    this.x = x;
    this.y = y;

    this.setX = function (x) {
        this.x = x;
        return this;
    };
    this.setY = function (y) {
        this.y = y;
        return this;
    };
    this.getX = function (x) {
        return this.x;
    };
    this.getY = function (y) {
        return this.y;
    };
}

function Fighter(x, y, power) {
    Unit.call(this, x, y);
    this.power = power;
    this.setPower = function (power) {
        this.power = power;
        return this;
    };
    this.getPower = function (power) {
        return this.power;
    };
}
Fighter.prototype = Unit;