function sum (array) {
  return array.reduce((a,b) => {return a + b;});
};

function productAll (array) {
  let concated =  array.reduce((a,b) => {return a.concat(b);});
  return concated.reduce((a,b) => {return a * b;});
};

function objectify (array) {
  return array.reduce(function(obj, show){
    obj[show[0]] = show[1];
    return obj;
  }, {});
};

function luckyNumbers (array) {
  let str =  "Your lucky numbers are: ";
  let isLast = array.length - 1;
  let reduced = array.reduce(function(a, b, index){
    return ( index == isLast ? a + ', and ' + b: a + ', ' + b).toString();
  });
  return str + reduced;
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
