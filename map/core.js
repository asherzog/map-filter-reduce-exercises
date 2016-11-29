function multiplyBy10 (array) {
  return array.map((nums) => nums*10);
};

function shiftRight (array) {
  var last = array[array.length - 1];
  var newArr = [];
  array = array.map(function(word) {
    if (word == last) {
      newArr.unshift(word);
    }
    newArr.push(word);

  });
  newArr.pop();
  return newArr;
};

function onlyVowels (array) {
 // your code here
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
