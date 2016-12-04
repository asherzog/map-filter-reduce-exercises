function onlyEven (array) {
  return array.filter((nums) => {if (nums % 2 === 0){ return nums;}});
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
  return array.filter(function(word){
    let vowels = [];
    let sortMe = [];
    word.split("").map(function(letter){
      if (letter.match(/a|e|i|o|u/gi)){
        vowels.push(letter);
        sortMe.push(letter);
      }
      return vowels;
    });
    sortMe = sortMe.sort();
    return (sortMe.forEach((a)=>{a;}) === vowels.forEach((a)=>{a;}));
  });
}


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
