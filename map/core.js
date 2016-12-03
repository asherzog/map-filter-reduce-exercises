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
  let vowels = ['a','e','i','o','u'];
  let noVowels = array.map(function(word){
    var removing = [];
    word.split("").map(function(letter){
      if (vowels.indexOf(letter) !== -1){
        removing.push(letter);
      }
      return removing.join('');
    });
    return removing.join('');
  });
  return noVowels;
};

function doubleMatrix (array) {
  return array.map(function(matrix){
    let answer = matrix.map(function(nums){
      return nums * 2;
    });
    return answer;
  });
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
