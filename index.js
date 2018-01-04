function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for(var i = 0;i <= musicians.length-1; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var array =[];
  while (i!==facts.length-1) {
    array[i] = facts[i] +"!!!";
    i++;
  }
  return array;
}