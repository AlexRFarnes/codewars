let number = function (busStops) {
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
};

/**
 * [[6,0],[39,1],[69,30],[29,63],[47,15],[96,2],[16,59],[56,103],[69,61],[96,65],[21,14],[20,72]]: expected undefined to equal 79
 */

let arr = [
  [6, 0],
  [39, 1],
  [69, 30],
  [29, 63],
  [47, 15],
  [96, 2],
  [16, 59],
  [56, 103],
  [69, 61],
  [96, 65],
  [21, 14],
  [20, 72],
];

console.log(number(arr));

function nbDig(n, d) {
  let count = 0;
  for (let k = 0; k <= n; k++) {
    let stringDigits = (k ** 2).toString().split("");
    let realDigits = stringDigits.map(Number);
    for (const digit of realDigits) {
      if (digit == d) count++;
    }
  }
  return count;
}

console.log(nbDig(10, 1)); // 4
console.log(nbDig(25, 1)); // 11
console.log(nbDig(5750, 0)); // 4700
console.log(nbDig(11549, 1)); // 11905

/**
 * Task
Write a function that returns both the minimum and maximum number of the given list/array.
 */
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5])); //  [1,5])
console.log(minMax([2334454, 5])); // [5, 2334454])
console.log(minMax([1])); // [1, 1])

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */

//"the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// if (str.length === 0) return "";

function toCamelCase(str) {
  const words = str.split(/_|-/);
  let camelCase = [];
  camelCase.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let chars = words[i].split("");
    chars[0] = chars[0].toUpperCase();
    camelCase.push(chars.join(""));
  }

  return camelCase.join("");
}

toCamelCase("the_stealth_warrior");
toCamelCase("The-Stealth-Warrior");
toCamelCase("A-B-C");
toCamelCase("");

// Deodorant Evaporator
/**
 * This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
 */

function evaporator(content, evap_per_day, threshold) {
  let thresholdInMl = (content * threshold) / 100;
  let remaining = content;
  let days = 0;
  while (remaining > thresholdInMl) {
    remaining -= (remaining * evap_per_day) / 100;
    days++;
  }

  return days;
}

evaporator(10, 10, 5); // -> 29

/**
 * Sum of two lowest positive integers
 */

//  Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//  For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

//  [10, 343445353, 3453445, 3453545353453] should return 3453455

function sumTwoSmallestNumbers(numbers) {
  const firstLowestNumber = Math.min(...numbers);
  numbers.splice(numbers.indexOf(firstLowestNumber), 1);
  const secondLowestNumber = Math.min(...numbers);
  return firstLowestNumber + secondLowestNumber;
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // -> 13

/**
 * Isograms
 */

//  An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  if (str.length == 0) return true;
  let strArr = str.toLowerCase().split("");
  let isIsogram = true;
  strArr.forEach((char, index) => {
    for (let i = 0; i < strArr.length; i++) {
      if (char === strArr[i] && index !== i) {
        isIsogram = false;
      }
    }
  });
  return isIsogram;
}

// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size == str.length;
// }

console.log(isIsogram("Dermatoglyphics")); // -> true
console.log(isIsogram("isogram")); // -> true
console.log(isIsogram("aba")); // -> false

/**
 * Small enough? - Beginner
 */

//  You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//  You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  return a.filter(num => num > limit).length == 0;
}

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
//   }

console.log(smallEnough([66, 101], 200)); // -> true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // -> false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // -> true

/**
 * Most digits
 */

//  Find the number with the most digits.

//  If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const largestNumInfo = {
    value: array[0],
    length: array[0].toString().length,
    index: 0,
  };
  for (let i = 1; i < array.length; i++) {
    const currentNumLength = array[i].toString().length;
    if (currentNumLength > largestNumInfo.length) {
      largestNumInfo.value = array[i];
      largestNumInfo.length = currentNumLength;
      largestNumInfo.index = i;
    }
  }
  return largestNumInfo.value;
}

