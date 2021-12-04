function arrayToList(array){
    let list = { 
        value: array[0], 
        rest: null
    }

    let list0 = list;
        
    for (i=1; i<array.length; i++) {
        list.rest = new Object();
        list.rest.value = array[i];
        list.rest.rest = null;
        list = list.rest;
    }

    return list0;

}

function listToArray(list) {
    var arr = [];
  
    arr.push (list.value);
    while (list.rest != null) {
      list = list.rest;
      arr.push(list.value);
    }
  
    return arr;
  }

console.log(arrayToList([1,2,3,4,5]));