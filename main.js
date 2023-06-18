// problem 7. Write a JavaScript program to convert a specified number into an array of digits.

function numberToDigits(number) {

  var digits = [];

  // convert the number to a string
  var numberString = number.toString();

  for (var i = 0; i < numberString.length; i++) {

    digits.push(parseInt(numberString.charAt(i)));
  }

  return digits;
}

console.log(numberToDigits(123456)); // [1,2,3,4,5,6]

console.log(numberToDigits(2468)); // [2,4,6,8]

console.log(numberToDigits(135790)); // [1,3,5,7,9,0]

// problem 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

function filterArray(array, valuesToFilter) {
  var result = [];

  for (var i = 0; i < array.length; i++) {

    var currentValue = array[i];

    if (!valuesToFilter.includes(currentValue)) {

      result.push(currentValue);
    }
  }

  return result;

}

console.log(filterArray([1, 2, 3, 4, 5, 6], [2, 4])); // [1,3,5,6]

console.log(filterArray(["a", "b", "c", "d", "e", "f"], ["a", "e", "f"])); // ["b","c","d"]


// problem 10. Write a JavaScript program to extract values at specified indexes from a specified array.

function extractValuesAtIndex(array, indexs) {

  var extractValue = [];

  for (var i = 0; i < indexs.length; i++) {

    var currentValue = indexs[i];

    if (currentValue >= 0 && currentValue < array.length) {

      extractValue.push(array[currentValue]);
    }
  }
  return extractValue;
}

console.log(extractValuesAtIndex(["a", "b", "c", "d", "e", "f"], [0, 2, 5])); // ["a", "c", "f"]

console.log(extractValuesAtIndex(["4", "7", "1", "9", "3", "5"], [1, 2, 3])); // ["7", "1", "9"]


// problem 11. Write a JavaScript program to generate a random hexadecimal color code.

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code()) // #61f140

/////////////////////////
///////////////////////////////
/////////////

function randomHexColor() {
  const hexCharecters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexCharecters.length);
    color += hexCharecters[randomIndex];
  }
  return color;
}
console.log(randomHexColor()); // #E5D499


//   problem 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.

const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, ''); // ^ not\x20 hex code for space character- to \x7e hex code for ~ (tilde) character

console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ')); // w3resource

/////////////////////
////////////////

function removeNonASSCII(str) {
  return str.replace(/[^ -~]/g, "");

}
console.log(removeNonASSCII("Éêw3resourö")); //w3resour

/////////////////////
///////////////////////////

function removeNonPrintableCharacters(str) {
  var printableStr = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (charCode >= 32 && charCode <= 126) {
      printableStr += str.charAt(i);
    }
  }

  return printableStr;
}

console.log(removeNonPrintableCharacters("Hello,\x0B\tWorld!")); // Hello, World!
console.log(removeNonPrintableCharacters("Éêw3resourö}<")); //w3resour 


// problem 13. Write a JavaScript program to convert a given string's length to bytes.

const lengthToBytes = (str) => {

  let sizeObj = new Blob([str]).size;
  // The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text
  // or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
  return sizeObj;
}

console.log(lengthToBytes("Geeksforgeeks")) // 13
console.log(lengthToBytes("true")) // 4
console.log(lengthToBytes("false")) // 5
console.log(lengthToBytes("12345")) // 5


//   problem 14. Write a JavaScript program to replace multiple object keys' names with the values provided.

const rename_keys = (obj1, obj2) =>
  Object.keys(obj2).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [obj1[key] || key]: obj2[key] }
    }),

    {}
  );
const obj1 = { name: 'firstName', job: 'Actor' };
const obj2 = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };

result = rename_keys(obj1, obj2);
console.log("New Object");
console.log(result);


//   problem 15. Write a JavaScript program to return the minimum-maximum value
//  of an array, after applying the provided function to set a comparing rule. 

const reduce_Which = (arr, comparator = (a, b) => a - b) =>

  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));




console.log(reduce_Which([1, 3, 2]));

console.log(reduce_Which([10, 30, 20], (a, b) => b - a));

console.log(reduce_Which(

  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => b.age - a.age));  //// { name: 'John', age: 20 },


/////////////////////////
////////////

function minMax(array, comparator) {

  if (array.length === 0) {

    return undefined;
  }

  const sortedArray = array.sort(comparator);

  return sortedArray[0];
}

console.log(minMax([10, 30, 20], (a, b) => a - b));  // 10

console.log(minMax([{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }], (a, b) => b.age - a.age)); //{ name: 'John', age: 20 }


//   problem 16. Write a JavaScript function that returns true if the provided predicate function returns
//    true for all elements in a collection, false otherwise.

function all(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      return false;
    }
  }
  return true;
}
console.log(all([4, 2, 3], x => x > 1));
console.log(all([4, 2, 3], x => x < 1));



// problem 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, 
// the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

function splitArray(array, filter) {
  const array1 = [];
  const array2 = [];

  for (let i = 0; i < array.length; i++) {

    if (filter[i]) {

      array1.push(array[i]);

    } else {

      array2.push(array[i]);
    }
  }

  return [array1, array2]
}
console.log(splitArray([1, 2, 3, 4], [false, false, false, false]));
console.log(splitArray([1, 2, 3, 4], [true, true, true, true]));
console.log(splitArray([1, 2, 3, 4], [true, true, false, true]));


