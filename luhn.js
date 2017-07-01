function isLuhn(cardNumber){

  /*
    -function passes number as a string
    -parse string into number
    -split number into an array of numbers

    -for every second index of the array multiply by 2

    -if number is greater than 9 subtract 9
    -create a for loop that iterates into every 2nd number
    --> make sure to start the loop at 1 for if statement ( i % 2===0)
    -push each number into a new array
    -if number is modulus 10 valid else invalid

  */

  var cardNum = cardNumber.split('');
  var checkSum = 0;
  for(var i = 0; i < cardNumber.length; i++){
    var checkNum = Number(cardNum[i]);
    if( i % 2 !== 0){
      checkNum = (checkNum*2);
      if( checkNum > 9){
        checkNum = checkNum - 9;
      }
    }
  checkSum += checkNum
  }

  if( checkSum % 10 === 0){
    return true;
  } else {
    return false;
  }
}

module.exports = isLuhn;