// function findLongest(array) {
//   return array.reduce((a, b) => `${b}`.length > `${a}`.length ? b : a);
// }

console.log(findLongest([1, 10, 100])); // -> 100
console.log(findLongest([9000, 8, 800])); // -> 9000
console.log(findLongest([8, 900, 500])); // -> 900

/**
 * Summing a number's digits
 */

//  Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, num) => acc + +num, 0);
}

console.log(sumDigits(10)); // -> 1
console.log(sumDigits(99)); // -> 18
console.log(sumDigits(-32)); // -> 5

/**
 * Check the exam
 */
//  The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

//  The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

//  If the score < 0, return 0.

function checkExam(array1, array2) {
  const result = array2.reduce((acc, answer, index) => {
    if (answer == "") return acc + 0;
    else if (answer != array1[index]) return acc - 1;
    else if (answer == array1[index]) return acc + 4;
  }, 0);
  return result >= 0 ? result : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // -> 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // -> 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // -> 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // -> 0

/**
 * Maximum Length Difference
 */

//  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

//  Find max(abs(length(x) − length(y)))

//  If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
  let max = -1;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      max =
        Math.abs(a1[i].length - a2[j].length) > max
          ? Math.abs(a1[i].length - a2[j].length)
          : max;
    }
  }
  return max;
}

let s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(s1, s2)); // -> 13
console.log(mxdiflg(["aaaa"], [])); // -> -1
console.log(mxdiflg([], ["aaaa"])); // -> -1
console.log(mxdiflg([], [])); // -> -1

/**
 * Reverse words
 */
//  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // -> 'ehT kciuq nworb xof spmuj revo eht yzal .god'

/**
 * Growth of a Population
 */

//  p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//  the function nb_year should return n number of entire years needed to get a population greater or equal to p.

//  aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); // -> 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // -> 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // -> 94

/**
 * Reverse every other word in the string
 */

//  Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  return str
    .split(" ")
    .map((item, index) =>
      index % 2 != 0 ? item.split("").reverse().join("") : item
    )
    .join(" ")
    .trim();
}

console.log(reverse("Reverse this string, please!")); // -> "Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")); // -> "I yllaer don't ekil reversing !sgnirts"

/**
 * Break camelCase
 */

// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  return string
    .split("")
    .map(char => {
      if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
        return " " + char;
      } else {
        return char;
      }
    })
    .join("");
}

console.log(solution("camelCasing")); // -> 'camel Casing'
console.log(solution("camelCasingTest")); // -> 'camel Casing Test'

// // [65 - 90]

/**
 * Title Case
 */

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
  if (title.length === 0) return "";
  const [firstWord, restOfWords] = [
    title.split(" ")[0],
    title.split(" ").slice(1),
  ];
  const minorWordsArray =
    minorWords != undefined
      ? minorWords.split(" ").map(minorWord => minorWord.toLowerCase())
      : [];
  return (
    capitalize(firstWord) +
    " " +
    restOfWords
      .map(word => {
        if (minorWordsArray.includes(word.toLowerCase())) {
          return word.toLowerCase();
        } else {
          return capitalize(word);
        }
      })
      .join(" ")
  ).trim();
}

const capitalize = word => {
  return (
    word.split(" ")[0].split("")[0].toUpperCase() +
    word
      .split(" ")[0]
      .split("")
      .slice(1)
      .map(char => char.toLowerCase())
      .join("")
  );
};

console.log(titleCase("")); // -> ''
console.log(titleCase("a clash of KINGS", "a an the of")); // -> 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // -> 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // -> 'The Quick Brown Fox'

/**
 * Highest and Lowest
 */
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const numsArr = numbers.split(" ").map(str => Number(str));
  let min = numsArr[0];
  let max = numsArr[0];
  for (let i = 1; i < numsArr.length; i++) {
    if (numsArr[i] < min) min = numsArr[i];
    if (numsArr[i] > max) max = numsArr[i];
  }
  // console.log(numsArr);
  return [max, min].join(" ");
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