// problem 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.

function removeElementsFromLeft(array, n) {

  if (n >= array.length) {
    return [];
  }

  return array.slice(n);
}

console.log(removeElementsFromLeft([1, 2, 3], 1)); // [2,3]
console.log(removeElementsFromLeft([1, 2, 3], 2)); // [3]
console.log(removeElementsFromLeft([1, 2, 3], 4)); // []


//problem 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.


function removeElementsFromRight(array, n) {

  if (n >= array.length) {
    return [];
  }

  return array.slice(0, array.length - n);
}

console.log(removeElementsFromRight([1, 2, 3], 1)); // [1,2]
console.log(removeElementsFromRight([1, 2, 3], 2)); // [1]
console.log(removeElementsFromRight([1, 2, 3], 4)); // []


// problem 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.



// problem 21. Write a JavaScript program to get every nth element in a given array.

function nthElements(array, n) {
  const result = [];

  for (let i = n - 1; i < array.length; i += n) {

    result.push(array[i]);

  }

  return result;
}


console.log(nthElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3,6,9]
console.log(nthElements([1, 2, 3, 4, 5, 6], 2)); // [2,4,6]
console.log(nthElements([1, 2, 3, 4, 5, 6], 3)); // [3,6]
console.log(nthElements([1, 2, 3, 4, 5, 6], 4)); // [4]

//////////////
/////////////////

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); // [1,2,3,4,5,6]

console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2,4,6]

console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3,6]

console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); //[4]

// problem 22. Write a JavaScript program to filter out non-unique values in an array.

const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5])); // [1,3,5]

console.log(filter_Non_Unique([1, 2, 3, 4]));   // [1,2,3,4]

////////////////////
///////////////////////

function filterUniqueValues(array) {

  return array.filter(function (value) {

    return array.indexOf(value) === array.lastIndexOf(value);

  });
}

console.log(filterUniqueValues([1, 2, 3, 4, 3, 2, 1, 5])); // Output: [4, 5]


// problem 24. Write a JavaScript program to dcapitalize the first letter of a string.

function decapitalizeFirstLetter(str) {

  if (typeof str !== 'string' || str.length === 0) {

    return str;
  }

  return str[0].toLowerCase() + str.slice(1);
}


console.log(decapitalizeFirstLetter("W3resource")); // w3resource


// problem 26. Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.

function checkYesNo(string) {
  if (typeof string !== 'string') {
    return false;
  }

  var lowerCaseString = string.toLowerCase();

  if (lowerCaseString === 'y' || lowerCaseString === 'yes') {
    return true;
  }
  return false;
}


console.log(checkYesNo("y"));    // true
console.log(checkYesNo("yes"));  //  true
console.log(checkYesNo("n"));    //  false
console.log(checkYesNo("no"));    //  false

//////////////////
////////////////////////

function checkYesNo(string) {
  if (typeof string !== 'string') {
    return false;                               // ^n	Matches any string with n at the beginning of it
  }                                             // In regular expressions, the symbol $ is used to match the end of a string
  if (/^(y|yes)$/i.test(string)) {              // i = regular expression to make the pattern case-insensitive 
    return true;
  }
  return false;
}
console.log(checkYesNo("y"));    // Output: true
console.log(checkYesNo("no"));  // Output: false


// problem 27. Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.

function findElementsInArrays(array1, array2, comparator) {

  var concatArray = array1.concat(array2); //[1,2,3,4,5,4,5,6,7,8]

  var uniqueElements = [];

  concatArray.forEach(function (element) {

    if (!uniqueElements.includes(element)) {

      uniqueElements.push(element);

    }
  });

  return uniqueElements;
}

var array1 = [1, 2, 3, 4, 5];

var array2 = [4, 5, 6, 7, 8];

var comparator = function (a, b) { return a === b; };

console.log(findElementsInArrays(array1, array2, comparator)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// problem 30. Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.

function filterElements(array, values) {

  return array.filter(function (element) {

    return !values.includes(element);
  });
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];

var values = [2, 4, 6];

console.log(filterElements(array, values)); // Output: [1, 3, 5, 7, 8]


// problem 31. Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.

function removeFirstElement(array) {

  if (array.length === 1) {

    return array;

  } else {
    return array.slice(1);
  }
}

console.log(removeFirstElement([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5]


// problem 32.Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

function sumMappedArray(array, mappingFunction) {

  const mappedArray = array.map(mappingFunction);

  const sum = mappedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}


const mappingFunction = (element) => element * 4;

console.log(sumMappedArray([1, 2, 3, 4, 5], mappingFunction));  //60

// problem 33.Write a JavaScript program to generate a random number in the specified range. 

function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(2, 10)); // 4.752344235774233


// problem 34. Write a JavaScript program to generate a random integer in the specified range.

function getRandomInteger(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(2, 5)); // 5

// problem 35. Write a JavaScript program to get an array of given n random integers in the specified range.

function getRandomIntegersArray(n, min, max) {

  const result = [];

  for (let i = 0; i < n; i++) {

    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    result.push(randomInt);
  }
  return result;
}
console.log(getRandomIntegersArray(10, 1, 100));







