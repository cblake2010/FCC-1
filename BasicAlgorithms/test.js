String.prototype.capitalizeFirst = function() {
  // Capitalizes the first word of a string and lowercases the remaining
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function titleCase(str) {
  //Split String Array of words
  var strArr = str.split(" ");

  for (var i = 0; i < strArr.length; i++) {

    //Capitalize First on each word.
    strArr[i] = strArr[i].capitalizeFirst();
  }
  //Return the ReJoined Array.  Separator of space to reform sentence
  return strArr.join([separator = " "]);
};

console.log(titleCase("This is ANOTHER TEst."));

function largestOfFour(arr) {
  // You can do this!
  var lrgArr = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a
    });
    lrgArr.push(arr[i][0]);
  }
  return lrgArr;
}


largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]));

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(str.length - target.length) === target;
}

end("Bastian", "n");
console.log(end("Bastian", "n"));

function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  var str;
  var j = 0;


  for (var i = 0; i < arr.length; i++) {
    str = arr[i];
    newArr[i] = [];
    if (j > size) {
      j = 0;
    }
    newArr[i][j] = arr[i];
    j++;
    for (j; j < size; j++) {

    }
  }
  return newArr;
}
console.log(chunk(["a", "b", "c", "d"], 2));
chunk(["a", "b", "c", "d"], 2);
