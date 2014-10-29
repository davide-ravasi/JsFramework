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
function IsArrMember(array, value) {
  var found = false;
  forEach(array, function(element) {
    if (element === value)
      found = true;
  });
 return found;
}

//dato un array e una funzione di test restituisce l'array con gli elementi che soddisfano il criterio
// ex. filter(partial(op[">"], 5), [0, 4, 8, 12]);
//DIPENDENZE: forEach
function filter(test, array) {
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
function reduce(array,combine,start) {
    var current = start;    
    for(i = 0; i < array.length; i++) {
        current = combine(current,array[i]);    
    }
    return current;
}


//IsArrMember([6, 7, "Bordeaux"], 6);