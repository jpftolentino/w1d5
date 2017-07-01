var assert = require("chai").assert;
var isLuhn = require("../lib/luhn");

describe("Luhn Algorithym", function() {

  it('should return true if card number is valid', function() {
    var cardNumber = '79927398713';
    var result = isLuhn(cardNumber);
    assert.isTrue(result);
  });

  it('should return false if card number is not valid', function(){
    var cardNumber = '79927398710';
    var result = isLuhn(cardNumber);
    assert.isFalse(result);
  });

  it('should return false if card number is not valid', function(){
    var cardNumber = '79927398711';
    var result = isLuhn(cardNumber);
    assert.isFalse(result);
  });

  it('should return false if card number is not valid', function(){
    var cardNumber = '79927398712';
    var result = isLuhn(cardNumber);
    assert.isFalse(result);
  });
});