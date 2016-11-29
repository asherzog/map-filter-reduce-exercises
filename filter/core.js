function onlyEven (array) {
  return array.filter(function(nums) {if (nums % 2 === 0){ return nums}});
};

function onlyOneWord (array) {
  function oneWord(words) {
    return words.indexOf(' ') === -1;
  }
  return array.filter(oneWord);
}

function positiveRowsOnly (array) {
  var newArr = [];
  function isPos(number) {
    return number > 0;
  }
  for (var i = 0; i < array.length; i++) {
    var arr = [];
    arr.push(array[i].filter(isPos));
  }
  for (var x = 0; x < arr.length; x++) {
    if (arr[x].length === array[x].length) {
      newArr.push(arr[x]);
    }
  }
  return newArr;
};

function allSameVowels(array) {
  console.log(array[0]);

}


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
