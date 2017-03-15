'use strict'
module.exports = function() {

  //private
  var repeatNumber = createRandom();

  function createRandom(){
    return Math.floor((Math.random() * 1000001));
  }

  //public
  function getRepeatNumber(){
    console.log(repeatNumber);
    return repeatNumber;
  }

return getRepeatNumber;

};