/**
 * Counting sheep...
 */

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(
    (sum, sheep) => sum + (sheep == undefined ? 0 : Number(sheep)),
    0
  );
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1)); // -> 17

/**
 * Descending Order
 */

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
}

// Input: 42145 Output: 54421

console.log(descendingOrder(1021)); // -> 2110
console.log(descendingOrder(123456789)); // -> 987654321

/**
 * Sum without highest and lowest number
 */

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  if (array == undefined || !array.length || array.length == 1) return 0;
  return (
    array.reduce((sum, acc) => sum + acc, 0) -
    Math.max(...array) -
    Math.min(...array)
  );
}

// function sumArray(array) {
//   return array == undefined || array.length < 2
//     ? 0
//     : array
//         .sort((a, b) => b - a)
//         .slice(1, -1)
//         .reduce((sum, num) => sum + num, 0);
// }

console.log(sumArray(null)); // ->               0 );
console.log(sumArray([])); // ->                  0 );
console.log(sumArray([3])); // ->                 0 );
console.log(sumArray([3, 5])); // ->              0 );
console.log(sumArray([6, 2, 1, 8, 10])); // ->   16 );
console.log(sumArray([0, 1, 6, 10, 10])); // ->  17 );
console.log(sumArray([-6, -20, -1, -10, -12])); //-> -28 );
console.log(sumArray([-6, 20, -1, 10, -12])); // -> 3 );

// /**
//  * Beginner Series #2 Clock
//  */

// //  Clock shows h hours, m minutes and s seconds after midnight.

// //  Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(0, 1, 1)); // -> 61000
console.log(past(1, 1, 1)); // -> 3661000
console.log(past(0, 0, 0)); // -> 0
console.log(past(1, 0, 1)); // -> 3601000
console.log(past(1, 0, 0)); // -> 3600000

// /**
//  * Square Every Digit
//  */

// // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// // Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  return +String(num)
    .split("")
    .map(char => +char * +char)
    .join("");
}

console.log(squareDigits(3212)); // -> 9414
console.log(squareDigits(2112)); // -> 4114
console.log(squareDigits(0)); // -> 0

// /**
//  * Unique In Order
//  */

// // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function (iterable) {
  return Array.from(iterable).reduce((arr, currentValue) => {
    if (!arr.length) arr.push(currentValue);
    if (arr[arr.length - 1] !== currentValue) arr.push(currentValue);
    return arr;
  }, []);
};

// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // -> ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); // -> ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // -> [1,2,3]
console.log(uniqueInOrder([])); // -> []
console.log(uniqueInOrder("")); // -> []

/**
 * Duplicate Encoder
 */

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  const charTracker = word
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      obj[char] = obj[char] ? obj[char] + 1 : 1;
      return obj;
    }, {});

  return word
    .toLowerCase()
    .split("")
    .map(char => (charTracker[char] > 1 ? ")" : "("))
    .join("");
}

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

console.log(duplicateEncode("din")); // -> "((("
console.log(duplicateEncode("recede")); // -> "()()()"
console.log(duplicateEncode("Success")); // -> ")())())","should ignore case"
console.log(duplicateEncode("(( @")); // -> "))(("

/**
 * Remove the minimum
 */

// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  const numbersCopy = [...numbers];
  const minNumber = [...numbers].sort((a, b) => a - b)[0];
  numbersCopy.splice(numbers.indexOf(minNumber), 1);
  return numbersCopy;
}

// function removeSmallest(numbers) {
//   return numbers.filter(
//     (_, idx) => idx !== numbers.indexOf(Math.min(...numbers))
//   );
// }

console.log(removeSmallest([1, 2, 3, 4, 5])); // -> [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // -> [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // -> [2, 2, 2, 1]
console.log(removeSmallest([])); // -> []

