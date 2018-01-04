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
  while (i!==facts.length) {
    array[i] = facts[i] +"!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array =[];
  
  do {
    array[number]="I love the Beatles";
    number++;
  } while (number<15);
  
  return array;
}