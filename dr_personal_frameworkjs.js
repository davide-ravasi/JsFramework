/*
Framework Name: DR personal framework
Author URI: http://www.davideravasi.com
Description: Little javascript framework with useful function for everyday job
Framework by Davide Ravasi.
Version: 2.0
This frameworks is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/

// data una funzione e un array esegue azione su el
//dipendenze: no
function forEach(array, action) { 
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//dato array  e valore lo cerca ritornando bool
//DIPENDENZE: forEach
//IsArrMember([6, 7, "Bordeaux"], 6);
function IsArrMember(array, value) {
  var found = false;
  forEach(array, function(element) {
    if (element === value)
      found = true;
  });
 return found;
}

//dato un array e una funzione di test restituisce l'array con gli elementi che soddisfano il criterio
// ex. filter([3,4,6,10], function(number) {
//     	return number>5;
//     });
//DIPENDENZE: forEach
function filter(array, test) {
  var result = [];
  forEach(array, function (element) {
    if (test(element))
      result.push(element);
  });
  return result;
}

//dato un array e una funzione di trasformazione restituisce un nuovo array con gli elementi trasformati
//DIPENDENZE: no
function map(array,transform) {
    var mapped = [];
    for (i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

//dato un array e una funzione ritorna un solo valore corrispondente all'esito della funzione passata
//DIPENDENZE: no
//EX. reduce([1,2,3,4], function(a, b) {
//      return a + b;
//    }, 0)
function reduce(array,combine,start) {
    var current = start;    
    for(i = 0; i < array.length; i++) {
        current = combine(current,array[i]);    
    }
    return current;
}

//estende il prototype di un oggetto a quello del parente con sicurezze varie
//DIPENDENZE: no

function extend(Child,Parent) {
	var F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
}