/**
 * Get the Middle Character
 */

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  return s.length % 2 == 0
    ? s
        .split("")
        .slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
        .join("")
    : s.split("")[Math.floor(s.length / 2)];
}

console.log(getMiddle("test")); // -> "es"
console.log(getMiddle("testing")); // -> "t"
console.log(getMiddle("middle")); // -> "dd"
console.log(getMiddle("A")); // -> "A"

/**
 * Sum of the first nth term of Series
 */

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n) {
  let sum = 0;
  let i = 0;
  while (i < n) {
    sum += 1 / (i * 3 + 1);
    i++;
  }
  return sum.toFixed(2);
}

// function SeriesSumRecursive(n, acc = 0) {
//   if (n === 0) return acc.toFixed(2);
//   else {
//     acc += 1 / (3 * n - 2);
//     return SeriesSumRecursive(n - 1, acc);
//   }
// }

console.log(SeriesSum(0)); // -> "0.00"
console.log(SeriesSum(1)); // -> "1.00"
console.log(SeriesSum(2)); // -> "1.25"
console.log(SeriesSum(3)); // -> "1.39"
console.log(SeriesSum(4)); // -> "1.49"
// console.log(SeriesSumRecursive(0)); // -> "0.00"
// console.log(SeriesSumRecursive(1)); // -> "1.00"
// console.log(SeriesSumRecursive(2)); // -> "1.25"
// console.log(SeriesSumRecursive(3)); // -> "1.39"
// console.log(SeriesSumRecursive(4)); // -> "1.49"

/**
 * Playing with digits
 */

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
  const num =
    ("" + n).split("").reduce((sum, num, idx) => (sum += num ** (p + idx)), 0) /
    n;
  return num % 1 == 0 ? num : -1;
}

console.log(digPow(89, 1)); // -> 1
console.log(digPow(92, 1)); // -> -1
console.log(digPow(46288, 3)); // -> 51

/**
 * Exes and Ohs
 */

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  str = str.toLowerCase();
  if (!str.split("").includes("o") && !str.split("").includes("x")) return true;
  const hash = str.split("").reduce((hash, char) => {
    hash[char] = hash[char] ? hash[char] + 1 : 1;
    return hash;
  }, {});
  return hash["x"] == hash["o"];
}

console.log(XO("xo")); // -> true
console.log(XO("xxOo")); // -> true
console.log(XO("xxxm")); // -> false
console.log(XO("Oo")); // -> false
console.log(XO("ooom")); // -> false
console.log(XO("zpzpzpp")); // -> true

/**
 * Persistent Bugger
 */

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let numArr = num.toString().split("");
  let counter = 0;
  while (numArr.length > 1) {
    numArr = numArr
      .reduce((acc, num) => +acc * +num)
      .toString()
      .split("");
    counter++;
  }
  return counter;
}

console.log(persistence(39)); // -> 3
console.log(persistence(4)); // -> 0
console.log(persistence(25)); // -> 2
console.log(persistence(999)); // -> 4

/**
 * Create Phone Number
 */

//  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  string = numbers.join("");
  const firstPart = string.substring(0, 3);
  const middlePart = string.substring(3, 6);
  const endPart = string.substring(6);
  return `(${firstPart}) ${middlePart}-${endPart}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //-> "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //-> "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //-> "(123) 456-7890"

/**
 * Build a pile of Cubes
 */

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let n = 1;
  let volume = 1;
  while (volume < m) {
    n++;
    volume += n ** 3;
  }
  return volume == m ? n : -1;
}

console.log(findNb(1071225)); // -> 45
console.log(findNb(4183059834009)); // -> 2022
console.log(findNb(24723578342962)); // -> -1
console.log(findNb(135440716410000)); // -> 4824
console.log(findNb(40539911473216)); // -> 3568
