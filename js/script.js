// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
$(document).ready(function(){
  // Un alert espone 5 numeri casuali diversi.
  var numbers=[];
  for (var i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random()*100)+1);
  }
  alert(numbers);
  var numbersUser=[];
  var thereAreN=[];
  setTimeout(function () {

  for (var i = 0; i < numbers.length; i++) {
      numbersUser[i]= parseInt(prompt("quali numeri ti ricordi?"));
      if (numbers.includes(numbersUser[i])){
        thereAreN.push(numbersUser[i]);
      }
  }  }, 30000);

  console.log(thereAreN);


});
