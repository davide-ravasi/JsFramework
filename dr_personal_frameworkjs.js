// data una funzione e un array esegue azione su el
//dipendenze: no
function forEach(array, action) { 
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//dato array  e valore lo cerca ritornando bool
//dipendenze forEach
function IsArrMember(array, value) {
  var found = false;
  forEach(array, function(element) {
    if (element === value)
      found = true;
  });
 return found;
}


//aggiunta 01

//IsArrMember([6, 7, "Bordeaux"], 6);