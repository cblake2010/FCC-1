//Title Case a Sentence	Jan 21, 2016		View my solution
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

//Return Largest Numbers in Arrays	Jan 21, 2016		View my solution
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


//Confirm the Ending	Jan 21, 2016		View my solution
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(str.length - target.length) === target;
}

end("Bastian", "n");
console.log(end("Bastian", "n"));

//Chunk
function chunk(arr, size) {
  // Break it up.
  //Create the initial array and initial nested array
  var newArr = new Array();
  newArr[0] = new Array();
  //Begin nested array index at 0
  var j = 0;

  for (var i = 0; i < arr.length; i++) {
    //Create Next Nested Array
    if (newArr[j].length >= size) {
      j++;
      newArr[j] = new Array();
    }
    newArr[j].push(arr[i]);
  }
  return newArr;
}
console.log(chunk(["a", "b", "c", "d", "e"], 2));
chunk(["a", "b", "c", "d"], 2);

//Return the remaining elements of an array after chopping off n elements from the head.
//The head meaning the beginning of the array, or the zeroth index
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany, arr.length);
}
console.log(slasher([1, 2, 3], 1));
slasher([1, 2, 3], 2);

//Mutations
Array.prototype.canMake = function() {
  for (var i = 0; i < this[1].length; i++) {
    if (this[0].toLowerCase().indexOf(this[1].split("")[i].toLowerCase()) < 0) {
      return false;
    }
  }
  return true;
};

function mutation(arr) {

  return arr.canMake();
}
console.log(mutation(["hello", "heL"]));
mutation(["hello", "hey"]);

Array.prototype.removeFalse = function() {
  for (var i = 0; i < this.length; i++) {
    if (!this[i]) {
      this.splice(i, 1);
      i -= 1;
    }
  }
  return this;
};

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.removeFalse();
}
arr = [7, "ate", "", false, 9];
bouncer(arr);

//Seek and Destroy
Array.prototype.seekDestroy = function(arr) {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (this[i] === arr[j]) {
        this.splice(i, 1);
        i -= 1;
      }
    }

  }
  return this;
};

function destroyer() {
  // Remove all the values
  var arr = arguments[0];
  var seekArr = new Array()
  for (var i = 0; i < arguments.length; i++) {
    seekArr.push(arguments[i]);
  }
  arr.seekDestroy(seekArr);
  return arr;
};
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Where Do I belong
function where(arr, num) {
  var j
    // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b
  })
  for (var i = 0; i < arr.length; i++) {
    j = i + 1;
    if (num === arr[i]) {
      return i;
    } else if (num >= arr[i] && num < arr[j]) {
      return j;
    }
  }
  return j;
};

console.log(where([2, 5, 10], 15));
//Caeser's Cipher
function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) > 64) && (str.charCodeAt(i) < 91)) {
      if (str.charCodeAt(i) + 13 > 90) {
        newStr += String.fromCharCode(13 - (90 - str.charCodeAt(i)) + 64)
      } else {
        newStr += String.fromCharCode(str.charCodeAt(i) + 13)
      }
    } else {
      newStr += String.fromCharCode(str.charCodeAt(i))
    }
  }
  return newStr;
};
// Change the inputs below to test
//rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));
console.log("?".charCodeAt());

//Just a test
console.log("Test");

function destroyer() {
  //firstArray Equal to First Element of arguments
  var firstArray = arguments[0];
  var restOfArray = [];
  var lastArray = [];
  //restOfArray equal to second and each subsequent element of arguments
  for (x = 1; x < arguments.length; x++) {
    restOfArray.push(arguments[x]);
  }
  //Filter Results based on value from firstArray contained in restOfArray
  //And indexOf function returns a -1 when value is not contained.
  lastArray = firstArray.filter(function(value) {
    return restOfArray.indexOf(value) < 0;
  });
  return lastArray;
}

var arr = [1, 2, 3, 4];

var singleVal = arr.reduce(function(previousVal, currentVal) {
  console.log("Previous Val=" + previousVal + "  Current Val=" + currentVal)
  return previousVal + currentVal;
}, 4);

console.log("singleVal= " + singleVal);

var arr = [1, 2, 3, 4];

var singleVal = arr.reduce(function(previousVal, currentVal) {
  console.log("Previous Val=" + previousVal + "  Current Val=" + currentVal)
  return previousVal + currentVal;
}, 0);

console.log("singleVal= " + singleVal);

console.log("singleVal= " + singleVal);

var arr = [1, 2, 3, 4];

var singleVal = arr.reduce(function(previousVal, currentVal) {
  console.log("Previous Val=" + previousVal + "  Current Val=" + currentVal)
  return previousVal + currentVal;
});

console.log("singleVal= " + singleVal);

console.log(JSON.parse('true'));

str = "1+2*10"
console.log(eval(str));

console.log(isNumber("1"));
