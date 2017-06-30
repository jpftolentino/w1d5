function isPalindrome(s) {
  var stringOriginal = s.split(" ").join("");
  var stringReverse = stringOriginal.split("").reverse().join("");
  console.log(stringOriginal,stringReverse);
  return stringOriginal == stringReverse;
}

module.exports = isPalindrome;
