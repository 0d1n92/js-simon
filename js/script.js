// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
$(document).ready(function(){
  // Un alert espone 5 numeri casuali diversi.
  var numbers=[];
  var numberBot;
while(numbers.length<5) {
  //prima creo una variabile di tipo int per farla controllare
    numberBot=((Math.floor(Math.random()*100)+1));
    if(!numbers.includes(numberBot)){
      numbers.push(numberBot);
    }


  }


  alert("i numeri generati sono "+ numbers);

  var numbersUser=[];
  var number;
  var thereAreN=[];
  setTimeout(function () {

    while(numbersUser.length<5) {

        number=parseInt(prompt('inserisci i numeri che ricordi'));
        if(!numbersUser.includes(number)){
          numbersUser.push(number);
        }
      }
      //esiste
      for (var i=0; i< numbersUser.length; i++){
        var numberNow=numbersUser[i];
        if (numbers.includes(numberNow)){
          thereAreN.push(numberNow);
        }
      }
  if(numbersUser.length==5){
    $('#same').text("i numeri azzeccati sono: "+ thereAreN);
    $('#numbers').text("numeri casuali sono "+numbers);;
  }
}, 1000);




});
