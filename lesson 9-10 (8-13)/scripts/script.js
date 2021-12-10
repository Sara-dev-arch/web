const { log } = require("console")

//Задание 8
console.log('-----Задание 8-------')
function arrayToList(array){
    let list = null
    while (array.length !=0) {
        list = prepend(array.pop(), list)
    }       
    return list
}

function prepend(item, list){
     new_list = {
        value: item,
        rest: list
    }
    return new_list
}

function listToArray(list){
    let array = []
    let i = 0
    let item = nth(list, i)
    while (item!=undefined){
        i++
        array.push(item)
        item = nth(list, i)
    }
    return array

}

function nth(list, pos){
    if (pos!=0){
        if (list.rest != null){
            return nth(list.rest, pos-1)
        }
        else {
            return undefined
        }
    }
    else{
        return list.value
    }
}

let list = {
    value: 1, 
    rest: { 
        value: 2, 
        rest: { 
            value: 3, 
            rest: { 
                value: 4, 
                rest: null
            }
        }
    }
}
console.log(arrayToList([1, 2, 3]))
console.log(listToArray(list))

//Задание 9
console.log('-----Задание 9-------')
function deepEqual(obj1, obj2)
{
    if(typeof obj1 == typeof obj1)
    {
        if((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null))
        {
            let equals = true;
            for(var property in obj1)
            {
                if(obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property))
                {
                    if(!deepEqual(obj1[property], obj2[property]))
                    {
                        equals = false;
                    }
                }
                else
                {
                    equals = false;
                }
            }
            return equals;
        }
        else
        {
            return obj1 === obj2;
        }
    }
    else
    {
        return false;
    }
}

let obj = {here: {is: "an"}, there: {j:9, rest: 30}};
let obj2 = {here: {is: "an"}, there: {j:94, rest: 30}};
console.log(deepEqual(obj, obj2));

//Задание 10
console.log('-----Задание 10-------')

let big_array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(big_array.reduce((array1, array2) =>{
    return array1.concat(array2)
}))

//Задание 11
console.log('-----Задание 11-------')

var ancestry = [
    {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
    {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
    {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
]
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
  
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

var diff = ancestry.filter(
    function(person) {
        return byName[person.mother] != null;
    }).map(
        function(person) {
            return person.born - byName[person.mother].born
        });
  
console.log(average(diff));

//Задание 12
console.log('-----Задание 12-------') 
centuries = {}
ancestry.forEach(function(person){
  if ( centuries[Math.ceil(person.died / 100)] ) {
    centuries[Math.ceil(person.died / 100)].push(person.died - person.born)
  } else {
    centuries[Math.ceil(person.died / 100)] = [person.died - person.born]
  }
})

for (century in centuries) {
  centuries[century] = average(centuries[century]);
  console.log(centuries[century])
}

//Задание 13
console.log('-----Задание 13-------') 
  
function every(array, isEvery) {
    if (!Array.isArray(array)) {
      return "Некорректные данные"
    }
    for (i = 0; i < array.length; i++) {
      if (!isEvery(array[i])) {
        return false;
      }
    }
    return true;
  }
  
  function some(array, isSome) {
    if (!Array.isArray(array)) {
      return "Некорректные данные"
    }
    for (i = 0; i < array.length; i++) {
      if (isSome(array[i])) {
        return true;
      }
    }
    return false; 
  }
   
  console.log(every([NaN, NaN, NaN], isNaN));



